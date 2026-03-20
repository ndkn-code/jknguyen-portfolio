"use client";

import {
  FadeUp,
  FadeLeft,
  FadeRight,
  motion,
  staggerContainer,
  staggerItem,
} from "@/components/animations/motion";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const layers = [
  {
    layer: "Frontend",
    items: [
      { name: "Next.js 14+ (App Router)", detail: "TypeScript strict mode" },
      { name: "Tailwind CSS + shadcn/ui", detail: "Design system" },
      { name: "Framer Motion + Lottie", detail: "Animations" },
      { name: "Zustand", detail: "Client state" },
      { name: "next-intl", detail: "Vietnamese/English i18n" },
    ],
  },
  {
    layer: "AI & Speech",
    items: [
      { name: "Gemini 3.1 Lite Flash", detail: "Debate analysis & scoring" },
      { name: "Groq (Llama 3.3 70B)", detail: "AI coach with streaming" },
      { name: "Deepgram Nova-3", detail: "Real-time STT via WebSocket" },
      { name: "Deepgram Aura", detail: "TTS for AI rebuttals" },
    ],
  },
  {
    layer: "Backend & Data",
    items: [
      { name: "Supabase", detail: "Auth, PostgreSQL, Row-Level Security" },
      { name: "PostHog", detail: "Product analytics & events" },
      { name: "Vercel", detail: "Deployment & edge functions" },
    ],
  },
];

const dbTables = [
  "profiles",
  "debate_sessions",
  "courses",
  "lessons",
  "enrollments",
  "achievements",
  "chat_conversations",
  "activity_log",
  "daily_stats",
  "api_usage",
];

export default function ArchitectureSection() {
  return (
    <section className="py-16 sm:py-32 px-4 sm:px-8 bg-zinc-900 dark:bg-zinc-950 text-zinc-100">
      <div className="max-w-7xl mx-auto">
        <FadeUp>
          <h2 className="text-3xl font-bold mb-4 text-center">
            Technical Architecture
          </h2>
          <p className="text-zinc-400 text-center mb-16 max-w-2xl mx-auto">
            10+ Supabase tables, 4 AI services, real-time WebSocket
            transcription, and full bilingual support across every page.
          </p>
        </FadeUp>

        {/* Three-column layer breakdown */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {layers.map((layer, i) => (
            <motion.div key={i} variants={staggerItem}>
              <Card className="h-full bg-zinc-800/30 border-zinc-700">
                <CardHeader>
                  <CardTitle className="text-lg text-zinc-100">
                    {layer.layer}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {layer.items.map((item, j) => (
                      <div
                        key={j}
                        className="flex items-start gap-3 group"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0 group-hover:scale-150 transition-transform" />
                        <div>
                          <span className="text-sm font-medium text-zinc-200">
                            {item.name}
                          </span>
                          <p className="text-xs text-zinc-500">{item.detail}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Database schema mini-view */}
        <FadeUp delay={0.2}>
          <div className="bg-zinc-800/50 rounded-xl p-4 sm:p-8 border border-zinc-700">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xl">🗄️</span>
              <h3 className="font-bold text-lg text-zinc-200">
                Supabase Schema
              </h3>
              <span className="text-xs text-zinc-500 bg-zinc-700/50 px-2 py-1 rounded">
                {dbTables.length} tables
              </span>
            </div>

            {/* Code-style table list */}
            <div className="bg-zinc-900/80 rounded-lg p-4 sm:p-6 font-mono text-xs sm:text-sm overflow-x-auto border border-zinc-700/50">
              <div className="flex gap-2 mb-4">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
              </div>
              <pre className="text-blue-300">
                <code>
                  <span className="text-zinc-500">{"// Core tables powering the platform\n"}</span>
                  <span className="text-orange-400">{"const "}</span>
                  <span className="text-zinc-300">{"schema"}</span>
                  <span className="text-zinc-500">{" = "}</span>
                  <span className="text-zinc-300">{"{\n"}</span>
                  {dbTables.map((table, i) => (
                    <span key={i}>
                      {"  "}
                      <span className="text-green-400">{table}</span>
                      <span className="text-zinc-500">{":"}</span>
                      <span className="text-zinc-400">{" defineTable"}</span>
                      <span className="text-zinc-500">{"()"}</span>
                      <span className="text-zinc-600">{","}</span>
                      {i === 0 && <span className="text-zinc-600">{" // extends auth.users"}</span>}
                      {i === 1 && <span className="text-zinc-600">{" // transcript, scores, rounds JSONB"}</span>}
                      {i === 9 && <span className="text-zinc-600">{" // cost tracking per AI service"}</span>}
                      {"\n"}
                    </span>
                  ))}
                  <span className="text-zinc-300">{"}"}</span>
                </code>
              </pre>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
