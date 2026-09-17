'use client';

import React, { useState, useEffect, useRef } from 'react';
import { WORKFLOW_DATA } from '@/constants/caraKerjaData';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function WorkProcessSection() {
  const [activeStep, setActiveStep] = useState<number>(0);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      let currentActive = 0;

      stepRefs.current.forEach((el, index) => {
        if (el) {
          const rect = el.getBoundingClientRect();
          // Aktifkan langkah jika posisi elemen berada di sekitar area tengah viewport
          if (rect.top <= window.innerHeight * 0.55) {
            currentActive = index + 1;
          }
        }
      });

      setActiveStep(currentActive);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Hitung persentase progress garis hijau khusus di antara angka 1 hingga angka terakhir
  const totalSteps = WORKFLOW_DATA.steps.length;
  const progressPercent = 
    totalSteps > 1 && activeStep > 1
      ? Math.min(100, ((activeStep - 1) / (totalSteps - 1)) * 100)
      : 0;

  return (
    <section id="cara-kerja" className="relative py-12 lg:py-20 bg-white text-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Layout Grid 2 Kolom */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Kolom Kiri: Foto Utama Sticky Rasio 1:1 */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <ScrollReveal>
              <div className="relative w-full aspect-square max-w-[420px] mx-auto rounded-2xl overflow-hidden shadow-xl bg-gray-100 border border-gray-100">
                <img
                  src={WORKFLOW_DATA.mainImage}
                  alt={WORKFLOW_DATA.title}
                  className="w-full h-full object-cover select-none transition-all duration-500"
                />
              </div>
            </ScrollReveal>
          </div>

          {/* Kolom Kanan: Header & Timeline Stepper */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Header Teks */}
            <div>
              <ScrollReveal>
                <span className="text-[var(--green-dark,#15803d)] font-mono text-xs tracking-widest uppercase font-semibold block mb-2">
                  {WORKFLOW_DATA.subtitle}
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 leading-tight">
                  {WORKFLOW_DATA.title}
                </h2>
              </ScrollReveal>

              <ScrollReveal delay={100}>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed mt-3">
                  {WORKFLOW_DATA.description}
                </p>
              </ScrollReveal>
            </div>

            {/* Container Stepper */}
            <div className="relative pl-3 space-y-10 sm:space-y-12">
              
              {/* 
                Garis Penghubung (Ditempatkan persis di tengah titik pusat lingkaran angka).
                'top-4' & 'bottom-4' mengunci garis HANYA dari pusat lingkaran 1 sampai pusat lingkaran terakhir.
              */}
              <div className="absolute left-[31px] top-4 bottom-4 w-[2px] bg-gray-200 -translate-x-1/2">
                {/* Garis Progress Hijau yang Mengikuti Scroll */}
                <div 
                  className="w-full bg-[var(--green-bright,#3e8e08)] transition-all duration-500 ease-out"
                  style={{ height: `${progressPercent}%` }}
                />
              </div>

              {WORKFLOW_DATA.steps.map((step, index) => {
                const isActive = activeStep >= step.id;
                const isCurrent = activeStep === step.id;

                return (
                  <div
                    key={step.id}
                    ref={(el) => {
                      stepRefs.current[index] = el;
                    }}
                    className="relative flex items-start gap-5 group transition-all duration-300"
                  >
                    {/* Lingkaran Angka */}
                    <div
                      className={`relative z-10 w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm shrink-0 transition-all duration-500 shadow-sm ${
                        isActive
                          ? 'bg-[var(--green-bright,#3e8e08)] text-white scale-110 shadow-md ring-4 ring-green-100'
                          : 'bg-gray-200 text-gray-500'
                      }`}
                    >
                      {step.id}
                    </div>

                    {/* Penjelasan Langkah */}
                    <div className="pt-0.5">
                      <h3
                        className={`text-base sm:text-lg font-bold leading-snug transition-colors duration-300 ${
                          isCurrent ? 'text-[var(--green-dark,#15803d)]' : 'text-gray-900'
                        }`}
                      >
                        {step.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mt-1.5">
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}