"use client";

import { FadeUp, AnimatedCounter } from "@/components/animations/motion";

const KPIS = [
  { value: "4.5%", label: "Model error (MAPE)" },
  { value: "~22%", label: "Baseline error" },
  { value: "−80%", label: "Error reduction" },
  { value: "270", label: "Days modeled" },
];

const STACK = ["Python", "scikit-learn", "pandas", "Matplotlib"];

export default function HeroSection() {
  return (
    <section className="relative px-4 sm:px-8 pt-16 pb-12 sm:pt-24 sm:pb-16 overflow-hidden">
      <div
        className="absolute inset-0 -z-10 opacity-30 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#e5e7eb 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      <div className="max-w-4xl mx-auto text-center">
        <FadeUp>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-6">
            Machine Learning · Forecasting
          </span>
        </FadeUp>
        <FadeUp delay={0.05}>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-5">
            Game-Launch Revenue Forecasting
          </h1>
        </FadeUp>
        <FadeUp delay={0.1}>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-4">
            Forecasting daily revenue for a mobile-game launch — and cutting
            forecast error from{" "}
            <span className="text-foreground font-semibold">~22% to ~4.5%</span>{" "}
            with a feature-aware model. A recreation of my revenue-forecasting
            work at VNG.
          </p>
        </FadeUp>
        <FadeUp delay={0.15}>
          <p className="text-xs text-muted-foreground/70 max-w-xl mx-auto mb-8 italic">
            Synthetic game-revenue data with the real launch dynamics (decay,
            seasonality, marketing, events) — VNG&apos;s data is confidential, so
            the modeling approach is the showcase.
          </p>
        </FadeUp>
        <FadeUp delay={0.2}>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl mx-auto mb-10">
            {KPIS.map((k) => (
              <div key={k.label}>
                <AnimatedCounter
                  value={k.value}
                  className="text-3xl sm:text-4xl font-bold text-primary block"
                />
                <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">
                  {k.label}
                </div>
              </div>
            ))}
          </div>
        </FadeUp>
        <FadeUp delay={0.25}>
          <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
            {STACK.map((t) => (
              <span
                key={t}
                className="px-3 py-1 rounded-full bg-card border border-border text-xs font-medium text-muted-foreground"
              >
                {t}
              </span>
            ))}
          </div>
        </FadeUp>
        <FadeUp delay={0.3}>
          <div className="flex flex-col items-center gap-3">
            <a
              href="https://github.com/ndkn-code/vng-revenue-forecasting"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-foreground text-background px-8 py-4 rounded-full font-semibold text-sm hover:opacity-90 transition-opacity shadow-lg"
            >
              View the notebook &amp; code on GitHub
              <span aria-hidden>→</span>
            </a>
            <a
              href="/case-studies/revenue-forecasting.pdf"
              target="_blank"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Download the 1-page summary (PDF) →
            </a>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
