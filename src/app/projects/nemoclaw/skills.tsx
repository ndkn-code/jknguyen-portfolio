"use client";

import {
  FadeUp,
  motion,
  staggerContainer,
  staggerItem,
} from "@/components/animations/motion";
import { Badge } from "@/components/ui/badge";

const skills = [
  {
    icon: "📊",
    name: "Analytics",
    description:
      "Query signups, DAU, MAU, retention cohorts, and acquisition funnels from Supabase.",
    exampleQuery: "How many signups this week?",
    exampleResponse: "This week: 142 signups (↑ 18% vs last week)",
    source: "Supabase",
    sourceColor: "text-emerald-500 bg-emerald-500/10",
  },
  {
    icon: "📱",
    name: "Social",
    description:
      "Track Facebook, Threads, and Instagram engagement, reach, and content performance.",
    exampleQuery: "What's our social reach?",
    exampleResponse: "7d: 12.4K reach, 2.3K likes, 4.1% engagement",
    source: "Supabase",
    sourceColor: "text-emerald-500 bg-emerald-500/10",
  },
  {
    icon: "🎧",
    name: "Support",
    description:
      "Monitor support ticket volume, response times, escalations, and resolution rates.",
    exampleQuery: "Any open tickets?",
    exampleResponse: "3 open tickets, avg response: 2.1 hrs",
    source: "Supabase",
    sourceColor: "text-emerald-500 bg-emerald-500/10",
  },
  {
    icon: "🐙",
    name: "GitHub",
    description:
      "Check repo activity, commits, pull requests, and deployment status.",
    exampleQuery: "Any new PRs today?",
    exampleResponse: "2 open: #142 (auth fix), #143 (landing page)",
    source: "GitHub API",
    sourceColor: "text-zinc-400 bg-zinc-400/10",
  },
  {
    icon: "📐",
    name: "Linear",
    description:
      "Query sprint progress, issue status, cycle metrics, and team workload.",
    exampleQuery: "Sprint progress?",
    exampleResponse: "Sprint 12: 8/14 done (57%), 3 in progress",
    source: "Linear GraphQL",
    sourceColor: "text-indigo-500 bg-indigo-500/10",
  },
  {
    icon: "🔍",
    name: "PostHog",
    description:
      "Pull pageviews, unique visitors, event data, and Core Web Vitals.",
    exampleQuery: "Website traffic this month?",
    exampleResponse: "30d: 8.2K visitors, 24K pageviews, LCP 1.8s",
    source: "PostHog API",
    sourceColor: "text-orange-500 bg-orange-500/10",
  },
  {
    icon: "✍️",
    name: "Blog",
    description:
      "Research topics, write SEO-optimized posts (EN/VI), and publish drafts to the CMS.",
    exampleQuery: "/blog SAT vocab strategies",
    exampleResponse: 'Draft saved: "SAT Vocabulary Guide" (5 sections, 1.8K words)',
    source: "Vault + Supabase",
    sourceColor: "text-amber-500 bg-amber-500/10",
    isWrite: true,
  },
  {
    icon: "📓",
    name: "Obsidian Vault",
    description:
      "Search, read, and write to the shared knowledge vault via 14 MCP tools. Lumi's persistent brain.",
    exampleQuery: "What features does Lumist have?",
    exampleResponse: "Found in PRODUCT.md: 21 features including...",
    source: "mcpvault MCP",
    sourceColor: "text-amber-500 bg-amber-500/10",
    isVault: true,
  },
];

export default function SkillsSection() {
  return (
    <section className="py-16 sm:py-32 px-4 sm:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <FadeUp>
          <h2 className="text-3xl font-bold mb-4 text-center">
            8 Skill Modules
          </h2>
          <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
            Each skill is a self-contained module with its own tools, data
            sources, and response formatting. Lumi routes every question to the
            right skill automatically.
          </p>
        </FadeUp>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {skills.map((skill) => (
            <motion.div key={skill.name} variants={staggerItem}>
              <div
                className={`h-full bg-card rounded-xl border shadow-sm overflow-hidden flex flex-col ${
                  skill.isWrite
                    ? "border-amber-500/30 ring-1 ring-amber-500/10"
                    : skill.isVault
                      ? "border-amber-500/30 ring-1 ring-amber-500/10"
                      : "border-border"
                }`}
              >
                {/* Header */}
                <div className="p-5 pb-3">
                  <div className="flex items-start justify-between mb-3">
                    <span className="text-2xl">{skill.icon}</span>
                    <div className="flex gap-1.5">
                      {skill.isWrite && (
                        <span className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-600">
                          Write
                        </span>
                      )}
                      {skill.isVault && (
                        <span className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-600">
                          Brain
                        </span>
                      )}
                    </div>
                  </div>
                  <h3 className="font-bold text-base mb-1.5">{skill.name}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {skill.description}
                  </p>
                </div>

                {/* Mini Telegram exchange */}
                <div className="px-5 pb-4 mt-auto">
                  <div className="border-t border-border pt-3 space-y-2">
                    {/* User query */}
                    <div className="flex justify-end">
                      <div className="bg-[#EFFDDE] dark:bg-emerald-900/30 px-3 py-1.5 rounded-xl rounded-br-sm text-[11px] text-foreground max-w-[85%]">
                        {skill.exampleQuery}
                      </div>
                    </div>
                    {/* Bot response */}
                    <div className="flex justify-start">
                      <div className="bg-muted px-3 py-1.5 rounded-xl rounded-bl-sm text-[11px] text-muted-foreground max-w-[90%]">
                        {skill.exampleResponse}
                      </div>
                    </div>
                  </div>

                  {/* Source badge */}
                  <div className="mt-3">
                    <Badge
                      variant="outline"
                      className={`text-[10px] px-2 py-0.5 ${skill.sourceColor}`}
                    >
                      {skill.source}
                    </Badge>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
