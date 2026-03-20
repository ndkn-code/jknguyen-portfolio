"use client";

import {
  FadeUp,
  AnimatedCounter,
  motion,
} from "@/components/animations/motion";
import Link from "next/link";

const stats = [
  {
    value: "4x",
    label: "Feature Usage Growth",
    detail: "AI Planner redesign",
  },
  {
    value: "100+",
    label: "Active Users Recovered",
    detail: "From broken UX fix",
  },
  {
    value: "7",
    label: "Analytics Modules",
    detail: "Full product coverage",
  },
];

export default function ImpactSection() {
  return (
    <section className="py-16 sm:py-32 px-4 sm:px-8 bg-muted/30 text-center">
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

        {/* Additional impact details */}
        <FadeUp delay={0.3}>
          <div className="bg-white dark:bg-card p-8 rounded-xl border border-border mb-12 text-left max-w-2xl mx-auto">
            <div className="space-y-4">
              {[
                "Weekly roadmap decisions now backed by real user data instead of gut-feel",
                "Identified AI Planner UX issue → redesign grew usage from 24 to 100+ active users",
                "Built the analytics infrastructure to support scaling our paid user base",
                "Team-wide adoption: from 2 users (founders) to 14 team members across roles",
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
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://lumist-analytics-demo.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-foreground text-background px-12 py-5 rounded-full font-semibold text-sm hover:bg-foreground/90 transition-all active:scale-95 inline-flex items-center gap-3"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              View Live Demo
            </a>
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
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
