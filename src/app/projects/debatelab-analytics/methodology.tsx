"use client";

import { FadeLeft, FadeRight, FadeUp } from "@/components/animations/motion";
import CodeBlock from "@/components/ui/code-block";

const TABLES = [
  { name: "users", note: "signup, language, channel, plan" },
  { name: "practice_attempts", note: "5 skill scores + total, per attempt" },
  { name: "daily_stats", note: "sessions, minutes, XP per day" },
  { name: "subscriptions", note: "free → premium lifecycle" },
  { name: "league_standings", note: "season XP & league tier" },
];

const RETENTION_SQL = `-- Rolling Day-N retention by signup cohort, counted only
-- among users with >= N days of opportunity (so recent
-- cohorts aren't penalised by censoring).
WITH life AS (
  SELECT u.user_id, u.signup_cohort,
         julianday('2026-06-01')
           - julianday(u.signup_date)               AS elapsed,
         COALESCE(MAX(julianday(d.date)
           - julianday(u.signup_date)), -1)          AS last_offset
  FROM users u
  LEFT JOIN daily_stats d ON d.user_id = u.user_id
  GROUP BY u.user_id
)
SELECT signup_cohort,
  ROUND(100.0*AVG(CASE WHEN elapsed>=7
        THEN last_offset>=7  END), 1) AS d7_pct,
  ROUND(100.0*AVG(CASE WHEN elapsed>=30
        THEN last_offset>=30 END), 1) AS d30_pct
FROM life
GROUP BY signup_cohort
ORDER BY signup_cohort;`;

export default function MethodologySection() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <FadeUp>
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">Data &amp; method</h2>
        </FadeUp>
        <FadeUp delay={0.05}>
          <p className="text-muted-foreground max-w-2xl mb-12">
            A five-table relational model mirroring the real product, queried
            with SQL (CTEs + window functions), then validated and visualized in
            Python — fully reproducible from a single seeded generator.
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
              Workflow:{" "}
              <span className="font-medium text-foreground">
                generate → SQL → pandas → charts → dashboards
              </span>
              .
            </p>
          </FadeLeft>
          <FadeRight>
            <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
              Representative query — cohort retention
            </p>
            <CodeBlock code={RETENTION_SQL} filename="01_cohort_retention.sql" />
          </FadeRight>
        </div>
      </div>
    </section>
  );
}
