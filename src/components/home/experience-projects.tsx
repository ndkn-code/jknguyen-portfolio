"use client";

import Link from "next/link";
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

const projects = [
  {
    href: "/projects/lumist-analytics",
    icon: "📊",
    badge: "Launched",
    badgeColor:
      "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
    title: "Lumist Analytics Dashboard",
    description:
      "Full-stack analytics platform tracking DAU, retention cohorts, acquisition funnels, and feature adoption. Built with React, Supabase, and Gemini AI-powered insights.",
  },
  {
    href: "/projects/ai-customer-support",
    icon: "🤖",
    badge: "Technical",
    badgeColor:
      "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400",
    title: "AI Customer Support System",
    description:
      "Multi-platform RAG chatbot (Zalo + Discord) with sales funnel tracking, intent classification, and 7-trigger escalation system.",
  },
  {
    href: "/projects/lead-scoring-crm",
    icon: "✨",
    badge: "Automation",
    badgeColor:
      "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400",
    title: "Lead Scoring CRM",
    description:
      "Automated lead scoring pipeline with Jira workflow integration, multi-factor scoring algorithm, and team accountability system.",
  },
  {
    href: "#",
    icon: "🎓",
    badge: "Data",
    badgeColor:
      "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
    title: "Class Feedback Pipeline",
    description:
      "Automated student feedback collection from Zoom polls → n8n processing → Google Sheets → Looker dashboard. Surfaced tutor performance gaps.",
    disabled: true,
  },
];

export default function ExperienceAndProjects() {
  return (
    <section className="flex flex-col lg:flex-row gap-6">
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

      {/* Featured Projects - Right Column */}
      <FadeUp delay={0.15} className="flex-grow">
        <div className="bg-card p-8 rounded-3xl shadow-sm border border-border">
          <span className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">
            Featured Projects
          </span>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8">
            {projects.map((project, i) => {
              const Card = (
                <motion.div
                  whileHover={!project.disabled ? { y: -3 } : {}}
                  transition={{ duration: 0.2 }}
                  className={`group bg-muted/50 rounded-2xl p-5 border border-border hover:border-primary/30 transition-all hover:shadow-md ${
                    project.disabled
                      ? "cursor-default"
                      : "cursor-pointer"
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
                  <h4 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
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
                <div key={i}>{Card}</div>
              ) : (
                <Link key={i} href={project.href}>
                  {Card}
                </Link>
              );
            })}
          </div>
        </div>
      </FadeUp>
    </section>
  );
}
