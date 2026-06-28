import type { Metadata } from "next";
import Footer from "@/components/footer";
import BackButton from "@/components/projects/back-button";
import HeroSection from "./hero";
import MethodologySection from "./methodology";
import CleaningSection from "./cleaning";
import FindingsSection from "./findings";
import DashboardsSection from "./dashboards";
import ImpactSection from "./impact";

export const metadata: Metadata = {
  title: "E-Commerce Customer & Revenue Analytics — Data Case Study | Jack Nguyen",
  description:
    "Two years of real UK online-retail transactions (UCI Online Retail II): RFM customer segmentation, cohort retention, and revenue concentration on £19.6M across 5,852 customers. SQL, Python, and Tableau — fully reproducible from a public dataset.",
};

export default function OnlineRetailPage() {
  return (
    <>
      <BackButton />
      <main>
        <HeroSection />
        <MethodologySection />
        <CleaningSection />
        <FindingsSection />
        <DashboardsSection />
        <ImpactSection />
      </main>
      <Footer />
    </>
  );
}
