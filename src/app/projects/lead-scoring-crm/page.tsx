import type { Metadata } from "next";
import Footer from "@/components/footer";
import BackButton from "@/components/projects/back-button";
import HeroSection from "./hero";
import ProblemSection from "./problem";
import ScoringSection from "./scoring";
import PipelineSection from "./pipeline";
import AccountabilitySection from "./accountability";
import ImpactSection from "./impact";

export const metadata: Metadata = {
  title: "Lead Scoring CRM - Case Study | Jack Nguyen",
  description:
    "Automated lead scoring pipeline with Jira workflow integration, multi-factor scoring algorithm, and team accountability system.",
};

export default function LeadScoringCRMPage() {
  return (
    <>
      <BackButton />
      <main>
        <HeroSection />
        <ProblemSection />
        <ScoringSection />
        <PipelineSection />
        <AccountabilitySection />
        <ImpactSection />
      </main>
      <Footer />
    </>
  );
}
