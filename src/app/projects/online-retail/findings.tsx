"use client";

import Image from "next/image";
import { FadeUp } from "@/components/animations/motion";
import Callout from "@/components/ui/callout";

const IMG = "/images/online-retail";

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
        {/* ---- RFM ---- */}
        <div className="space-y-10">
          <FadeUp>
            <span className="text-xs font-bold uppercase tracking-wider text-primary">
              Customer value · RFM segmentation
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-2">
              A quarter of customers drive two-thirds of revenue
            </h2>
          </FadeUp>
          <Row>
            <Figure
              src={`${IMG}/rfm_segments.png`}
              alt="RFM segments: share of customers vs share of revenue"
              caption="Each segment's share of customers (grey) vs share of revenue (teal)."
            />
            <Callout variant="insight" title="Champions carry the business">
              <b>Champions</b> are <b>25%</b> of customers but <b>69%</b> of
              revenue; add Loyal Customers and it&apos;s ~83%. The At-Risk,
              Hibernating and Lost segments are large in headcount but small in
              value — a textbook case for targeted retention over blanket
              discounts.
            </Callout>
          </Row>
        </div>

        {/* ---- Retention ---- */}
        <div className="space-y-10">
          <FadeUp>
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              Retention · cohorts
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-2">
              This business runs on repeat buyers
            </h2>
          </FadeUp>
          <Row flip>
            <Figure
              src={`${IMG}/cohort_retention.png`}
              alt="Monthly cohort repeat-purchase retention heatmap"
              caption="Repeat-purchase retention by first-purchase-month cohort."
            />
            <Callout title="Loyalty is real and durable">
              <b>72%</b> of customers come back for a second order, and the
              strongest cohorts still purchase at <b>~37%</b> a full year out.
              Month-1 repeat sits around <b>21%</b> on average — retention, not
              just acquisition, is what compounds here.
            </Callout>
          </Row>
        </div>

        {/* ---- Concentration ---- */}
        <div className="space-y-10">
          <FadeUp>
            <span className="text-xs font-bold uppercase tracking-wider text-primary">
              Concentration · customers &amp; geography
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-2">
              Revenue leans on a few customers — and one country
            </h2>
          </FadeUp>
          <Row>
            <Figure
              src={`${IMG}/pareto.png`}
              alt="Revenue concentration: cumulative revenue by customer (Pareto)"
              caption="Cumulative share of revenue as customers are added, ranked by spend."
            />
            <Callout variant="insight" title="A concentration (and expansion) signal">
              The top 10 customers are <b>16%</b> of revenue and just <b>~23%</b>{" "}
              of customers make up 80%. Geographically it&apos;s starker — the{" "}
              <b>UK is 85.5%</b> of revenue, leaving 42 other countries as a
              tested base to grow into.
            </Callout>
          </Row>
        </div>
      </div>
    </section>
  );
}
