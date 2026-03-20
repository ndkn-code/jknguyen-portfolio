"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const techStack = [
  { name: "React", icon: "⚛️" },
  { name: "Supabase", icon: "⚡" },
  { name: "Recharts", icon: "📊" },
  { name: "Gemini AI", icon: "✨" },
  { name: "Vercel", icon: "▲" },
  { name: "shadcn/ui", icon: "🎨" },
  { name: "Framer Motion", icon: "🎬" },
];

// Real data from the demo dashboard
const mauData = [
  { month: "Jan", value: 350 },
  { month: "Feb", value: 420 },
  { month: "Mar", value: 580 },
  { month: "Apr", value: 820 },
  { month: "May", value: 950 },
  { month: "Jun", value: 1150 },
  { month: "Jul", value: 1350 },
];

const maxMAU = 1400;

export default function HeroSection() {
  return (
    <header className="relative w-full min-h-[85vh] flex flex-col items-center justify-center px-8 overflow-hidden py-24">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 -z-10 opacity-30"
        style={{
          backgroundImage: "radial-gradient(#e5e7eb 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column - Text */}
        <div className="lg:col-span-7 z-10">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold text-foreground leading-[1.1] mb-8 tracking-tight"
          >
            Lumist Analytics:{" "}
            <span className="text-primary">From Gut-Feel to Data-Driven</span>{" "}
            Product Decisions.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-xl leading-relaxed mb-10"
          >
            A full-stack analytics platform I built to drive data-informed
            decisions for our SAT prep startup, tracking engagement, retention,
            conversions, and feature adoption across 1,500+ users.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="https://lumist-analytics-demo.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white px-8 py-4 rounded-full font-semibold text-sm hover:shadow-lg hover:shadow-primary/20 transition-all active:scale-95 inline-flex items-center gap-2 group"
            >
              Live Demo
              <span className="inline-block group-hover:translate-x-1 transition-transform">
                &rarr;
              </span>
            </a>
            <a
              href="#problem"
              className="border border-border bg-background px-8 py-4 rounded-full font-semibold text-sm hover:bg-muted transition-all active:scale-95"
            >
              View Process
            </a>
          </motion.div>

          {/* Tech stack with icons */}
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

        {/* Right Column - Dashboard Visual with gradient backdrop */}
        <motion.div
          initial={{ opacity: 0, x: 60, rotate: 2 }}
          animate={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="lg:col-span-5 relative"
        >
          {/* Pale gradient backdrop */}
          <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-br from-primary/8 via-blue-500/5 to-violet-500/8 border border-border/50 flex flex-col items-center justify-center p-6 gap-5">
            {/* MAU Chart Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="w-full bg-white dark:bg-zinc-900 rounded-xl shadow-lg p-5 border border-border/50"
            >
              <div className="mb-3">
                <h4 className="font-bold text-sm text-foreground">
                  Monthly Active Users
                </h4>
                <p className="text-[11px] text-blue-500 font-medium">
                  MAU trend over time
                </p>
              </div>

              {/* Chart area */}
              <div className="relative" style={{ height: "144px" }}>
                {/* Y-axis labels */}
                <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between text-[9px] text-muted-foreground font-medium w-8">
                  <span>1400</span>
                  <span>1050</span>
                  <span>700</span>
                  <span>350</span>
                  <span>0</span>
                </div>

                {/* Bars container */}
                <div className="absolute left-9 right-0 top-0 bottom-0 flex items-end gap-[6px] border-l border-b border-border/40 pl-2 pb-0.5">
                  {mauData.map((d, i) => {
                    const barHeight = Math.round(
                      (d.value / maxMAU) * 130
                    );
                    const isLast = i === mauData.length - 1;
                    return (
                      <div
                        key={d.month}
                        className="flex-1 flex flex-col items-center justify-end h-full"
                      >
                        <motion.span
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 1 + i * 0.08 }}
                          className={`text-[9px] font-bold mb-1 ${
                            isLast
                              ? "text-blue-500"
                              : "text-muted-foreground/70"
                          }`}
                        >
                          {d.value.toLocaleString()}
                        </motion.span>
                        <motion.div
                          initial={{ height: 0 }}
                          animate={{ height: barHeight }}
                          transition={{
                            duration: 0.6,
                            delay: 0.7 + i * 0.08,
                            ease: "easeOut",
                          }}
                          className={`w-full rounded-t-sm ${
                            isLast
                              ? "bg-blue-500"
                              : "bg-blue-300/70 dark:bg-blue-400/50"
                          }`}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* X-axis labels */}
              <div className="flex gap-[6px] ml-9 mt-1 pl-2">
                {mauData.map((d) => (
                  <span
                    key={d.month}
                    className="flex-1 text-center text-[9px] text-muted-foreground"
                  >
                    {d.month}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* KPI Cards Row */}
            <div className="w-full grid grid-cols-2 gap-4">
              {/* Average DAU Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                className="bg-white dark:bg-zinc-900 rounded-xl shadow-lg p-4 border border-border/50"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-[10px] text-muted-foreground font-medium uppercase tracking-wider">
                      Average DAU
                    </p>
                    <div className="flex items-baseline gap-2 mt-1">
                      <span className="text-2xl font-bold text-foreground">
                        137
                      </span>
                      <span className="text-[10px] font-semibold text-emerald-500 bg-emerald-50 dark:bg-emerald-900/30 px-1.5 py-0.5 rounded">
                        ↑ 0.6%
                      </span>
                    </div>
                    <p className="text-[9px] text-muted-foreground mt-1">
                      Daily active users on average
                    </p>
                  </div>
                  <div className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-blue-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                </div>
              </motion.div>

              {/* MRR Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.35, duration: 0.5 }}
                className="bg-white dark:bg-zinc-900 rounded-xl shadow-lg p-4 border border-border/50"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-[10px] text-muted-foreground font-medium uppercase tracking-wider">
                      MRR
                    </p>
                    <div className="flex items-baseline gap-2 mt-1">
                      <span className="text-2xl font-bold text-foreground">
                        $2.3K
                      </span>
                      <span className="text-[10px] font-semibold text-emerald-500 bg-emerald-50 dark:bg-emerald-900/30 px-1.5 py-0.5 rounded">
                        ↑ 23.8%
                      </span>
                    </div>
                    <p className="text-[9px] text-muted-foreground mt-1">
                      As of Jun 2025
                    </p>
                  </div>
                  <div className="w-8 h-8 rounded-lg bg-violet-50 dark:bg-violet-900/30 flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-violet-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                      />
                    </svg>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Floating Growth accent */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.5, duration: 0.4 }}
              className="bg-white dark:bg-zinc-900 px-4 py-2.5 rounded-full shadow-md border border-border/50 flex items-center gap-2"
            >
              <div className="w-7 h-7 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
                <svg
                  className="w-3.5 h-3.5 text-emerald-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
              </div>
              <span className="text-xs font-bold text-emerald-600">
                +4x Feature Usage
              </span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </header>
  );
}
