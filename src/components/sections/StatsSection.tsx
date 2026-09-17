'use client';

import React from 'react';
import { STATS_DATA } from '@/constants/statsData';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { useCounter } from '@/animations/useCountUp';

// Komponen kecil untuk menghandle animasi per item
function StatItem({ stat, index }: { stat: { value: string; label: string; description: string }; index: number }) {
  // 1. Hapus titik/koma pemisah ribuan dulu, baru ambil angka murninya
  const cleanNumberString = stat.value.replace(/[\.,]/g, '');
  const numericValue = parseInt(cleanNumberString.replace(/[^0-9]/g, ''), 10) || 0;
  
  // 2. Ambil suffix (karakter selain angka, titik, dan koma seperti "+")
  const suffix = stat.value.replace(/[0-9\.,]/g, '');

  const { count, ref } = useCounter(numericValue, 2000);

  return (
    <ScrollReveal delay={index * 100}>
      <div className="py-3 px-4 sm:py-4 sm:px-6 flex flex-col items-center sm:items-start text-center sm:text-left group">
        
        {/* Angka Stat Di Atas dengan Animasi 0 -> Target */}
        <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--green-bright,#22c55e)] tracking-tight group-hover:scale-105 transition-transform duration-300 block mb-1">
          <span ref={ref}>{count.toLocaleString('id-ID')}</span>{suffix}
        </span>

        {/* Label Judul */}
        <h3 className="text-xs sm:text-sm font-bold text-white leading-snug mb-1">
          {stat.label}
        </h3>

        {/* Deskripsi */}
        <p className="text-[11px] sm:text-xs text-zinc-400 leading-relaxed">
          {stat.description}
        </p>

      </div>
    </ScrollReveal>
  );
}

export default function StatsSection() {
  return (
    <section className="relative bg-black py-6 lg:py-8 text-white overflow-hidden">
      {/* Efek Gradasi Atas */}
      <div className="absolute top-0 left-0 right-0 h-4 bg-gradient-to-b from-black to-transparent pointer-events-none z-10" />
      
      {/* Efek Gradasi Bawah */}
      <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-t from-black to-transparent pointer-events-none z-10" />

      {/* Container Konten Utama */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-6 sm:gap-y-0 divide-y sm:divide-y-0 sm:divide-x divide-zinc-800/80">
          {STATS_DATA.map((stat, index) => (
            <StatItem key={index} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}