'use client';

import React from 'react';
import { STATS_DATA } from '@/constants/statsData';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { useCounter } from '@/animations/useCountUp';

// Komponen kecil untuk menghandle animasi per item
function StatItem({ stat, index }: { stat: { value: string; label: string; description: string }; index: number }) {
  // Ekstrak angka murni dari string value (contoh: "100+" diambil angka 100-nya)
  const numericValue = parseInt(stat.value.replace(/[^0-9]/g, '')) || 0;
  // Ambil sisa karakter sebagai suffix (contoh: "+", " Ha", dll)
  const suffix = stat.value.replace(/[0-9]/g, '');

  const { count, ref } = useCounter(numericValue, 2000);

  return (
    <ScrollReveal delay={index * 100}>
      <div className="py-2.5 px-4 sm:py-2 sm:px-6 flex flex-col justify-center text-center sm:text-left group">
        <div className="flex flex-col sm:flex-row items-center sm:items-baseline gap-1 sm:gap-2 mb-0.5">
          <span className="text-xl sm:text-2xl font-extrabold text-[var(--green-bright,#22c55e)] tracking-tight group-hover:scale-105 transition-transform duration-300 shrink-0">
            <span ref={ref}>{count}</span>{suffix}
          </span>
          <h3 className="text-xs sm:text-sm font-bold text-white truncate leading-tight">
            {stat.label}
          </h3>
        </div>
        <p className="text-[10px] sm:text-[11px] text-zinc-400 leading-snug line-clamp-2">
          {stat.description}
        </p>
      </div>
    </ScrollReveal>
  );
}

export default function StatsSection() {
  return (
    <section className="relative bg-black py-4 lg:py-6 text-white overflow-hidden">
      {/* Efek Gradasi Atas */}
      <div className="absolute top-0 left-0 right-0 h-4 bg-gradient-to-b from-black to-transparent pointer-events-none z-10" />
      
      {/* Efek Gradasi Bawah */}
      <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-t from-black to-transparent pointer-events-none z-10" />

      {/* Container Konten Utama */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-y-2 sm:divide-y-0 sm:divide-x-2 divide-zinc-800">
          {STATS_DATA.map((stat, index) => (
            <StatItem key={index} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}