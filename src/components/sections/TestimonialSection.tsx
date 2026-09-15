'use client';

import React, { useState, useEffect } from 'react';
import { TESTIMONIALS_DATA } from '@/constants/testimonialData';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = TESTIMONIALS_DATA.testimonials;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const visibleTestimonials = [0, 1, 2].map((offset) => {
    const index = (currentIndex + offset) % testimonials.length;
    return testimonials[index];
  });

  return (
    <section className="relative py-10 lg:py-16 bg-white text-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Kolom Kiri: Header Teks, 3 Kartu Testimoni Lebih Besar, & Slide Bar Hijau */}
          <div className="lg:col-span-8 space-y-6">
            
            <div>
              <ScrollReveal>
                <span className="text-[var(--green-dark)] font-mono text-xs tracking-widest uppercase font-semibold block mb-2">
                  {TESTIMONIALS_DATA.subtitle}
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 leading-tight">
                  {TESTIMONIALS_DATA.title}
                </h2>
              </ScrollReveal>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {visibleTestimonials.map((item, index) => (
                <ScrollReveal key={`${item.id}-${index}`} delay={150 + (index * 100)} className="h-full">
                  <div className="h-full p-6 sm:p-7 rounded-3xl bg-gray-50 border border-gray-100 flex flex-col justify-between hover:border-[var(--green-bright,#22c55e)]/50 transition-all duration-500 shadow-sm">
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-6">
                      {item.content}
                    </p>

                    <div>
                      <h3 className="text-sm sm:text-base font-bold text-gray-900 leading-tight">
                        {item.name}
                      </h3>
                      <p className="text-xs text-gray-500 mt-0.5">
                        {item.role}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <div className="flex items-center gap-2 pt-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-1.5 rounded-full transition-all duration-500 cursor-pointer overflow-hidden ${
                    idx === currentIndex 
                      ? 'w-10 bg-[var(--green-bright,#22c55e)]' 
                      : 'w-2.5 bg-[var(--green-bright,#22c55e)]/30 hover:bg-[var(--green-bright,#22c55e)]/50'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

          </div>

          {/* Kolom Kanan: Foto & Kotak Hijau */}
          <div className="lg:col-span-4 flex justify-center items-center py-4 pl-4 pb-4">
            <ScrollReveal delay={200} className="w-full max-w-[250px] sm:max-w-[300px]">
              <div className="relative w-full aspect-[4/5] max-h-[360px] mx-auto">
                <div className="absolute inset-0 bg-[var(--green-bright,#22c55e)] translate-x-10 translate-y-10 z-0" />
                <div className="relative w-full h-full shadow-lg z-10 bg-gray-100 overflow-hidden">
                  <div 
                    className="w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: `url('${TESTIMONIALS_DATA.image}')` }}
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>

        </div>

      </div>
    </section>
  );
}