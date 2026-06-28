"use client";

import { FadeLeft, FadeRight, FadeUp } from "@/components/animations/motion";
import CodeBlock from "@/components/ui/code-block";

const FIELDS = [
  { name: "invoice", note: "order id ('C' prefix = cancellation)" },
  { name: "stock_code / description", note: "product (some are service codes)" },
  { name: "quantity · price", note: "→ revenue = quantity × price" },
  { name: "customer_id · country", note: "who & where (22.6% null id)" },
];

const RFM_SQL = `-- RFM: score each customer 1-5 on Recency, Frequency & Monetary, then segment.
WITH base AS (
  SELECT customer_id,
         JULIANDAY('2011-12-10') - JULIANDAY(MAX(invoice_date)) AS recency,
         COUNT(DISTINCT invoice)                                AS frequency,
         SUM(quantity * price)                                  AS monetary
  FROM transactions
  WHERE customer_id IS NOT NULL
  GROUP BY customer_id
)
SELECT customer_id,
       6 - NTILE(5) OVER (ORDER BY recency)   AS r,   -- more recent = higher
       NTILE(5)     OVER (ORDER BY frequency) AS f,
       NTILE(5)     OVER (ORDER BY monetary)  AS m
FROM base;`;

export default function MethodologySection() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <FadeUp>
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">Data &amp; method</h2>
        </FadeUp>
        <FadeUp delay={0.05}>
          <p className="text-muted-foreground max-w-2xl mb-12">
            One transactional table — 1.07M line items over two years — cleaned
            in Python, loaded to SQLite, and analyzed with SQL (CTEs + window
            functions). Customer-level RFM and monthly cohorts are derived from
            it.
          </p>
        </FadeUp>
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <FadeLeft>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
              The data
            </h3>
            <div className="space-y-3">
              {FIELDS.map((t) => (
                <div
                  key={t.name}
                  className="flex flex-wrap items-baseline gap-x-3 gap-y-1 bg-white dark:bg-card border border-border rounded-lg px-4 py-3"
                >
                  <code className="text-sm font-mono font-semibold text-primary">
                    {t.name}
                  </code>
                  <span className="text-xs text-muted-foreground">{t.note}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-muted-foreground/70 pt-4">
              UCI Online Retail II — a real UK online retailer, Dec 2009 → Dec
              2011. Public &amp; fully reproducible.
            </p>
          </FadeLeft>
          <FadeRight>
            <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
              Representative query — RFM segmentation (NTILE)
            </p>
            <CodeBlock code={RFM_SQL} filename="03_rfm_segmentation.sql" />
          </FadeRight>
        </div>
      </div>
    </section>
  );
}
