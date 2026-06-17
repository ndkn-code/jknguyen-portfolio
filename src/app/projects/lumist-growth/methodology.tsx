"use client";

import { FadeLeft, FadeRight, FadeUp } from "@/components/animations/motion";
import CodeBlock from "@/components/ui/code-block";

const TABLES = [
  { name: "students", note: "signup, channel, market, target score" },
  { name: "daily_activity", note: "questions answered + study minutes/day" },
  { name: "subscriptions", note: "free → paid lifecycle" },
  { name: "streaks", note: "login & brain-teaser streaks" },
];

const CHANNEL_SQL = `-- The headline query: channel VOLUME vs channel VALUE.
-- The biggest source of signups is often the weakest at converting.
SELECT s.acquisition_channel AS channel,
       COUNT(*)                       AS students,
       COUNT(DISTINCT sub.student_id) AS converted,
       ROUND(100.0 * COUNT(DISTINCT sub.student_id)
             / COUNT(*), 1)           AS conversion_pct
FROM students s
LEFT JOIN subscriptions sub ON sub.student_id = s.student_id
GROUP BY s.acquisition_channel
ORDER BY students DESC;`;

export default function MethodologySection() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <FadeUp>
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">Data &amp; method</h2>
        </FadeUp>
        <FadeUp delay={0.05}>
          <p className="text-muted-foreground max-w-2xl mb-12">
            A four-table model of the acquisition-to-revenue journey, queried
            with SQL (CTEs + window functions) and validated in Python. Built
            from a seeded generator calibrated to the real platform&apos;s
            distributions.
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
              Channels anonymized to generic types (short-form video, creator,
              social, referral, paid social, search, organic).
            </p>
          </FadeLeft>
          <FadeRight>
            <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
              Representative query — channel volume vs value
            </p>
            <CodeBlock code={CHANNEL_SQL} filename="01_channel_volume_vs_value.sql" />
          </FadeRight>
        </div>
      </div>
    </section>
  );
}
