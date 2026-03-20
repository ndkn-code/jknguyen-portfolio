"use client";

import {
  FadeUp,
  ScaleIn,
  motion,
  staggerContainer,
  staggerItem,
} from "@/components/animations/motion";

export default function LessonsSection() {
  return (
    <section className="py-32 px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <FadeUp>
          <h2 className="text-3xl font-bold mb-16 text-center">
            Lessons & Iterations
          </h2>
        </FadeUp>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {/* Lesson 1 - Large card */}
          <motion.div
            variants={staggerItem}
            className="md:col-span-2 bg-muted/50 p-10 rounded-xl"
          >
            <h4 className="text-xl font-bold mb-4 text-primary">
              Data Reveals What Users Won&apos;t Tell You
            </h4>
            <p className="text-muted-foreground leading-relaxed">
              We assumed students wanted intensive, long study sessions. The
              analytics told a completely different story. &ldquo;Question of the
              Day&rdquo; (micro-learning) had the highest engagement. This insight
              shifted our entire content strategy and product roadmap.
            </p>
          </motion.div>

          {/* Lesson 2 - Accent card */}
          <motion.div
            variants={staggerItem}
            className="bg-primary text-white p-10 rounded-xl flex flex-col justify-between"
          >
            <span className="text-4xl mb-4">💡</span>
            <div>
              <h4 className="text-xl font-bold mb-2">The Broken Feature Rule</h4>
              <p className="text-sm opacity-90">
                If a feature isn&apos;t being used, check if it&apos;s broken
                before killing it. Our error log had a UX bug, not a value
                problem.
              </p>
            </div>
          </motion.div>

          {/* Lesson 3 - Dark card */}
          <motion.div
            variants={staggerItem}
            className="bg-foreground text-background p-10 rounded-xl"
          >
            <h4 className="text-xl font-bold mb-4">
              Build for the Whole Team
            </h4>
            <p className="text-sm opacity-80">
              Role-based access meant leadership got executive summaries while
              engineers got raw data. Same platform, different views. Adoption
              went from 2 to 14 team members.
            </p>
          </motion.div>

          {/* Lesson 4 - Wide card */}
          <motion.div
            variants={staggerItem}
            className="md:col-span-2 bg-muted/30 p-10 rounded-xl border border-border"
          >
            <h4 className="text-xl font-bold mb-4">Future Iterations</h4>
            <p className="text-muted-foreground leading-relaxed">
              Next steps include predictive analytics using historical patterns
              to forecast user behavior, automated anomaly detection alerts, and
              integration with our payment system for real-time LTV tracking.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
