"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FadeUp } from "@/components/animations/motion";

const pmSteps = [
  {
    title: "01 Discover",
    desc: 'Dig into the problem space through user interviews, analytics, and stakeholder conversations. Understand the "why" before jumping to solutions.',
  },
  {
    title: "02 Define",
    desc: "Translate insights into clear problem statements and success metrics. What are we solving? How do we measure success?",
  },
  {
    title: "03 Design",
    desc: "Rapid prototyping with Figma wireframes and user flows. Quick feedback loops with engineering and design.",
  },
  {
    title: "04 Ship",
    desc: "Sprint planning, backlog prioritization, and execution. Keep cross-functional teams aligned through standups and async updates.",
  },
  {
    title: "05 Iterate",
    desc: "Post-launch analytics, user feedback, and continuous improvement. Every feature is a hypothesis to validate.",
  },
];

const stepLabels = ["Discover", "Define", "Design", "Ship", "Iterate"];

export default function ProcessAndLocation() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="flex flex-col lg:flex-row gap-6 mt-6">
      {/* PM Process */}
      <FadeUp className="lg:flex-grow">
        <div className="bg-card p-8 rounded-3xl shadow-sm border border-border">
          <span className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">
            My PM Process
          </span>
          <div className="mt-8 mb-8">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-bold mb-3">
                {pmSteps[activeStep].title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-lg">
                {pmSteps[activeStep].desc}
              </p>
            </motion.div>
          </div>
          <div className="w-full bg-muted rounded-full p-1.5 flex items-center justify-between text-xs font-medium relative">
            <motion.div
              className="absolute left-1.5 top-1.5 bottom-1.5 bg-foreground rounded-full shadow-md z-0"
              animate={{
                left: `calc(${activeStep * 20}% + 6px)`,
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              style={{ width: "calc(20% - 6px)" }}
            />
            {stepLabels.map((label, i) => (
              <button
                key={label}
                onClick={() => setActiveStep(i)}
                className={`flex-1 py-2 text-center relative z-10 transition-colors ${
                  i === activeStep
                    ? "text-background"
                    : "text-muted-foreground hover:text-foreground"
                } ${i >= 3 ? "hidden sm:block" : ""}`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </FadeUp>

      {/* Location Card */}
      <FadeUp delay={0.15} className="lg:w-[340px] flex-shrink-0">
        <div className="bg-card rounded-3xl shadow-sm border border-border overflow-hidden relative min-h-[280px] group">
          <span className="absolute top-6 left-6 z-10 px-3 py-1 bg-white/90 dark:bg-black/80 backdrop-blur rounded-full text-xs font-semibold text-muted-foreground uppercase tracking-widest shadow-sm">
            Location
          </span>
          <div className="absolute inset-0 z-0 bg-gradient-to-br from-primary/20 via-blue-500/10 to-teal-500/20 group-hover:scale-110 transition-transform duration-1000" />
          <div
            className="absolute inset-0 z-0 opacity-30 dark:opacity-20"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
          <div className="absolute bottom-0 inset-x-0 p-8 bg-gradient-to-t from-white via-white/90 to-transparent dark:from-zinc-900 dark:via-zinc-900/90 flex flex-col items-center justify-end h-1/2">
            <h2 className="text-2xl font-bold tracking-widest uppercase mb-1">
              Tampa
            </h2>
            <p className="text-xs font-medium tracking-widest text-muted-foreground uppercase mb-2">
              Florida, USA
            </p>
            <p className="text-[10px] text-gray-400 font-mono">
              27.9506&deg; N, 82.4572&deg; W
            </p>
          </div>
        </div>
      </FadeUp>
    </section>
  );
}
