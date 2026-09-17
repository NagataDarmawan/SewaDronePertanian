'use client';

import React from 'react';
import { HERO_DATA } from '@/constants/heroData';
import { useAutoSlide } from '@/animations/useAutoSlide';
import SliderButton from '@/components/ui/SliderButton';
import Button from '@/components/ui/Button';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function HeroSection() {
  const { currentIndex, nextSlide, prevSlide, setCurrentIndex } = useAutoSlide(HERO_DATA.slides.length, 6000);

  return (
    <section className="relative h-[100dvh] w-full flex flex-col justify-end overflow-hidden bg-black pb-6 sm:pb-12 lg:pb-16">
      
      {/* Background Images */}
      {HERO_DATA.slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out ${
            index === currentIndex ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
          }`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30"></div>
        </div>
      ))}
      
      {/* Container Konten Utama (Posisi Rapat Bawah) */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-20 flex flex-col justify-end">
        
        {/* Block Teks: Posisi Tengah Layar di Mobile (mx-auto), Rata Kiri (text-left) */}
        <div className="max-w-2xl mb-4 sm:mb-6 relative min-h-[140px] sm:min-h-[180px] flex flex-col justify-end mx-auto sm:mx-0 w-full">
          
          {HERO_DATA.slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`transition-all duration-700 ease-out transform text-left ${
                index === currentIndex 
                  ? 'opacity-100 translate-y-0 relative block' 
                  : 'opacity-0 translate-y-6 absolute inset-0 pointer-events-none'
              }`}
            >
              <ScrollReveal>
                <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mb-2 sm:mb-3 text-[var(--green-bright)] drop-shadow-md">
                  {slide.title}
                </h1>
              </ScrollReveal>
              
              <ScrollReveal delay={100}>
                <p className="text-xs sm:text-base lg:text-lg text-[var(--white)]/90 leading-relaxed drop-shadow-sm max-w-xl mb-4 sm:mb-6">
                  {slide.description}
                </p>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <div className="flex items-center justify-start gap-4">
                  <Button 
                    href="#services" 
                    variant="white"
                    className="px-6 py-2.5 sm:px-8 sm:py-4 text-xs sm:text-base shadow-lg"
                  >
                    <span>Lihat Layanan</span>
                  </Button>
                </div>
              </ScrollReveal>
            </div>
          ))}

        </div>

        {/* Baris Bawah: Indikator & Navigasi */}
        <div className="flex items-center justify-between border-t border-white/10 pt-3 sm:pt-4">
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 font-mono text-xs text-white/80 tracking-widest">
              <span className="text-[var(--green-bright)] font-bold">
                {String(currentIndex + 1).padStart(2, '0')}
              </span>
              <span className="text-white/40">/</span>
              <span>{String(HERO_DATA.slides.length).padStart(2, '0')}</span>
            </div>

            <div className="hidden sm:flex items-center gap-2 ml-4">
              {HERO_DATA.slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-1 rounded-full transition-all duration-500 cursor-pointer overflow-hidden bg-white/20 ${
                    index === currentIndex ? 'w-10 bg-white/30' : 'w-2 hover:bg-white/40'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                >
                  {index === currentIndex && (
                    <div className="h-full bg-[var(--green-bright)] animate-[progress_6s_linear_infinite]" />
                  )}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-3">
            <SliderButton direction="left" onClick={prevSlide} />
            <SliderButton direction="right" onClick={nextSlide} />
          </div>

        </div>

      </div>
    </section>
  );
}