import type { Metadata } from "next";
import Footer from "@/components/footer";
import BackButton from "@/components/projects/back-button";
import HeroSection from "./hero";
import MethodologySection from "./methodology";
import FindingsSection from "./findings";
import ImpactSection from "./impact";

export const metadata: Metadata = {
  title: "Revenue Forecasting (ML): Case Study | Jack Nguyen",
  description:
    "A public synthetic-data forecasting reconstruction using gradient boosting and leakage-safe walk-forward validation, reducing MAPE from approximately 22% to 4.5%.",
};

export default function RevenueForecastingPage() {
  return (
    <>
      <BackButton />
      <main>
        <HeroSection />
        <MethodologySection />
        <FindingsSection />
        <ImpactSection />
      </main>
      <Footer />
    </>
  );
}
