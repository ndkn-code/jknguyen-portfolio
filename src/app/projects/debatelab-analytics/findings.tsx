"use client";

import Image from "next/image";
import { FadeUp } from "@/components/animations/motion";
import Callout from "@/components/ui/callout";

const IMG = "/images/debatelab-analytics";

function Figure({
  src,
  alt,
  caption,
  className = "",
}: {
  src: string;
  alt: string;
  caption: string;
  className?: string;
}) {
  return (
    <figure
      className={`bg-white rounded-xl border border-border shadow-sm overflow-hidden ${className}`}
    >
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
        {/* ---- Data Analyst lens ---- */}
        <div className="space-y-10">
          <FadeUp>
            <span className="text-xs font-bold uppercase tracking-wider text-primary">
              Data Analyst lens
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-2">
              What drives skill improvement?
            </h2>
          </FadeUp>

          <Row>
            <Figure
              src={`${IMG}/01_frequency_vs_improvement.png`}
              alt="Score gain by weekly practice-frequency quartile"
              caption="Score gain (mean of last 3 attempts − first 3) by weekly practice frequency."
            />
            <Callout title="Returns flatten past ~4 sessions/week">
              Gains climb sharply from <b>+6.4</b> points (≤2.3 sessions/wk) to{" "}
              <b>+9.6</b> (~4.3/wk), then plateau (<b>+9.5</b> at 6.3/wk). The
              product should nudge learners toward a <b>~4-session weekly
              habit</b> — past that, extra volume barely moves the score.
            </Callout>
          </Row>

          <Row flip>
            <Figure
              src={`${IMG}/02_skill_learning_curves.png`}
              alt="Learning curves for the five scored skills"
              caption="Average score for each of the 5 skills, by the learner's attempt number."
            />
            <Callout title="Clarity is easy; rebuttal is hard">
              Across a learner&apos;s journey <b>clarity</b> climbs ~19 points
              while <b>rebuttal</b> moves only ~9. The slowest-improving skills
              (rebuttal, logic) are exactly where coaching prompts and
              curriculum should concentrate.
            </Callout>
          </Row>

          <Row>
            <Figure
              src={`${IMG}/06_language_profiles.png`}
              alt="Speaking-track share by language"
              caption="Share of attempts on the Speaking track, English vs Vietnamese learners."
            />
            <Callout title="Vietnamese learners prefer Speaking">
              VI learners choose the Speaking track <b>66%</b> of the time vs{" "}
              <b>42%</b> for EN — yet skill outcomes are equivalent across
              languages. Topic supply for VI should over-index on speaking
              prompts to match real demand.
            </Callout>
          </Row>
        </div>

        {/* ---- Business Analyst lens ---- */}
        <div className="space-y-10">
          <FadeUp>
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              Business Analyst lens
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-2">
              What drives retention &amp; revenue?
            </h2>
          </FadeUp>

          <Row>
            <Figure
              src={`${IMG}/03_funnel.png`}
              alt="Engagement to premium conversion funnel"
              caption="Share of signups reaching each depth of engagement."
            />
            <Callout
              variant="insight"
              title="The drop-off is activation, not pricing"
            >
              <b>70%</b> activate, but only <b>43%</b> reach 5 practices and{" "}
              <b>8.6%</b> convert to premium. The biggest leak is between
              activation and the 5-practice habit — that&apos;s the highest-
              leverage place to intervene.
            </Callout>
          </Row>

          <Row flip>
            <Figure
              src={`${IMG}/04_retention_heatmap.png`}
              alt="Retention by signup cohort heatmap"
              caption="Rolling Day-1 / 7 / 30 retention by signup-month cohort."
            />
            <Callout title="Retention is stable — and that's the opportunity">
              Cohorts hold steady at ~<b>68%</b> D1 → ~<b>52%</b> D7 → ~
              <b>30%</b> D30. Stability means no regressions, but the flat D30
              line is where a habit-forming push (streaks, reminders at day
              5–7) would compound.
            </Callout>
          </Row>

          <Row>
            <Figure
              src={`${IMG}/05_conversion_drivers.png`}
              alt="Engagement comparison: free vs premium users"
              caption="Average practices and season XP, free vs premium users."
            />
            <Callout
              variant="insight"
              title="Conversion is earned through engagement"
            >
              Premium users average <b>58.7 practices vs 8.2</b> for free users,
              and <b>76%</b> sit in the top leagues vs <b>12%</b>. Acquisition
              channel barely predicts conversion — <b>depth of use does</b>. The
              growth lever is getting users to the first-league threshold.
            </Callout>
          </Row>
        </div>
      </div>
    </section>
  );
}
