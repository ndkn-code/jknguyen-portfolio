"use client";

import Link from "next/link";
import { FadeUp } from "@/components/animations/motion";
import Callout from "@/components/ui/callout";

const RECOMMENDATIONS = [
  {
    title: "Engineer the 5-practice habit in week 1",
    body: "The funnel's biggest leak is activation → habit. A guided onboarding that drives new users to 5 practices (and their first league) in the first week should lift the whole conversion pipeline.",
  },
  {
    title: "Target coaching at rebuttal & logic",
    body: "These skills improve slowest. Concentrated drills and AI feedback prompts there produce the most visible score movement — the metric learners feel.",
  },
  {
    title: "Cap streak pressure at ~4 sessions/week",
    body: "Score gains plateau past ~4 sessions/week, so design streaks around a sustainable 4× cadence rather than daily pressure that risks burnout for no extra learning.",
  },
];

const SKILLS = [
  "SQL (CTEs, window functions)",
  "Cohort & retention analysis",
  "Funnel analysis",
  "Segmentation",
  "Python (pandas, matplotlib)",
  "Tableau",
  "Data storytelling",
  "Stakeholder recommendations",
];

const REPO = "https://github.com/ndkn-code/debatelab-analytics";

export default function ImpactSection() {
  return (
    <section className="py-16 sm:py-32 px-4 sm:px-8 bg-muted/30">
      <div className="max-w-5xl mx-auto">
        <FadeUp>
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">
            Recommendations
          </h2>
          <p className="text-muted-foreground max-w-2xl mb-10">
            The point of the analysis isn&apos;t the charts — it&apos;s the
            decisions they support.
          </p>
        </FadeUp>
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {RECOMMENDATIONS.map((r, i) => (
            <FadeUp key={r.title} delay={0.1 * i}>
              <Callout variant="recommendation" title={r.title} className="h-full">
                {r.body}
              </Callout>
            </FadeUp>
          ))}
        </div>

        <FadeUp>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-5 text-center">
            Skills demonstrated
          </h3>
        </FadeUp>
        <FadeUp delay={0.1}>
          <div className="flex flex-wrap items-center justify-center gap-2.5 mb-16">
            {SKILLS.map((s) => (
              <span
                key={s}
                className="px-4 py-2 rounded-full bg-white dark:bg-card border border-border text-sm font-medium"
              >
                {s}
              </span>
            ))}
          </div>
        </FadeUp>

        <FadeUp delay={0.2}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={REPO}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-foreground text-background px-12 py-5 rounded-full font-semibold text-sm hover:opacity-90 transition-all active:scale-95 inline-flex items-center gap-3"
            >
              Explore the full repo
              <span aria-hidden>→</span>
            </a>
            <Link
              href="/"
              className="border border-border bg-background px-12 py-5 rounded-full font-semibold text-sm hover:bg-muted transition-all active:scale-95 inline-flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Portfolio
            </Link>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
