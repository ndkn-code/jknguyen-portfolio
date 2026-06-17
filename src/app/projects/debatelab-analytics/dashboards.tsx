"use client";

import Image from "next/image";
import { FadeUp } from "@/components/animations/motion";

const IMG = "/images/debatelab-analytics";
const REPO = "https://github.com/ndkn-code/debatelab-analytics";

const DASHBOARDS = [
  {
    tool: "Tableau Public",
    lens: "Data Analyst",
    lensColor: "text-primary",
    title: "Skill & Practice Analytics",
    points: [
      "Score improvement by practice frequency",
      "Learning curves across the 5 skills",
      "Topic difficulty & EN/VI breakdowns",
    ],
    preview: `${IMG}/02_skill_learning_curves.png`,
  },
  {
    tool: "Power BI",
    lens: "Business Analyst",
    lensColor: "text-emerald-600 dark:text-emerald-400",
    title: "Engagement → Retention → Conversion",
    points: [
      "Cohort retention heatmap (D1/D7/D30)",
      "Signup → activation → premium funnel",
      "Conversion drivers + recommendations",
    ],
    preview: `${IMG}/03_funnel.png`,
  },
];

export default function DashboardsSection() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <FadeUp>
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">
            Two interactive dashboards
          </h2>
          <p className="text-muted-foreground max-w-2xl mb-12">
            The same dataset, packaged for two audiences — built in the two
            tools analyst roles ask for.
          </p>
        </FadeUp>
        <div className="grid md:grid-cols-2 gap-6">
          {DASHBOARDS.map((d, i) => (
            <FadeUp key={d.title} delay={0.1 * i}>
              <div className="h-full flex flex-col bg-white dark:bg-card border border-border rounded-2xl overflow-hidden shadow-sm">
                <div className="bg-white border-b border-border p-3">
                  <Image
                    src={d.preview}
                    alt={`${d.title} preview`}
                    width={1000}
                    height={600}
                    className="w-full h-auto rounded-md"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-muted">
                      {d.tool}
                    </span>
                    <span
                      className={`text-xs font-semibold uppercase tracking-wider ${d.lensColor}`}
                    >
                      {d.lens}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold mb-3">{d.title}</h3>
                  <ul className="space-y-2 mb-6 flex-grow">
                    {d.points.map((p) => (
                      <li
                        key={p}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <span className="text-primary mt-0.5">▪</span>
                        {p}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={REPO}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full px-5 py-3 rounded-full text-sm font-semibold bg-foreground text-background hover:opacity-90 transition-opacity"
                  >
                    Build guide &amp; workbook on GitHub
                    <span aria-hidden>→</span>
                  </a>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
