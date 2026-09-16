'use client';

import React from 'react';
import { ADVANTAGE_DATA } from '@/constants/advantageData';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function AdvantageSection() {
  return (
    <section id="keunggulan" className="relative z-20 -mt-6 sm:-mt-8 bg-white rounded-t-3xl sm:rounded-t-[32px] py-10 lg:py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Layout 2 Kolom */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Kolom Kiri: Layout Foto Bertumpuk Tanpa Animasi Hover */}
          <div className="lg:col-span-5 flex justify-center items-center py-6">
            <ScrollReveal delay={200} className="w-full max-w-sm lg:max-w-none">
              <div className="relative w-full aspect-[4/5] max-h-[520px]">
                
                {/* Kotak Hijau 1 (Atas Tengah) */}
                <div className="absolute top-[12%] right-[22%] w-[38%] h-[40%] bg-[var(--green-bright,#22c55e)] z-0" />

                {/* Kotak Hijau 2 (Bawah Tengah) */}
                <div className="absolute bottom-[12%] left-[22%] w-[38%] h-[40%] bg-[var(--green-bright,#22c55e)] z-0" />

                {/* Gambar 1 (Kiri Atas - Tanpa Hover Zoom) */}
                <div className="absolute top-0 left-0 w-[58%] h-[72%] shadow-2xl z-10 bg-gray-100">
                  <div 
                    className="w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: `url('${ADVANTAGE_DATA.images[0]}')` }}
                  />
                </div>

                {/* Gambar 2 (Kanan Bawah - Tanpa Hover Zoom) */}
                <div className="absolute bottom-0 right-0 w-[58%] h-[72%] shadow-2xl z-20 bg-gray-100">
                  <div 
                    className="w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: `url('${ADVANTAGE_DATA.images[1]}')` }}
                  />
                </div>

              </div>
            </ScrollReveal>
          </div>

          {/* Kolom Kanan: Judul, Deskripsi, & Poin Keunggulan */}
          <div className="lg:col-span-7 space-y-6 flex flex-col justify-center">
            
            {/* Header Teks */}
            <div>
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

            {/* Daftar Poin Keunggulan */}
            <div className="space-y-4 pt-1">
              {ADVANTAGE_DATA.advantages.map((item, index) => (
                <ScrollReveal key={item.id} delay={150 + (index * 100)}>
                  <div>
                    <div className="flex items-baseline gap-3 mb-1">
                      <span className="font-extrabold text-[var(--green-dark)] text-xl sm:text-2xl">
                        {item.id}
                      </span>
                      <h3 className="text-base font-bold text-gray-900">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed pl-9">
                      {item.description}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}