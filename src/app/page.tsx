import SiteHeader from "./components/SiteHeader";
import IntroLoader from "./components/IntroLoader";
import BackgroundGlow from "./components/BackgroundGlow";
import HeroSection from "./components/HeroSection";
import ProblemSection from "./components/ProblemSection";
import ConceptsSection from "./components/ConceptsSection";
import OfferSection from "./components/OfferSection";
import ProcessSection from "./components/ProcessSection";
import AboutSection from "./components/AboutSection";
import FinalCTA from "./components/FinalCTA";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#050509] text-white">
      <IntroLoader />
      <BackgroundGlow />
      <SiteHeader />
      <HeroSection />
      <ProblemSection />
      <ConceptsSection />
      <OfferSection />
      <ProcessSection />
      <AboutSection />
      <FinalCTA />
    </main>
  );
}