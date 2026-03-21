"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

const techStack = [
  { name: "Next.js", icon: "▲" },
  { name: "TypeScript", icon: "🔷" },
  { name: "Supabase", icon: "⚡" },
  { name: "Gemini AI", icon: "✨" },
  { name: "Groq", icon: "🧠" },
  { name: "Deepgram", icon: "🎙️" },
  { name: "Framer Motion", icon: "🎬" },
  { name: "PostHog", icon: "📊" },
  { name: "Zustand", icon: "🐻" },
  { name: "shadcn/ui", icon: "🎨" },
];

export default function HeroSection() {
  return (
    <header className="relative w-full min-h-[90vh] flex flex-col items-center justify-center px-4 sm:px-8 overflow-hidden py-16 sm:py-24">
      {/* Gradient background instead of dots - unique to this page */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-violet-500/5" />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "radial-gradient(#e5e7eb 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      {/* Centered hero - unique layout for this flagship project */}
      <div className="max-w-5xl w-full text-center z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm font-semibold text-primary mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          Live at debate-lab.vercel.app
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-foreground leading-[1.05] mb-6 sm:mb-8 tracking-tight"
        >
          DebateLab:{" "}
          <span className="bg-gradient-to-r from-primary to-violet-500 bg-clip-text text-transparent">
            AI-Powered Debate Practice
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8 sm:mb-10"
        >
          A full-stack edtech platform where Vietnamese high school students
          practice debate in English. Real-time speech transcription, AI-powered
          feedback and scoring, a streaming AI coach, gamification with XP and
          achievements, and full Vietnamese localization.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <a
            href="https://debate-lab.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-white px-8 py-4 rounded-full font-semibold text-sm hover:shadow-lg hover:shadow-primary/20 transition-all active:scale-95 inline-flex items-center gap-2 group"
          >
            Try DebateLab
            <span className="inline-block group-hover:translate-x-1 transition-transform">
              &rarr;
            </span>
          </a>
          <a
            href="#why"
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
          className="flex flex-wrap justify-center gap-2 mb-16"
        >
          {techStack.map((tech, i) => (
            <motion.span
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.5 + i * 0.04 }}
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

      {/* Full-width browser frame screenshot */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="max-w-6xl w-full mx-auto"
      >
        <div className="bg-white dark:bg-zinc-900 rounded-xl shadow-2xl border border-border overflow-hidden">
          {/* Browser chrome */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-muted/30">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-400/60" />
              <div className="w-3 h-3 rounded-full bg-yellow-400/60" />
              <div className="w-3 h-3 rounded-full bg-green-400/60" />
            </div>
            <div className="flex-1 flex justify-center">
              <div className="px-4 py-1 bg-background rounded-md text-xs text-muted-foreground border border-border">
                debate-lab.vercel.app
              </div>
            </div>
          </div>
          {/* Screenshot */}
          <Image
            src="/images/debatelab-dashboard.png"
            alt="DebateLab dashboard showing weekly activity, streak, XP progress, and recent practice sessions"
            width={1920}
            height={1080}
            quality={95}
            className="w-full h-auto"
            priority
          />
        </div>
      </motion.div>
    </header>
  );
}
