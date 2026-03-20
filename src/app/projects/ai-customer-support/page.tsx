import type { Metadata } from "next";
import Footer from "@/components/footer";
import BackButton from "@/components/projects/back-button";
import HeroSection from "./hero";
import ProblemSection from "./problem";
import HowItWorksSection from "./how-it-works";
import FeaturesSection from "./features";
import EscalationSection from "./escalation";
import ImpactSection from "./impact";

export const metadata: Metadata = {
  title: "AI Customer Support System - Case Study | Jack Nguyen",
  description:
    "Multi-platform RAG chatbot with intelligent sales tracking and human escalation. Built with n8n, Gemini AI, Supabase Vector, and Zalo API.",
};

export default function AICustomerSupportPage() {
  return (
    <>
      <BackButton />
      <main>
        <HeroSection />
        <ProblemSection />
        <HowItWorksSection />
        <FeaturesSection />
        <EscalationSection />
        <ImpactSection />
      </main>
      <Footer />
    </>
  );
}
