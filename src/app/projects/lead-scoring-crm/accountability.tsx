"use client";

import { FadeUp, motion, staggerContainer, staggerItem } from "@/components/animations/motion";

const penaltySteps = [
  {
    step: "1",
    title: "First Violation",
    penalty: "-1",
    comment: "late",
    bgColor: "bg-yellow-50 dark:bg-yellow-900/20",
    borderColor: "border-yellow-200 dark:border-yellow-800",
    circleColor: "bg-yellow-100 dark:bg-yellow-900/30",
    textColor: "text-yellow-600 dark:text-yellow-400",
    penaltyBg: "bg-yellow-200 dark:bg-yellow-800",
  },
  {
    step: "2",
    title: "Second Violation",
    penalty: "-2",
    comment: "late again",
    bgColor: "bg-orange-50 dark:bg-orange-900/20",
    borderColor: "border-orange-200 dark:border-orange-800",
    circleColor: "bg-orange-100 dark:bg-orange-900/30",
    textColor: "text-orange-600 dark:text-orange-400",
    penaltyBg: "bg-orange-200 dark:bg-orange-800",
  },
  {
    step: "3",
    title: "Third Violation",
    penalty: "-3",
    comment: "too late",
    bgColor: "bg-red-50 dark:bg-red-900/20",
    borderColor: "border-red-200 dark:border-red-800",
    circleColor: "bg-red-100 dark:bg-red-900/30",
    textColor: "text-red-600 dark:text-red-400",
    penaltyBg: "bg-red-200 dark:bg-red-800",
  },
  {
    step: "4+",
    title: "Fourth+ Violation",
    penalty: "-117",
    comment: "Escalated to management",
    bgColor: "bg-red-100 dark:bg-red-900/30",
    borderColor: "border-red-400 dark:border-red-700 border-2",
    circleColor: "bg-red-500",
    textColor: "text-white",
    penaltyBg: "bg-red-300 dark:bg-red-800",
    isCritical: true,
  },
];

export default function AccountabilitySection() {
  return (
    <section className="py-32 px-8 bg-zinc-900 dark:bg-zinc-950 text-zinc-100">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left - Explanation */}
          <FadeUp className="lg:w-2/5">
            <h2 className="text-3xl font-bold mb-6">Accountability System</h2>
            <p className="text-zinc-400 text-lg leading-relaxed mb-8">
              Daily Jira automation runs at 2 PM EST checking for overdue
              tickets in Queue status. Escalating penalties ensure timely
              follow-ups and prevent leads from going cold.
            </p>
            <div className="bg-zinc-800/50 rounded-xl p-6 border border-zinc-700">
              <h4 className="font-bold text-sm text-zinc-300 mb-3">How it works</h4>
              <ul className="space-y-3 text-sm text-zinc-400">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">•</span>
                  Jira automation triggers daily at 2 PM EST
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">•</span>
                  Checks all tickets still in &quot;Queue&quot; status past due date
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">•</span>
                  Adds escalating penalty comments to the ticket
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">•</span>
                  Fourth violation triggers management escalation
                </li>
              </ul>
            </div>
          </FadeUp>

          {/* Right - Penalty Timeline */}
          <div className="lg:w-3/5">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              className="relative"
            >
              {/* Vertical line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-zinc-700" />

              <div className="space-y-6">
                {penaltySteps.map((step, i) => (
                  <motion.div
                    key={i}
                    variants={staggerItem}
                    className="relative flex gap-4 items-start"
                  >
                    <div
                      className={`w-8 h-8 rounded-full ${step.circleColor} flex items-center justify-center z-10 flex-shrink-0`}
                    >
                      <span className={`${step.textColor} font-bold text-sm`}>
                        {step.step}
                      </span>
                    </div>
                    <div
                      className={`${step.bgColor} p-5 rounded-xl flex-grow border ${step.borderColor}`}
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <span className={`font-bold ${step.isCritical ? "text-red-400" : "text-zinc-200"}`}>
                          {step.title}
                        </span>
                        <span className={`px-2 py-0.5 ${step.penaltyBg} rounded text-xs font-mono font-bold`}>
                          value = {step.penalty}
                        </span>
                      </div>
                      <p className="text-sm text-zinc-400">
                        Comment added: &quot;{step.comment}&quot;
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
