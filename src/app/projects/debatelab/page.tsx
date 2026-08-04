import type { Metadata } from "next";
import Footer from "@/components/footer";
import BackButton from "@/components/projects/back-button";
import HeroSection from "./hero";
import WhySection from "./why";
import ShowcaseSection from "./showcase";
import ArchitectureSection from "./architecture";
import FeaturesSection from "./features";
import ImpactSection from "./impact";
import { careerPublic } from "@/data/career-public";

const thinkfy = careerPublic.projects.find((project) => project.id === "thinkfy")!;

export const metadata: Metadata = {
  title: `${thinkfy.title} - Case Study | Jack Nguyen`,
  description: thinkfy.description,
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
