"use client";

import {
  FadeUp,
  FadeLeft,
  FadeRight,
  AnimatedLine,
} from "@/components/animations/motion";

const painPoints = [
  {
    bold: "Gut-feel product decisions.",
    detail:
      "Leadership was making choices based on intuition from traditional SAT prep, but we were an AI-first platform serving a different market.",
  },
  {
    bold: "Zero visibility into growth.",
    detail:
      "We had no way to tell if we were actually growing or just busy churning through users.",
  },
  {
    bold: "Lean startup without data.",
    detail:
      "We were pursuing lean methodology but had no data to validate or invalidate assumptions.",
  },
  {
    bold: "Investor-readiness gap.",
    detail:
      "We needed metrics to show traction, not just vanity numbers.",
  },
];

export default function ProblemSection() {
  return (
    <section id="problem" className="py-32 px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left - Title */}
          <div className="lg:col-span-4">
            <FadeLeft>
              <h2 className="text-3xl font-bold text-foreground mb-4">
                The Problem
              </h2>
              <AnimatedLine className="w-12 mb-8" />
            </FadeLeft>
          </div>

          {/* Right - Content */}
          <div className="lg:col-span-8">
            <FadeRight>
              <p className="text-xl text-muted-foreground leading-relaxed mb-12">
                Our SAT prep startup was flying blind. We had 1,500+ users but
                zero visibility into what was working. Product roadmap decisions
                were based on anecdotes and assumptions, not data. We were a
                lean startup that couldn&apos;t validate a single hypothesis.
              </p>
            </FadeRight>

            <FadeUp delay={0.2}>
              <blockquote className="pl-8 border-l-4 border-primary text-2xl font-medium text-foreground leading-snug my-16">
                &ldquo;We had all the numbers from Supabase, but none of the
                story. I spent more time trying to query data than making
                decisions.&rdquo;
              </blockquote>
            </FadeUp>

            {/* Pain points */}
            <div className="space-y-6 mt-12">
              {painPoints.map((point, i) => (
                <FadeUp key={i} delay={0.1 * i}>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg
                        className="w-4 h-4 text-red-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </div>
                    <p className="text-muted-foreground">
                      <strong className="text-foreground">{point.bold}</strong>{" "}
                      {point.detail}
                    </p>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
