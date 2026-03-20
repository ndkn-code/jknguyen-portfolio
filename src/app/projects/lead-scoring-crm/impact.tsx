"use client";

import { FadeUp, AnimatedCounter, motion } from "@/components/animations/motion";
import Link from "next/link";

const stats = [
  {
    value: "1000+",
    label: "Leads Processed",
    detail: "Fully automated intake",
  },
  {
    value: "4",
    label: "Sales Reps Managed",
    detail: "With accountability tracking",
  },
  {
    value: "5",
    label: "Scoring Factors",
    detail: "Multi-factor algorithm",
  },
];

export default function ImpactSection() {
  return (
    <section className="py-16 sm:py-32 px-4 sm:px-8 bg-background text-center">
      <div className="max-w-4xl mx-auto">
        <FadeUp>
          <h2 className="text-4xl font-bold mb-16">The Impact</h2>
        </FadeUp>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 mb-20">
          {stats.map((stat, i) => (
            <FadeUp key={i} delay={0.1 * i}>
              <div>
                <AnimatedCounter
                  value={stat.value}
                  className="text-5xl font-bold text-primary mb-2 block"
                />
                <div className="text-xs uppercase tracking-[0.2em] font-semibold text-muted-foreground mb-1">
                  {stat.label}
                </div>
                <div className="text-xs text-muted-foreground/60">
                  {stat.detail}
                </div>
              </div>
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={0.3}>
          <div className="bg-white dark:bg-card p-8 rounded-xl border border-border mb-12 text-left max-w-2xl mx-auto">
            <div className="space-y-4">
              {[
                "Zero manual data entry with fully automated intake from website forms",
                "Accountability system ensures timely follow-ups with escalating penalties",
                "Partial lead recovery captures high-potential abandoned forms (50+ gatekeeper score)",
                "Bi-directional sync between Jira and Google Sheets for full pipeline visibility",
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i, duration: 0.5 }}
                  className="flex items-start gap-3"
                >
                  <svg
                    className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-sm text-muted-foreground">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </FadeUp>

        <FadeUp delay={0.4}>
          <Link
            href="/"
            className="border border-border bg-background px-12 py-5 rounded-full font-semibold text-sm hover:bg-muted transition-all active:scale-95 inline-flex items-center gap-2"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to Portfolio
          </Link>
        </FadeUp>
      </div>
    </section>
  );
}
