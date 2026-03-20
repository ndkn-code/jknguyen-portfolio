"use client";

import { motion } from "framer-motion";
import { FadeUp } from "@/components/animations/motion";

type Message = {
  sender: string;
  avatar: string;
  text: string;
  side: "left" | "right";
  color: string;
  bubbleColor: string;
  delay: number;
};

const conversation: Message[] = [
  {
    sender: "Mom",
    avatar: "👩",
    text: "Con ơi, me with em muốn tập nói tiếng Anh mà mấy app bình thường chán lắm. Có cái gì khác hơn không?",
    side: "left",
    color: "text-rose-700 dark:text-rose-400",
    bubbleColor: "bg-rose-100 dark:bg-rose-900/30",
    delay: 0,
  },
  {
    sender: "Tùng",
    avatar: "🧑‍🏫",
    text: "Yo bro, I'm thinking about opening a debate teaching business. I want to do it the edtech way with a custom LMS. You think you can build something like that?",
    side: "left",
    color: "text-blue-700 dark:text-blue-400",
    bubbleColor: "bg-blue-100 dark:bg-blue-900/30",
    delay: 0.15,
  },
  {
    sender: "Me",
    avatar: "💭",
    text: "Hmm, there's literally no dedicated web app for AI debate practice out there...",
    side: "right",
    color: "text-muted-foreground",
    bubbleColor: "bg-muted",
    delay: 0.3,
  },
  {
    sender: "Me",
    avatar: "⚡",
    text: "You know what, I've been wanting to build something real from scratch. Let me cook.",
    side: "right",
    color: "text-muted-foreground",
    bubbleColor: "bg-primary/10",
    delay: 0.45,
  },
];

function TypingIndicator({ delay }: { delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: [0, 1, 1, 0] }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 1.2,
        delay,
        times: [0, 0.1, 0.7, 1],
      }}
      className="flex items-end gap-2 mb-2"
    >
      <div className="w-8" />
      <div className="bg-muted/70 rounded-2xl px-4 py-3 inline-flex gap-1 items-center">
        <span className="w-2 h-2 rounded-full bg-muted-foreground/40 animate-bounce [animation-delay:0ms]" />
        <span className="w-2 h-2 rounded-full bg-muted-foreground/40 animate-bounce [animation-delay:150ms]" />
        <span className="w-2 h-2 rounded-full bg-muted-foreground/40 animate-bounce [animation-delay:300ms]" />
      </div>
    </motion.div>
  );
}

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
      <div
        className={`w-9 h-9 rounded-full flex items-center justify-center text-lg flex-shrink-0 ${
          isRight ? "bg-primary/10" : message.bubbleColor
        }`}
      >
        {message.avatar}
      </div>

      {/* Bubble */}
      <div className={`max-w-md ${isRight ? "items-end" : "items-start"}`}>
        {/* Sender name */}
        <p
          className={`text-[11px] font-semibold mb-1 ${message.color} ${
            isRight ? "text-right mr-2" : "ml-2"
          }`}
        >
          {message.sender}
        </p>
        <div
          className={`px-5 py-3.5 text-sm leading-relaxed ${
            message.bubbleColor
          } ${
            isRight
              ? "rounded-2xl rounded-br-md"
              : "rounded-2xl rounded-bl-md"
          }`}
        >
          {message.text}
        </div>
      </div>
    </motion.div>
  );
}

export default function WhySection() {
  return (
    <section className="py-32 px-8 bg-background">
      <div className="max-w-3xl mx-auto">
        <FadeUp>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
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

          {/* Friend's message */}
          <ChatBubble message={conversation[1]} />

          {/* Typing indicator before my replies */}
          <TypingIndicator delay={0.25} />

          {/* My replies */}
          <ChatBubble message={conversation[2]} />
          <ChatBubble message={conversation[3]} />

          {/* Result message - the "so I built it" moment */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex justify-center pt-8"
          >
            <div className="bg-gradient-to-r from-primary/10 via-violet-500/10 to-primary/10 border border-primary/20 rounded-2xl px-8 py-5 text-center max-w-lg">
              <p className="text-sm font-semibold text-primary mb-1">
                3 weeks later
              </p>
              <p className="text-base text-foreground font-medium">
                DebateLab was live at{" "}
                <a
                  href="https://debate-lab.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline underline-offset-2 hover:no-underline"
                >
                  debate-lab.vercel.app
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
