"use client";

import { FadeUp, FadeLeft, FadeRight } from "@/components/animations/motion";
import Image from "next/image";

const scoringFactors = [
  { factor: "Base Score", condition: "All submissions", points: "+10", type: "positive" },
  { factor: "Source", condition: "Referral (student/parent)", points: "+45", type: "positive" },
  { factor: "Source", condition: "Other sources", points: "+5", type: "positive" },
  { factor: "Urgency", condition: "Test in 3-6 months (sweet spot)", points: "+30", type: "positive" },
  { factor: "Urgency", condition: "Test in <3 months", points: "+20", type: "positive" },
  { factor: "Urgency", condition: "Test in >6 months", points: "+10", type: "positive" },
  { factor: "Urgency", condition: "Undetermined", points: "-15", type: "negative" },
  { factor: "Course", condition: "Pre-SAT program", points: "+25", type: "positive" },
  { factor: "Course", condition: "1-1 tutoring", points: "+20", type: "positive" },
  { factor: "Profile", condition: "Age 16-18 years old", points: "+15", type: "positive" },
  { factor: "Profile", condition: "US-based student", points: "+15", type: "positive" },
  { factor: "Intent", condition: "College admission purpose", points: "+10", type: "positive" },
];

const priorityThresholds = [
  { label: "Highest", threshold: "≥100", color: "bg-red-500", bgColor: "bg-red-100 dark:bg-red-900/30", textColor: "text-red-700 dark:text-red-400" },
  { label: "High", threshold: "≥85", color: "bg-orange-500", bgColor: "bg-orange-100 dark:bg-orange-900/30", textColor: "text-orange-700 dark:text-orange-400" },
  { label: "Medium", threshold: "≥65", color: "bg-yellow-500", bgColor: "bg-yellow-100 dark:bg-yellow-900/30", textColor: "text-yellow-700 dark:text-yellow-400" },
  { label: "Low", threshold: "≥45", color: "bg-blue-500", bgColor: "bg-blue-100 dark:bg-blue-900/30", textColor: "text-blue-700 dark:text-blue-400" },
  { label: "Lowest", threshold: "<45", color: "bg-gray-400", bgColor: "bg-gray-100 dark:bg-gray-800", textColor: "text-gray-600 dark:text-gray-400" },
];

export default function ScoringSection() {
  return (
    <section id="scoring" className="py-32 px-8 bg-background">
      <div className="max-w-7xl mx-auto space-y-20">
        {/* n8n Workflow Image - Full width */}
        <div>
          <FadeUp>
            <h2 className="text-3xl font-bold mb-4 text-center">The Scoring Engine</h2>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              Website form submissions trigger automated scoring based on 5
              factors. Qualified leads create prioritized Jira tickets with all
              contact info, while data syncs to Google Sheets for analytics.
            </p>
          </FadeUp>

          <FadeUp delay={0.1}>
            <div className="bg-white dark:bg-card rounded-2xl shadow-sm border border-border overflow-hidden">
              <div className="p-6 md:p-8">
                <div className="rounded-xl overflow-hidden border border-border">
                  <Image
                    src="/images/crm-n8n-flow.png"
                    alt="n8n workflow showing form webhook, lead scoring, Jira ticket creation, and Google Sheets logging"
                    width={1200}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
                <p className="text-sm text-muted-foreground text-center mt-4">
                  n8n workflow: Form webhook → Lead scoring → Jira ticket creation → Google Sheets logging
                </p>
              </div>
            </div>
          </FadeUp>
        </div>

        {/* Scoring Algorithm Table + Priority Thresholds side by side */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Scoring Factors Table */}
          <FadeLeft className="lg:w-2/3">
            <div className="bg-white dark:bg-card rounded-2xl border border-border overflow-hidden h-full">
              <div className="px-6 py-4 border-b border-border">
                <h3 className="font-bold text-lg">Scoring Factors</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  5 weighted factors determine each lead&apos;s priority.
                </p>
              </div>
              <table className="w-full">
                <thead className="bg-muted/50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      Factor
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      Condition
                    </th>
                    <th className="px-6 py-3 text-right text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      Points
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {scoringFactors.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-muted/20" : ""}>
                      <td className="px-6 py-3 text-sm font-medium">{row.factor}</td>
                      <td className="px-6 py-3 text-sm text-muted-foreground">{row.condition}</td>
                      <td className={`px-6 py-3 text-sm text-right font-mono font-semibold ${
                        row.type === "negative"
                          ? "text-red-600 dark:text-red-400"
                          : "text-emerald-600 dark:text-emerald-400"
                      }`}>
                        {row.points}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeLeft>

          {/* Priority Thresholds */}
          <FadeRight className="lg:w-1/3">
            <div className="bg-white dark:bg-card rounded-2xl border border-border p-6 h-full">
              <h3 className="font-bold text-lg mb-6">Priority Thresholds</h3>
              <div className="space-y-4">
                {priorityThresholds.map((threshold, i) => (
                  <div
                    key={i}
                    className={`flex items-center gap-3 px-4 py-3 ${threshold.bgColor} rounded-xl`}
                  >
                    <span className={`w-3 h-3 rounded-full ${threshold.color} flex-shrink-0`} />
                    <div className="flex-grow">
                      <span className={`text-sm font-semibold ${threshold.textColor}`}>
                        {threshold.label}
                      </span>
                    </div>
                    <span className={`text-sm font-mono font-bold ${threshold.textColor}`}>
                      {threshold.threshold}
                    </span>
                  </div>
                ))}
              </div>

              {/* Partial lead recovery note */}
              <div className="mt-8 p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-xl border border-emerald-200 dark:border-emerald-800">
                <h4 className="font-bold text-sm text-emerald-700 dark:text-emerald-400 mb-1">
                  Partial Lead Recovery
                </h4>
                <p className="text-xs text-emerald-600 dark:text-emerald-500 leading-relaxed">
                  Abandoned forms with a gatekeeper score of 50+ still create
                  Jira tickets. This recovers high-potential leads that other
                  systems would miss.
                </p>
              </div>
            </div>
          </FadeRight>
        </div>
      </div>
    </section>
  );
}
