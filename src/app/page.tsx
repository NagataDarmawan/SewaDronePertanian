import HeroSection from "@/components/sections/HeroSection";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import AboutSection from "@/components/sections/about/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import WorkFlowSection from "@/components/sections/WorkflowSection";
import GallerySection from "@/components/sections/GallerySection";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import StatsSection from "@/components/sections/StatsSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <ServicesSection />
      <WorkFlowSection />
      <GallerySection />
      <TestimonialSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  );
}