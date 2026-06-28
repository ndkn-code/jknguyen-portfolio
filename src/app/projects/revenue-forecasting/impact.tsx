"use client";

import Link from "next/link";
import { FadeUp } from "@/components/animations/motion";
import Callout from "@/components/ui/callout";

const RECOMMENDATIONS = [
  {
    title: "Forecast with drivers, not history",
    body: "Naive and seasonal methods miss by ~20% because they can't see marketing pushes or in-game events coming. Feeding those drivers in cuts error to ~4%, accurate enough to actually plan against.",
  },
  {
    title: "Backtest walk-forward, never random-split",
    body: "Random train/test splits leak the future into the past and flatter the model. A walk-forward backtest (predict each day from only prior days) gives the honest accuracy a finance team can trust.",
  },
  {
    title: "A 4% forecast is a planning tool",
    body: "At ~4% error the forecast is tight enough to size user-acquisition budgets, project cash flow, and staff live-ops around a launch, the difference between a number you report and one you act on.",
  },
];

const SKILLS = [
  "Time-series forecasting",
  "Feature engineering",
  "Gradient boosting (scikit-learn)",
  "Walk-forward backtesting",
  "Model evaluation (MAPE)",
  "Python (pandas, NumPy)",
  "Data visualization",
];

const REPO = "https://github.com/ndkn-code/vng-revenue-forecasting";

export default function ImpactSection() {
  return (
    <section className="py-16 sm:py-32 px-4 sm:px-8 bg-muted/30">
      <div className="max-w-5xl mx-auto">
        <FadeUp>
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">Recommendations</h2>
          <p className="text-muted-foreground max-w-2xl mb-10">
            What an accurate forecast changes about how a team operates.
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
              View the notebook on GitHub
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
