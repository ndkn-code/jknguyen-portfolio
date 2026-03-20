"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeUp } from "@/components/animations/motion";

const experiences = [
  {
    title: "Co-Founder & COO at Lumist.ai",
    period: "Jan 2024 - Present · Remote · Full time",
    active: true,
  },
  {
    title: "ERP Analyst I at USF IT",
    period: "Jan 2025 - Dec 2025 · Tampa · Full time",
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

const allProjects = [
  {
    href: "/projects/debatelab",
    icon: "🎯",
    badge: "Flagship",
    badgeColor:
      "bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary",
    title: "DebateLab",
    description:
      "AI-powered solo debate practice platform. Real-time speech transcription, Gemini-powered scoring, streaming AI coach, gamification, and full Vietnamese localization.",
    tech: ["Next.js", "Gemini AI", "Deepgram", "Supabase", "Groq"],
    image: "/images/debatelab-dashboard.jpg",
  },
  {
    href: "/projects/lumist-analytics",
    icon: "📊",
    badge: "Launched",
    badgeColor:
      "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
    title: "Lumist Analytics Dashboard",
    description:
      "Full-stack analytics platform tracking DAU, retention cohorts, acquisition funnels, and feature adoption.",
    tech: ["React", "Supabase", "Recharts", "TypeScript"],
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
    tech: ["n8n", "Gemini AI", "Supabase Vector", "Zalo API"],
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
    tech: ["n8n", "Jira", "Google Sheets", "Slack"],
  },
  {
    href: "#",
    icon: "🎓",
    badge: "Data",
    badgeColor:
      "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
    title: "Class Feedback Pipeline",
    description:
      "Automated student feedback from Zoom polls to n8n to Google Sheets to Looker dashboard.",
    tech: ["n8n", "Zoom API", "Google Sheets", "Looker"],
    disabled: true,
  },
];

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
    scale: 0.95,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 300 : -300,
    opacity: 0,
    scale: 0.95,
  }),
};

export default function ExperienceAndProjects() {
  const [[currentIndex, direction], setSlide] = useState([0, 0]);

  const paginate = useCallback(
    (newDirection: number) => {
      const nextIndex = currentIndex + newDirection;
      if (nextIndex >= 0 && nextIndex < allProjects.length) {
        setSlide([nextIndex, newDirection]);
      }
    },
    [currentIndex]
  );

  const goTo = useCallback(
    (index: number) => {
      setSlide([index, index > currentIndex ? 1 : -1]);
    },
    [currentIndex]
  );

  const project = allProjects[currentIndex];

  return (
    <section className="space-y-6">
      {/* Top Row: Experience + Project Carousel */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* My Experience - Left Column */}
        <FadeUp className="lg:w-[340px] flex-shrink-0">
          <div className="relative overflow-hidden bg-card p-8 rounded-3xl shadow-sm border border-border h-full">
            {/* AI Coach gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.04] via-transparent to-violet-500/[0.04] pointer-events-none" />
            <div className="relative">
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
          </div>
        </FadeUp>

        {/* Project Carousel */}
        <FadeUp delay={0.15} className="flex-grow">
          <div className="relative overflow-hidden bg-card rounded-3xl shadow-sm border border-border h-full flex flex-col">
            {/* Gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] via-transparent to-violet-500/[0.05] pointer-events-none" />

            {/* Header with nav */}
            <div className="relative flex items-center justify-between p-6 pb-0">
              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">
                Projects
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => paginate(-1)}
                  disabled={currentIndex === 0}
                  className="w-8 h-8 rounded-full border border-border bg-card flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="15 18 9 12 15 6" />
                  </svg>
                </button>
                <button
                  onClick={() => paginate(1)}
                  disabled={currentIndex === allProjects.length - 1}
                  className="w-8 h-8 rounded-full border border-border bg-card flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Carousel content */}
            <div className="relative flex-grow" style={{ minHeight: allProjects[currentIndex].image ? 420 : 300 }}>
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                    scale: { duration: 0.2 },
                  }}
                  className="absolute inset-0 p-6 pt-4 flex flex-col overflow-hidden"
                >
                  {/* Badge */}
                  <div className="mb-3">
                    <span
                      className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide ${project.badgeColor}`}
                    >
                      {project.badge}
                    </span>
                  </div>

                  {/* Image for projects with images */}
                  {project.image && (
                    <div className="relative rounded-xl overflow-hidden mb-4 border border-border/50">
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={800}
                        height={400}
                        className="w-full h-32 sm:h-40 object-cover object-top"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card/30 to-transparent" />
                    </div>
                  )}

                  {/* Icon for projects without images */}
                  {!project.image && (
                    <div className="w-12 h-12 rounded-xl bg-muted/80 flex items-center justify-center text-2xl mb-3">
                      {project.icon}
                    </div>
                  )}

                  {/* Title */}
                  <h4 className="font-bold text-xl sm:text-2xl mb-2">
                    {project.title}
                  </h4>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-grow">
                    {project.description}
                  </p>

                  {/* Tech + CTA */}
                  <div className="mt-auto">
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {project.tech?.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 bg-muted rounded text-[10px] font-medium text-muted-foreground"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    {project.disabled ? (
                      <span className="text-sm font-semibold text-muted-foreground">
                        Coming Soon
                      </span>
                    ) : (
                      <Link
                        href={project.href}
                        className="text-sm font-semibold text-primary hover:underline inline-flex items-center gap-1"
                      >
                        View Case Study
                        <span>→</span>
                      </Link>
                    )}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Dot indicators */}
            <div className="relative flex items-center justify-center gap-1.5 pb-5">
              {allProjects.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`rounded-full transition-all duration-300 ${
                    i === currentIndex
                      ? "w-6 h-2 bg-primary"
                      : "w-2 h-2 bg-border hover:bg-muted-foreground/40"
                  }`}
                />
              ))}
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
