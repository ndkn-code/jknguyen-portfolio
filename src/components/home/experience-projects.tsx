"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { FadeUp } from "@/components/animations/motion";
import { careerPublic, type ProjectCategory } from "@/data/career-public";

const experiences = careerPublic.experiences.map((experience) => ({
  ...experience,
  title: `${experience.title} at ${experience.organization}`,
}));

interface Project {
  href: string;
  categories: ProjectCategory[];
  badge: string;
  badgeColor: string;
  title: string;
  description: string;
  tech: string[];
  image: string;
}

const badgeColors: Record<string, string> = {
  thinkfy: "bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary",
  "lumist-growth": "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
  "online-retail": "bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-400",
  "vendor-ap": "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400",
  "revenue-forecasting": "bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-400",
};

const allProjects: Project[] = careerPublic.projects.map((project) => ({
  ...project,
  badgeColor: badgeColors[project.id] ?? "bg-muted text-muted-foreground",
}));

function ProjectCard({
  project,
  offset,
  onClick,
}: {
  project: Project;
  offset: number;
  onClick?: () => void;
}) {
  const isCenter = offset === 0;
  const absOffset = Math.abs(offset);

  return (
    <motion.div
      animate={{
        x: `${offset * 85}%`,
        scale: isCenter ? 1 : 0.88 - absOffset * 0.04,
        opacity: isCenter ? 1 : absOffset === 1 ? 0.5 : 0.2,
        zIndex: 10 - absOffset,
        filter: isCenter ? "blur(0px)" : `blur(${absOffset * 3}px)`,
        rotateY: offset * -5,
      }}
      transition={{ type: "spring", stiffness: 260, damping: 26 }}
      onClick={onClick}
      className={`absolute inset-0 bg-card rounded-2xl border border-border shadow-lg overflow-hidden flex flex-col ${
        !isCenter ? "cursor-pointer" : ""
      }`}
      style={{ transformStyle: "preserve-3d" }}
    >
      {/* Image */}
      <div className="relative h-36 sm:h-44 overflow-hidden flex-shrink-0">
        <Image
          src={project.image}
          alt={project.title}
          width={1920}
          height={1080}
          quality={90}
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
        <div className="absolute top-3 left-3">
          <span
            className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide ${project.badgeColor} backdrop-blur-sm`}
          >
            {project.badge}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        <h4 className="font-bold text-lg sm:text-xl mb-1.5">{project.title}</h4>
        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-3 line-clamp-2 flex-grow">
          {project.description}
        </p>

        {/* Tech pills */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-2 py-0.5 bg-muted rounded text-[10px] font-medium text-muted-foreground"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Button CTA */}
        {isCenter && (
          <Link
            href={project.href}
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold bg-primary text-white hover:bg-primary/90 transition-colors shadow-sm w-full"
          >
            View Case Study
            <span>→</span>
          </Link>
        )}
      </div>
    </motion.div>
  );
}

const FILTERS = ["All", "Product", "Data", "AI"] as const;
type Filter = (typeof FILTERS)[number];

export default function ExperienceAndProjects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [filter, setFilter] = useState<Filter>("All");

  const projects =
    filter === "All"
      ? allProjects
      : allProjects.filter((p) => p.categories.includes(filter));

  const paginate = useCallback(
    (newDirection: number) => {
      const nextIndex = currentIndex + newDirection;
      if (nextIndex >= 0 && nextIndex < projects.length) {
        setCurrentIndex(nextIndex);
      }
    },
    [currentIndex, projects.length]
  );

  const goTo = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  const selectFilter = useCallback((f: Filter) => {
    setFilter(f);
    setCurrentIndex(0);
  }, []);

  return (
    <section className="space-y-6">
      {/* Top Row: Experience + Project Carousel */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* My Experience - Left Column */}
        <FadeUp className="lg:w-[340px] flex-shrink-0">
          <div className="relative overflow-hidden bg-card p-8 rounded-3xl shadow-sm border border-border h-full">
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
                      {exp.description && (
                        <p className="text-xs text-muted-foreground/70 mt-1 leading-relaxed">
                          {exp.description}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-border">
                <a
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
                  href="/jack_nguyen_data_analyst.pdf"
                  target="_blank"
                >
                  View Full Resume →
                </a>
              </div>
            </div>
          </div>
        </FadeUp>

        {/* Project Carousel - Stacked Cards */}
        <FadeUp delay={0.15} className="flex-grow">
          <div className="relative overflow-hidden bg-card rounded-3xl shadow-sm border border-border h-full flex flex-col">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] via-transparent to-violet-500/[0.05] pointer-events-none" />

            {/* Header */}
            <div className="relative flex items-center justify-between p-6 pb-0 z-20">
              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">
                Projects
              </span>
              <span className="text-xs text-muted-foreground tabular-nums">
                {projects.length === 0 ? 0 : currentIndex + 1} /{" "}
                {projects.length}
              </span>
            </div>

            {/* Category filter */}
            <div className="relative flex flex-wrap items-center gap-2 px-6 pt-4 z-20">
              {FILTERS.map((f) => (
                <button
                  key={f}
                  onClick={() => selectFilter(f)}
                  className={`px-3 py-1 rounded-full text-xs font-semibold transition-colors border ${
                    filter === f
                      ? "bg-primary text-white border-primary"
                      : "bg-card text-muted-foreground border-border hover:border-primary/40 hover:text-foreground"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>

            {/* Stacked carousel */}
            <div
              className="relative flex-grow mx-6 my-4"
              style={{
                minHeight: 380,
                perspective: "1200px",
              }}
            >
              {projects.map((project, i) => {
                const offset = i - currentIndex;
                if (Math.abs(offset) > 2) return null;
                return (
                  <ProjectCard
                    key={project.title}
                    project={project}
                    offset={offset}
                    onClick={
                      offset !== 0 ? () => goTo(i) : undefined
                    }
                  />
                );
              })}
            </div>

            {/* Bottom nav: arrows + dots */}
            <div className="relative flex items-center justify-center gap-4 pb-5 z-20">
              <button
                onClick={() => paginate(-1)}
                disabled={currentIndex === 0}
                className="w-9 h-9 rounded-full border border-border bg-card flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors disabled:opacity-30 disabled:cursor-not-allowed shadow-sm"
              >
                <svg
                  width="16"
                  height="16"
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

              <div className="flex items-center gap-1.5">
                {projects.map((_, i) => (
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

              <button
                onClick={() => paginate(1)}
                disabled={currentIndex === projects.length - 1}
                className="w-9 h-9 rounded-full border border-border bg-card flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors disabled:opacity-30 disabled:cursor-not-allowed shadow-sm"
              >
                <svg
                  width="16"
                  height="16"
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
        </FadeUp>
      </div>
    </section>
  );
}
