"use client";

import { useState } from "react";
import { FadeUp } from "@/components/animations/motion";
import { careerPublic } from "@/data/career-public";

export default function WhyPMAndConnect() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("jknguyen.wor@gmail.com").then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <section className="flex flex-col lg:flex-row gap-6 mt-6">
      {/* Why PM */}
      <FadeUp className="lg:flex-grow">
        <div className="relative overflow-hidden bg-card p-8 rounded-3xl shadow-sm border border-border">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.04] via-transparent to-violet-500/[0.04] pointer-events-none" />
          <div className="relative">
            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">
              Why Product & Data
            </span>
            <div className="mt-6 space-y-4">
              <p className="text-sm text-foreground leading-relaxed max-w-lg">
                {careerPublic.profile.why_product_data}
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-lg italic">
                &ldquo;{careerPublic.profile.builder_quote}&rdquo;
              </p>
            </div>
          </div>
        </div>
      </FadeUp>

      {/* Let's Connect */}
      <FadeUp delay={0.15} className="lg:w-[340px] flex-shrink-0">
        <div className="bg-card rounded-3xl shadow-sm border border-border overflow-hidden relative min-h-[280px] flex flex-col items-center justify-center p-8">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.04] via-transparent to-violet-500/[0.04] pointer-events-none" />
          <div className="relative flex flex-col items-center text-center gap-5">
            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">
              Let&apos;s Connect
            </span>
            <div>
              <p className="text-lg font-bold">
                Currently building at{" "}
                <span className="text-primary">Lumist.ai</span>
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                {careerPublic.profile.location}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full">
              <button
                onClick={copyEmail}
                className="flex-1 bg-foreground text-background px-5 py-3 rounded-full font-semibold text-sm hover:opacity-90 transition-opacity shadow-sm"
              >
                {copied ? "Copied!" : "Copy Email"}
              </button>
              <a
                href={careerPublic.profile.linkedin_url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-card text-foreground border border-border px-5 py-3 rounded-full font-semibold text-sm hover:bg-muted transition-colors shadow-sm text-center"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </FadeUp>
    </section>
  );
}
