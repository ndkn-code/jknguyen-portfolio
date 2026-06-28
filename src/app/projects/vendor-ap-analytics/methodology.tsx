"use client";

import { FadeLeft, FadeRight, FadeUp } from "@/components/animations/motion";
import CodeBlock from "@/components/ui/code-block";

const TABLES = [
  { name: "oas_element", note: "vendor + division master — code, name, status, country" },
  { name: "oas_grplist", note: "vendor groups & spend categories" },
  { name: "oas_dochead", note: "AP document headers — entity, period, year" },
  { name: "oas_docline", note: "AP transaction lines — vendor, amount, paid status" },
];

const SPEND_SQL = `-- Spend concentration: rank vendors by paid AP, with a running % of total.
WITH paid AS (
  SELECT l.el3 AS vendor, SUM(l.valuedoc) AS spend
  FROM oas_docline l
  WHERE l.statpay = 89 AND l.doccode LIKE 'AP%'   -- posted, paid AP only
  GROUP BY l.el3
)
SELECT vendor,
       spend,
       ROUND(100.0 * spend / SUM(spend) OVER (), 2)          AS pct_of_spend,
       ROUND(100.0 * SUM(spend) OVER (ORDER BY spend DESC)
                   / SUM(spend) OVER (), 1)                   AS running_pct
FROM paid
ORDER BY spend DESC;`;

export default function MethodologySection() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <FadeUp>
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">Data &amp; method</h2>
        </FadeUp>
        <FadeUp delay={0.05}>
          <p className="text-muted-foreground max-w-2xl mb-12">
            A four-table slice of an ERP accounts-payable ledger — two legal
            entities, ~3,500 vendors, 90K transaction lines — queried with SQL
            (CTEs + window functions) and validated in pandas. Modeled on a real
            Unit4/Coda schema, the same shape I query at work.
          </p>
        </FadeUp>
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <FadeLeft>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
              The schema
            </h3>
            <div className="space-y-3">
              {TABLES.map((t) => (
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
              Two entities (<code className="font-mono">MSO</code> &amp;{" "}
              <code className="font-mono">FDN</code>);{" "}
              <code className="font-mono">el3</code> = vendor,{" "}
              <code className="font-mono">statpay = 89</code> = paid.
            </p>
          </FadeLeft>
          <FadeRight>
            <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
              Representative query — vendor spend concentration
            </p>
            <CodeBlock code={SPEND_SQL} filename="01_spend_concentration.sql" />
          </FadeRight>
        </div>
      </div>
    </section>
  );
}
