'use client';

import React, { useState } from 'react';
import { SERVICES_DATA } from '@/constants/servicesData';
import ScrollReveal from '@/components/ui/ScrollReveal';
import Button from '@/components/ui/Button';

export default function ServiceSection() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handleMobileClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section id="services" className="relative bg-black text-white py-12 lg:py-16 overflow-hidden border-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="mb-8 sm:mb-10">
          <ScrollReveal>
            <span className="text-[var(--green-bright,#22c55e)] font-mono text-xs sm:text-sm tracking-widest uppercase font-semibold block mb-1">
              {SERVICES_DATA.subtitle}
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight">
              {SERVICES_DATA.title}
            </h2>
          </ScrollReveal>
        </div>

        {/* Accordion Horizontal Container */}
        <div className="flex flex-col lg:flex-row gap-3 sm:gap-4 w-full h-auto lg:h-[500px]">
          {SERVICES_DATA.services.slice(0, 5).map((service, index) => {
            const isActive = activeIndex === index;
            const formattedIndex = String(index + 1).padStart(2, '0');

            return (
              <div
                key={service.id || index}
                onClick={() => handleMobileClick(index)}
                onMouseEnter={() => setActiveIndex(index)}
                className={`relative rounded-2xl sm:rounded-3xl overflow-hidden transition-all duration-500 ease-in-out cursor-pointer border border-zinc-800/80 ${
                  isActive 
                    ? 'h-[380px] lg:h-full lg:flex-[3.5] bg-zinc-900 shadow-2xl' 
                    : 'h-[64px] lg:h-full lg:flex-[0.8] bg-zinc-950 hover:bg-zinc-900/80'
                }`}
              >
                {/* Background Image & Overlay Gradasi */}
                <div 
                  className={`absolute inset-0 bg-cover bg-center transition-opacity duration-500 ease-in-out ${
                    isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                  }`}
                  style={{ backgroundImage: `url('${service.image}')` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30" />
                </div>

                {/* ================= STATE TERTUTUP (DESKTOP VERTIKAL) ================= */}
                <div className={`hidden lg:flex flex-col justify-between h-full p-6 relative z-10 transition-opacity duration-300 ${
                  isActive ? 'opacity-0 pointer-events-none' : 'opacity-100'
                }`}>
                  <div className="text-[var(--green-bright,#22c55e)] font-extrabold text-lg tracking-wider">
                    {formattedIndex}
                  </div>
                  <div className="my-auto flex justify-center items-center py-4">
                    <span className="text-[var(--green-bright,#22c55e)] font-bold text-base uppercase tracking-widest whitespace-nowrap rotate-180 [writing-mode:vertical-rl]">
                      {service.title}
                    </span>
                  </div>
                  <div className="w-1.5 h-1.5 rounded-full bg-[var(--green-bright,#22c55e)] mx-auto" />
                </div>

                {/* ================= STATE TERTUTUP (MOBILE HORIZONTAL BAR) ================= */}
                <div className={`flex lg:hidden items-center justify-between px-5 h-full relative z-10 transition-opacity duration-300 ${
                  isActive ? 'opacity-0 pointer-events-none' : 'opacity-100'
                }`}>
                  <div className="flex items-center gap-4">
                    <span className="text-[var(--green-bright,#22c55e)] font-extrabold text-sm">{formattedIndex}</span>
                    <span className="text-[var(--green-bright,#22c55e)] font-bold text-sm tracking-wide uppercase truncate max-w-[220px]">
                      {service.title}
                    </span>
                  </div>
                  <div className="w-2 h-2 rounded-full bg-[var(--green-bright,#22c55e)]" />
                </div>

                {/* ================= STATE TERBUKA (AKTIF) ================= */}
                <div className={`absolute inset-0 z-20 p-6 sm:p-8 flex flex-col justify-between transition-all duration-500 ${
                  isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
                }`}>
                  
                  {/* Indikator Nomor */}
                  <div className="flex items-center justify-end">
                    <span className="text-lg sm:text-2xl font-extrabold text-white/90 font-mono tracking-widest drop-shadow-md">
                      {formattedIndex} / 0{SERVICES_DATA.services.length}
                    </span>
                  </div>

                  {/* Konten Judul, Deskripsi & Tombol Detail */}
                  <div className="space-y-3 sm:space-y-4 max-w-2xl">
                    <h3 className="text-xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight drop-shadow-md">
                      {service.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed line-clamp-3 drop-shadow-sm font-normal">
                      {service.description}
                    </p>

                    <div className="pt-1 sm:pt-2">
                      <Button
                        href={service.slug ? `/layanan/${service.slug}` : '/layanan'}
                        variant="outline"
                      >
                        Lihat Detail
                      </Button>
                    </div>
                  </div>

                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}