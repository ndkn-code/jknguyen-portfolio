"use client";

import { FadeUp, FadeLeft, FadeRight } from "@/components/animations/motion";
import Image from "next/image";

const features = [
  {
    title: "Practice Sessions",
    subtitle: "Real-time speech-to-text debate practice",
    description:
      "Students pick a topic, prepare arguments with a timed notepad, then speak into the mic. Deepgram Nova-3 transcribes in real-time with interim results. In full-round mode, the AI delivers a counter-argument with text-to-speech, and students respond across multiple rounds.",
    image: "/images/debatelab-practice.jpg",
    imageAlt: "DebateLab practice session showing live transcription and timer",
  },
  {
    title: "AI Feedback & Scoring",
    subtitle: "AI-powered debate analysis",
    description:
      "After each session, Gemini 3.1 Lite Flash analyzes the transcript across 4 categories: Content and Argumentation (40 pts), Structure and Organization (25 pts), Language and Delivery (25 pts), and Persuasiveness (10 pts). Students get a total score with an animated progress ring, detailed sub-scores, and written feedback.",
    image: "/images/debatelab-feedback.jpg",
    imageAlt: "DebateLab feedback page with score ring and category breakdown",
  },
  {
    title: "AI Growth Coach",
    subtitle: "Streaming chat with debate expertise",
    description:
      "A dedicated AI coach powered by Groq (Llama 3.3 70B) with streaming responses. Students can discuss debate strategies, get topic research help, or review their past performance. The coach knows the student's history and adapts its advice.",
    image: "/images/debatelab-coach.jpg",
    imageAlt: "DebateLab AI coach chat with streaming response",
  },
];

export default function ShowcaseSection() {
  return (
    <section className="py-16 sm:py-32 px-4 sm:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <FadeUp>
          <h2 className="text-3xl font-bold mb-4 text-center">
            Product Showcase
          </h2>
          <p className="text-muted-foreground text-center mb-12 sm:mb-20 max-w-2xl mx-auto">
            Three core experiences that make DebateLab a complete debate
            training platform.
          </p>
        </FadeUp>

        <div className="space-y-16 sm:space-y-32">
          {features.map((feature, i) => {
            const isReversed = i % 2 === 1;
            return (
              <div
                key={i}
                className={`flex flex-col ${
                  isReversed ? "lg:flex-row-reverse" : "lg:flex-row"
                } gap-12 lg:gap-16 items-center`}
              >
                {/* Text */}
                {isReversed ? (
                  <FadeRight className="lg:w-2/5">
                    <FeatureText feature={feature} />
                  </FadeRight>
                ) : (
                  <FadeLeft className="lg:w-2/5">
                    <FeatureText feature={feature} />
                  </FadeLeft>
                )}

                {/* Screenshot in browser frame */}
                {isReversed ? (
                  <FadeLeft className="lg:w-3/5">
                    <BrowserFrame feature={feature} />
                  </FadeLeft>
                ) : (
                  <FadeRight className="lg:w-3/5">
                    <BrowserFrame feature={feature} />
                  </FadeRight>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FeatureText({
  feature,
}: {
  feature: { title: string; subtitle: string; description: string };
}) {
  return (
    <div>
      <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
        {feature.subtitle}
      </p>
      <h3 className="text-3xl font-bold mb-6">{feature.title}</h3>
      <p className="text-muted-foreground leading-relaxed text-lg">
        {feature.description}
      </p>
    </div>
  );
}

function BrowserFrame({
  feature,
}: {
  feature: { image: string; imageAlt: string };
}) {
  return (
    <div className="bg-white dark:bg-zinc-900 rounded-xl shadow-lg border border-border overflow-hidden">
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-border bg-muted/30">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
        </div>
        <div className="flex-1 flex justify-center">
          <div className="px-3 py-0.5 bg-background rounded text-[10px] text-muted-foreground border border-border">
            debate-lab.vercel.app
          </div>
        </div>
      </div>
      <Image
        src={feature.image}
        alt={feature.imageAlt}
        width={1920}
        height={1080}
        quality={90}
        className="w-full h-auto"
      />
    </div>
  );
}
