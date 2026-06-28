import type { Metadata } from "next";
import Footer from "@/components/footer";
import BackButton from "@/components/projects/back-button";
import HeroSection from "./hero";
import MethodologySection from "./methodology";
import AuditSection from "./audit";
import FindingsSection from "./findings";
import DashboardsSection from "./dashboards";
import ImpactSection from "./impact";

export const metadata: Metadata = {
  title: "Vendor & AP Spend Analytics — Data Case Study | Jack Nguyen",
  description:
    "An accounts-payable spend and vendor master-data audit of a two-entity health system: where AP dollars concentrate, which vendors to clean up, and where payment risk sits. SQL, Power BI, and Tableau on a synthetic dataset modeled on a real Unit4/Coda ERP schema.",
};

export default function VendorApAnalyticsPage() {
  return (
    <>
      <BackButton />
      <main>
        <HeroSection />
        <MethodologySection />
        <AuditSection />
        <FindingsSection />
        <DashboardsSection />
        <ImpactSection />
      </main>
      <Footer />
    </>
  );
}
