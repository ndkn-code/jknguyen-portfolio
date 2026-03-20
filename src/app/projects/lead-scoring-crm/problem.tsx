"use client";

import { FadeUp, motion, staggerContainer, staggerItem } from "@/components/animations/motion";

const painPoints = [
  {
    number: "01",
    title: "Manual Lead Processing",
    description: "Every form submission was manually reviewed and assigned by the team.",
  },
  {
    number: "02",
    title: "No Priority System",
    description: "All leads treated equally regardless of their conversion likelihood.",
  },
  {
    number: "03",
    title: "Lost Partial Leads",
    description: "Abandoned forms with good data were never followed up on.",
  },
  {
    number: "04",
    title: "No Accountability",
    description: "No tracking of response times or penalties for delays in follow-ups.",
  },
];

export default function ProblemSection() {
  return (
    <section id="problem" className="py-32 px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Numbered pain points - vertical layout, different from AI Support's grid */}
        <FadeUp>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight max-w-3xl">
            Every lead was a coin flip.
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mb-20">
            Without scoring, our sales team treated every form submission the
            same. Referrals from existing parents got the same priority as
            cold inquiries. High-intent leads with upcoming test dates waited
            in the same queue as casual browsers.
          </p>
        </FadeUp>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-6"
        >
          {painPoints.map((point, i) => (
            <motion.div
              key={i}
              variants={staggerItem}
              className="flex items-start gap-8 group"
            >
              <span className="text-5xl font-bold text-border group-hover:text-primary/30 transition-colors flex-shrink-0 w-20 text-right font-mono">
                {point.number}
              </span>
              <div className="border-l-2 border-border group-hover:border-primary/50 transition-colors pl-8 py-2">
                <h3 className="font-bold text-xl mb-2 group-hover:text-primary transition-colors">
                  {point.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {point.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
