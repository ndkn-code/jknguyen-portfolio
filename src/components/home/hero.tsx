"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

export default function HeroHome() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("ndkn.work@gmail.com").then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <section className="mt-8 md:mt-24 mb-24 text-center relative flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center mb-6 px-4 py-2 bg-card border border-border rounded-full text-sm font-semibold shadow-sm"
      >
        <span className="w-2.5 h-2.5 rounded-full bg-green-500 mr-2 animate-pulse" />
        Open to PM internship opportunities for Summer 2026
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-tight mb-8"
      >
        <div className="flex items-center justify-center flex-wrap gap-2 md:gap-4">
          <span>Hi, I&apos;m</span>
          <div className="relative group inline-block align-middle">
            <Image
              alt="Portrait of Jack Nguyen"
              className="w-16 h-16 md:w-24 md:h-24 rounded-2xl object-cover border-4 border-card shadow-lg group-hover:rotate-6 transition-transform"
              src="/photo.JPEG"
              width={96}
              height={96}
            />
          </div>
          <span>Jack Nguyen!</span>
        </div>
        <div className="mt-4">
          <span className="text-muted-foreground/30">Co-Founder @ </span>
          <span className="text-primary">Lumist.ai</span>
        </div>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-10"
      >
        Product-minded builder turning 0-to-1 startup experience into a PM
        career. I&apos;ve owned the full product lifecycle, from user research
        and roadmap prioritization to shipping an MVP that reached 1,500+
        users across Vietnam.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex flex-col sm:flex-row items-center gap-4"
      >
        <a
          href="/ndkn_resume_APM.pdf"
          target="_blank"
          className="bg-foreground text-background px-8 py-4 rounded-full font-bold text-lg hover:opacity-90 transition-opacity shadow-lg min-w-[180px] text-center"
        >
          View Resume
        </a>
        <button
          onClick={copyEmail}
          className="bg-card text-foreground border border-border px-8 py-4 rounded-full font-bold text-lg hover:bg-muted transition-colors shadow-sm min-w-[180px]"
        >
          {copied ? "Copied!" : "Copy Email"}
        </button>
      </motion.div>
    </section>
  );
}
