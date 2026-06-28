"use client";

import { FadeUp, AnimatedCounter } from "@/components/animations/motion";

const KPIS = [
  { value: "£19.6M", label: "Revenue analyzed" },
  { value: "5,852", label: "Customers" },
  { value: "1.07M", label: "Transactions" },
  { value: "43", label: "Countries" },
];

const STACK = ["SQL", "Python · pandas", "SQLite", "Tableau"];

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
            Real-Data Case Study
          </span>
        </FadeUp>
        <FadeUp delay={0.05}>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-5">
            E-Commerce Customer &amp; Revenue Analytics
          </h1>
        </FadeUp>
        <FadeUp delay={0.1}>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-4">
            Two years of real UK online-retail transactions — £19.6M across 5,852
            customers and 43 countries. Three questions:{" "}
            <span className="text-foreground font-semibold">
              who are the most valuable customers
            </span>
            ,{" "}
            <span className="text-foreground font-semibold">do they come back</span>
            , and{" "}
            <span className="text-foreground font-semibold">
              where does revenue actually come from?
            </span>
          </p>
        </FadeUp>
        <FadeUp delay={0.15}>
          <p className="text-xs text-muted-foreground/70 max-w-xl mx-auto mb-8 italic">
            Built on the public UCI Online Retail II dataset — real transactions,
            fully reproducible: every figure reruns from the raw file (fetch →
            clean → analyze). Dataset cited in the repo.
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
              href="https://github.com/ndkn-code/online-retail-analytics"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-foreground text-background px-8 py-4 rounded-full font-semibold text-sm hover:opacity-90 transition-opacity shadow-lg"
            >
              View code, SQL &amp; notebook on GitHub
              <span aria-hidden>→</span>
            </a>
            <a
              href="/case-studies/online-retail.pdf"
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
