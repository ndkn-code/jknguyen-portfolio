"use client";

import Image from "next/image";
import { FadeUp } from "@/components/animations/motion";

const IMG = "/images/online-retail";
const REPO = "https://github.com/ndkn-code/online-retail-analytics";
// Set to the published Tableau Public URL once live; until then the CTA points to the repo guide.
const TABLEAU_URL = "";

const VIEWS = [
  "Revenue trend & seasonality",
  "RFM segments: customers vs revenue",
  "Cohort retention heatmap",
  "Top products & revenue by country",
];

const PREVIEWS = [
  `${IMG}/revenue_trend.png`,
  `${IMG}/rfm_segments.png`,
  `${IMG}/cohort_retention.png`,
  `${IMG}/top_products_and_country.png`,
];

export default function DashboardsSection() {
  const href = TABLEAU_URL || REPO;
  const live = Boolean(TABLEAU_URL);
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <FadeUp>
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">
            The interactive dashboard
          </h2>
          <p className="text-muted-foreground max-w-2xl mb-12">
            The customer-and-revenue analysis packaged into one Tableau Public
            dashboard a retail team could explore: segments, retention, and
            where revenue comes from, in one place.
          </p>
        </FadeUp>
        <FadeUp delay={0.1}>
          <div className="bg-white dark:bg-card border border-border rounded-2xl overflow-hidden shadow-sm grid lg:grid-cols-2">
            <div className="p-6 sm:p-8 flex flex-col">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-muted">
                  Tableau Public
                </span>
                <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                  Retail Analytics
                </span>
              </div>
              <h3 className="text-xl font-bold mb-4">
                Customers, Retention &amp; Revenue
              </h3>
              <ul className="space-y-2 mb-6 flex-grow">
                {VIEWS.map((v) => (
                  <li
                    key={v}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <span className="text-primary mt-0.5">▪</span>
                    {v}
                  </li>
                ))}
              </ul>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-sm font-semibold bg-foreground text-background hover:opacity-90 transition-opacity"
              >
                {live ? "Open the live dashboard" : "Build guide & data on GitHub"}
                <span aria-hidden>→</span>
              </a>
              {!live && (
                <p className="text-xs text-muted-foreground/60 mt-3">
                  Live Tableau Public link coming once published.
                </p>
              )}
            </div>
            <div className="bg-muted/30 border-t lg:border-t-0 lg:border-l border-border p-4 grid grid-cols-1 sm:grid-cols-2 gap-3 content-center">
              {PREVIEWS.map((src) => (
                <Image
                  key={src}
                  src={src}
                  alt="Dashboard view preview"
                  width={500}
                  height={320}
                  className="w-full h-auto rounded-md border border-border bg-white"
                />
              ))}
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
