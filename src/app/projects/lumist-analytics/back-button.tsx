"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function BackButton() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed top-6 left-6 z-50"
    >
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md rounded-full text-sm font-medium text-muted-foreground hover:text-foreground border border-border shadow-sm transition-all hover:shadow-md"
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
  );
}
