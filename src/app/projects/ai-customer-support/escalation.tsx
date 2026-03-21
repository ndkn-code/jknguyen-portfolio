"use client";

import { FadeUp, FadeLeft, FadeRight } from "@/components/animations/motion";
import Image from "next/image";

const escalationTriggers = [
  { trigger: "B2B/School Inquiry", priority: "Urgent", team: "Sales", color: "bg-red-500" },
  { trigger: "Explicit Human Request", priority: "High", team: "Support", color: "bg-orange-500" },
  { trigger: "Refund Request", priority: "High", team: "Support", color: "bg-orange-500" },
  { trigger: "Negative Sentiment", priority: "High", team: "Support", color: "bg-orange-500" },
  { trigger: "Qualified Lead Closing", priority: "High", team: "Sales", color: "bg-orange-500" },
  { trigger: "Loop Detection", priority: "Medium", team: "Support", color: "bg-yellow-500" },
  { trigger: "Low AI Confidence", priority: "Low", team: "Support", color: "bg-emerald-500" },
];

export default function EscalationSection() {
  return (
    <section className="py-16 sm:py-32 px-4 sm:px-8 bg-zinc-900 dark:bg-zinc-950 text-zinc-100">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left column - Escalation workflow image + description */}
          <FadeLeft className="lg:w-1/2">
            <h2 className="text-3xl font-bold mb-6">Escalation System</h2>
            <p className="text-zinc-400 text-lg leading-relaxed mb-8">
              The system monitors every conversation for 7 distinct triggers.
              When one fires, it creates a Discord thread with full context,
              tags the right team member, and pauses AI responses until the
              human agent resolves the issue.
            </p>

            <div className="rounded-xl overflow-hidden border border-zinc-700 mb-6">
              <Image
                src="/images/ai-support-flow-escalation.png"
                alt="Escalation workflow showing trigger detection and Discord thread creation"
                width={1600}
                height={800}
                quality={90}
                className="w-full h-auto"
              />
            </div>
            <p className="text-sm text-zinc-500 text-center">
              Trigger detection → Discord thread creation → Agent routing
            </p>
          </FadeLeft>

          {/* Right column - Priority table */}
          <FadeRight className="lg:w-1/2">
            <div className="bg-zinc-800/50 rounded-xl border border-zinc-700 overflow-hidden">
              <div className="px-6 py-4 border-b border-zinc-700">
                <h3 className="font-bold text-lg">Priority Routing</h3>
                <p className="text-sm text-zinc-500 mt-1">
                  Each trigger maps to a priority level and responsible team.
                </p>
              </div>
              <table className="w-full">
                <thead className="bg-zinc-800/80">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider text-zinc-400">
                      Trigger
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider text-zinc-400">
                      Priority
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider text-zinc-400">
                      Team
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-700/50">
                  {escalationTriggers.map((item, i) => (
                    <tr key={i} className="hover:bg-zinc-800/30 transition-colors">
                      <td className="px-6 py-3.5 text-sm text-zinc-300">
                        {item.trigger}
                      </td>
                      <td className="px-6 py-3.5 text-sm">
                        <span className="inline-flex items-center gap-1.5">
                          <span className={`w-2 h-2 rounded-full ${item.color}`} />
                          <span className="text-zinc-300">{item.priority}</span>
                        </span>
                      </td>
                      <td className="px-6 py-3.5 text-sm text-zinc-400">
                        {item.team}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeRight>
        </div>
      </div>
    </section>
  );
}
