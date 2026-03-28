"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const techStack = [
  { name: "OpenClaw", icon: "🦞" },
  { name: "NVIDIA NemoClaw", icon: "🛡️" },
  { name: "Gemini Flash", icon: "✨" },
  { name: "Telegram API", icon: "📱" },
  { name: "Obsidian MCP", icon: "🧠" },
  { name: "Python", icon: "🐍" },
  { name: "Docker", icon: "🐳" },
  { name: "Supabase", icon: "⚡" },
  { name: "GCP", icon: "☁️" },
];

function TypingDots() {
  return (
    <div className="flex gap-1 items-center px-4 py-3">
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className="w-2 h-2 rounded-full bg-zinc-400"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{
            duration: 1,
            repeat: Infinity,
            delay: i * 0.2,
          }}
        />
      ))}
    </div>
  );
}

export default function HeroSection() {
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
            Lumi the Secretary:{" "}
            <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
              Your Team&apos;s AI Brain
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-xl leading-relaxed mb-10"
          >
            An internal AI agent I built for the Lumist team. Lives in Telegram,
            answers business questions from 5 data sources, writes SEO-optimized
            blog posts, and remembers everything through an Obsidian vault brain
            &mdash; all inside a deny-by-default security sandbox.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#architecture"
              className="bg-cyan-500 text-white px-8 py-4 rounded-full font-semibold text-sm hover:shadow-lg hover:shadow-cyan-500/20 transition-all active:scale-95 inline-flex items-center gap-2 group"
            >
              See Architecture
              <span className="inline-block group-hover:translate-y-0.5 transition-transform">
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

        {/* Right Column - Telegram Chat Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative"
        >
          <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-br from-cyan-500/8 via-blue-500/5 to-violet-500/8 border border-border/50 flex flex-col p-5 gap-3">
            {/* Telegram-style chat header */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="bg-[#2AABEE] rounded-xl px-5 py-3 flex items-center gap-3"
            >
              <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
                <span className="text-lg">🤖</span>
              </div>
              <div>
                <h4 className="font-bold text-xs text-white">Lumi</h4>
                <p className="text-[10px] text-white/70 font-medium">
                  online &middot; Lumist AI Assistant
                </p>
              </div>
              <div className="ml-auto flex gap-1">
                <div className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse" />
              </div>
            </motion.div>

            {/* User message 1 */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="self-end max-w-[75%]"
            >
              <div className="bg-[#EFFDDE] dark:bg-emerald-900/40 px-4 py-2.5 rounded-2xl rounded-br-sm text-xs leading-relaxed text-foreground">
                How many signups today?
              </div>
              <p className="text-[9px] text-muted-foreground/60 text-right mt-1">
                2:34 PM
              </p>
            </motion.div>

            {/* Typing indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 1, 0] }}
              transition={{
                duration: 1.6,
                delay: 1.2,
                times: [0, 0.05, 0.65, 1],
              }}
              className="self-start max-w-[60%]"
            >
              <div className="bg-white dark:bg-zinc-800 rounded-2xl rounded-bl-sm shadow-sm border border-border/30">
                <TypingDots />
              </div>
            </motion.div>

            {/* Bot response 1 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2.0, duration: 0.5 }}
              className="self-start max-w-[80%]"
            >
              <div className="bg-white dark:bg-zinc-900 border border-border/50 shadow-sm px-4 py-3 rounded-2xl rounded-bl-sm text-xs leading-relaxed text-foreground space-y-1">
                <p className="font-semibold text-cyan-600">
                  📊 Signups Today: 23
                </p>
                <p className="text-muted-foreground">
                  vs Yesterday: +4 (↑ 21%)
                </p>
                <p className="text-muted-foreground">
                  Top Source: Organic Search (14)
                </p>
                <p className="text-muted-foreground">
                  Week total: 142 (↑ 18% WoW)
                </p>
              </div>
              <p className="text-[9px] text-muted-foreground/60 mt-1">
                2:34 PM &middot; via lumist-analytics
              </p>
            </motion.div>

            {/* User message 2 */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2.6, duration: 0.5 }}
              className="self-end max-w-[75%]"
            >
              <div className="bg-[#EFFDDE] dark:bg-emerald-900/40 px-4 py-2.5 rounded-2xl rounded-br-sm text-xs leading-relaxed text-foreground">
                /blog SAT Math Tips for Beginners
              </div>
              <p className="text-[9px] text-muted-foreground/60 text-right mt-1">
                2:35 PM
              </p>
            </motion.div>

            {/* Bot response 2 - blog */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 3.2, duration: 0.5 }}
              className="self-start max-w-[85%]"
            >
              <div className="bg-white dark:bg-zinc-900 border border-border/50 shadow-sm px-4 py-3 rounded-2xl rounded-bl-sm text-xs leading-relaxed text-foreground space-y-1">
                <p className="font-semibold text-amber-600">
                  ✍️ Blog Published as Draft
                </p>
                <p className="text-muted-foreground">
                  &ldquo;Top 7 SAT Math Strategies for Beginners&rdquo;
                </p>
                <p className="text-muted-foreground">
                  5 sections &middot; 1,820 words &middot; EN/VI keywords
                </p>
                <p className="text-muted-foreground">
                  Source: Obsidian vault + web research
                </p>
              </div>
              <p className="text-[9px] text-muted-foreground/60 mt-1">
                2:36 PM &middot; via lumist-blog + obsidian-vault
              </p>
            </motion.div>

            {/* Floating security pill */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 3.6, duration: 0.4 }}
              className="self-center mt-auto"
            >
              <div className="bg-white dark:bg-zinc-900 px-4 py-2.5 rounded-full shadow-md border border-border/50 flex items-center gap-2">
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
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
                <span className="text-xs font-bold text-emerald-600">
                  Deny-by-Default Sandbox
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </header>
  );
}
