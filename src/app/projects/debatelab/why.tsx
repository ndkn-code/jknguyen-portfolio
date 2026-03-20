"use client";

import {
  FadeUp,
  FadeLeft,
  FadeRight,
  ScaleIn,
} from "@/components/animations/motion";

const motivations = [
  {
    icon: "👩‍👧",
    title: "A Personal Need",
    description:
      "My mom wanted a tool for learning English speaking for both herself and my sister. It had to be different from the typical language apps out there.",
    color: "bg-rose-100 dark:bg-rose-900/30",
  },
  {
    icon: "🎓",
    title: "An EdTech Opportunity",
    description:
      "A friend wants to open a debate teaching business. He wanted to do it the edtech way with a custom LMS, and I saw the chance to build something real.",
    color: "bg-blue-100 dark:bg-blue-900/30",
  },
  {
    icon: "🚀",
    title: "A Gap in the Market",
    description:
      "There is no dedicated web app for AI-powered debate practice. I figured this was something I could build and ship as a real product.",
    color: "bg-emerald-100 dark:bg-emerald-900/30",
  },
  {
    icon: "⚡",
    title: "Inspired by Vibe Coding",
    description:
      "I wanted to build something substantial entirely on my own, using modern AI tools to move fast and ship something polished.",
    color: "bg-violet-100 dark:bg-violet-900/30",
  },
];

export default function WhySection() {
  return (
    <section className="py-32 px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <FadeUp>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight max-w-4xl">
            Why I built this.
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mb-20">
            DebateLab started from three things coming together at the same
            time: a family need, a business opportunity, and a personal
            challenge. I wanted to prove I could ship a full edtech product
            from zero to production.
          </p>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {motivations.map((item, i) => (
            <ScaleIn key={i} delay={0.1 * i}>
              <div className={`${item.color} rounded-2xl p-8 h-full`}>
                <span className="text-3xl mb-4 block">{item.icon}</span>
                <h3 className="font-bold text-xl mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </ScaleIn>
          ))}
        </div>
      </div>
    </section>
  );
}
