"use client";

import {
  FadeUp,
  motion,
  staggerContainer,
  staggerItem,
} from "@/components/animations/motion";

const featureGroups = [
  {
    category: "Core Experience",
    features: [
      {
        icon: "🎙️",
        title: "Real-time Transcription",
        description:
          "Deepgram Nova-3 via WebSocket streams interim and final transcriptions as students speak. No lag, no waiting.",
      },
      {
        icon: "🧠",
        title: "AI Debate Analysis",
        description:
          "Gemini 3.1 Lite Flash scores debates across 12 sub-categories with detailed written feedback and improvement suggestions.",
      },
      {
        icon: "🔊",
        title: "AI Rebuttal with TTS",
        description:
          "In full-round mode, the AI argues back using Deepgram Aura text-to-speech. 12 voice options, auto-play after streaming.",
      },
      {
        icon: "💬",
        title: "AI Coach Chat",
        description:
          "Groq-powered streaming chat. Students discuss strategies, review past sessions, or get topic research help from a dedicated coach.",
      },
    ],
  },
  {
    category: "Platform Features",
    features: [
      {
        icon: "🎮",
        title: "Gamification System",
        description:
          "XP, levels, daily streaks, and 16 unlockable achievements with selectable display titles. Keeps students motivated.",
      },
      {
        icon: "🇻🇳",
        title: "Vietnamese i18n",
        description:
          "Full bilingual support via next-intl. Gen Z Vietnamese tone with casual slang. Debate content stays in English.",
      },
      {
        icon: "📚",
        title: "Course System",
        description:
          "Structured learning with modules, lessons (article/video/practice/quiz), enrollments, and progress tracking.",
      },
      {
        icon: "📊",
        title: "Analytics & Tracking",
        description:
          "PostHog for behavior analytics, weekly activity charts, session history, and API usage cost tracking per service.",
      },
    ],
  },
  {
    category: "Engineering",
    features: [
      {
        icon: "🎨",
        title: "Lottie Animations",
        description:
          "10+ Lottie animations for onboarding, loading states, achievements, level-ups, and chat typing indicators.",
      },
      {
        icon: "⚡",
        title: "Performance Optimized",
        description:
          "Parallel Supabase queries, selective revalidation, loading skeletons, middleware session optimization, ISR for courses.",
      },
      {
        icon: "🔐",
        title: "Auth & Security",
        description:
          "Supabase Auth with Row-Level Security policies. Protected routes via middleware. Role-based access for students and teachers.",
      },
      {
        icon: "📱",
        title: "Responsive Design",
        description:
          "Mobile-first with bottom sheets, drawer sidebar, and dvh viewport fixes. Works seamlessly across all devices.",
      },
    ],
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-32 px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <FadeUp>
          <h2 className="text-3xl font-bold mb-4 text-center">
            Everything I Built
          </h2>
          <p className="text-muted-foreground text-center mb-20 max-w-2xl mx-auto">
            From real-time speech processing to gamification, every feature
            was designed, built, and shipped by me.
          </p>
        </FadeUp>

        <div className="space-y-20">
          {featureGroups.map((group, gi) => (
            <div key={gi}>
              <FadeUp>
                <h3 className="text-sm font-bold text-primary uppercase tracking-widest mb-8">
                  {group.category}
                </h3>
              </FadeUp>

              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
              >
                {group.features.map((feature, i) => (
                  <motion.div
                    key={i}
                    variants={staggerItem}
                    className="group bg-muted/50 rounded-2xl p-6 border border-border hover:border-primary/30 hover:shadow-lg transition-all"
                  >
                    <span className="text-2xl mb-4 block">{feature.icon}</span>
                    <h4 className="font-bold text-base mb-2 group-hover:text-primary transition-colors">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
