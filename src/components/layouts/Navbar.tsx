'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Cpu, Menu, X, ChevronDown } from 'lucide-react';
import { SITE_CONFIG } from '@/constants/siteConfig';
import Button from '@/components/ui/Button';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const pathname = usePathname();

  const getNavHref = (href: string) => {
    return pathname !== '/' && href.startsWith('#') ? `/${href}` : href;
  };

  const isActive = (href: string) => {
    if (href === '/' || href === '/#') return pathname === '/';
    if (href.startsWith('/#') || href.startsWith('#')) return false;
    return pathname.startsWith(href);
  };

  const consultationUrl = `${SITE_CONFIG.contact.whatsapp}?text=${encodeURIComponent(SITE_CONFIG.ctaMessageTemplate)}`;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 py-4 pointer-events-none">
      <nav className="pointer-events-auto mx-auto px-6 py-2.5 flex items-center justify-between max-w-4xl bg-[var(--green-dark)]/70 backdrop-blur-xl border border-white/10 shadow-lg rounded-2xl">
        
        {/* Logo Image Only (Tulisan Brand Dihapus) */}
        <Link href="/" className="flex items-center group">
          {SITE_CONFIG.logo ? (
            <img 
              src={SITE_CONFIG.logo} 
              alt={`Logo ${SITE_CONFIG.name}`} 
              className="h-11 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          ) : (
            <div className="w-10 h-10 rounded-xl bg-[var(--green-bright)]/20 flex items-center justify-center border border-[var(--green-bright)]/40 text-[var(--green-bright)]">
              <Cpu className="w-5 h-5" />
            </div>
          )}
        </Link>

        {/* Menu Desktop */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-[var(--white)]/90">
          {SITE_CONFIG.navLinks.map((link, idx) => {
            if (link.dropdown) {
              const activeDropdown = pathname.startsWith('/layanan');
              return (
                <div key={idx} className="relative group py-2">
                  <Link 
                    href={getNavHref(link.href)} 
                    className="relative inline-flex items-center gap-1 hover:text-[var(--green-bright)] transition-colors py-1"
                  >
                    <span>{link.label}</span>
                    <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                    {activeDropdown && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[var(--green-bright)] rounded-full" />
                    )}
                  </Link>

                  {/* Dropdown Menu Desktop */}
                  <div className="absolute top-full left-0 w-64 pt-2 hidden group-hover:block z-50">
                    <div className="bg-[var(--green-dark)]/95 backdrop-blur-xl border border-white/10 rounded-2xl p-2 shadow-2xl flex flex-col gap-1">
                      {link.dropdown.map((sub, sIdx) => {
                        const isSubActive = pathname === sub.href;
                        return (
                          <Link
                            key={sIdx}
                            href={sub.href}
                            className={`px-4 py-2.5 rounded-xl text-xs font-medium transition-colors flex items-center justify-between ${
                              isSubActive 
                                ? 'bg-[var(--green-bright)]/20 text-[var(--white)] font-semibold' 
                                : 'text-[var(--white)]/90 hover:bg-[var(--green-bright)]/20 hover:text-[var(--green-bright)]'
                            }`}
                          >
                            <span>{sub.label}</span>
                            {isSubActive && <span className="w-1.5 h-1.5 rounded-full bg-[var(--green-bright)]" />}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            }

            const active = isActive(link.href);
            return (
              <Link key={idx} href={getNavHref(link.href)} className="relative py-1 hover:text-[var(--green-bright)] transition-colors">
                <span>{link.label}</span>
                {active && <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[var(--green-bright)] rounded-full" />}
              </Link>
            );
          })}
        </div>

        {/* Tombol CTA Desktop */}
        <div className="hidden md:block">
          <Button href={consultationUrl} variant="white" showIcon={false} target="_blank" rel="noopener noreferrer">
            Mulai Konsultasi
          </Button>
        </div>

        {/* Tombol Toggle Mobile */}
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
          {SITE_CONFIG.navLinks.map((link, idx) => {
            if (link.dropdown) {
              const activeDropdown = pathname.startsWith('/layanan');
              return (
                <div key={idx} className="flex flex-col gap-2">
                  <button
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className="flex items-center justify-between text-sm font-medium text-left w-full py-1"
                  >
                    <span className="relative inline-block">
                      {link.label}
                      {activeDropdown && <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[var(--green-bright)] rounded-full" />}
                    </span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {mobileServicesOpen && (
                    <div className="pl-4 border-l border-white/10 flex flex-col gap-2 py-1">
                      {link.dropdown.map((sub, sIdx) => (
                        <Link
                          key={sIdx}
                          href={sub.href}
                          onClick={() => setIsOpen(false)}
                          className="text-xs font-medium py-1 flex items-center justify-between"
                        >
                          <span>{sub.label}</span>
                          {pathname === sub.href && <span className="w-1.5 h-1.5 rounded-full bg-[var(--green-bright)]" />}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link 
                key={idx} 
                href={getNavHref(link.href)} 
                onClick={() => setIsOpen(false)} 
                className="text-sm font-medium py-1 w-max relative"
              >
                <span>{link.label}</span>
                {isActive(link.href) && <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[var(--green-bright)] rounded-full" />}
              </Link>
            );
          })}
          <Button href={consultationUrl} variant="white" showIcon={false} target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)} className="w-full mt-2">
            Mulai Konsultasi
          </Button>
        </div>
      )}
    </header>
  );
}