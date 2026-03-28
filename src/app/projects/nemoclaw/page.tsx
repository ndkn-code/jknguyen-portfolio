import type { Metadata } from "next";
import Footer from "@/components/footer";
import BackButton from "@/components/projects/back-button";
import HeroSection from "./hero";
import ProblemSection from "./problem";
import ArchitectureSection from "./architecture";
import SkillsSection from "./skills";
import SecuritySection from "./security";
import ImpactSection from "./impact";

export const metadata: Metadata = {
  title: "Lumi the Secretary - Case Study | Jack Nguyen",
  description:
    "Internal AI agent for the Lumist team. Telegram bot with Obsidian vault brain, answering business questions from 5 data sources, generating blog content, powered by OpenClaw + NVIDIA NemoClaw security sandbox.",
};

export default function NemoClawPage() {
  return (
    <>
      <BackButton />
      <main>
        <HeroSection />
        <ProblemSection />
        <ArchitectureSection />
        <SkillsSection />
        <SecuritySection />
        <ImpactSection />
      </main>
      <Footer />
    </>
  );
}
