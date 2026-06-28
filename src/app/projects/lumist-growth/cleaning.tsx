"use client";

import { FadeUp, AnimatedCounter } from "@/components/animations/motion";
import CodeBlock from "@/components/ui/code-block";
import Callout from "@/components/ui/callout";

const STATS = [
  { value: "151", label: "Distinct raw labels" },
  { value: "498", label: "Blank entries" },
  { value: "7", label: "Clean channels" },
];

const RAW = [
  "tiktok", "Tiktok", "tik tok", "Zalo", "zalo", "Teacher", "teacher",
  "idk", "ok", "a", "fwf", "✉️ an email address", "tiktok, instagram, threads…",
  "threads_creator_a", "(blank × 498)",
];

const CLEAN = [
  "short_form_video", "paid_social", "social", "referral", "creator",
  "search", "organic", "unknown",
];

const CODE = `EMAIL = re.compile(r"[^@\\s]+@[^@\\s]+\\.[^@\\s]+")
JUNK  = {"", "idk", "ok", "no", "a", "j", "fwf", "from admin"}
RULES = [
    (r"tik\\s*tok|short.?form|reel",  "short_form_video"),
    (r"facebook|instagram",           "paid_social"),
    (r"thread|telegram|zalo",         "social"),
    (r"friend|family|teacher|tutor",  "referral"),
    (r"google|search",                "search"),
]

def normalize_channel(raw):
    s = (raw or "").strip().lower()
    if EMAIL.search(s):           return "unknown"   # PII typed into the field
    if s in JUNK:                 return "unknown"
    if "," in s or " and " in s:  return "multi"      # listed several -> flag
    if CREATOR.search(s):         return "creator"    # threads_<creator>, academy
    for pattern, channel in RULES:
        if re.search(pattern, s): return channel
    return "unknown"`;

export default function CleaningSection() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <FadeUp>
          <span className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
            Step 0 · data cleaning
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-3">
            151 messy labels → 7 channels
          </h2>
          <p className="text-muted-foreground max-w-2xl mb-10">
            The signup form let students free-type how they found Lumist. Before
            any analysis was possible, that field had to be cleaned — the kind of
            unglamorous work that is most of the real job.
          </p>
        </FadeUp>

        <div className="grid grid-cols-3 gap-6 max-w-lg mb-12">
          {STATS.map((s) => (
            <FadeUp key={s.label}>
              <div>
                <AnimatedCounter
                  value={s.value}
                  className="text-3xl sm:text-4xl font-bold text-primary block"
                />
                <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">
                  {s.label}
                </div>
              </div>
            </FadeUp>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <FadeUp>
            <div className="bg-white dark:bg-card border border-border rounded-xl p-5 sm:p-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                Raw — 151 variants
              </p>
              <div className="flex flex-wrap gap-2 mb-5">
                {RAW.map((r, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 rounded-md bg-muted text-xs font-mono text-muted-foreground line-through decoration-muted-foreground/40"
                  >
                    {r}
                  </span>
                ))}
              </div>
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                Clean — 7 channels
              </p>
              <div className="flex flex-wrap gap-2">
                {CLEAN.map((c) => (
                  <span
                    key={c}
                    className="px-2.5 py-1 rounded-md bg-primary/10 text-primary text-xs font-mono font-medium"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
            <Callout variant="note" title="Real data is messy" className="mt-6">
              Casing dupes (Zalo/zalo), typos (tik tok), junk non-answers (idk,
              ok, &ldquo;a&rdquo;), multi-value entries, and even a stray email
              address (PII) typed into a marketing field. ~10% of rows were
              unusable and flagged rather than guessed.
            </Callout>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
              The normalizer
            </p>
            <CodeBlock code={CODE} language="python" filename="clean_channels.py" />
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
