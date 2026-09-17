'use client';

import React from 'react';
import { ABOUT_DATA } from '@/constants/aboutData';
import ScrollReveal from '@/components/ui/ScrollReveal';
import Button from '@/components/ui/Button';

export default function AboutSection() {
  return (
    <div className="bg-black w-full overflow-hidden border-0 p-0 m-0">
      {/* 1. About Us Section */}
      <section id="about" className="relative overflow-hidden bg-black border-0">
        <div 
          className="relative bg-cover bg-center py-8 lg:py-12 px-4 sm:px-6 lg:px-8 border-0"
          style={{ backgroundImage: `url('${ABOUT_DATA.story.droneBannerImage}')` }}
        >
          {/* Overlay Gelap Hitam */}
          <div className="absolute inset-0 bg-black/85 bg-gradient-to-b from-black via-black/80 to-black pointer-events-none" />

          {/* Layout Grid 2 Kolom */}
          <div className="relative z-20 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Kolom Teks */}
              <div className="lg:col-span-7 space-y-4 text-left order-2 lg:order-1">
                <ScrollReveal>
                  <span className="text-[var(--green-bright)] font-mono text-xs sm:text-sm tracking-widest uppercase font-semibold">
                    {ABOUT_DATA.story.subtitle}
                  </span>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight mt-1">
                    {ABOUT_DATA.story.title}
                  </h2>
                </ScrollReveal>

                {ABOUT_DATA.story.paragraphs.map((p, idx) => (
                  <ScrollReveal key={idx} delay={100 * (idx + 1)}>
                    <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                      {p}
                    </p>
                  </ScrollReveal>
                ))}

                <ScrollReveal delay={300}>
                  <div className="pt-2">
                    <Button
                      href="/tentang-kami"
                      variant="white"
                      className="px-6 py-2.5 sm:px-8 sm:py-3 shadow-lg text-sm sm:text-base"
                    >
                      <span>Selengkapnya</span>
                    </Button>
                  </div>
                </ScrollReveal>
              </div>
              
              {/* Kolom 3 Foto Skewed (Tanpa Hover Zoom) */}
              <div className="lg:col-span-5 order-1 lg:order-2">
                <ScrollReveal delay={200}>
                  <div className="flex gap-3 justify-center items-center py-2 sm:py-4">
                    {ABOUT_DATA.story.storyImages.map((imgUrl, idx) => (
                      <div 
                        key={idx} 
                        className="w-1/3 h-52 sm:h-64 lg:h-72 -skew-x-6 rounded-2xl overflow-hidden shadow-2xl border-0 sm:border sm:border-white/20 bg-zinc-950"
                      >
                        <div 
                          className="w-full h-full skew-x-6 scale-125 bg-cover bg-center"
                          style={{ backgroundImage: `url('${imgUrl}')` }}
                        />
                      </div>
                    ))}
                  </div>
                </ScrollReveal>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 2. Banner Foto Drone Full-Frame */}
      <section className="relative w-full h-[400px] sm:h-[500px] lg:h-[550px] overflow-hidden bg-black -mt-1 pt-1 border-0">
        <div 
          className="w-full h-full bg-cover bg-center relative flex items-end pb-6 sm:pb-8 px-4 sm:px-6 lg:px-8 border-0"
          style={{ backgroundImage: `url('${ABOUT_DATA.story.droneBannerImage}')` }}
        >
          {/* Overlay Gradasi Hitam Pekat di Atas & Bawah */}
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black to-transparent pointer-events-none" />

          {/* Tipografi Kanan Bawah */}
          <div className="relative z-10 max-w-7xl mx-auto w-full flex justify-end">
            <ScrollReveal>
              <div className="max-w-xl text-right">
                <p className="text-xl sm:text-2xl lg:text-3xl font-light text-white/95 leading-snug tracking-wide drop-shadow-md">
                  {ABOUT_DATA.story.bannerTagline}
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}