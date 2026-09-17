import HeroSection from "@/components/sections/HeroSection";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import AboutSection from "@/components/sections/about/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import WorkFlowSection from "@/components/sections/AdvantageSection";
import GallerySection from "@/components/sections/GallerySection";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";
import StatsSection from "@/components/sections/StatsSection";
import CakupanSection from "@/components/sections/CakupanSection"
import CaraKerjaSection from "@/components/sections/CaraKerjaSection"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <ServicesSection />
      <CakupanSection />
      <WorkFlowSection />
      <GallerySection />
      <CaraKerjaSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  );
}