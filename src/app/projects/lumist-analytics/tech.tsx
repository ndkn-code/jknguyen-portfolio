"use client";

import {
  FadeLeft,
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

const techCards = [
  {
    icon: "🗄️",
    title: "Triple Supabase Architecture",
    description:
      "Separate schemas for analytics, auth, and social data for clean separation of concerns.",
  },
  {
    icon: "🧠",
    title: "Gemini 2.0 Flash AI",
    description:
      "AI-generated analysis with 1-hour caching for cost optimization.",
  },
  {
    icon: "⚡",
    title: "Edge Functions",
    description:
      "SAT seat finder automation, transactional emails via Supabase Edge.",
  },
  {
    icon: "🔐",
    title: "Google OAuth + RBAC",
    description:
      "Role-based route protection with admin, analyst, and viewer roles.",
  },
];

export default function TechSection() {
  return (
    <section className="py-16 sm:py-32 px-4 sm:px-8 bg-zinc-900 dark:bg-zinc-950 text-zinc-100">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left column */}
          <FadeLeft className="lg:w-1/2">
            <h2 className="text-3xl font-bold mb-6">
              Technical Architecture
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed mb-8">
              Built on a modern stack designed for scale and real-time
              performance. The platform combines Supabase&apos;s PostgreSQL
              backbone with edge computing and AI-powered analytics.
            </p>

            {/* Code block */}
            <div className="bg-zinc-800/50 rounded-xl p-8 font-mono text-sm overflow-x-auto border border-zinc-700">
              <div className="flex gap-2 mb-4">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
              </div>
              <pre className="text-blue-300">
                <code>
                  {`// Supabase Analytics Query Layer
const `}
                  <span className="text-orange-400">getRetentionCohort</span>
                  {` = async (range: DateRange) => {
  const { data } = await supabase
    .from('`}
                  <span className="text-green-400">user_sessions</span>
                  {`')
    .select('user_id, created_at')
    .gte('created_at', range.start)
    .lte('created_at', range.end);

  `}
                  <span className="text-zinc-500">
                    // AI-powered insight generation
                  </span>
                  {`
  const insight = await gemini.analyze({
    type: '`}
                  <span className="text-green-400">cohort_retention</span>
                  {`',
    data: transformCohorts(data),
    cache: '`}
                  <span className="text-green-400">1h</span>
                  {`'
  });

  return { cohorts: data, insight };
};`}
                </code>
              </pre>
            </div>
          </FadeLeft>

          {/* Right column - Tech cards */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {techCards.map((card, i) => (
              <motion.div key={i} variants={staggerItem}>
                <Card className="h-full bg-zinc-800/30 border-zinc-700 hover:border-primary/50 transition-all">
                  <CardHeader className="pb-3">
                    <span className="text-2xl mb-2 block">{card.icon}</span>
                    <CardTitle className="text-lg text-zinc-100">
                      {card.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-zinc-400">{card.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
