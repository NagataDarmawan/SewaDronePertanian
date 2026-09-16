'use client';

import React, { useState } from 'react';
import { FAQ_DATA } from '@/constants/faqData';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { Plus, Minus } from 'lucide-react';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative z-30 -mb-10 sm:-mb-14 pt-10 pb-20 lg:pt-16 lg:pb-28 bg-white text-gray-900 overflow-hidden w-full rounded-b-3xl sm:rounded-b-[32px] shadow-xl">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-10 sm:mb-12">
          <ScrollReveal>
            <span className="text-[var(--green-dark)] font-mono text-xs tracking-widest uppercase font-semibold block mb-2">
              FAQ
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 leading-tight">
              {FAQ_DATA.title}
            </h2>
          </ScrollReveal>
        </div>

        <div className="divide-y divide-gray-200 border-t border-b border-gray-200">
          {FAQ_DATA.faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <ScrollReveal key={idx} delay={40 * idx}>
                <div className="py-5 transition-colors duration-300">
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full text-left flex items-center justify-between gap-6 group focus:outline-none cursor-pointer"
                  >
                    <span
                      className={`font-semibold text-base sm:text-lg transition-colors duration-300 ${
                        isOpen
                          ? "text-[var(--green-bright,#22c55e)]"
                          : "text-gray-900 group-hover:text-[var(--green-bright,#22c55e)]"
                      }`}
                    >
                      {faq.question}
                    </span>

                    <div className="shrink-0 transition-transform duration-300">
                      {isOpen ? (
                        <Minus className="w-5 h-5 text-[var(--green-bright,#22c55e)]" />
                      ) : (
                        <Plus className="w-5 h-5 text-[var(--green-bright,#22c55e)] group-hover:scale-110 transition-transform duration-200" />
                      )}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="mt-3 text-gray-600 text-sm sm:text-base leading-relaxed pr-8">
                      {faq.answer}
                    </div>
                  )}
                </div>
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}