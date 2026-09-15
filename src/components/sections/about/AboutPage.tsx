'use client';

import React from 'react';
import { ABOUT_DATA } from '@/constants/aboutData';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { CheckCircle2 } from 'lucide-react';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      
      {/* Hero Full-Frame Section */}
      <div 
        className="relative h-[50vh] w-full bg-cover bg-center flex items-end pb-8 sm:pb-10" 
        style={{ backgroundImage: `url('${ABOUT_DATA.hero.backgroundImage}')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--green-dark)] via-[var(--green-dark)]/60 to-black/30"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-left text-white space-y-2">
          <div className="max-w-3xl space-y-2">
            <span className="text-white font-mono text-xs sm:text-sm tracking-widest uppercase font-semibold">
              {ABOUT_DATA.hero.subtitle}
            </span>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-snug">
              {ABOUT_DATA.hero.title}
            </h1>
            <p className="text-xs sm:text-sm text-gray-200 leading-relaxed">
              {ABOUT_DATA.hero.description}
            </p>
          </div>
        </div>
      </div>

      {/* Section 1: Kisah Awal (Rounded atas menimpa hero) */}
      <section className="relative z-20 -mt-6 sm:-mt-8 py-16 lg:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden bg-white rounded-t-[32px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <ScrollReveal>
              <span className="text-[var(--green-dark)] font-mono text-xs tracking-widest uppercase font-semibold">
                {ABOUT_DATA.story.subtitle}
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight mt-2">
                {ABOUT_DATA.story.title}
              </h2>
            </ScrollReveal>

            {ABOUT_DATA.story.paragraphs.map((p, idx) => (
              <ScrollReveal key={idx} delay={100 * (idx + 1)}>
                <p className="text-base text-gray-600 leading-relaxed">
                  {p}
                </p>
              </ScrollReveal>
            ))}
          </div>
          
          {/* Foto Kanan */}
          <div className="lg:col-span-5">
            <ScrollReveal delay={200}>
              <div className="flex gap-3 justify-center items-center py-6">
                {ABOUT_DATA.story.storyImages.map((imgUrl, idx) => {
                  return (
                    <div key={idx} className="w-1/3 h-64 sm:h-80 -skew-x-6 rounded-2xl overflow-hidden shadow-xl bg-gray-200 group">
                      <div 
                        className="w-full h-full skew-x-6 scale-125 bg-cover bg-center group-hover:scale-150 transition-transform duration-700"
                        style={{ backgroundImage: `url('${imgUrl}')` }}
                      />
                    </div>
                  );
                })}
              </div>
            </ScrollReveal>
          </div>

        </div>
      </section>

      {/* Section 2: Visi & Misi */}
      <section className="relative bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <div className="lg:col-span-6 space-y-8 text-gray-900">
              <ScrollReveal>
                <span className="text-[var(--green-dark)] font-mono text-xs tracking-widest uppercase font-semibold block mb-2">
                  Komitmen Kami
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
                  {ABOUT_DATA.story.missionsTitle}
                </h2>
              </ScrollReveal>

              <div className="space-y-6">
                {ABOUT_DATA.story.missions.map((mission, idx) => (
                  <ScrollReveal key={idx} delay={100 * (idx + 1)}>
                    <div className="flex items-start gap-4">
                      <CheckCircle2 className="w-6 h-6 text-[var(--green-dark)] flex-shrink-0 mt-1" />
                      <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-normal">
                        {mission}
                      </p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>

            <div className="hidden lg:block lg:col-span-6"></div>

          </div>
        </div>

        {/* Foto Parallax Kanan */}
        <div className="lg:absolute lg:top-0 lg:bottom-0 lg:right-0 lg:w-1/2 h-[350px] sm:h-[450px] lg:h-full w-full overflow-hidden">
          <div 
            className="w-full h-full bg-fixed bg-cover bg-center relative"
            style={{ backgroundImage: `url('${ABOUT_DATA.story.missionImage}')` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Section 3: Nilai Inti (Dengan Rounded di Bagian Bawah) */}
      <section className="py-16 lg:py-24 bg-white overflow-hidden rounded-b-[32px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
            <ScrollReveal>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 leading-tight">
                {ABOUT_DATA.title}
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed mt-3">
                {ABOUT_DATA.description}
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Kolom Kiri: Poin 01 & 02 */}
            <div className="lg:col-span-4 space-y-8">
              {ABOUT_DATA.points.slice(0, 2).map((point, index) => (
                <ScrollReveal key={point.id} delay={150 + (index * 100)}>
                  <div className="space-y-1">
                    <div className="flex items-baseline gap-3 mb-1">
                      <span className="font-extrabold text-[var(--green-dark)] text-xl sm:text-2xl">
                        {point.id}
                      </span>
                      <h3 className="text-base font-bold text-gray-900 leading-snug">
                        {point.title}
                      </h3>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed pl-9">
                      {point.description}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* Kolom Tengah: 3 Foto Bertumpuk */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center space-y-4 py-4">
              {ABOUT_DATA.section3Images.map((imgUrl, idx) => {
                return (
                  <ScrollReveal key={idx} delay={200 + (idx * 100)} className="w-full">
                    <div className="w-full h-32 sm:h-36 -skew-x-6 rounded-2xl overflow-hidden shadow-xl bg-gray-200 group">
                      <div 
                        className="w-full h-full skew-x-6 scale-125 bg-cover bg-center group-hover:scale-150 transition-transform duration-700"
                        style={{ backgroundImage: `url('${imgUrl}')` }}
                      />
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>

            {/* Kolom Kanan: Poin 03 & 04 */}
            <div className="lg:col-span-4 space-y-8">
              {ABOUT_DATA.points.slice(2, 4).map((point, index) => (
                <ScrollReveal key={point.id} delay={350 + (index * 100)}>
                  <div className="space-y-1">
                    <div className="flex items-baseline gap-3 mb-1">
                      <span className="font-extrabold text-[var(--green-dark)] text-xl sm:text-2xl">
                        {point.id}
                      </span>
                      <h3 className="text-base font-bold text-gray-900 leading-snug">
                        {point.title}
                      </h3>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed pl-9">
                      {point.description}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>

          </div>

        </div>
      </section>

    </main>
  );
}