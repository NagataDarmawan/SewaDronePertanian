"use client";

import React from "react";
import Link from "next/link";
import { SERVICES_DATA } from "@/constants/servicesData";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Button from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-black -mb-[2px]"
    >
      <div
        className="relative bg-fixed bg-cover bg-center py-12 lg:py-16 px-4 sm:px-6 lg:px-8"
        style={{ backgroundImage: `url('${SERVICES_DATA.headerImage}')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/45 to-black/70"></div>

        <div className="relative z-20 max-w-7xl mx-auto mb-8 lg:mb-10">
          <div className="max-w-3xl">
            <ScrollReveal>
              <span className="text-[var(--green-bright)] font-mono text-xs tracking-widest uppercase block mb-2 font-semibold">
                {SERVICES_DATA.subtitle}
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
                {SERVICES_DATA.title}
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <p className="text-base sm:text-lg text-gray-200 leading-relaxed mt-3">
                {SERVICES_DATA.description}
              </p>
            </ScrollReveal>
          </div>
        </div>

        <div className="relative z-20 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {SERVICES_DATA.services.map((item, index) => {
              // Membuat slug aman dari title jika item.slug belum ada di data
              const serviceSlug = item.slug || item.title.toLowerCase().replace(/\s+/g, '-');

              return (
                <ScrollReveal key={item.id} delay={100 + index * 75}>
                  <Link 
                    href={`/layanan/${serviceSlug}`}
                    className="relative h-full p-6 sm:p-8 flex flex-col justify-between rounded-3xl bg-black/35 backdrop-blur-xl border border-white/20 shadow-2xl hover:bg-black/50 hover:border-[var(--green-bright)]/50 hover:-translate-y-1.5 transition-all duration-500 group block"
                  >
                    <div className="space-y-3 mb-6 flex-grow">
                      <div className="flex items-baseline gap-3 mb-3">
                        <span className="font-extrabold text-[var(--green-bright)] text-xl sm:text-2xl">
                          {item.id}
                        </span>
                        <h3 className="text-xl font-bold text-white leading-snug group-hover:text-[var(--green-bright)] transition-colors">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-xs sm:text-sm text-gray-200/90 leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    <div className="pt-5 border-t border-white/20 space-y-4 mt-auto">
                      <div>
                        <span className="text-[11px] font-medium text-gray-300 block mb-0.5">
                          Mulai dari
                        </span>
                        <div className="text-xl font-extrabold text-[var(--green-bright)]">
                          {item.price}{" "}
                          <span className="text-xs font-normal text-gray-200">
                            {item.unit}
                          </span>
                        </div>
                      </div>

                      <div className="w-full">
                        {/* Tombol tanpa prop href agar tidak merender tag <a> di dalam tag <a> */}
                        <Button variant="white" className="w-full pointer-events-none">
                          <span>Booking Layanan</span>
                          <ArrowRight className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </Link>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}