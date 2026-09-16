'use client';

import React from 'react';
import Link from 'next/link';
import { Cpu, Mail, Phone, MapPin, Code2 } from 'lucide-react';
import { SITE_CONFIG } from '@/constants/siteConfig';
import { CONTACT_DATA } from '@/constants/contactData';
import { FOOTER_DATA } from '@/constants/footerData';

export default function Footer() {
  return (
    <footer className="bg-black text-[var(--white)] pt-12 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand & Tagline */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2 text-[var(--white)] font-bold text-lg">
              <div className="w-9 h-9 rounded-xl bg-[var(--green-bright)]/20 flex items-center justify-center border border-[var(--green-bright)]/40 text-[var(--green-bright)]">
                <Cpu className="w-5 h-5" />
              </div>
              <span>{SITE_CONFIG.name}</span>
            </Link>
            
            <p className="text-sm text-[var(--white)]/70 max-w-sm leading-relaxed">
              {FOOTER_DATA.brand.tagline}
            </p>

            <div className="space-y-2 pt-2 text-sm text-[var(--white)]/80">
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[var(--green-bright)]" />
                <span>{CONTACT_DATA.email}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[var(--green-bright)]" />
                <span>{CONTACT_DATA.phone}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-[var(--green-bright)] flex-shrink-0" />
                <span>{CONTACT_DATA.address}</span>
              </div>
            </div>
          </div>

          {/* Menu Utama */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold tracking-wider uppercase text-[var(--white)]">
              Menu Utama
            </h3>
            <ul className="space-y-2.5 text-sm">
              {SITE_CONFIG.navLinks.map((link, idx) => (
                <li key={idx}>
                  <Link 
                    href={link.href} 
                    className="text-[var(--white)]/70 hover:text-[var(--green-bright)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Link Kolom Lainnya */}
          {FOOTER_DATA.links.slice(1).map((section, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-sm font-semibold tracking-wider uppercase text-[var(--white)]">
                {section.title}
              </h3>
              <ul className="space-y-2.5 text-sm">
                {section.items.map((item, idx) => (
                  <li key={idx}>
                    <Link 
                      href={item.href} 
                      className="text-[var(--white)]/70 hover:text-[var(--green-bright)] transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Socials Column */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold tracking-wider uppercase text-[var(--white)]">
              Ikuti Kami
            </h3>
            <ul className="space-y-2.5 text-sm">
              {SITE_CONFIG.socials.map((social, idx) => (
                <li key={idx}>
                  <a 
                    href={social.href} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 text-[var(--white)]/70 hover:text-[var(--green-bright)] transition-colors"
                  >
                    <svg className="w-4 h-4 fill-current text-[var(--green-bright)] flex-shrink-0" viewBox="0 0 24 24">
                      <path d={social.svgPath} />
                    </svg>
                    <span>{social.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Copyright & Author Card */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[var(--white)]/50 gap-4">
          <p className="order-1">© {new Date().getFullYear()} {SITE_CONFIG.name}. Hak Cipta Dilindungi.</p>
          
          {/* Link Kebijakan & S&K */}
          <div className="flex gap-6 order-2 sm:order-3">
            <a href="#" className="hover:text-[var(--white)] transition-colors">Kebijakan Privasi</a>
            <a href="#" className="hover:text-[var(--white)] transition-colors">Syarat & Ketentuan</a>
          </div>

          {/* Card Dibuat Oleh */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/5 border border-white/10 text-[var(--white)]/80 shadow-inner order-3 sm:order-2">
            <Code2 className="w-3.5 h-3.5 text-[var(--green-bright,#22c55e)]" />
            <span>Dibuat Oleh : <strong className="text-[var(--green-bright,#22c55e)] font-bold">Nagata Darmawan</strong></span>
          </div>
        </div>

      </div>
    </footer>
  );
}