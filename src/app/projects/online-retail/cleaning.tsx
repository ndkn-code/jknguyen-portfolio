"use client";

import Image from "next/image";
import { FadeUp, AnimatedCounter } from "@/components/animations/motion";
import CodeBlock from "@/components/ui/code-block";
import Callout from "@/components/ui/callout";

const STATS = [
  { value: "1.07M", label: "Raw rows" },
  { value: "64K", label: "Rows removed" },
  { value: "22.6%", label: "Missing customer ID" },
  { value: "1.00M", label: "Clean sales lines" },
];

const CODE = `SERVICE_CODES = {"POST", "DOT", "M", "BANK CHARGES",
                 "AMAZONFEE", "ADJUST", "GIFT", "TEST"}

df = df.drop_duplicates()                                  # -34,335
returns = df[df["Invoice"].str.startswith("C")]            # cancellations -> returns
df = df[~df["Invoice"].str.startswith("C")]                # -19,104
df = df[~df["StockCode"].str.upper().isin(SERVICE_CODES)]  # non-product lines -4,630
df = df[(df["Quantity"] > 0) & (df["Price"] > 0)]          # real sales only -5,962
df["revenue"] = df["Quantity"] * df["Price"]
# 226,761 rows (22.6%) have no Customer ID:
#   kept for revenue totals, excluded from RFM & cohorts`;

export default function CleaningSection() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <FadeUp>
          <span className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
            Step 0 · data cleaning
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-3">
            1.07M raw rows → 1.00M clean sales lines
          </h2>
          <p className="text-muted-foreground max-w-2xl mb-10">
            Real transactional data is never analysis-ready. Before a single
            insight, 1.07M rows had to be deduped, stripped of cancellations and
            non-product charges, and validated, the unglamorous work that is
            most of the real job.
          </p>
        </FadeUp>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl mb-12">
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
            <figure className="bg-white rounded-xl border border-border shadow-sm overflow-hidden">
              <div className="p-3 sm:p-4">
                <Image
                  src="/images/online-retail/data_cleaning.png"
                  alt="Cleaning waterfall: 1.07M raw rows reduced to 1.00M clean sales lines"
                  width={1000}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
            </figure>
            <Callout variant="note" title="Real data is messy" className="mt-6">
              Duplicate rows, cancellation invoices (<code>C</code>-prefixed,
              split off as returns), non-product service codes (postage, bank
              charges, gift cards), and zero/negative quantities and prices, all
              removed. And <b>226,761 rows (22.6%)</b> have no customer ID: kept
              for revenue totals, excluded from customer-level work rather than
              guessed.
            </Callout>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
              The cleaning pipeline
            </p>
            <CodeBlock code={CODE} language="python" filename="clean_data.py" />
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
