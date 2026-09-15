'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Cpu, Menu, X } from 'lucide-react';
import { SITE_CONFIG } from '@/constants/siteConfig';
import Button from '@/components/ui/Button';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 py-4 pointer-events-none transition-all duration-300">
      <nav className="pointer-events-auto mx-auto px-6 py-2.5 transition-all duration-300 flex items-center justify-between max-w-4xl bg-[var(--green-dark)]/70 backdrop-blur-xl border border-white/10 shadow-lg rounded-2xl">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 text-[var(--white)] font-bold text-base sm:text-lg">
          <div className="w-8 h-8 rounded-xl bg-[var(--green-bright)]/20 flex items-center justify-center border border-[var(--green-bright)]/40 text-[var(--green-bright)]">
            <Cpu className="w-4 h-4" />
          </div>
          <span>{SITE_CONFIG.name}</span>
        </Link>

        {/* Menu Desktop */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-[var(--white)]/90">
          {SITE_CONFIG.navLinks.map((link, idx) => (
            <Link key={idx} href={link.href} className="hover:text-[var(--green-bright)] transition-colors">
              {link.label}
            </Link>
          ))}
        </div>

        {/* Tombol CTA Desktop Menggunakan Komponen Button */}
        <div className="hidden md:block">
          <Button href="#contact" variant="white">
            Mulai Konsultasi
          </Button>
        </div>

        {/* Tombol Menu Mobile */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-[var(--white)] hover:bg-white/10 rounded-xl transition-colors cursor-pointer"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Dropdown Menu Mobile */}
      {isOpen && (
        <div className="pointer-events-auto md:hidden mt-2 max-w-md mx-auto px-6 py-5 rounded-2xl bg-[var(--green-dark)]/90 backdrop-blur-2xl border border-white/10 text-[var(--white)] flex flex-col gap-4 shadow-xl">
          {SITE_CONFIG.navLinks.map((link, idx) => (
            <Link key={idx} href={link.href} onClick={() => setIsOpen(false)} className="text-sm font-medium hover:text-[var(--green-bright)]">
              {link.label}
            </Link>
          ))}
          <Button 
            href="#contact" 
            variant="white"
            onClick={() => setIsOpen(false)}
            className="w-full mt-2"
          >
            Mulai Konsultasi
          </Button>
        </div>
      )}
    </header>
  );
}