import SiteHeader from "./components/SiteHeader";
import IntroLoader from "./components/IntroLoader";
import HeroSection from "./components/HeroSection";
import ProjectsSection from "./components/ProjectsSection";
import PrinciplesSection from "./components/PrinciplesSection";
import ReviewsSection from "./components/ReviewsSection";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";
import FinalCTAReveal from "./components/FinalCTAReveal";


export default function Home() {
  return (
    <main className="min-h-screen bg-[#050509] text-white">
      <IntroLoader />
      <SiteHeader />
      <HeroSection />
      <ProjectsSection />
      <AboutSection />
      <PrinciplesSection />
      <ReviewsSection />
      <FinalCTAReveal />
      <Footer />
    </main>
  );
}