'use client';

import React from 'react';
import { HERO_DATA } from '@/constants/heroData';
import { useAutoSlide } from '@/animations/useAutoSlide';
import SliderButton from '@/components/ui/SliderButton';
import Button from '@/components/ui/Button';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  const { currentIndex, nextSlide, prevSlide, setCurrentIndex } = useAutoSlide(HERO_DATA.slides.length, 6000);

  return (
    <section className="relative h-screen w-full flex items-end overflow-hidden bg-black pb-16 lg:pb-24">
      
      {/* Background Images dengan Transisi Halus */}
      {HERO_DATA.slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out ${
            index === currentIndex ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
          }`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          {/* Gradasi Sinematik Hitam Pekat yang Langsung Menyatu ke Hitam Polos di Bagian Bawah */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30"></div>
        </div>
      ))}
      
      {/* Area Konten Bawah Kiri */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-20 flex flex-col justify-end">
        
        {/* Kontainer Teks Bersih Tanpa Box */}
        <div className="max-w-2xl mb-6 relative min-h-[190px] flex flex-col justify-center">
          
          {HERO_DATA.slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`transition-all duration-700 ease-out transform ${
                index === currentIndex 
                  ? 'opacity-100 translate-y-0 relative block' 
                  : 'opacity-0 translate-y-6 absolute inset-0 pointer-events-none'
              }`}
            >
              {/* Dibungkus ScrollReveal agar terpicu saat di-scroll */}
              <ScrollReveal>
                <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight mb-3 text-[var(--green-bright)] drop-shadow-md">
                  {slide.title}
                </h1>
              </ScrollReveal>
              
              <ScrollReveal delay={100}>
                <p className="text-base sm:text-lg text-[var(--white)]/90 leading-relaxed drop-shadow-sm max-w-xl mb-6">
                  {slide.description}
                </p>
              </ScrollReveal>

              {/* Tombol Lihat Layanan */}
              <ScrollReveal delay={200}>
                <div className="flex items-center gap-4">
                  <Button 
                    href="#services" 
                    variant="white"
                  >
                    <span>Lihat Layanan</span>
                  </Button>
                </div>
              </ScrollReveal>
            </div>
          ))}

        </div>

        {/* Baris Bawah: Indikator Timer & Tombol Navigasi */}
        <div className="flex items-center justify-between">
          
          {/* Indikator dengan Efek Progress Bar */}
          <div className="flex items-center gap-2">
            {HERO_DATA.slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-1.5 rounded-full transition-all duration-500 cursor-pointer overflow-hidden bg-white/30 ${
                  index === currentIndex ? 'w-12 bg-white/20' : 'w-3 hover:bg-white/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              >
                {index === currentIndex && (
                  <div className="h-full bg-[var(--green-bright)] animate-[progress_6s_linear_infinite]" />
                )}
              </button>
            ))}
          </div>

          {/* Tombol Kanan-Kiri */}
          <div className="flex items-center gap-3">
            <SliderButton direction="left" onClick={prevSlide} />
            <SliderButton direction="right" onClick={nextSlide} />
          </div>

        </div>

      </div>
    </section>
  );
}