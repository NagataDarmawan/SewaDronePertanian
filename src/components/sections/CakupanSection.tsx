'use client';

import React from 'react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { ShieldAlert } from 'lucide-react';
import { CONTACT_DATA } from '@/constants/contactData';

export default function CoverageMapSection() {
  const cities = [
    { name: 'Cirebon', x: '31%', y: '34%', side: 'top' },
    { name: 'Brebes', x: '35%', y: '38%', side: 'bottom' },
    { name: 'Tegal', x: '39%', y: '37%', side: 'top' },
    { name: 'Pemalang', x: '43%', y: '40%', side: 'bottom' },
  ];

  return (
    /* 
      -mt-6 sm:-mt-8: Margin minus pas untuk efek menumpuk
      rounded-t-2xl sm:rounded-t-3xl: Radius lekukan disamakan persis seperti gambar
    */
    <section className="relative z-20 -mt-6 sm:-mt-8 py-10 lg:py-16 bg-white text-gray-900 overflow-hidden rounded-t-2xl sm:rounded-t-3xl shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Layout (Judul Kiri, Deskripsi Kanan) */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-8 pb-4 border-b border-gray-100 gap-6">
          <div className="max-w-xl">
            <ScrollReveal>
              <span className="text-[var(--green-dark)] font-mono text-xs tracking-widest uppercase font-semibold block mb-2">
                Cakupan Wilayah
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 leading-tight">
                Titik Layanan<br />Di Pulau Jawa
              </h2>
            </ScrollReveal>
          </div>
          <div className="max-w-md">
            <ScrollReveal delay={100}>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Titik layanan kami di berbagai wilayah strategis jalur Pantura siap memberikan dukungan responsif dan handal kapan pun Anda butuhkan.
              </p>
            </ScrollReveal>
          </div>
        </div>

        {/* Area Peta dengan Zoom dan Scroll Horizontal di Mobile */}
        <div className="w-full overflow-x-auto pb-0 scrollbar-none">
          <div className="relative min-w-[950px] sm:min-w-full mx-auto min-h-[350px] sm:min-h-[450px] flex items-center justify-center py-2">
            
            <img 
              src="/PetaJawa.jpg" 
              alt="Peta Pulau Jawa" 
              className="w-full h-auto object-cover select-none opacity-95"
            />

            {/* Titik Lokasi Berkedip */}
            {cities.map((city, index) => (
              <div 
                key={index} 
                className="absolute flex items-center justify-center group cursor-pointer -translate-x-1/2 -translate-y-1/2 z-10"
                style={{ top: city.y, left: city.x }}
              >
                {/* Lingkaran Titik Kedap-Kedip */}
                <span className="relative flex h-4 w-4 sm:h-5 sm:w-5 items-center justify-center">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--green-bright,#3e8e08)] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 sm:h-3.5 w-3 sm:w-3.5 bg-[var(--green-bright,#3e8e08)] border-2 border-white shadow-md"></span>
                </span>
                
                {/* Card Nama Kota */}
                <div className={`absolute left-1/2 -translate-x-1/2 px-2 py-0.5 sm:px-2.5 sm:py-1 bg-white/95 backdrop-blur-sm border border-gray-200 rounded-md shadow-sm text-[10px] sm:text-xs font-bold text-gray-900 whitespace-nowrap transition-transform group-hover:scale-110 ${
                  city.side === 'top' ? 'bottom-full mb-3' : 'top-full mt-3'
                }`}>
                  {city.name}
                </div>
              </div>
            ))}

          </div>
        </div>

        {/* Catatan Info Cakupan di Luar Wilayah */}
        <div className="-mt-3 sm:-mt-4 relative z-20 max-w-2xl mx-auto p-3.5 sm:p-4 rounded-xl bg-gray-50 border border-gray-200/80 flex items-start gap-3 shadow-sm">
          <ShieldAlert className="w-4 h-4 sm:w-5 sm:h-5 text-amber-600 flex-shrink-0 mt-0.5" />
          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
            Lokasi lahan Anda berada di luar area <strong className="text-gray-900">{CONTACT_DATA.coverage}</strong>? Silakan hubungi tim kami terlebih dahulu untuk konfirmasi ketersediaan armada dan jadwal layanan.
          </p>
        </div>

      </div>
    </section>
  );
}