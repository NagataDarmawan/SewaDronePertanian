import AboutPage from '@/components/sections/about/AboutPage';
import Navbar from '@/components/layouts/Navbar';
import Footer from '@/components/layouts/Footer';
import CTASection from '@/components/sections/CTASection';

export default function TentangKamiRoute() {
return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <AboutPage />
      <CTASection />
      <Footer />
    </main>
  );
}