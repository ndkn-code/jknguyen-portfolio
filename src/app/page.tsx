import Footer from "@/components/footer";
import HeroHome from "@/components/home/hero";
import ExperienceAndProjects from "@/components/home/experience-projects";
import WhyPMAndConnect from "@/components/home/process-location";

export default function Home() {
  return (
    <>
      <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 pb-20 relative">
        {/* Grid background */}
        <div
          className="absolute inset-0 -z-10 opacity-30 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(#e5e7eb 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <HeroHome />
        <ExperienceAndProjects />
        <WhyPMAndConnect />
      </main>
      <Footer />
    </>
  );
}
