import type { Metadata } from "next";
import Footer from "@/components/footer";
import BackButton from "@/components/projects/back-button";
import HeroSection from "./hero";
import WhySection from "./why";
import ShowcaseSection from "./showcase";
import ArchitectureSection from "./architecture";
import FeaturesSection from "./features";
import ImpactSection from "./impact";

export const metadata: Metadata = {
  title: "DebateLab - Case Study | Jack Nguyen",
  description:
    "AI-powered solo debate practice platform for Vietnamese students. Real-time speech-to-text, AI analysis, coaching, gamification, and bilingual i18n.",
};

export default function DebateLabPage() {
  return (
    <>
      <BackButton />
      <main>
        <HeroSection />
        <WhySection />
        <ShowcaseSection />
        <ArchitectureSection />
        <FeaturesSection />
        <ImpactSection />
      </main>
      <Footer />
    </>
  );
}
