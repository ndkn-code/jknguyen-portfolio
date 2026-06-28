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
    "Forecasting volatile daily revenue through a product launch with a gradient-boosting model and a leakage-safe walk-forward backtest, cutting forecast error from ~22% to ~4.5%. Python, scikit-learn, pandas. A recreation of my VNG forecasting work on synthetic data; the approach transfers across industries.",
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
