'use client';

import React from 'react';
import { CTA_DATA } from '@/constants/ctaData';
import { SERVICES_DATA } from '@/constants/servicesData';
import { SITE_CONFIG } from '@/constants/siteConfig';
import ScrollReveal from '@/components/ui/ScrollReveal';
import Button from '@/components/ui/Button';
import { MessageCircle } from 'lucide-react';

export default function CTASection() {
  const ctaUrl = `${SITE_CONFIG.contact.whatsapp}?text=${encodeURIComponent(SITE_CONFIG.ctaMessageTemplate)}`;

  return (
    <section className="relative z-10 overflow-hidden w-full bg-black">
      
      {/* Background Foto dengan Gradasi yang Menyatu ke Hitam */}
      <div 
        className="relative bg-cover bg-center pt-24 pb-20 lg:pt-32 lg:pb-28 px-4 sm:px-6 lg:px-8"
        style={{ backgroundImage: `url('${SERVICES_DATA.headerImage}')` }}
      >
        {/* Overlay disesuaikan bagian bawahnya agar melebur ke warna hitam */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/45 to-black"></div>

        {/* Container Konten Utama */}
        <div className="relative z-10 w-full max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
            
            {/* Judul Utama */}
            <div className="lg:col-span-6 text-left">
              <ScrollReveal>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[var(--green-bright,#22c55e)] leading-tight">
                  {CTA_DATA.title}
                </h2>
              </ScrollReveal>
            </div>

            {/* Teks Penjelasan & Tombol */}
            <div className="lg:col-span-6 flex flex-col items-start lg:items-end text-left lg:text-right space-y-6">
              <ScrollReveal delay={100}>
                <p className="text-base sm:text-lg text-gray-200 leading-relaxed max-w-xl">
                  {CTA_DATA.description}
                </p>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <div>
                  <Button
                    href={ctaUrl}
                    variant="white"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="!px-8 !py-4 !text-base sm:!px-10 sm:!py-5 sm:!text-lg shadow-2xl"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>{CTA_DATA.buttonText}</span>
                  </Button>
                </div>
              </ScrollReveal>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}