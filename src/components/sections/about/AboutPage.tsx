'use client';

import React from 'react';
import { ABOUT_DATA } from '@/constants/aboutData';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { CheckCircle2 } from 'lucide-react';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <section 
        className="relative h-[50vh] w-full bg-cover bg-center flex items-end pb-8 sm:pb-10" 
        style={{ backgroundImage: `url('${ABOUT_DATA.hero.backgroundImage}')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--green-dark)] via-[var(--green-dark)]/60 to-black/30" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-white">
          <div className="max-w-3xl space-y-2">
            <span className="font-mono text-xs sm:text-sm tracking-widest uppercase font-semibold block">
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
      </section>

      {/* Section 1: Kisah Awal */}
      <section className="relative z-20 -mt-6 sm:-mt-8 py-12 lg:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white rounded-t-[32px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-4">
            <ScrollReveal>
              <span className="text-[var(--green-dark)] font-mono text-xs tracking-widest uppercase font-semibold">
                {ABOUT_DATA.story.subtitle}
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight mt-1">
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
          
          <div className="lg:col-span-5">
            <ScrollReveal delay={200}>
              <div className="flex gap-3 justify-center items-center py-4">
                {ABOUT_DATA.story.storyImages.map((imgUrl, idx) => (
                  <div key={idx} className="w-1/3 h-64 sm:h-80 -skew-x-6 rounded-2xl overflow-hidden shadow-md bg-gray-100">
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
      </section>

      {/* Section 2: Visi & Misi */}
      <section className="py-12 lg:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          <div className="lg:col-span-6 order-2 lg:order-1">
            <ScrollReveal>
              <div className="w-full h-[320px] sm:h-[400px] lg:h-[450px] rounded-2xl overflow-hidden shadow-md bg-gray-100">
                <div 
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url('${ABOUT_DATA.story.missionImage}')` }}
                />
              </div>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
            <ScrollReveal>
              <span className="text-[var(--green-dark)] font-mono text-xs tracking-widest uppercase font-semibold block mb-1">
                Komitmen Kami
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
                {ABOUT_DATA.story.missionsTitle}
              </h2>
            </ScrollReveal>

            <div className="space-y-4">
              {ABOUT_DATA.story.missions.map((mission, idx) => (
                <ScrollReveal key={idx} delay={100 * (idx + 1)}>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[var(--green-dark)] shrink-0 mt-1" />
                    <p className="text-base text-gray-600 leading-relaxed">
                      {mission}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Section 3: Nilai Inti */}
      <section className="py-12 lg:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
              {ABOUT_DATA.title}
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <p className="text-base text-gray-600 leading-relaxed mt-2">
              {ABOUT_DATA.description}
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-4 space-y-6 order-1">
            {ABOUT_DATA.points.slice(0, 2).map((point, index) => (
              <ScrollReveal key={point.id} delay={150 + (index * 100)}>
                <div>
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="font-extrabold text-[var(--green-dark)] text-xl">
                      {point.id}
                    </span>
                    <h3 className="text-base font-bold text-gray-900">
                      {point.title}
                    </h3>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed pl-7">
                    {point.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="lg:col-span-4 flex flex-col gap-3 py-2 order-2">
            {ABOUT_DATA.section3Images.map((imgUrl, idx) => (
              <ScrollReveal key={idx} delay={200 + (idx * 100)}>
                <div className="w-full h-32 -skew-x-6 rounded-xl overflow-hidden shadow-md bg-gray-100">
                  <div 
                    className="w-full h-full skew-x-6 scale-125 bg-cover bg-center"
                    style={{ backgroundImage: `url('${imgUrl}')` }}
                  />
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="lg:col-span-4 space-y-6 order-3">
            {ABOUT_DATA.points.slice(2, 4).map((point, index) => (
              <ScrollReveal key={point.id} delay={350 + (index * 100)}>
                <div>
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="font-extrabold text-[var(--green-dark)] text-xl">
                      {point.id}
                    </span>
                    <h3 className="text-base font-bold text-gray-900">
                      {point.title}
                    </h3>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed pl-7">
                    {point.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </section>

    </main>
  );
}