"use client";

import Image from "next/image";
import { FadeUp, AnimatedCounter } from "@/components/animations/motion";
import CodeBlock from "@/components/ui/code-block";
import Callout from "@/components/ui/callout";

const STATS = [
  { value: "561", label: "Never-paid active" },
  { value: "207", label: "Foreign address" },
  { value: "118", label: "Cross-entity open/closed" },
  { value: "52", label: "Near-duplicate pairs" },
];

const CROSS_SQL = `-- Vendors CLOSED in one entity but still OPEN in the other, a control gap.
WITH closed_in_mso AS (
  SELECT code FROM oas_element
  WHERE cmpcode = 'MSO' AND elmlevel = 3 AND code LIKE 'V%'
    AND (endyear <> 0 OR endperiod <> 0)        -- closed
),
open_in_fdn AS (
  SELECT code FROM oas_element
  WHERE cmpcode = 'FDN' AND elmlevel = 3 AND code LIKE 'V%'
    AND endyear = 0 AND endperiod = 0           -- still open
)
SELECT code FROM closed_in_mso
INTERSECT
SELECT code FROM open_in_fdn;`;

export default function AuditSection() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <FadeUp>
          <span className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
            Step 0 · master-data audit
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-3">
            Before the spend question: is the vendor list even clean?
          </h2>
          <p className="text-muted-foreground max-w-2xl mb-10">
            Vendor master data rots quietly: duplicates, vendors closed in one
            company but live in another, addresses that never got a compliance
            review. The unglamorous audit that has to happen before anyone
            trusts a spend report.
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
                  src="/images/vendor-ap-analytics/vendor_hygiene.png"
                  alt="Vendor master-data hygiene: four cleanup signals across 3,504 active vendors"
                  width={1000}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
            </figure>
            <Callout variant="note" title="Why it matters" className="mt-6">
              <b>561</b> active vendors have never been paid, deactivation
              candidates that only widen the surface for error. <b>118</b> are
              closed in one entity yet still payable in the other (a control
              gap), <b>207</b> carry foreign addresses needing tax/compliance
              review, and <b>52</b> near-duplicate pairs invite double payment.
            </Callout>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
              The cross-entity check
            </p>
            <CodeBlock
              code={CROSS_SQL}
              language="sql"
              filename="04_cross_entity_open_closed.sql"
            />
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
