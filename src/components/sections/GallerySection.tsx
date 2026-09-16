'use client';

import React from 'react';
import { GALLERY_DATA } from '@/constants/galleryData';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function GallerySection() {
  const allImages = GALLERY_DATA.images;
  const headerImages = allImages.slice(0, 2);
  const gridImages = allImages.slice(2, 14);

  // Data khusus mobile: 2 foto atas, lalu 8 foto di tengah format 2x2, sisa di bawah
  const mobileTopImages = allImages.slice(0, 2);
  const mobileMiddleImages = allImages.slice(2, 10);
  const mobileBottomImages = allImages.slice(10);

  const renderCard = (item: { image: string; location: string; service: string }, idx: number | string) => (
    <div key={idx} className="relative h-60 sm:h-72 lg:h-80 overflow-hidden group bg-gray-100">
      <div 
        className="w-full h-full bg-cover bg-center"
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
      
      {/* ================= DESKTOP VIEW (KEMBALI KE KODE ASLI TANPA PERUBAHAN) ================= */}
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

      {/* ================= MOBILE VIEW (Khusus Mobile: Teks, 2 Foto Atas, 8 Foto Tengah Format 2x2) ================= */}
      <div className="block lg:hidden w-full">
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

        {/* 2 Foto di Atas */}
        <div className="grid grid-cols-2 gap-0 w-full">
          {mobileTopImages.map((item, idx) => renderCard(item, `top-${idx}`))}
        </div>

        {/* 8 Foto di Tengah dengan Format 2-2 */}
        <div className="grid grid-cols-2 gap-0 w-full">
          {mobileMiddleImages.map((item, idx) => renderCard(item, `mid-${idx}`))}
        </div>

        {/* Sisa Foto di Bawah */}
        {mobileBottomImages.length > 0 && (
          <div className="grid grid-cols-2 gap-0 w-full">
            {mobileBottomImages.map((item, idx) => renderCard(item, `bot-${idx}`))}
          </div>
        )}
      </div>

    </section>
  );
}