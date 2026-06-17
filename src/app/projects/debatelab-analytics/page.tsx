import type { Metadata } from "next";
import Footer from "@/components/footer";
import BackButton from "@/components/projects/back-button";
import HeroSection from "./hero";
import MethodologySection from "./methodology";
import FindingsSection from "./findings";
import DashboardsSection from "./dashboards";
import ImpactSection from "./impact";

export const metadata: Metadata = {
  title: "DebateLab Analytics — Data Case Study | Jack Nguyen",
  description:
    "An end-to-end data + business analysis of an AI debate-practice platform: what drives skill improvement, retention, and free→premium conversion. SQL, Python, Tableau, and Power BI on a synthetic dataset modeled on the real schema.",
};

export default function DebateLabAnalyticsPage() {
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
