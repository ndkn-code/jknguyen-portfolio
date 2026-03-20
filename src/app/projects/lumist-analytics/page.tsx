import type { Metadata } from "next";
import Footer from "@/components/footer";
import BackButton from "@/components/projects/back-button";
import HeroSection from "./hero";
import ProblemSection from "./problem";
import InsightsSection from "./insights";
import TechSection from "./tech";
import LessonsSection from "./lessons";
import ImpactSection from "./impact";

export const metadata: Metadata = {
  title: "Lumist Analytics Dashboard - Case Study | Jack Nguyen",
  description:
    "A full-stack product analytics platform driving data-informed decisions for an SAT prep startup. Built with React, Supabase, Recharts, and Gemini AI.",
};

export default function LumistAnalyticsPage() {
  return (
    <>
      <BackButton />
      <main>
        <HeroSection />
        <ProblemSection />
        <InsightsSection />
        <TechSection />
        <LessonsSection />
        <ImpactSection />
      </main>
      <Footer />
    </>
  );
}
