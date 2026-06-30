import SiteHeader from "./components/SiteHeader";
import IntroLoader from "./components/IntroLoader";
import HeroSection from "./components/HeroSection";
import ProjectsSection from "./components/ProjectsSection";
import ConceptsSection from "./components/ConceptsSection";
import ReviewsSection from "./components/ReviewsSection";
import AboutSection from "./components/AboutSection";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";


export default function Home() {
  return (
    <main className="min-h-screen overflow-x-clip bg-[#050509] text-white">
    <IntroLoader />
      <SiteHeader />
      <HeroSection />
      <ProjectsSection />
      <AboutSection />
      <ConceptsSection />
      <ReviewsSection />
      <FinalCTA />
      <Footer />
    </main>
  );
}