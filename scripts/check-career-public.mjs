import { createHash } from "node:crypto";
import { existsSync, readFileSync, readdirSync } from "node:fs";
import { extname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(fileURLToPath(new URL("..", import.meta.url)));
const generatedPath = join(root, "src/data/profile.generated.json");

function fail(message) {
  throw new Error(`career public data: ${message}`);
}

function exactKeys(value, expected, context) {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    fail(`${context} must be an object`);
  }
  const actual = Object.keys(value).sort();
  const wanted = [...expected].sort();
  if (JSON.stringify(actual) !== JSON.stringify(wanted)) {
    fail(`${context} keys must be exactly ${wanted.join(", ")}`);
  }
}

function nonemptyString(value, context) {
  if (typeof value !== "string" || value.trim() === "") {
    fail(`${context} must be a non-empty string`);
  }
}

function canonical(value) {
  if (Array.isArray(value)) return value.map(canonical);
  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.keys(value)
        .sort()
        .map((key) => [key, canonical(value[key])]),
    );
  }
  return value;
}

function walk(value, path = "root") {
  const forbiddenKeys = new Set([
    "source",
    "source_id",
    "source_ids",
    "source_path",
    "source_url",
    "application",
    "applications",
    "contact",
    "contacts",
    "conflict",
    "conflicts",
    "review",
    "reviews",
    "sensitivity",
    "phone",
    "email",
    "work_authorization",
    "sponsorship",
    "private",
    "confidential",
    "restricted",
  ]);
  const forbiddenStrings = [/(?:^|\/)sources\//i, /(?:^|\/)vault\//i, /\/Users\//i, /\.career-cache/i];

  if (Array.isArray(value)) {
    value.forEach((item, index) => walk(item, `${path}[${index}]`));
    return;
  }
  if (value && typeof value === "object") {
    for (const [key, item] of Object.entries(value)) {
      if (forbiddenKeys.has(key.toLowerCase())) fail(`${path}.${key} is forbidden`);
      walk(item, `${path}.${key}`);
    }
    return;
  }
  if (typeof value === "string" && forbiddenStrings.some((pattern) => pattern.test(value))) {
    fail(`${path} contains a private path`);
  }
}

function sourceFiles(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) return sourceFiles(path);
    return [path];
  });
}

if (!existsSync(generatedPath)) fail(`missing ${generatedPath}`);
const data = JSON.parse(readFileSync(generatedPath, "utf8"));
exactKeys(data, ["schema_version", "generated", "profile", "experiences", "projects"], "root");
if (data.schema_version !== 1) fail("schema_version must be 1");
exactKeys(data.generated, ["allowlist_version", "claim_count", "content_sha256"], "generated");
if (data.generated.allowlist_version !== 1) fail("allowlist_version must be 1");
if (!Number.isInteger(data.generated.claim_count) || data.generated.claim_count < 1) fail("claim_count must be positive");
if (!/^[a-f0-9]{64}$/.test(data.generated.content_sha256)) fail("content_sha256 must be SHA-256 hex");

exactKeys(
  data.profile,
  [
    "name",
    "role_line",
    "headline",
    "availability",
    "summary",
    "why_product_data",
    "builder_quote",
    "location",
    "linkedin_url",
    "portfolio_url",
    "github_url",
  ],
  "profile",
);
Object.entries(data.profile).forEach(([key, value]) => nonemptyString(value, `profile.${key}`));

if (!Array.isArray(data.experiences) || data.experiences.length === 0) fail("experiences must be non-empty");
if (!Array.isArray(data.projects) || data.projects.length === 0) fail("projects must be non-empty");

for (const [index, experience] of data.experiences.entries()) {
  exactKeys(experience, ["id", "title", "organization", "period", "description", "active"], `experiences[${index}]`);
  for (const key of ["id", "title", "organization", "period", "description"]) {
    nonemptyString(experience[key], `experiences[${index}].${key}`);
  }
  if (typeof experience.active !== "boolean") fail(`experiences[${index}].active must be boolean`);
}

for (const [index, project] of data.projects.entries()) {
  exactKeys(
    project,
    ["id", "href", "title", "description", "repository_url", "image", "tech", "categories", "badge"],
    `projects[${index}]`,
  );
  for (const key of ["id", "href", "title", "description", "repository_url", "image", "badge"]) {
    nonemptyString(project[key], `projects[${index}].${key}`);
  }
  if (!project.href.startsWith("/projects/")) fail(`projects[${index}].href must be a project route`);
  if (!project.repository_url.startsWith("https://")) fail(`projects[${index}].repository_url must use https`);
  if (!project.image.startsWith("/images/")) fail(`projects[${index}].image must be under /images/`);
  for (const key of ["tech", "categories"]) {
    if (!Array.isArray(project[key]) || project[key].length === 0) fail(`projects[${index}].${key} must be non-empty`);
    project[key].forEach((item, itemIndex) => nonemptyString(item, `projects[${index}].${key}[${itemIndex}]`));
  }
}

for (const [label, values] of [
  ["experience ids", data.experiences.map((item) => item.id)],
  ["project ids", data.projects.map((item) => item.id)],
  ["project routes", data.projects.map((item) => item.href)],
]) {
  if (new Set(values).size !== values.length) fail(`${label} must be unique`);
}

walk(data);
const payload = { profile: data.profile, experiences: data.experiences, projects: data.projects };
const digest = createHash("sha256").update(JSON.stringify(canonical(payload))).digest("hex");
if (digest !== data.generated.content_sha256) fail("content hash does not match generated payload");

const blockedRoutes = ["lumist-analytics", "ai-customer-support", "nemoclaw", "lead-scoring-crm"];
for (const route of blockedRoutes) {
  if (existsSync(join(root, "src/app/projects", route))) fail(`confidential route still exists: ${route}`);
}

const forbiddenPhrases = [/1,000\+ inbound leads/i, /5 data sources/i, /past 400/i, /20%→4%/i, /20% to 4%/i];
for (const path of sourceFiles(join(root, "src"))) {
  if (![".ts", ".tsx", ".json", ".md"].includes(extname(path))) continue;
  const text = readFileSync(path, "utf8");
  for (const pattern of forbiddenPhrases) {
    if (pattern.test(text)) fail(`forbidden private claim remains in ${path}`);
  }
}

console.log(`Career public data passed: ${data.generated.claim_count} claims, ${data.experiences.length} experiences, ${data.projects.length} projects.`);
