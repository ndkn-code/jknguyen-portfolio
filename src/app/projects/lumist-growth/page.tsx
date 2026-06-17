import type { Metadata } from "next";
import Footer from "@/components/footer";
import BackButton from "@/components/projects/back-button";
import HeroSection from "./hero";
import MethodologySection from "./methodology";
import FindingsSection from "./findings";
import DashboardsSection from "./dashboards";
import ImpactSection from "./impact";

export const metadata: Metadata = {
  title: "Lumist Growth Analytics — Data Case Study | Jack Nguyen",
  description:
    "An acquisition & growth analysis of an SAT-prep platform: which channels actually convert, what turns free students into paying ones, and how retention holds. SQL, Python, and Tableau on a synthetic dataset calibrated to real production distributions.",
};

export default function LumistGrowthPage() {
  return (
    <>
      <BackButton />
      <main>
        <HeroSection />
        <MethodologySection />
        <FindingsSection />
        <DashboardsSection />
        <ImpactSection />
      </main>
      <Footer />
    </>
  );
}
