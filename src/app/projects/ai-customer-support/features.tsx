"use client";

import {
  FadeUp,
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

const features = [
  {
    icon: "🏷️",
    title: "Intent Classification",
    description:
      "Gemini classifies messages into Pricing, Features, Refund, FAQ, or General to route context retrieval.",
    color: "bg-blue-100 dark:bg-blue-900/30",
  },
  {
    icon: "🔍",
    title: "Hybrid RAG System",
    description:
      "Full markdown docs for critical intents (pricing, refund), vector search for general questions.",
    color: "bg-emerald-100 dark:bg-emerald-900/30",
  },
  {
    icon: "📈",
    title: "Sales Funnel Tracking",
    description:
      "Tracks stages: Discovery → Gap Building → Transition → Pitch → Closing. Extracts pain points and objections.",
    color: "bg-violet-100 dark:bg-violet-900/30",
  },
  {
    icon: "🚨",
    title: "7 Escalation Triggers",
    description:
      "Explicit request, B2B inquiry, high-value lead, negative sentiment, refund request, loop detection, low AI confidence.",
    color: "bg-orange-100 dark:bg-orange-900/30",
  },
  {
    icon: "🔄",
    title: "Bi-directional Routing",
    description:
      "Agents reply via Discord, messages automatically route back to the user's original platform (Zalo or Discord).",
    color: "bg-pink-100 dark:bg-pink-900/30",
  },
  {
    icon: "🔇",
    title: "User Muting",
    description:
      "Tag users to pause AI responses for 6 hours during manual handling, preventing bot interference.",
    color: "bg-gray-100 dark:bg-gray-800/50",
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-16 sm:py-32 px-4 sm:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <FadeUp>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Key Features</h2>
            <p className="text-muted-foreground text-lg">
              Six core capabilities that transform scattered support into an
              intelligent pipeline.
            </p>
          </div>
        </FadeUp>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, i) => (
            <motion.div key={i} variants={staggerItem}>
              <Card className="h-full hover:shadow-lg hover:border-primary/30 transition-all group">
                <CardHeader className="pb-3">
                  <div className={`w-12 h-12 rounded-xl ${feature.color} flex items-center justify-center mb-2`}>
                    <span className="text-xl">{feature.icon}</span>
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
