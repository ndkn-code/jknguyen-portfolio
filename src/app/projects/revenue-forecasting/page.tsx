import type { Metadata } from "next";
import Footer from "@/components/footer";
import BackButton from "@/components/projects/back-button";
import HeroSection from "./hero";
import MethodologySection from "./methodology";
import FindingsSection from "./findings";
import ImpactSection from "./impact";

export const metadata: Metadata = {
  title: "Revenue Forecasting (ML) — Case Study | Jack Nguyen",
  description:
    "Forecasting daily revenue for a mobile-game launch with a gradient-boosting model and a walk-forward backtest — cutting forecast error from ~22% to ~4.5%. Python, scikit-learn, pandas. A recreation of my VNG forecasting work on synthetic data.",
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
