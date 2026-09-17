'use client';

import React, { useState } from 'react';
import { useParams, notFound } from 'next/navigation';
import { SERVICES_DATA } from '@/constants/servicesData';
import Button from '@/components/ui/Button';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { ShieldAlert, ArrowLeft, Check } from 'lucide-react';
import Link from 'next/link';
import Navbar from '@/components/layouts/Navbar';
import Footer from '@/components/layouts/Footer';
import CTASection from '@/components/sections/CTASection';
import BookingModal from '@/components/ui/BookingModal';

export default function ServiceDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const service = SERVICES_DATA.services.find((s) => s.slug === slug);

  if (!service) return notFound();

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Navbar />
      
      <div className="pt-24 pb-16">
        {/* Tombol Kembali */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
          <Link href="/#services" className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-[var(--green-dark)] transition-colors mb-6">
            <ArrowLeft className="w-4 h-4" />
            <span>Kembali ke Beranda</span>
          </Link>
        </div>

        {/* Header Title & Photo */}
        <section className="relative pb-8 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <span className="text-[var(--green-dark)] font-mono text-xs tracking-widest uppercase font-semibold block mb-2">
                Detail Layanan
              </span>
              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-gray-900 mb-4">
                {service.title}
              </h1>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-3xl">
                {service.tagline || service.description}
              </p>
            </ScrollReveal>

            <div className="mt-8 rounded-3xl overflow-hidden border border-gray-200 shadow-lg">
              <div 
                className="w-full h-[300px] sm:h-[420px] bg-cover bg-center"
                style={{ backgroundImage: `url('${service.mainPhoto || service.image || SERVICES_DATA.headerImage}')` }}
              />
            </div>
          </div>
        </section>

        {/* Main Content Layout */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Content */}
            <div className="lg:col-span-8 space-y-10">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Tentang Layanan</h2>
                <div className="text-gray-700 leading-relaxed text-base sm:text-lg space-y-4 whitespace-pre-line">
                  {service.fullDescription || service.description}
                </div>
              </div>

              {/* Cocok Untuk - Minimalist List */}
              {service.suitableFor?.length > 0 && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Cocok Untuk</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {service.suitableFor.map((item, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-[var(--green-dark)] shrink-0" />
                        <span className="text-gray-700 text-base">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Yang Perlu Disiapkan - Minimalist List */}
              {service.clientPreparations?.length > 0 && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Yang Perlu Disiapkan Pelanggan</h2>
                  <ul className="space-y-3">
                    {service.clientPreparations.map((prep, index) => (
                      <li key={index} className="flex items-center gap-3 text-gray-700 text-base">
                        <span className="w-2 h-2 rounded-full bg-[var(--green-dark)] shrink-0" />
                        <span>{prep}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Note Kondisi */}
              {service.workConditionsNote && (
                <div className="p-5 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 flex gap-4 items-start">
                  <ShieldAlert className="w-5 h-5 shrink-0 text-amber-600 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-amber-950 text-sm mb-0.5">Catatan Kondisi Pekerjaan</h3>
                    <p className="text-sm leading-relaxed">{service.workConditionsNote}</p>
                  </div>
                </div>
              )}
            </div>

            {/* Right Sidebar: Ringkas HANYA Card Booking */}
            <div className="lg:col-span-4">
              <div className="p-6 sm:p-8 rounded-3xl bg-gray-50 border border-gray-200 shadow-sm space-y-6 sticky top-28">
                <div>
                  <span className="text-xs uppercase font-mono tracking-widest text-gray-500 block mb-1">Estimasi Tarif</span>
                  <div className="text-2xl sm:text-3xl font-extrabold text-[var(--green-dark)]">
                    {service.price} <span className="text-sm font-normal text-gray-600">{service.unit}</span>
                  </div>
                </div>

                {service.pricingNote && (
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-200 pt-4">
                    {service.pricingNote}
                  </p>
                )}

                <Button 
                  onClick={() => setIsModalOpen(true)}
                  variant="primary"
                  className="w-full py-4 text-center justify-center font-bold shadow-md cursor-pointer"
                >
                  <span>Booking Sekarang</span>
                </Button>
              </div>
            </div>

          </div>
        </div>
      </div>

      <CTASection />
      <Footer />

      <BookingModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        serviceTitle={service.title}
      />
    </main>
  );
}