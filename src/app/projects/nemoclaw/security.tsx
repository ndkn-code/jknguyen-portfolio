"use client";

import { FadeUp, motion } from "@/components/animations/motion";

const endpoints = [
  { label: "Supabase Prod", allowed: true },
  { label: "Supabase Social", allowed: true },
  { label: "GitHub API", allowed: true },
  { label: "Linear API", allowed: true },
  { label: "PostHog", allowed: true },
  { label: "Telegram API", allowed: true },
  { label: "Gemini AI", allowed: true },
  { label: "PostHog EU", allowed: true },
  { label: "AWS S3", allowed: false },
  { label: "Stripe API", allowed: false },
  { label: "Slack Hooks", allowed: false },
  { label: "Gmail SMTP", allowed: false },
  { label: "Twilio", allowed: false },
  { label: "Azure Blob", allowed: false },
  { label: "SendGrid", allowed: false },
  { label: "jsDelivr CDN", allowed: false },
  { label: "PyPI", allowed: false },
  { label: "npm Registry", allowed: false },
  { label: "Dropbox API", allowed: false },
  { label: "Google OAuth", allowed: false },
];

export default function SecuritySection() {
  // Sort: denied first, then allowed — so allowed ones "light up" at the end
  const sorted = [...endpoints].sort(
    (a, b) => Number(a.allowed) - Number(b.allowed)
  );

  return (
    <section className="py-16 sm:py-32 px-4 sm:px-8 bg-background">
      <div className="max-w-5xl mx-auto">
        <FadeUp>
          <h2 className="text-3xl font-bold mb-4 text-center">
            Deny-by-Default Security
          </h2>
          <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
            NVIDIA NemoClaw enforces a network sandbox. Every outbound request
            is blocked unless it&apos;s to one of 8 whitelisted endpoints. All
            data access is read-only.
          </p>
        </FadeUp>

        {/* Endpoint grid */}
        <FadeUp delay={0.1}>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-3 mb-12">
            {sorted.map((ep, i) => {
              const isAllowed = ep.allowed;
              // Denied tiles animate in first (quick), allowed ones come later with glow
              const delay = isAllowed ? 0.8 + (i - 12) * 0.08 : i * 0.03;

              return (
                <motion.div
                  key={ep.label}
                  initial={{
                    opacity: 0,
                    scale: isAllowed ? 0.8 : 0.95,
                  }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                  }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{
                    delay,
                    duration: isAllowed ? 0.5 : 0.2,
                    ease: "easeOut",
                  }}
                  className={`relative rounded-lg border p-3 text-center transition-shadow ${
                    isAllowed
                      ? "border-emerald-500/40 bg-emerald-500/5 shadow-[0_0_20px_rgba(16,185,129,0.1)]"
                      : "border-zinc-200 dark:border-zinc-800 bg-zinc-100/50 dark:bg-zinc-900/30 opacity-40"
                  }`}
                >
                  {/* Lock / Unlock icon */}
                  <div className="flex justify-center mb-2">
                    {isAllowed ? (
                      <div className="relative">
                        <svg
                          className="w-5 h-5 text-emerald-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"
                          />
                        </svg>
                        {/* Pulse dot */}
                        <motion.div
                          animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-emerald-400"
                        />
                      </div>
                    ) : (
                      <svg
                        className="w-5 h-5 text-zinc-400 dark:text-zinc-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                        />
                      </svg>
                    )}
                  </div>

                  <p
                    className={`text-[11px] font-medium ${
                      isAllowed
                        ? "text-emerald-600 dark:text-emerald-400"
                        : "text-zinc-400 dark:text-zinc-600 line-through"
                    }`}
                  >
                    {ep.label}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </FadeUp>

        {/* Summary stats */}
        <FadeUp delay={0.3}>
          <div className="flex flex-wrap justify-center gap-6 sm:gap-10">
            <div className="text-center">
              <span className="text-3xl font-bold text-emerald-500">8</span>
              <p className="text-xs text-muted-foreground mt-1 uppercase tracking-wider font-semibold">
                Allowed
              </p>
            </div>
            <div className="w-px h-12 bg-border" />
            <div className="text-center">
              <span className="text-3xl font-bold text-red-400">All Others</span>
              <p className="text-xs text-muted-foreground mt-1 uppercase tracking-wider font-semibold">
                Denied
              </p>
            </div>
            <div className="w-px h-12 bg-border" />
            <div className="text-center">
              <span className="text-3xl font-bold text-blue-500">
                Read-Only
              </span>
              <p className="text-xs text-muted-foreground mt-1 uppercase tracking-wider font-semibold">
                Data Access
              </p>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
