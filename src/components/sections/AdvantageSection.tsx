'use client';

import React from 'react';
import { ADVANTAGE_DATA } from '@/constants/advantageData';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function AdvantageSection() {
  const leftAdvantages = ADVANTAGE_DATA.advantages.slice(0, 2);  // Poin 01 & 02
  const rightAdvantages = ADVANTAGE_DATA.advantages.slice(2, 4); // Poin 03 & 04

  return (
    <section id="keunggulan" className="relative z-20 -mt-6 sm:-mt-8 bg-white rounded-t-2xl sm:rounded-t-3xl py-10 lg:py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Teks Utama */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <ScrollReveal>
            <span className="text-[var(--green-dark)] font-mono text-xs tracking-widest uppercase font-semibold block mb-2">
              {ADVANTAGE_DATA.subtitle}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 leading-tight">
              {ADVANTAGE_DATA.title}
            </h2>
          </ScrollReveal>
          
          <ScrollReveal delay={100}>
            <p className="text-base text-gray-600 leading-relaxed mt-3">
              {ADVANTAGE_DATA.description}
            </p>
          </ScrollReveal>
        </div>

        {/* Layout 3 Kolom */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Kolom Kiri: Poin 01 & 02 (Order 1 di Mobile & Desktop) */}
          <div className="lg:col-span-4 space-y-8 order-1 lg:order-1">
            {leftAdvantages.map((item, index) => (
              <ScrollReveal key={item.id} delay={150 + index * 100}>
                <div>
                  <div className="flex items-baseline gap-3 mb-1.5">
                    <span className="font-extrabold text-[var(--green-dark)] text-xl sm:text-2xl">
                      {item.id}
                    </span>
                    <h3 className="text-base font-bold text-gray-900 leading-snug">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed pl-8">
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Kolom Tengah: Gambar (Order 2 di Mobile & Desktop) */}
          <div className="lg:col-span-4 flex justify-center items-center py-4 order-2 lg:order-2">
            <ScrollReveal delay={200}>
              <div className="relative w-[280px] sm:w-[320px] lg:w-[360px] aspect-[4/5] max-h-[460px] mx-auto">
                
                {/* Kotak Hijau Aksen 1 & 2 */}
                <div className="absolute top-[12%] right-[22%] w-[38%] h-[40%] bg-[var(--green-bright,#22c55e)] rounded-xl" />
                <div className="absolute bottom-[12%] left-[22%] w-[38%] h-[40%] bg-[var(--green-bright,#22c55e)] rounded-xl" />

                {/* Gambar 1 (Kiri Atas) */}
                <div className="absolute top-0 left-0 w-[58%] h-[72%] shadow-2xl z-10 bg-gray-100 rounded-xl overflow-hidden">
                  <div 
                    className="w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: `url('${ADVANTAGE_DATA.images[0]}')` }}
                  />
                </div>

                {/* Gambar 2 (Kanan Bawah) */}
                <div className="absolute bottom-0 right-0 w-[58%] h-[72%] shadow-2xl z-20 bg-gray-100 rounded-xl overflow-hidden">
                  <div 
                    className="w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: `url('${ADVANTAGE_DATA.images[1]}')` }}
                  />
                </div>

              </div>
            </ScrollReveal>
          </div>

          {/* Kolom Kanan: Poin 03 & 04 (Order 3 di Mobile & Desktop) */}
          <div className="lg:col-span-4 space-y-8 order-3 lg:order-3">
            {rightAdvantages.map((item, index) => (
              <ScrollReveal key={item.id} delay={350 + index * 100}>
                <div>
                  <div className="flex items-baseline gap-3 mb-1.5">
                    <span className="font-extrabold text-[var(--green-dark)] text-xl sm:text-2xl">
                      {item.id}
                    </span>
                    <h3 className="text-base font-bold text-gray-900 leading-snug">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed pl-8">
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}