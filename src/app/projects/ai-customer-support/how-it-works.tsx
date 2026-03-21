"use client";

import { FadeUp, FadeLeft, FadeRight } from "@/components/animations/motion";
import Image from "next/image";

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-16 sm:py-32 px-4 sm:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto space-y-24">
        {/* Section header */}
        <FadeUp>
          <div className="text-center max-w-3xl mx-auto mb-4">
            <h2 className="text-3xl font-bold mb-6">How It Works</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Messages flow through intent classification, context retrieval
              via RAG, and a sales-trained AI that tracks conversation stages.
              The system continuously monitors for escalation triggers.
            </p>
          </div>
        </FadeUp>

        {/* Main workflow image - full width */}
        <FadeUp delay={0.1}>
          <div className="bg-white dark:bg-card rounded-2xl shadow-sm border border-border overflow-hidden">
            <div className="p-6 md:p-8">
              <div className="rounded-xl overflow-hidden border border-border">
                <Image
                  src="/images/ai-support-flow-main.png"
                  alt="Main n8n workflow showing intent classification, RAG retrieval, and AI response generation"
                  width={1200}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
              <p className="text-sm text-muted-foreground text-center mt-4">
                n8n workflow: Intent classification → RAG retrieval → Sales AI response → Escalation detection
              </p>
            </div>
          </div>
        </FadeUp>

        {/* Two-column: Real Conversations */}
        <div>
          <FadeUp>
            <h3 className="text-2xl font-bold mb-8 text-center">Real Conversations</h3>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FadeLeft>
              <div className="bg-white dark:bg-card rounded-2xl shadow-sm border border-border overflow-hidden h-full">
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-2 h-2 rounded-full bg-emerald-400" />
                    <h4 className="font-bold">Normal AI Response</h4>
                  </div>
                  <div className="rounded-xl overflow-hidden border border-border mb-4">
                    <Image
                      src="/images/ai-conversation-message.png"
                      alt="AI handling a common question automatically"
                      width={1200}
                      height={800}
                      quality={90}
                      className="w-full h-auto"
                    />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    AI handles common questions automatically using RAG-retrieved knowledge from our docs.
                  </p>
                </div>
              </div>
            </FadeLeft>

            <FadeRight>
              <div className="bg-white dark:bg-card rounded-2xl shadow-sm border border-border overflow-hidden h-full">
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-2 h-2 rounded-full bg-orange-400" />
                    <h4 className="font-bold">Smart Escalation</h4>
                  </div>
                  <div className="rounded-xl overflow-hidden border border-border mb-4">
                    <Image
                      src="/images/ai-escalation-message.png"
                      alt="AI handing off to human with context preserved"
                      width={1200}
                      height={800}
                      quality={90}
                      className="w-full h-auto"
                    />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    When triggers are detected, AI hands off to a human agent with full context preserved.
                  </p>
                </div>
              </div>
            </FadeRight>
          </div>
        </div>
      </div>
    </section>
  );
}
