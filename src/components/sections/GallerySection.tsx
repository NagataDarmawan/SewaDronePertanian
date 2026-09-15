'use client';

import React, { useState, useEffect } from 'react';
import { GALLERY_DATA } from '@/constants/galleryData';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function GallerySection() {
  const allImages = GALLERY_DATA.images;
  const headerImages = allImages.slice(0, 2);
  const gridImages = allImages.slice(2, 14);

  // Mobile slider state (2 items per slide)
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = Math.ceil(allImages.length / 2);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }, 4000);
    return () => clearInterval(timer);
  }, [totalSlides]);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % totalSlides);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);

  const renderCard = (item: { image: string; location: string; service: string }, idx: number) => (
    <div key={idx} className="relative h-60 sm:h-72 lg:h-80 overflow-hidden group bg-gray-100">
      <div 
        className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-700 ease-out"
        style={{ backgroundImage: `url('${item.image}')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent group-hover:from-black/95 transition-all duration-300" />
      
      <div className="absolute inset-0 p-4 sm:p-6 flex flex-col justify-end z-10 space-y-1.5">
        <span className="text-xs font-semibold tracking-wider uppercase text-[var(--green-bright)] drop-shadow-md">
          {item.location}
        </span>
        <h3 className="text-sm sm:text-lg font-bold text-white drop-shadow-md leading-snug">
          {item.service}
        </h3>
      </div>
    </div>
  );

  return (
    <section id="galeri" className="relative py-0 bg-white text-gray-900 overflow-hidden w-full">
      
      {/* ================= DESKTOP VIEW (Grid Original) ================= */}
      <div className="hidden lg:grid w-full grid-cols-4 gap-0">
        <div className="col-span-2 h-80 p-8 flex flex-col justify-center bg-white z-10">
          <ScrollReveal className="h-full flex flex-col justify-center">
            <span className="text-[var(--green-dark)] font-mono text-xs tracking-widest uppercase font-semibold block mb-1">
              {GALLERY_DATA.subtitle}
            </span>
            <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 leading-tight">
              {GALLERY_DATA.title}
            </h2>
            <p className="text-base text-gray-600 leading-relaxed mt-2 line-clamp-2">
              {GALLERY_DATA.description}
            </p>
          </ScrollReveal>
        </div>

        {headerImages.map((item, idx) => (
          <div key={`desktop-header-${idx}`} className="w-full">
            {renderCard(item, idx)}
          </div>
        ))}

        {gridImages.map((item, idx) => (
          <div key={`desktop-grid-${idx}`} className="w-full">
            {renderCard(item, idx + 2)}
          </div>
        ))}
      </div>

      {/* ================= MOBILE VIEW (Slider Nyambung 2-an Tanpa Jarak & Kotak Teks Terpisah) ================= */}
      <div className="block lg:hidden w-full">
        
        {/* Kotak Teks Mobile */}
        <div className="w-full p-6 bg-white">
          <ScrollReveal>
            <span className="text-[var(--green-dark)] font-mono text-xs tracking-widest uppercase font-semibold block mb-1">
              {GALLERY_DATA.subtitle}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-gray-900 leading-tight">
              {GALLERY_DATA.title}
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mt-2">
              {GALLERY_DATA.description}
            </p>
          </ScrollReveal>
        </div>

        {/* Slider Track Foto Nyambung Tanpa Jarak */}
        <div className="relative overflow-hidden w-full">
          <div 
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {Array.from({ length: totalSlides }).map((_, slideIdx) => {
              const pair = allImages.slice(slideIdx * 2, slideIdx * 2 + 2);
              return (
                <div key={slideIdx} className="w-full flex-shrink-0 grid grid-cols-2 gap-0">
                  {pair.map((item, idx) => renderCard(item, slideIdx * 2 + idx))}
                </div>
              );
            })}
          </div>
        </div>

        {/* Kontrol & Progress Bar Mobile */}
        <div className="flex items-center justify-between p-4 bg-white">
          <div className="flex items-center gap-1.5 flex-1 max-w-[160px] mr-4">
            {Array.from({ length: totalSlides }).map((_, idx) => (
              <div key={idx} className="h-1.5 flex-1 bg-gray-200 rounded-full overflow-hidden">
                {idx === currentIndex && (
                  <div className="h-full bg-[var(--green-bright)] animate-[progress_4s_linear_infinite]" />
                )}
              </div>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button 
              onClick={prevSlide}
              className="p-2.5 rounded-full bg-gray-100 hover:bg-[var(--green-bright)] hover:text-white text-gray-800 transition-colors shadow-sm cursor-pointer"
              aria-label="Previous Slide"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button 
              onClick={nextSlide}
              className="p-2.5 rounded-full bg-gray-100 hover:bg-[var(--green-bright)] hover:text-white text-gray-800 transition-colors shadow-sm cursor-pointer"
              aria-label="Next Slide"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>

    </section>
  );
}