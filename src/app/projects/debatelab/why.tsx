"use client";

import { motion } from "framer-motion";
import { FadeUp } from "@/components/animations/motion";

type Message = {
  sender: string;
  avatar: string;
  text: string;
  translation?: string;
  side: "left" | "right";
  delay: number;
};

const conversation: Message[] = [
  {
    sender: "Mom",
    avatar: "👩",
    text: "Con ơi, mẹ với em muốn tập nói tiếng Anh mà mấy app bình thường chán lắm. Có cái gì khác hơn không?",
    translation:
      '"Hey, me and your sister want to practice speaking English but the usual apps are so boring. Is there something different?"',
    side: "left",
    delay: 0,
  },
  {
    sender: "Đạt",
    avatar: "👨‍🏫",
    text: "Yo bro, I'm thinking about opening a debate teaching business. I want to do it the edtech way with a custom LMS. You think you can build something like that?",
    side: "left",
    delay: 0.15,
  },
  {
    sender: "Me",
    avatar: "👨‍💻",
    text: "Hmm, there's literally no dedicated web app for AI debate practice out there...",
    side: "right",
    delay: 0.3,
  },
  {
    sender: "Me",
    avatar: "👨‍💻",
    text: "You know what, I've been wanting to build something real from scratch. Let me cook. 🍳",
    side: "right",
    delay: 0.45,
  },
];

function TypingIndicator({ side }: { side: "left" | "right" }) {
  const isRight = side === "right";

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: [0, 1, 1, 0] }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 1.8,
        times: [0, 0.05, 0.7, 1],
      }}
      className={`flex items-end gap-2.5 mb-2 ${isRight ? "flex-row-reverse" : ""}`}
    >
      <div className="w-9 h-9 rounded-full flex items-center justify-center text-lg flex-shrink-0 bg-[#e9e9eb] dark:bg-zinc-700">
        {isRight ? "👨‍💻" : ""}
      </div>
      <div
        className={`${
          isRight
            ? "bg-[#007AFF]/20 dark:bg-[#007AFF]/30"
            : "bg-[#e9e9eb] dark:bg-zinc-700"
        } rounded-2xl px-4 py-3 inline-flex gap-1 items-center`}
      >
        <span className="w-2 h-2 rounded-full bg-[#8e8e93] animate-bounce [animation-delay:0ms]" />
        <span className="w-2 h-2 rounded-full bg-[#8e8e93] animate-bounce [animation-delay:150ms]" />
        <span className="w-2 h-2 rounded-full bg-[#8e8e93] animate-bounce [animation-delay:300ms]" />
      </div>
    </motion.div>
  );
}

function ChatBubble({
  message,
  delayAfterTyping,
}: {
  message: Message;
  delayAfterTyping?: number;
}) {
  const isRight = message.side === "right";
  const totalDelay = message.delay + (delayAfterTyping ?? 0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.4,
        delay: totalDelay,
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
        {/* Sender name */}
        <p
          className={`text-[11px] font-semibold mb-1 text-[#8e8e93] ${
            isRight ? "text-right mr-3" : "ml-3"
          }`}
        >
          {message.sender}
        </p>

        {/* iMessage-style bubble */}
        {isRight ? (
          <div className="bg-[#007AFF] text-white px-4 py-2.5 rounded-[18px] rounded-br-[4px] text-[15px] leading-relaxed tracking-[-0.01em]">
            {message.text}
          </div>
        ) : (
          <div className="bg-[#e9e9eb] dark:bg-zinc-700 text-[#1c1c1e] dark:text-zinc-100 px-4 py-2.5 rounded-[18px] rounded-bl-[4px] text-[15px] leading-relaxed tracking-[-0.01em]">
            {message.text}
          </div>
        )}

        {/* Translation for Vietnamese messages */}
        {message.translation && (
          <p
            className={`text-[11px] text-[#8e8e93] mt-1.5 italic leading-relaxed ${
              isRight ? "text-right mr-3" : "ml-3"
            }`}
          >
            {message.translation}
          </p>
        )}
      </div>
    </motion.div>
  );
}

export default function WhySection() {
  return (
    <section id="why" className="py-16 sm:py-32 px-4 sm:px-8 bg-background">
      <div className="max-w-3xl mx-auto">
        <FadeUp>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Why I built this.
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed mb-16">
            It started with a few conversations.
          </p>
        </FadeUp>

        {/* Chat conversation */}
        <div className="space-y-5">
          {/* Mom's message */}
          <ChatBubble message={conversation[0]} />

          {/* Đạt's message */}
          <ChatBubble message={conversation[1]} />

          {/* Typing indicator on MY side (right) before replying */}
          <TypingIndicator side="right" />

          {/* My replies - appear 2s after typing indicator */}
          <ChatBubble message={conversation[2]} delayAfterTyping={2} />
          <ChatBubble message={conversation[3]} delayAfterTyping={2} />
        </div>
      </div>
    </section>
  );
}
