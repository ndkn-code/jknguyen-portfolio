"use client";

import {
  FadeUp,
  motion,
  staggerContainer,
  staggerItem,
} from "@/components/animations/motion";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

/* ─── Flow diagram nodes ─── */
const flowNodes = [
  {
    id: "telegram",
    label: "Telegram",
    detail: "User message",
    icon: "📱",
    color: "border-cyan-500/50 bg-cyan-500/5",
    textColor: "text-cyan-400",
  },
  {
    id: "agent",
    label: "OpenClaw Agent",
    detail: "Gemini 3.1 Flash Lite",
    icon: "🧠",
    color: "border-primary/50 bg-primary/5",
    textColor: "text-primary",
  },
  {
    id: "skills",
    label: "8 Skill Modules",
    detail: "Route & execute",
    icon: "⚡",
    color: "border-violet-500/50 bg-violet-500/5",
    textColor: "text-violet-400",
  },
];

const branchNodes = [
  {
    id: "vault",
    label: "Obsidian Vault",
    detail: "mcpvault: 14 MCP tools",
    icon: "📓",
    color: "border-amber-500/50 bg-amber-500/5",
    textColor: "text-amber-400",
    items: ["PRODUCT.md", "SEO-GUIDELINES.md", "search / read / write"],
  },
  {
    id: "data",
    label: "Data Sources",
    detail: "5 external APIs",
    icon: "🗄️",
    color: "border-emerald-500/50 bg-emerald-500/5",
    textColor: "text-emerald-400",
    items: [
      "Supabase (x2)",
      "GitHub API",
      "Linear GraphQL",
      "PostHog API",
    ],
  },
];

/* ─── Architecture layers ─── */
const layers = [
  {
    layer: "Communication",
    items: [
      { name: "Telegram Bot API", detail: "User-facing interface" },
      { name: "Webhook Handler", detail: "Message routing & auth" },
      { name: "Group Chat Mode", detail: "@mention filtering" },
    ],
  },
  {
    layer: "AI & Knowledge",
    items: [
      { name: "OpenClaw Framework", detail: "Agent orchestration" },
      { name: "Gemini 3.1 Flash Lite", detail: "LLM inference ($0.25/1M)" },
      { name: "NVIDIA NemoClaw", detail: "Security guardrails" },
      { name: "Obsidian Vault (MCP)", detail: "14 tools via mcpvault" },
      { name: "Skill Router", detail: "8 modules" },
    ],
  },
  {
    layer: "Data & Infra",
    items: [
      { name: "2x Supabase Projects", detail: "PostgreSQL via REST" },
      { name: "GitHub + Linear APIs", detail: "Dev workflow data" },
      { name: "PostHog API", detail: "Product analytics" },
      { name: "Docker on GCP VM", detail: "e2-medium deployment" },
    ],
  },
];

/* ─── Security policy lines ─── */
const policyYaml = `# NemoClaw Network Policy
version: "1.0"
network:
  egress:
    default: deny
    allow:
      - host: supabase-prod.supabase.co    # Analytics
      - host: supabase-social.supabase.co   # Social + Support
      - host: api.github.com                # Engineering
      - host: api.linear.app                # Sprint tracking
      - host: us.posthog.com                # Product analytics
      - host: api.telegram.org              # Bot channel
      - host: generativelanguage.googleapis.com  # Gemini
      - host: eu.posthog.com                # EU fallback`;

function ArrowRight() {
  return (
    <motion.div
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      style={{ transformOrigin: "left" }}
      className="hidden md:flex items-center"
    >
      <div className="h-0.5 w-12 bg-zinc-600" />
      <div className="w-0 h-0 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent border-l-[8px] border-l-zinc-600" />
    </motion.div>
  );
}

