"use client";

import Image from "next/image";
import { FadeUp } from "@/components/animations/motion";
import Callout from "@/components/ui/callout";

const IMG = "/images/vendor-ap-analytics";

function Figure({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption: string;
}) {
  return (
    <figure className="bg-white rounded-xl border border-border shadow-sm overflow-hidden">
      <div className="p-3 sm:p-4">
        <Image src={src} alt={alt} width={1000} height={600} className="w-full h-auto" />
      </div>
      <figcaption className="text-xs text-muted-foreground px-4 pb-3">
        {caption}
      </figcaption>
    </figure>
  );
}

function Row({
  children,
  flip = false,
}: {
  children: [React.ReactNode, React.ReactNode];
  flip?: boolean;
}) {
  return (
    <FadeUp>
      <div className="grid lg:grid-cols-2 gap-6 items-center">
        <div className={flip ? "lg:order-2" : ""}>{children[0]}</div>
        <div className={flip ? "lg:order-1" : ""}>{children[1]}</div>
      </div>
    </FadeUp>
  );
}

export default function FindingsSection() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto space-y-24">
        {/* ---- Spend concentration ---- */}
        <div className="space-y-10">
          <FadeUp>
            <span className="text-xs font-bold uppercase tracking-wider text-primary">
              Business Analyst lens · where the money goes
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-2">
              A third of AP sits with ten vendors
            </h2>
          </FadeUp>
          <Row>
            <Figure
              src={`${IMG}/spend_pareto.png`}
              alt="Top vendors by paid AP spend with a cumulative percentage line"
              caption="Top vendors by paid AP (bars) against cumulative % of total spend (line)."
            />
            <Callout variant="insight" title="Spend is steeply Pareto">
              Of <b>$7.2B</b> in AP, the top <b>10</b> vendors take <b>37.9%</b>{" "}
              and the top <b>1%</b> (29 vendors) take <b>61.3%</b>. Just <b>82</b>{" "}
              of 2,876 paying vendors cover 80% of spend — a short list where
              sourcing and contract review actually move the number.
            </Callout>
          </Row>
        </div>

        {/* ---- Spend by department ---- */}
        <div className="space-y-10">
          <FadeUp>
            <span className="text-xs font-bold uppercase tracking-wider text-primary">
              Where it&apos;s spent
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-2">
              Broad across service lines, not lopsided
            </h2>
          </FadeUp>
          <Row flip>
            <Figure
              src={`${IMG}/spend_by_department.png`}
              alt="Paid AP spend by clinical and finance department"
              caption="Paid AP spend rolled up to the ~15 clinical &amp; finance departments."
            />
            <Callout title="No single department dominates">
              AP spans 15 service lines, led by <b>Surgery</b> ($721M),{" "}
              <b>Internal Medicine</b> ($664M), <b>Cardiology</b> ($636M) and{" "}
              <b>Radiology</b> ($596M). Because spend is spread, cost programs
              have to work across the top tier — not just one line.
            </Callout>
          </Row>
        </div>

        {/* ---- Payment timing ---- */}
        <div className="space-y-10">
          <FadeUp>
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
              Risk · payment timing
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-2">
              One in six invoices misses the 45-day SLA
            </h2>
          </FadeUp>
          <Row>
            <Figure
              src={`${IMG}/payment_timing.png`}
              alt="Distribution of payment lag in days with the 45-day SLA marked"
              caption="Payment lag (document entry → payment), with mean and the 45-day SLA marked."
            />
            <Callout variant="insight" title="A long late-payment tail">
              Mean payment lag is ~<b>29 days</b>, but <b>17%</b> of paid
              invoices clear after 45 days (8.2% after 60) — roughly{" "}
              <b>$1.2B</b> paid late. Combined with the 52 near-duplicate vendor
              records, that tail is where late-fee and double-payment risk
              concentrate.
            </Callout>
          </Row>
        </div>
      </div>
    </section>
  );
}
