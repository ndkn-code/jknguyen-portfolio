"use client";

import Image from "next/image";
import { FadeUp } from "@/components/animations/motion";
import Callout from "@/components/ui/callout";

const IMG = "/images/lumist-growth";

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
    <section className="py-16 sm:py-24 px-4 sm:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto space-y-24">
        {/* ---- Where to grow ---- */}
        <div className="space-y-10">
          <FadeUp>
            <span className="text-xs font-bold uppercase tracking-wider text-primary">
              Business Analyst lens · where to grow
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-2">
              The biggest channel is the least efficient
            </h2>
          </FadeUp>

          <Row>
            <Figure
              src={`${IMG}/01_channel_volume_vs_value.png`}
              alt="Channel volume (bars) vs conversion rate (line)"
              caption="Signups by channel (bars) against conversion rate (line)."
            />
            <Callout title="Volume ≠ value">
              The largest channel — short-form video — brings <b>1,693</b>{" "}
              students but converts just <b>5.4%</b>. The smaller{" "}
              <b>creator</b> channel converts at <b>33%</b>, and social at 16%.
              Spend ranked by signups would back exactly the wrong channel.
            </Callout>
          </Row>

          <Row flip>
            <Figure
              src={`${IMG}/04_channel_quality.png`}
              alt="Conversion vs Day-30 retention by channel"
              caption="Each channel plotted by conversion (x) and Day-30 retention (y); bubble = volume."
            />
            <Callout title="High-intent channels win on both axes">
              Channels that convert better also <b>retain</b> better — creator
              sits top-right (33% conv, 36% D30), while short-form video sits
              bottom-left (5%, 1.5%). Channel quality, not raw reach, is what
              compounds.
            </Callout>
          </Row>
        </div>

        {/* ---- What converts ---- */}
        <div className="space-y-10">
          <FadeUp>
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              Conversion · what turns free into paid
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-2">
              Engagement depth is the real paywall
            </h2>
          </FadeUp>

          <Row>
            <Figure
              src={`${IMG}/02_engagement_vs_conversion.png`}
              alt="Conversion rate by engagement quintile"
              caption="Conversion rate by active-days quintile."
            />
            <Callout
              variant="insight"
              title="Conversion more than triples with engagement"
            >
              From the least-active quintile (1.3 days, <b>8%</b> convert) to the
              most-active (8.8 days, <b>27%</b>), conversion climbs steadily.
              Activation — not discounting — is the lever.
            </Callout>
          </Row>

          <Row flip>
            <Figure
              src={`${IMG}/05_conversion_drivers.png`}
              alt="Engagement of free vs premium students"
              caption="Average active days and questions, free vs premium."
            />
            <Callout title="Paying students are ~2× as engaged">
              Premium students average <b>4.5 active days</b> and <b>198
              questions</b> vs <b>2.4 days</b> and <b>95 questions</b> for free
              users. Depth of use is the strongest signal of who will pay.
            </Callout>
          </Row>
        </div>

        {/* ---- Retention ---- */}
        <div className="space-y-10">
          <FadeUp>
            <span className="text-xs font-bold uppercase tracking-wider text-primary">
              Retention
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-2">
              A stable base to build on
            </h2>
          </FadeUp>
          <Row>
            <Figure
              src={`${IMG}/03_retention_heatmap.png`}
              alt="Retention by signup cohort"
              caption="Rolling Day-1 / 7 / 30 retention by signup-month cohort."
            />
            <Callout title="Consistent cohort retention">
              Cohorts hold near <b>~58%</b> D1 → <b>~46%</b> D7 → <b>~12%</b>{" "}
              D30, steady month over month. A stable base means activation and
              channel-mix gains compound rather than leak away.
            </Callout>
          </Row>
        </div>
      </div>
    </section>
  );
}
