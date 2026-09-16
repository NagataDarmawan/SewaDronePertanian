'use client';

import React from 'react';
import { TESTIMONIALS_DATA } from '@/constants/testimonialData';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function TestimonialsSection() {
  const testimonials = TESTIMONIALS_DATA.testimonials;
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="relative py-12 lg:py-20 bg-white text-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          
          {/* Kolom Kiri: Header & Running Marquee */}
          <div className="lg:col-span-8 space-y-6">
            <div>
              <ScrollReveal>
                <span className="text-[var(--green-dark)] font-mono text-xs tracking-widest uppercase font-semibold block mb-2">
                  {TESTIMONIALS_DATA.subtitle}
                </span>
                <span className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 leading-tight block">
                  {TESTIMONIALS_DATA.title}
                </span>
              </ScrollReveal>
            </div>

            {/* Running Ticker (Animasinya sudah terhubung ke globals.css) */}
            <div className="overflow-hidden w-full relative py-6 border-y border-gray-200">
              <div className="flex gap-6 sm:gap-8 animate-marquee w-max items-center">
                {duplicatedTestimonials.map((item, index) => (
                  <div 
                    key={`marquee-${item.id}-${index}`} 
                    className="w-[260px] sm:w-[320px] shrink-0 flex flex-col justify-between pr-6 sm:pr-8 border-r border-gray-200"
                  >
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-6 font-normal">
                      &ldquo;{item.content}&rdquo;
                    </p>
                    <div>
                      <h3 className="text-sm sm:text-base font-bold text-gray-900 leading-tight">
                        {item.name}
                      </h3>
                      <p className="text-xs text-gray-500 mt-0.5 font-mono">
                        {item.role}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Kolom Kanan: Foto Tetap Diam / Static */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end items-center py-4">
            <div className="w-full max-w-[220px] sm:max-w-[260px] lg:max-w-[280px]">
              <div className="relative w-full aspect-[4/5] max-h-[340px]">
                <div className="absolute inset-0 bg-[var(--green-bright,#22c55e)] translate-x-6 translate-y-6 z-0" />
                <div className="relative w-full h-full shadow-lg z-10 bg-gray-100 overflow-hidden">
                  <div 
                    className="w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: `url('${TESTIMONIALS_DATA.image}')` }}
                  />
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}