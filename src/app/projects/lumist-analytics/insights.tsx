"use client";

import {
  FadeUp,
  FadeLeft,
  FadeRight,
  ScaleIn,
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const discoveries = [
  {
    icon: "💡",
    title: "Brain Teaser Was #1",
    description:
      '"Question of the Day" had the highest engagement. Vietnamese students preferred short learning sessions, which contradicted our assumption about intensive prep.',
    color: "bg-emerald-100 dark:bg-emerald-900/30",
  },
  {
    icon: "🐛",
    title: "Session Error Log Was Broken",
    description:
      "Analytics revealed the error tracking feature wasn't being used. Investigation showed UX issues preventing students from logging mistakes.",
    color: "bg-red-100 dark:bg-red-900/30",
  },
  {
    icon: "📅",
    title: "Weekend + Monday Pattern",
    description:
      "Data showed peak usage on Sat/Sun/Monday. We shifted content and notifications to those days, increasing engagement significantly.",
    color: "bg-blue-100 dark:bg-blue-900/30",
  },
];

const moduleCategories = {
  growth: [
    {
      icon: "📈",
      title: "User Engagement (DAU/WAU)",
      description: "DAU/MAU tracking, weekly patterns, AI-powered insights",
      question: '"Are students actually coming back?"',
    },
    {
      icon: "🔄",
      title: "Cohort Retention",
      description: "D1/D7/D30 cohorts, retention heatmap, SAT cycle impact",
      question: '"Are newer users churning faster?"',
    },
    {
      icon: "🔽",
      title: "Conversion Funnel",
      description:
        "Sankey diagram visualization, referral tracking, cohort conversions",
      question: '"Where do we lose potential paying users?"',
    },
  ],
  product: [
    {
      icon: "👆",
      title: "Feature Adoption",
      description: "Usage trends by feature, adoption curves, power users",
      question: '"Which features justify investment?"',
    },
    {
      icon: "💰",
      title: "Revenue & Churn",
      description: "MRR tracking, subscriber status, at-risk user alerts",
      question: null,
    },
    {
      icon: "📱",
      title: "Social Media Analytics",
      description:
        "Facebook/Threads performance metrics, audience demographics",
      question: null,
    },
  ],
  platform: [
    {
      icon: "🔒",
      title: "Admin Panel",
      description:
        "Role-based access control, team invite system, audit logs",
      question: null,
    },
  ],
};

const allModules = [
  ...moduleCategories.growth,
  ...moduleCategories.product,
  ...moduleCategories.platform,
];

export default function InsightsSection() {
  return (
    <section className="py-16 sm:py-32 px-4 sm:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto space-y-32">
        {/* User Insights */}
        <div className="flex flex-col md:flex-row-reverse gap-16 items-center">
          <FadeRight className="md:w-1/2">
            <h3 className="text-3xl font-bold mb-6">User Insights</h3>
            <p className="text-lg text-muted-foreground leading-loose mb-8">
              Through product analytics and direct user research, we identified
              key behavioral patterns that contradicted our assumptions. The data
              told a completely different story and reshaped our entire product
              strategy.
            </p>
            <ul className="space-y-4">
              {discoveries.map((d, i) => (
                <FadeUp key={i} delay={0.1 * i}>
                  <li className="flex items-start gap-4">
                    <span className="text-primary mt-1 text-lg">✓</span>
                    <div>
                      <span className="font-semibold">{d.title}</span>
                      <p className="text-sm text-muted-foreground mt-1">
                        {d.description}
                      </p>
                    </div>
                  </li>
                </FadeUp>
              ))}
            </ul>
          </FadeRight>

          <FadeLeft className="md:w-1/2">
            {/* Insight cards grid */}
            <div className="grid grid-cols-2 gap-4">
              {discoveries.slice(0, 2).map((d, i) => (
                <ScaleIn key={i} delay={0.2 + i * 0.15}>
                  <div
                    className={`${d.color} rounded-xl p-6 ${
                      i === 1 ? "mt-8" : ""
                    }`}
                  >
                    <span className="text-3xl mb-3 block">{d.icon}</span>
                    <h4 className="font-bold text-sm">{d.title}</h4>
                  </div>
                </ScaleIn>
              ))}
            </div>
          </FadeLeft>
        </div>

        {/* Solution Card */}
        <FadeUp>
          <div className="bg-white dark:bg-card p-12 md:p-20 rounded-xl shadow-sm border border-border relative overflow-hidden">
            <div className="relative z-10 max-w-3xl">
              <h3 className="text-4xl font-bold mb-8">
                The Solution: 7-Module Analytics Platform
              </h3>
              <p className="text-xl text-muted-foreground leading-relaxed mb-10">
                I designed and built a comprehensive analytics dashboard with 7
                modules covering every aspect of our product performance.
                From user engagement to revenue tracking, each module is
                powered by Gemini AI insights.
              </p>
              <a
                href="https://lumist-analytics-demo.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-white px-8 py-4 rounded-full text-sm font-semibold hover:opacity-90 transition-all active:scale-95 inline-flex items-center gap-2 group"
              >
                Explore the Live Dashboard
                <span className="inline-block group-hover:translate-x-1 transition-transform">
                  ↗
                </span>
              </a>
            </div>
            {/* Abstract background shape */}
            <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          </div>
        </FadeUp>

        {/* Modules Grid with Tabs */}
        <div>
          <FadeUp>
            <h3 className="text-3xl font-bold mb-4 text-center">
              What I Built
            </h3>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              A comprehensive analytics platform with 7 modules covering every
              aspect of product performance.
            </p>
          </FadeUp>

          <FadeUp delay={0.1}>
            <Tabs defaultValue="all" className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList>
                  <TabsTrigger value="all">All Modules</TabsTrigger>
                  <TabsTrigger value="growth">Growth</TabsTrigger>
                  <TabsTrigger value="product">Product</TabsTrigger>
                  <TabsTrigger value="platform">Platform</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="all">
                <motion.div
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-100px" }}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                  {allModules.map((mod, i) => (
                    <ModuleCard key={i} mod={mod} />
                  ))}
                </motion.div>
              </TabsContent>

              <TabsContent value="growth">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {moduleCategories.growth.map((mod, i) => (
                    <ModuleCardStatic key={i} mod={mod} />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="product">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {moduleCategories.product.map((mod, i) => (
                    <ModuleCardStatic key={i} mod={mod} />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="platform">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {moduleCategories.platform.map((mod, i) => (
                    <ModuleCardStatic key={i} mod={mod} />
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

function ModuleCard({
  mod,
}: {
  mod: { icon: string; title: string; description: string; question: string | null };
}) {
  return (
    <motion.div variants={staggerItem}>
      <Card className="h-full hover:shadow-lg hover:border-primary/30 transition-all group">
        <CardHeader className="pb-3">
          <span className="text-2xl mb-2 block">{mod.icon}</span>
          <CardTitle className="text-lg group-hover:text-primary transition-colors">
            {mod.title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-2">
            {mod.description}
          </p>
          {mod.question && (
            <p className="text-xs text-primary font-medium italic">
              {mod.question}
            </p>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}

function ModuleCardStatic({
  mod,
}: {
  mod: { icon: string; title: string; description: string; question: string | null };
}) {
  return (
    <Card className="h-full hover:shadow-lg hover:border-primary/30 transition-all group">
      <CardHeader className="pb-3">
        <span className="text-2xl mb-2 block">{mod.icon}</span>
        <CardTitle className="text-lg group-hover:text-primary transition-colors">
          {mod.title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-2">
          {mod.description}
        </p>
        {mod.question && (
          <p className="text-xs text-primary font-medium italic">
            {mod.question}
          </p>
        )}
      </CardContent>
    </Card>
  );
}
