"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const techStack = [
  { name: "n8n", icon: "🔗" },
  { name: "Jira", icon: "📋" },
  { name: "Google Sheets", icon: "📊" },
  { name: "Slack", icon: "💬" },
  { name: "JavaScript", icon: "⚙️" },
];

// Simulated scoring breakdown from real algorithm
const scoringExample = {
  source: { label: "Referral (Parent)", points: 45 },
  urgency: { label: "Test in 4 months", points: 30 },
  course: { label: "Pre-SAT Program", points: 25 },
  profile: { label: "Age 17, US-based", points: 30 },
  intent: { label: "College admission", points: 10 },
};

export default function HeroSection() {
  const totalScore = Object.values(scoringExample).reduce((sum, f) => sum + f.points, 0) + 10; // +10 base

  return (
    <header className="relative w-full min-h-[85vh] flex flex-col items-center justify-center px-4 sm:px-8 overflow-hidden py-16 sm:py-24">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 -z-10 opacity-30"
        style={{
          backgroundImage: "radial-gradient(#e5e7eb 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Column - Text */}
        <div className="z-10">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl sm:text-5xl md:text-7xl font-bold text-foreground leading-[1.1] mb-6 sm:mb-8 tracking-tight"
          >
            Lead Scoring CRM:{" "}
            <span className="text-primary">
              Automated Pipeline, Zero Manual Entry
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-xl leading-relaxed mb-10"
          >
            An automated lead scoring pipeline I built with n8n and Jira,
            featuring a multi-factor scoring algorithm, priority-based routing,
            partial lead recovery, and an escalating penalty system for team
            accountability.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#scoring"
              className="bg-primary text-white px-8 py-4 rounded-full font-semibold text-sm hover:shadow-lg hover:shadow-primary/20 transition-all active:scale-95 inline-flex items-center gap-2 group"
            >
              See the Algorithm
              <span className="inline-block group-hover:translate-x-1 transition-transform">
                &darr;
              </span>
            </a>
            <a
              href="#problem"
              className="border border-border bg-background px-8 py-4 rounded-full font-semibold text-sm hover:bg-muted transition-all active:scale-95"
            >
              View Process
            </a>
          </motion.div>

          {/* Tech stack badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap gap-2 mt-10"
          >
            {techStack.map((tech, i) => (
              <motion.span
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.5 + i * 0.05 }}
              >
                <Badge
                  variant="outline"
                  className="px-3 py-1.5 text-xs font-medium gap-1.5 inline-flex items-center"
                >
                  <span className="text-sm">{tech.icon}</span>
                  {tech.name}
                </Badge>
              </motion.span>
            ))}
          </motion.div>
        </div>

        {/* Right Column - Scoring Calculator Visual */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative"
        >
          <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-br from-primary/8 via-violet-500/5 to-emerald-500/8 border border-border/50 flex flex-col p-6 gap-4">
            {/* Score header */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="bg-white dark:bg-zinc-900 rounded-xl shadow-lg p-5 border border-border/50"
            >
              <div className="flex items-center justify-between mb-3">
                <div>
                  <h4 className="font-bold text-sm text-foreground">Lead Score Calculator</h4>
                  <p className="text-[11px] text-primary font-medium">Sample lead evaluation</p>
                </div>
                <div className="flex items-center gap-2">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1.5, duration: 0.4, type: "spring" }}
                    className="bg-red-100 dark:bg-red-900/30 px-3 py-1 rounded-full"
                  >
                    <span className="text-xs font-bold text-red-600 dark:text-red-400">HIGHEST</span>
                  </motion.div>
                </div>
              </div>

              {/* Score bar */}
              <div className="relative h-3 bg-muted rounded-full overflow-hidden mb-1">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${Math.min((totalScore / 150) * 100, 100)}%` }}
                  transition={{ delay: 0.8, duration: 1, ease: "easeOut" }}
                  className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary to-violet-500 rounded-full"
                />
              </div>
              <div className="flex justify-between text-[9px] text-muted-foreground">
                <span>0</span>
                <span>45</span>
                <span>65</span>
                <span>85</span>
                <span>100</span>
                <span>150</span>
              </div>
            </motion.div>

            {/* Scoring factors */}
            <div className="space-y-2.5">
              {[
                { label: "Base Score", sublabel: "All submissions", points: 10 },
                ...Object.values(scoringExample).map((f) => ({
                  label: f.label.split(" (")[0].split(" in ")[0],
                  sublabel: f.label,
                  points: f.points,
                })),
              ].map((factor, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.9 + i * 0.1, duration: 0.4 }}
                  className="bg-white dark:bg-zinc-900 rounded-lg shadow-sm px-4 py-2.5 border border-border/50 flex items-center justify-between"
                >
                  <div>
                    <span className="text-xs font-medium text-foreground">{factor.sublabel}</span>
                  </div>
                  <span className="text-xs font-bold font-mono text-emerald-600 dark:text-emerald-400">
                    +{factor.points}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Total score */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.8, duration: 0.4 }}
              className="bg-white dark:bg-zinc-900 rounded-xl shadow-lg p-4 border border-border/50 flex items-center justify-between"
            >
              <span className="text-sm font-bold text-foreground">Total Score</span>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-primary font-mono">{totalScore}</span>
                <span className="text-[9px] text-muted-foreground">/ 150</span>
              </div>
            </motion.div>

            {/* Action pill */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 2.0, duration: 0.4 }}
              className="self-center"
            >
              <div className="bg-white dark:bg-zinc-900 px-4 py-2.5 rounded-full shadow-md border border-border/50 flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
                  <svg className="w-3.5 h-3.5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-xs font-bold text-emerald-600">
                  → Jira Ticket Created (Highest Priority)
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </header>
  );
}
