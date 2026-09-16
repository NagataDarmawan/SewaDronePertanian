'use client';

import React from 'react';
import { ABOUT_DATA } from '@/constants/aboutData';
import { SERVICES_DATA } from '@/constants/servicesData';
import ScrollReveal from '@/components/ui/ScrollReveal';
import Button from '@/components/ui/Button';

export default function AboutSection() {
  return (
    <section id="about" className="relative overflow-hidden bg-black -mt-[2px]">
      <div 
        className="relative bg-fixed bg-cover bg-center py-12 lg:py-16 px-4 sm:px-6 lg:px-8"
        style={{ backgroundImage: `url('${SERVICES_DATA.headerImage}')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/45 to-black/60"></div>

        <div className="relative z-20 max-w-7xl mx-auto mb-8 lg:mb-10">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
                {ABOUT_DATA.title}
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <p className="text-base sm:text-lg text-gray-200 leading-relaxed mt-3">
                {ABOUT_DATA.description}
              </p>
            </ScrollReveal>
          </div>
        </div>

        <div className="relative z-20 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            <div className="lg:col-span-4 space-y-8">
              {ABOUT_DATA.points.slice(0, 2).map((point, index) => (
                <ScrollReveal key={point.id} delay={150 + (index * 100)}>
                  <div className="space-y-2">
                    <div className="flex items-baseline gap-3">
                      <span className="font-extrabold text-[var(--green-bright)] text-xl sm:text-2xl">
                        {point.id}
                      </span>
                      <h3 className="text-xl font-bold text-white leading-snug">
                        {point.title}
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-200/90 leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <div className="lg:col-span-4 flex justify-center py-2">
              <ScrollReveal delay={200} className="w-full max-w-xs">
                <div className="flex flex-col gap-3 items-center">
                  {ABOUT_DATA.section3Images.map((imgUrl, index) => {
                    const translateClasses = index === 1 ? "translate-x-4" : index === 2 ? "-translate-x-4" : "";
                    return (
                      <div key={index} className={`w-full h-32 sm:h-36 -skew-x-6 rounded-2xl overflow-hidden shadow-2xl border border-white/20 ${translateClasses} bg-black`}>
                        <div 
                          className="w-full h-full skew-x-6 scale-110 bg-cover bg-center"
                          style={{ backgroundImage: `url('${imgUrl}')` }}
                        />
                      </div>
                    );
                  })}
                </div>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-4 space-y-8">
              {ABOUT_DATA.points.slice(2, 4).map((point, index) => (
                <ScrollReveal key={point.id} delay={350 + (index * 100)}>
                  <div className="space-y-2">
                    <div className="flex items-baseline gap-3">
                      <span className="font-extrabold text-[var(--green-bright)] text-xl sm:text-2xl">
                        {point.id}
                      </span>
                      <h3 className="text-xl font-bold text-white leading-snug">
                        {point.title}
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-200/90 leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>

          </div>

          <div className="text-center mt-10">
            <ScrollReveal delay={600}>
              <Button
                href="/tentang-kami"
                variant="white"
                className="px-10 py-4 sm:px-12 sm:py-4 shadow-lg text-base sm:text-lg"
              >
                <span>Selengkapnya</span>
              </Button>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}