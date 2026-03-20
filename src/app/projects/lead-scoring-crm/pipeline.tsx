"use client";

import { FadeUp, FadeLeft, FadeRight } from "@/components/animations/motion";
import Image from "next/image";

const pipelineStages = [
  { name: "Queue", color: "bg-blue-500", bgColor: "bg-blue-100 dark:bg-blue-900/30", textColor: "text-blue-700 dark:text-blue-400", description: "New lead, awaiting first contact (due date enforced)" },
  { name: "Contacted", color: "bg-yellow-500", bgColor: "bg-yellow-100 dark:bg-yellow-900/30", textColor: "text-yellow-700 dark:text-yellow-400", description: "Initial outreach made" },
  { name: "Assigned", color: "bg-violet-500", bgColor: "bg-violet-100 dark:bg-violet-900/30", textColor: "text-violet-700 dark:text-violet-400", description: "Trial class scheduled" },
];

const outcomes = [
  { name: "Won", icon: "✓", color: "bg-emerald-500", bgColor: "bg-emerald-100 dark:bg-emerald-900/30", textColor: "text-emerald-700 dark:text-emerald-400", description: "Enrolled student" },
  { name: "Lost", icon: "✗", color: "bg-red-500", bgColor: "bg-red-100 dark:bg-red-900/30", textColor: "text-red-700 dark:text-red-400", description: "Declined after trial" },
  { name: "MIA", icon: "⚠", color: "bg-gray-400", bgColor: "bg-gray-100 dark:bg-gray-800", textColor: "text-gray-600 dark:text-gray-400", description: "Unresponsive after contact" },
];

export default function PipelineSection() {
  return (
    <section className="py-32 px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto space-y-20">
        <FadeUp>
          <h2 className="text-3xl font-bold mb-4 text-center">Sales Pipeline</h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Every status transition is synced bidirectionally between Jira and
            Google Sheets, giving both the sales team and leadership full
            visibility.
          </p>
        </FadeUp>

        {/* Pipeline flow diagram */}
        <FadeUp delay={0.1}>
          <div className="bg-white dark:bg-card p-8 md:p-12 rounded-2xl border border-border">
            {/* Stages flow */}
            <div className="flex flex-col md:flex-row items-stretch gap-4 md:gap-0 mb-12">
              {pipelineStages.map((stage, i) => (
                <div key={i} className="flex items-center flex-1">
                  <div className={`${stage.bgColor} rounded-xl p-5 flex-1`}>
                    <div className="flex items-center gap-2 mb-2">
                      <div className={`w-3 h-3 rounded-full ${stage.color}`} />
                      <span className={`font-bold text-sm ${stage.textColor}`}>{stage.name}</span>
                    </div>
                    <p className="text-xs text-muted-foreground">{stage.description}</p>
                  </div>
                  {i < pipelineStages.length - 1 && (
                    <svg className="w-8 h-8 text-border flex-shrink-0 hidden md:block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  )}
                </div>
              ))}
              <svg className="w-8 h-8 text-border flex-shrink-0 hidden md:flex self-center" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              {/* Outcomes column */}
              <div className="flex flex-col gap-2 flex-1">
                {outcomes.map((outcome, i) => (
                  <div key={i} className={`${outcome.bgColor} rounded-lg px-4 py-2.5 flex items-center gap-2`}>
                    <div className={`w-2.5 h-2.5 rounded-full ${outcome.color}`} />
                    <span className={`text-sm font-semibold ${outcome.textColor}`}>
                      {outcome.name}
                    </span>
                    <span className="text-xs text-muted-foreground ml-auto hidden sm:inline">
                      {outcome.description}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-sm text-muted-foreground text-center">
              Dual data layer: Jira handles workflow and accountability, Google Sheets powers analytics and reporting.
            </p>
          </div>
        </FadeUp>

        {/* Screenshots: Slack + Jira side by side */}
        <div>
          <FadeUp>
            <h3 className="text-2xl font-bold mb-8 text-center">In Action</h3>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FadeLeft>
              <div className="bg-white dark:bg-card rounded-2xl shadow-sm border border-border overflow-hidden h-full">
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-lg">💬</span>
                    <h4 className="font-bold">Slack Notification</h4>
                  </div>
                  <div className="rounded-xl overflow-hidden border border-border mb-4">
                    <Image
                      src="/images/crm-slack-notification.png"
                      alt="Slack notification showing lead score and priority"
                      width={600}
                      height={400}
                      className="w-full h-auto"
                    />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Sales team receives instant Slack alerts with lead score and priority level.
                  </p>
                </div>
              </div>
            </FadeLeft>

            <FadeRight>
              <div className="bg-white dark:bg-card rounded-2xl shadow-sm border border-border overflow-hidden h-full">
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-lg">📋</span>
                    <h4 className="font-bold">Jira Ticket</h4>
                  </div>
                  <div className="rounded-xl overflow-hidden border border-border mb-4">
                    <Image
                      src="/images/crm-jira-ticket.png"
                      alt="Jira ticket with full lead details and custom fields"
                      width={600}
                      height={400}
                      className="w-full h-auto"
                    />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Full lead details captured in Jira with custom fields for tracking and accountability.
                  </p>
                </div>
              </div>
            </FadeRight>
          </div>
        </div>
      </div>
    </section>
  );
}