function ArrowDown() {
  return (
    <motion.div
      initial={{ scaleY: 0 }}
      whileInView={{ scaleY: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      style={{ transformOrigin: "top" }}
      className="flex flex-col items-center"
    >
      <div className="w-0.5 h-8 bg-zinc-600" />
      <div className="w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[8px] border-t-zinc-600" />
    </motion.div>
  );
}

export default function ArchitectureSection() {
  return (
    <section
      id="architecture"
      className="py-16 sm:py-32 px-4 sm:px-8 bg-zinc-900 dark:bg-zinc-950 text-zinc-100"
    >
      <div className="max-w-7xl mx-auto">
        <FadeUp>
          <h2 className="text-3xl font-bold mb-4 text-center">
            How Lumi Works
          </h2>
          <p className="text-zinc-400 text-center mb-16 max-w-2xl mx-auto">
            Messages flow from Telegram through an AI agent that routes to 8
            skill modules, powered by an Obsidian knowledge vault and locked
            down with deny-by-default sandboxing.
          </p>
        </FadeUp>

        {/* ─── Flow Diagram ─── */}
        <FadeUp delay={0.1}>
          <div className="bg-zinc-800/30 rounded-2xl border border-zinc-700 p-6 sm:p-10 mb-12">
            {/* Top row: Telegram → Agent → Skills */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0 mb-8">
              {flowNodes.map((node, i) => (
                <div key={node.id} className="flex items-center gap-0">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * i, duration: 0.5 }}
                    className={`rounded-xl border-2 ${node.color} px-6 py-4 text-center min-w-[160px]`}
                  >
                    <span className="text-2xl block mb-1">{node.icon}</span>
                    <p className={`font-bold text-sm ${node.textColor}`}>
                      {node.label}
                    </p>
                    <p className="text-[11px] text-zinc-500">{node.detail}</p>
                  </motion.div>
                  {i < flowNodes.length - 1 && <ArrowRight />}
                </div>
              ))}
            </div>

            {/* Center arrow down from Agent */}
            <div className="flex justify-center">
              <ArrowDown />
            </div>

            {/* Bottom row: Vault + Data Sources */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              {branchNodes.map((node, i) => (
                <motion.div
                  key={node.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.15, duration: 0.5 }}
                  className={`rounded-xl border-2 ${node.color} p-5 ${
                    node.id === "vault" ? "ring-1 ring-amber-500/20" : ""
                  }`}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xl">{node.icon}</span>
                    <div>
                      <p className={`font-bold text-sm ${node.textColor}`}>
                        {node.label}
                      </p>
                      <p className="text-[11px] text-zinc-500">
                        {node.detail}
                      </p>
                    </div>
                  </div>
                  <div className="space-y-1">
                    {node.items.map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-2 text-xs text-zinc-400"
                      >
                        <div className="w-1 h-1 rounded-full bg-zinc-600 flex-shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Security sandbox bar */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="mt-6 rounded-xl border-2 border-red-500/30 bg-red-500/5 p-4 flex items-center justify-center gap-3"
            >
              <span className="text-lg">🛡️</span>
              <p className="font-bold text-sm text-red-400">
                NemoClaw Security Sandbox
              </p>
              <span className="text-[11px] text-zinc-500">
                deny-by-default &middot; 8 endpoints only &middot; read-only
                access
              </span>
            </motion.div>
          </div>
        </FadeUp>

        {/* ─── Three-column layer breakdown ─── */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {layers.map((layer, i) => (
            <motion.div key={i} variants={staggerItem}>
              <Card className="h-full bg-zinc-800/30 border-zinc-700">
                <CardHeader>
                  <CardTitle className="text-lg text-zinc-100">
                    {layer.layer}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {layer.items.map((item, j) => (
                      <div key={j} className="flex items-start gap-3 group">
                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2 flex-shrink-0 group-hover:scale-150 transition-transform" />
                        <div>
                          <span className="text-sm font-medium text-zinc-200">
                            {item.name}
                          </span>
                          <p className="text-xs text-zinc-500">{item.detail}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* ─── Security Policy YAML ─── */}
        <FadeUp delay={0.2}>
          <div className="bg-zinc-800/50 rounded-xl p-4 sm:p-8 border border-zinc-700">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xl">🔒</span>
              <h3 className="font-bold text-lg text-zinc-200">
                Network Policy
              </h3>
              <span className="text-xs text-zinc-500 bg-zinc-700/50 px-2 py-1 rounded">
                deny-by-default
              </span>
            </div>

            <div className="bg-zinc-900/80 rounded-lg p-4 sm:p-6 font-mono text-xs sm:text-sm overflow-x-auto border border-zinc-700/50">
              <div className="flex gap-2 mb-4">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
              </div>
              <pre className="text-zinc-300 whitespace-pre-wrap">
                {policyYaml.split("\n").map((line, i) => {
                  const isComment = line.trimStart().startsWith("#");
                  const hasHost = line.includes("host:");
                  const isDefault = line.includes("default: deny");

                  if (isComment)
                    return (
                      <span key={i} className="text-zinc-600">
                        {line}
                        {"\n"}
                      </span>
                    );
                  if (isDefault)
                    return (
                      <span key={i}>
                        {"    default: "}
                        <span className="text-red-400 font-bold">deny</span>
                        {"\n"}
                      </span>
                    );
                  if (hasHost) {
                    const [before, after] = line.split("#");
                    const hostMatch = before.match(/host:\s*(.+)/);
                    return (
                      <span key={i}>
                        {"      - host: "}
                        <span className="text-emerald-400">
                          {hostMatch ? hostMatch[1].trim() : ""}
                        </span>
                        {after && (
                          <span className="text-zinc-600">
                            {"  # "}
                            {after.trim()}
                          </span>
                        )}
                        {"\n"}
                      </span>
                    );
                  }
                  return (
                    <span key={i}>
                      {line}
                      {"\n"}
                    </span>
                  );
                })}
              </pre>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
