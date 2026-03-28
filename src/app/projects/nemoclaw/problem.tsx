"use client";

import { motion } from "framer-motion";
import { FadeUp } from "@/components/animations/motion";

type Message = {
  sender: string;
  avatar: string;
  role: string;
  text: string;
  side: "left" | "right";
  delay: number;
};

const conversation: Message[] = [
  {
    sender: "CEO",
    avatar: "👔",
    role: "Founder",
    text: "How many signups did we get today? Can someone check Supabase real quick?",
    side: "left",
    delay: 0,
  },
  {
    sender: "Marketing",
    avatar: "📣",
    role: "Growth",
    text: "I need social media numbers for the investor deck by tonight. Who has access to the analytics?",
    side: "left",
    delay: 0.15,
  },
  {
    sender: "CEO",
    avatar: "👔",
    role: "Founder",
    text: "What's the engineering team working on this sprint? Any PRs merged today?",
    side: "left",
    delay: 0.3,
  },
  {
    sender: "Me",
    avatar: "👨‍💻",
    role: "Builder",
    text: "What if there was a bot that already knew all of this? One message, instant answers.",
    side: "right",
    delay: 0.45,
  },
  {
    sender: "Me",
    avatar: "👨‍💻",
    role: "Builder",
    text: "I'll build it. Give me a week. 🔧",
    side: "right",
    delay: 0.6,
  },
];

function ChatBubble({ message }: { message: Message }) {
  const isRight = message.side === "right";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.4,
        delay: message.delay,
        ease: "easeOut",
      }}
      className={`flex items-end gap-2.5 ${isRight ? "flex-row-reverse" : ""}`}
    >
      {/* Avatar */}
      <div className="w-9 h-9 rounded-full flex items-center justify-center text-lg flex-shrink-0 bg-[#e9e9eb] dark:bg-zinc-700">
        {message.avatar}
      </div>

      {/* Bubble */}
      <div className={`max-w-md ${isRight ? "items-end" : "items-start"}`}>
        <p
          className={`text-[11px] font-semibold mb-1 text-[#8e8e93] ${
            isRight ? "text-right mr-3" : "ml-3"
          }`}
        >
          {message.sender}{" "}
          <span className="font-normal text-[#8e8e93]/60">
            &middot; {message.role}
          </span>
        </p>

        {isRight ? (
          <div className="bg-[#007AFF] text-white px-4 py-2.5 rounded-[18px] rounded-br-[4px] text-[15px] leading-relaxed tracking-[-0.01em]">
            {message.text}
          </div>
        ) : (
          <div className="bg-[#e9e9eb] dark:bg-zinc-700 text-[#1c1c1e] dark:text-zinc-100 px-4 py-2.5 rounded-[18px] rounded-bl-[4px] text-[15px] leading-relaxed tracking-[-0.01em]">
            {message.text}
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default function ProblemSection() {
  return (
    <section id="problem" className="py-16 sm:py-32 px-4 sm:px-8 bg-background">
      <div className="max-w-3xl mx-auto">
        <FadeUp>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Why I built this.
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed mb-16">
            The same questions, every single day.
          </p>
        </FadeUp>

        {/* Chat conversation */}
        <div className="space-y-5">
          {conversation.map((msg, i) => (
            <ChatBubble key={i} message={msg} />
          ))}
        </div>

        {/* Pain point explanation */}
        <FadeUp delay={0.3}>
          <div className="mt-16 bg-muted/50 rounded-2xl p-8 border border-border">
            <p className="text-sm text-muted-foreground leading-relaxed">
              Every day, team members asked ad-hoc data questions. Someone had to
              stop what they were doing, log into Supabase or GitHub, pull the
              numbers, and relay them back. The context-switching cost was real
              &mdash; and the answers were always stale by the time they arrived.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed mt-4">
              I built <strong className="text-foreground">Lumi</strong> to be
              the team member who never sleeps, never forgets, and always has the
              latest numbers &mdash; with an Obsidian vault as her persistent
              memory.
            </p>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
