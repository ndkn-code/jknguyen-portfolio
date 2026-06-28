"use client";

import { FadeUp, AnimatedCounter } from "@/components/animations/motion";

const KPIS = [
  { value: "$7.2B", label: "AP spend analyzed" },
  { value: "3,552", label: "Vendors" },
  { value: "90K", label: "AP transactions" },
  { value: "38%", label: "Spend in top 10 vendors" },
];

const STACK = ["SQL", "Power BI", "Tableau", "Python · pandas"];

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
            Finance &amp; BI Case Study
          </span>
        </FadeUp>
        <FadeUp delay={0.05}>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-5">
            Vendor &amp; AP Spend Analytics
          </h1>
        </FadeUp>
        <FadeUp delay={0.1}>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-4">
            Two questions every finance team asks of its ERP:{" "}
            <span className="text-foreground font-semibold">
              where is the money actually going
            </span>
            , and{" "}
            <span className="text-foreground font-semibold">
              which vendors need cleaning up?
            </span>{" "}
            A SQL → Power BI audit of accounts-payable spend and vendor master
            data across a two-entity health system.
          </p>
        </FadeUp>
        <FadeUp delay={0.15}>
          <p className="text-xs text-muted-foreground/70 max-w-xl mx-auto mb-8 italic">
            Built on a synthetic dataset modeled on a real Unit4/Coda ERP schema
            — the kind of system I work in day to day. Production financial data
            is confidential, so no real figures or names ship; the schema, SQL,
            and analyst workflow are true to life.
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
              href="https://github.com/ndkn-code/vendor-ap-analytics"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-foreground text-background px-8 py-4 rounded-full font-semibold text-sm hover:opacity-90 transition-opacity shadow-lg"
            >
              View code, SQL &amp; notebook on GitHub
              <span aria-hidden>→</span>
            </a>
            <a
              href="/case-studies/vendor-ap-analytics.pdf"
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
