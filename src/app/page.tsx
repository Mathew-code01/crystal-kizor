import HeroSection from "@/components/hero/HeroSection";
import SiteFooter from "@/components/layout/SiteFooter";
import SiteHeader from "@/components/layout/SiteHeader";
import AboutSection from "@/components/about/AboutSection";
import ContactSection from "@/components/contact/ContactSection";
import EcosystemSection from "@/components/ecosystem/EcosystemSection";
import IdeasSection from "@/components/ideas/IdeasSection";
import PointOfViewSection from "@/components/philosophy/PointOfViewSection";
import SelectedWorkSection from "@/components/work/SelectedWorkSection";

export default function HomePage() {
  return (
    <div className="min-h-screen overflow-clip bg-paper text-ink">
      <SiteHeader />
      <main id="main-content" className="scroll-mt-20">
        <HeroSection />
        <PointOfViewSection />
        <SelectedWorkSection />
        <EcosystemSection />
        <IdeasSection />
        <AboutSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  );
}
