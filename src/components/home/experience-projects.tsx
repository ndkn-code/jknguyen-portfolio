"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FadeUp } from "@/components/animations/motion";

const experiences = [
  {
    title: "Co-Founder & COO at Lumist.ai",
    period: "Jan 2024 - Present · Remote · Full time",
    active: true,
  },
  {
    title: "ERP Analyst at USF IT",
    period: "2022 - 2025 · Part time → Full time",
    active: false,
  },
  {
    title: "Data Analytics Intern at VNG Corporation",
    period: "Jun 2024 - Aug 2024 · Ho Chi Minh City · Internship",
    active: false,
  },
  {
    title: "Risk Advisory Intern at Deloitte Vietnam",
    period: "May 2023 - Jul 2023 · Hanoi · Internship",
    active: false,
  },
];

const featuredProject = {
  href: "/projects/debatelab",
  title: "DebateLab",
  badge: "Flagship",
  badgeColor:
    "bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary",
  description:
    "AI-powered solo debate practice platform. Real-time speech transcription, Gemini-powered scoring, streaming AI coach, gamification, and full Vietnamese localization.",
  techHighlights: ["Next.js", "Gemini AI", "Deepgram", "Supabase", "Groq"],
  image: "/images/debatelab-dashboard.jpg",
};

const projects = [
  {
    href: "/projects/lumist-analytics",
    icon: "📊",
    badge: "Launched",
    badgeColor:
      "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
    title: "Lumist Analytics Dashboard",
    description:
      "Full-stack analytics platform tracking DAU, retention cohorts, acquisition funnels, and feature adoption.",
  },
  {
    href: "/projects/ai-customer-support",
    icon: "🤖",
    badge: "Technical",
    badgeColor:
      "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400",
    title: "AI Customer Support System",
    description:
      "Multi-platform RAG chatbot with sales funnel tracking, intent classification, and 7-trigger escalation.",
  },
  {
    href: "/projects/lead-scoring-crm",
    icon: "✨",
    badge: "Automation",
    badgeColor:
      "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400",
    title: "Lead Scoring CRM",
    description:
      "Automated lead scoring pipeline with Jira integration, multi-factor algorithm, and team accountability.",
  },
  {
    href: "#",
    icon: "🎓",
    badge: "Data",
    badgeColor:
      "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
    title: "Class Feedback Pipeline",
    description:
      "Automated student feedback from Zoom polls → n8n → Google Sheets → Looker dashboard.",
    disabled: true,
  },
];

export default function ExperienceAndProjects() {
  return (
    <section className="space-y-6">
      {/* Top Row: Experience + Featured Project */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* My Experience - Left Column */}
        <FadeUp className="lg:w-[340px] flex-shrink-0">
          <div className="bg-card p-8 rounded-3xl shadow-sm border border-border h-full">
            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">
              My Experience
            </span>
            <div className="mt-8 space-y-8">
              {experiences.map((exp, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-2.5 h-2.5 rounded-full ${
                        exp.active
                          ? "bg-primary"
                          : "bg-gray-300 dark:bg-gray-600"
                      }`}
                    />
                    {i < experiences.length - 1 && (
                      <div className="w-0.5 h-full bg-border mt-2" />
                    )}
                  </div>
                  <div className="pb-2">
                    <h3 className="font-bold text-base leading-tight">
                      {exp.title}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-1.5">
                      {exp.period}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 pt-6 border-t border-border">
              <a
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
                href="/ndkn_resume_APM.pdf"
                target="_blank"
              >
                View Full Resume →
              </a>
            </div>
          </div>
        </FadeUp>

        {/* Featured Project - DebateLab Hero Card */}
        <FadeUp delay={0.15} className="flex-grow">
          <Link href={featuredProject.href}>
            <motion.div
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
              className="group bg-card rounded-3xl shadow-sm border border-border overflow-hidden cursor-pointer hover:border-primary/30 hover:shadow-md transition-all h-full flex flex-col"
            >
              {/* Screenshot preview */}
              <div className="relative overflow-hidden">
                <div className="absolute top-4 left-4 z-10">
                  <span
                    className={`px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide ${featuredProject.badgeColor} backdrop-blur-sm`}
                  >
                    {featuredProject.badge}
                  </span>
                </div>
                <Image
                  src={featuredProject.image}
                  alt="DebateLab dashboard"
                  width={800}
                  height={400}
                  className="w-full h-48 md:h-56 object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6 flex-grow flex flex-col">
                <h4 className="font-bold text-2xl mb-2 group-hover:text-primary transition-colors">
                  {featuredProject.title}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-grow">
                  {featuredProject.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {featuredProject.techHighlights.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 bg-muted rounded text-[10px] font-medium text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <span className="text-sm font-semibold text-primary flex items-center gap-1">
                    View Case Study
                    <span className="group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </span>
                </div>
              </div>
            </motion.div>
          </Link>
        </FadeUp>
      </div>

      {/* Bottom Row: Other Projects Grid */}
      <FadeUp delay={0.25}>
        <div className="bg-card p-8 rounded-3xl shadow-sm border border-border">
          <span className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">
            More Projects
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-8">
            {projects.map((project, i) => {
              const ProjectCard = (
                <motion.div
                  whileHover={!project.disabled ? { y: -3 } : {}}
                  transition={{ duration: 0.2 }}
                  className={`group bg-muted/50 rounded-2xl p-5 border border-border hover:border-primary/30 transition-all hover:shadow-md h-full flex flex-col ${
                    project.disabled ? "cursor-default" : "cursor-pointer"
                  }`}
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-11 h-11 rounded-xl bg-card flex items-center justify-center shadow-sm text-xl">
                      {project.icon}
                    </div>
                    <span
                      className={`px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wide ${project.badgeColor}`}
                    >
                      {project.badge}
                    </span>
                  </div>
                  <h4 className="font-bold text-base mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-grow">
                    {project.description}
                  </p>
                  <div className="flex items-center text-sm font-semibold text-primary">
                    {project.disabled ? "Learn More" : "View Case Study"}{" "}
                    <span className="ml-1 group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </div>
                </motion.div>
              );

              return project.disabled ? (
                <div key={i}>{ProjectCard}</div>
              ) : (
                <Link key={i} href={project.href}>
                  {ProjectCard}
                </Link>
              );
            })}
          </div>
        </div>
      </FadeUp>
    </section>
  );
}
