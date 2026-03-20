"use client";

import {
  FadeUp,
  FadeLeft,
  FadeRight,
  motion,
  staggerContainer,
  staggerItem,
} from "@/components/animations/motion";

const painPoints = [
  {
    icon: "📡",
    title: "Fragmented Channels",
    description: "Support scattered across Zalo and Discord with no unified view.",
  },
  {
    icon: "🔧",
    title: "Manual Triage",
    description: "Team manually routing every message at 1,500+ users.",
  },
  {
    icon: "📉",
    title: "No Sales Tracking",
    description: "Could not identify qualified leads or track conversation stages.",
  },
  {
    icon: "🔁",
    title: "Repetitive Questions",
    description: "Same FAQ questions consuming hours of support time daily.",
  },
];

export default function ProblemSection() {
  return (
    <section id="problem" className="py-32 px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Full-width statement */}
        <FadeUp>
          <div className="max-w-4xl mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Our support team was drowning.
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              With 1,500+ users across two platforms, every message was manually
              read, categorized, and routed. High-value sales leads got the same
              treatment as simple FAQ questions. We needed a system that could
              think, not just respond.
            </p>
          </div>
        </FadeUp>

        {/* Pain points in a horizontal scrolling card layout */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {painPoints.map((point, i) => (
            <motion.div
              key={i}
              variants={staggerItem}
              className="group relative bg-red-50/50 dark:bg-red-900/10 border border-red-200/50 dark:border-red-800/30 rounded-2xl p-6 hover:border-red-300 dark:hover:border-red-700 transition-all"
            >
              <span className="text-3xl mb-4 block">{point.icon}</span>
              <h3 className="font-bold text-lg mb-2">{point.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {point.description}
              </p>
              {/* Red accent line */}
              <div className="absolute bottom-0 left-6 right-6 h-0.5 bg-red-300/50 dark:bg-red-700/50 rounded-full" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
