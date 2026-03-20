"use client";

import Link from "next/link";
import { motion } from "framer-motion";

// Project order for navigation
const projectOrder = [
  "/projects/debatelab",
  "/projects/lumist-analytics",
  "/projects/ai-customer-support",
  "/projects/lead-scoring-crm",
];

const projectNames: Record<string, string> = {
  "/projects/debatelab": "DebateLab",
  "/projects/lumist-analytics": "Lumist Analytics",
  "/projects/ai-customer-support": "AI Support",
  "/projects/lead-scoring-crm": "Lead Scoring",
};

function useNextProject() {
  if (typeof window === "undefined") return null;
  const current = window.location.pathname;
  const idx = projectOrder.indexOf(current);
  if (idx === -1) return null;
  const nextIdx = (idx + 1) % projectOrder.length;
  return { href: projectOrder[nextIdx], name: projectNames[projectOrder[nextIdx]] };
}

export default function BackButton() {
  return (
    <>
      {/* Back button - blue themed */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
        className="fixed top-6 left-6 z-50"
      >
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white backdrop-blur-md rounded-full text-sm font-medium hover:bg-primary/90 shadow-sm transition-all hover:shadow-md"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back
        </Link>
      </motion.div>

      {/* Next project button */}
      <NextProjectButton />
    </>
  );
}

function NextProjectButton() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed top-6 right-6 z-50"
    >
      <NextProjectLink />
    </motion.div>
  );
}

function NextProjectLink() {
  const next = useNextProject();

  if (!next) return null;

  return (
    <Link
      href={next.href}
      className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md rounded-full text-sm font-medium text-muted-foreground hover:text-primary border border-border shadow-sm transition-all hover:shadow-md"
    >
      {next.name}
      <svg
        className="w-4 h-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M14 5l7 7m0 0l-7 7m7-7H3"
        />
      </svg>
    </Link>
  );
}
