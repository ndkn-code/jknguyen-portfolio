"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

const techStack = [
  { name: "n8n", icon: "🔗" },
  { name: "Gemini AI", icon: "✨" },
  { name: "Supabase Vector", icon: "⚡" },
  { name: "Zalo API", icon: "💬" },
  { name: "Discord Bot", icon: "🤖" },
  { name: "PostgreSQL", icon: "🗄️" },
];

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
            AI Customer Support:{" "}
            <span className="text-primary">Smart Routing, Real Conversations</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-xl leading-relaxed mb-10"
          >
            A multi-platform RAG chatbot I built to handle support across Zalo
            and Discord, with intelligent sales funnel tracking, intent
            classification, and a 7-trigger escalation system for 1,500+ users.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#how-it-works"
              className="bg-primary text-white px-8 py-4 rounded-full font-semibold text-sm hover:shadow-lg hover:shadow-primary/20 transition-all active:scale-95 inline-flex items-center gap-2 group"
            >
              See How It Works
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

        {/* Right Column - Chat conversation visual */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative"
        >
          <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-br from-primary/8 via-indigo-500/5 to-violet-500/8 border border-border/50 flex flex-col p-6 gap-4">
            {/* Chat header */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="bg-white dark:bg-zinc-900 rounded-xl shadow-lg px-5 py-3 border border-border/50 flex items-center gap-3"
            >
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-sm">🤖</span>
              </div>
              <div>
                <h4 className="font-bold text-xs text-foreground">Lumist Support Bot</h4>
                <p className="text-[10px] text-emerald-500 font-medium">Online · Zalo + Discord</p>
              </div>
              <div className="ml-auto flex gap-1">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              </div>
            </motion.div>

            {/* User message */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="self-end max-w-[75%]"
            >
              <div className="bg-primary text-white px-4 py-3 rounded-2xl rounded-br-sm text-xs leading-relaxed">
                Hi, how much does the SAT prep course cost? I have a test in 4 months.
              </div>
              <p className="text-[9px] text-muted-foreground/60 text-right mt-1">2:34 PM</p>
            </motion.div>

            {/* Intent classification pill */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.0, duration: 0.4 }}
              className="self-center"
            >
              <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 px-3 py-1 rounded-full text-[9px] font-medium text-amber-700 dark:text-amber-400 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                Intent: Pricing · Stage: Discovery → Gap Building
              </div>
            </motion.div>

            {/* Bot response */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="self-start max-w-[80%]"
            >
              <div className="bg-white dark:bg-zinc-900 border border-border/50 shadow-sm px-4 py-3 rounded-2xl rounded-bl-sm text-xs leading-relaxed text-foreground">
                Great question! With your test in 4 months, our intensive program would be a perfect fit. We offer 1-on-1 tutoring at $45/hr or group classes at $25/session. Would you like to try a free trial class?
              </div>
              <p className="text-[9px] text-muted-foreground/60 mt-1">2:34 PM · via RAG</p>
            </motion.div>

            {/* Sales funnel tracker mini card */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.5 }}
              className="bg-white dark:bg-zinc-900 rounded-xl shadow-lg p-4 border border-border/50"
            >
              <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                Sales Funnel Tracker
              </p>
              <div className="flex gap-1.5">
                {["Discovery", "Gap Building", "Transition", "Pitch", "Closing"].map((stage, i) => (
                  <div key={stage} className="flex-1 flex flex-col items-center">
                    <div
                      className={`w-full h-1.5 rounded-full ${
                        i <= 1 ? "bg-primary" : "bg-border"
                      }`}
                    />
                    <span className={`text-[7px] mt-1 ${i <= 1 ? "font-bold text-primary" : "text-muted-foreground/50"}`}>
                      {stage}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Escalation pill */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.8, duration: 0.4 }}
              className="self-center"
            >
              <div className="bg-white dark:bg-zinc-900 px-4 py-2.5 rounded-full shadow-md border border-border/50 flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                  <svg className="w-3.5 h-3.5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <span className="text-xs font-bold text-blue-600">
                  7 Escalation Triggers Active
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </header>
  );
}
