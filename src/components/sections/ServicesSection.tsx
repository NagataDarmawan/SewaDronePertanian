'use client';

import React, { useState } from 'react';
import { SERVICES_DATA } from '@/constants/servicesData';
import ScrollReveal from '@/components/ui/ScrollReveal';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export default function ServiceSection() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const activeService = SERVICES_DATA.services[activeIndex] || SERVICES_DATA.services[0];
  const activeFormattedIndex = String(activeIndex + 1).padStart(2, '0');

  return (
    <section id="services" className="relative bg-black text-white py-12 lg:py-16 overflow-hidden border-0 outline-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="mb-10 lg:mb-12">
          <ScrollReveal>
            <span className="text-[var(--green-bright,#22c55e)] text-xs sm:text-sm tracking-widest uppercase font-semibold block mb-1">
              {SERVICES_DATA.subtitle}
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight mt-1">
              {SERVICES_DATA.title}
            </h2>
          </ScrollReveal>
        </div>

        {/* Layout Utama: List Kiri & Single Foto Kanan */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Kolom Kiri: List Layanan Tanpa Card */}
          <div className="lg:col-span-7 divide-y divide-zinc-800 border-t border-b border-zinc-800">
            {SERVICES_DATA.services.slice(0, 4).map((service, index) => {
              const isOpen = activeIndex === index;
              const formattedIndex = String(index + 1).padStart(2, '0');

              return (
                <ScrollReveal key={service.id || index} delay={index * 100}>
                  <div className="py-5 transition-colors duration-300">
                    
                    {/* Judul Layanan */}
                    <button
                      onClick={() => setActiveIndex(index)}
                      className="w-full text-left flex items-center justify-between gap-4 group focus:outline-none cursor-pointer"
                    >
                      <div className="flex items-center gap-4 sm:gap-6">
                        <span className={`text-sm sm:text-base font-bold transition-colors duration-300 ${
                          isOpen ? 'text-[var(--green-bright,#22c55e)]' : 'text-zinc-500 group-hover:text-zinc-300'
                        }`}>
                          {formattedIndex}
                        </span>
                        <h3 className={`text-lg sm:text-xl font-bold tracking-tight transition-colors duration-300 ${
                          isOpen ? 'text-[var(--green-bright,#22c55e)]' : 'text-white group-hover:text-[var(--green-bright,#22c55e)]'
                        }`}>
                          {service.title}
                        </h3>
                      </div>
                    </button>

                    {/* Penjelasan & Lihat Detail */}
                    <div className={`grid transition-all duration-500 ease-in-out ${
                      isOpen ? 'grid-rows-[1fr] opacity-100 mt-3' : 'grid-rows-[0fr] opacity-0'
                    }`}>
                      <div className="overflow-hidden pl-8 sm:pl-11">
                        <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-4 max-w-xl">
                          {service.description}
                        </p>

                        <Link
                          href={service.slug ? `/layanan/${service.slug}` : '/layanan'}
                          className="inline-flex items-center gap-1.5 group/link text-white font-medium text-xs sm:text-sm py-0.5 relative"
                        >
                          <span className="relative z-10 font-semibold group-hover/link:text-[var(--green-bright,#22c55e)] transition-colors">
                            Lihat Detail
                          </span>
                          
                          <ArrowUpRight className="w-4 h-4 text-[var(--green-bright,#22c55e)] transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />

                          <span className="absolute left-0 bottom-0 w-full h-[1.5px] bg-zinc-700 origin-left scale-x-100 transition-transform duration-300">
                            <span className="absolute inset-0 bg-[var(--green-bright,#22c55e)] origin-left scale-x-0 group-hover/link:scale-x-100 transition-transform duration-300" />
                          </span>
                        </Link>
                      </div>
                    </div>

                  </div>
                </ScrollReveal>
              );
            })}
          </div>

          {/* Kolom Kanan: 1 Foto Dinamis (Tanpa Efek Zoom Hover) */}
          <div className="lg:col-span-5 sticky top-28">
            <ScrollReveal delay={200}>
              <div className="relative h-80 sm:h-96 lg:h-[420px] rounded-3xl overflow-hidden border border-zinc-800 shadow-2xl bg-zinc-900">
                {/* Background Foto Dinamis (Statis tanpa Zoom) */}
                <div 
                  key={activeIndex}
                  className="absolute inset-0 bg-cover bg-center transition-opacity duration-500 ease-out"
                  style={{ backgroundImage: `url('${activeService.image}')` }}
                />
                
                {/* Overlay Gradasi Gelap */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/10" />

                {/* Angka Polos Tanpa Card di Kanan Atas */}
                <div className="absolute top-5 right-6 z-10">
                  <span className="text-2xl sm:text-3xl font-extrabold text-white/90 drop-shadow-md tracking-wider">
                    {activeFormattedIndex}
                  </span>
                </div>

                {/* Judul & Penjelasan di Dalam Foto (Kiri Bawah) */}
                <div className="absolute bottom-0 inset-x-0 p-6 sm:p-8 z-10 space-y-1.5">
                  <h4 className="text-xl sm:text-2xl font-bold text-white leading-snug">
                    {activeService.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed line-clamp-2">
                    {activeService.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>

        </div>

      </div>
    </section>
  );
}