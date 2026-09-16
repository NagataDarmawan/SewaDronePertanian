'use client';

import React, { useState } from 'react';
import { CONTACT_DATA } from '@/constants/contactData';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { Mail, Phone, MapPin, Send, CheckCircle2, ShieldAlert } from 'lucide-react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-white text-gray-900 overflow-x-hidden">
      
      {/* Hero Full-Frame Section */}
      <div 
        className="relative h-[50vh] w-full bg-cover bg-center flex items-end pb-8 sm:pb-10" 
        style={{ backgroundImage: `url('${CONTACT_DATA.backgroundImage}')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--green-dark)] via-[var(--green-dark)]/60 to-black/30"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-left text-white space-y-2">
          <div className="max-w-3xl space-y-2">
            <span className="text-white font-mono text-xs sm:text-sm tracking-widest uppercase font-semibold">
              {CONTACT_DATA.subtitle}
            </span>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-snug">
              {CONTACT_DATA.title}
            </h1>
            <p className="text-xs sm:text-sm text-gray-200 leading-relaxed">
              {CONTACT_DATA.description}
            </p>
          </div>
        </div>
      </div>

      {/* Main Content: Info & Form */}
      <section className="relative z-20 -mt-6 sm:-mt-8 py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white rounded-t-[32px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Kolom Kiri: Informasi Kontak, Cakupan Wilayah & Sosial Media */}
          <div className="lg:col-span-5 space-y-8">
            <ScrollReveal>
              <div>
                <span className="text-[var(--green-dark)] font-mono text-xs tracking-widest uppercase font-semibold">
                  HUBUNGI KAMI
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-2 mb-4">Informasi Kontak</h2>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                  Silakan hubungi kami lewat saluran di bawah ini atau ikuti media sosial kami untuk informasi terbaru.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-[var(--green-bright,#22c55e)]/10 flex items-center justify-center text-[var(--green-dark)] flex-shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-gray-900">Alamat Kantor</h3>
                      <p className="text-sm text-gray-600 mt-0.5">{CONTACT_DATA.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-[var(--green-bright,#22c55e)]/10 flex items-center justify-center text-[var(--green-dark)] flex-shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-gray-900">Email</h3>
                      <p className="text-sm text-gray-600 mt-0.5">{CONTACT_DATA.email}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-[var(--green-bright,#22c55e)]/10 flex items-center justify-center text-[var(--green-dark)] flex-shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-gray-900">Telepon / WhatsApp</h3>
                      <p className="text-sm text-gray-600 mt-0.5">{CONTACT_DATA.phone}</p>
                    </div>
                  </div>
                </div>

                {/* Box Cakupan Layanan & Catatan Khusus dari CONTACT_DATA */}
                <div className="mt-8 p-5 rounded-2xl bg-gray-50 border border-gray-200/80 space-y-3">
                  <div className="flex items-center gap-2.5 text-gray-900 font-bold text-sm">
                    <MapPin className="w-4 h-4 text-[var(--green-dark)]" />
                    <span>Cakupan Wilayah Layanan</span>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    Saat ini area operasional utama kami mencakup wilayah <strong className="text-gray-900">{CONTACT_DATA.coverage}</strong>, dan sekitarnya di jalur Pantura.
                  </p>
                  <div className="pt-2 border-t border-gray-200/60 flex items-start gap-2 text-xs text-gray-600">
                    <ShieldAlert className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                    <span>{CONTACT_DATA.coverageNote}</span>
                  </div>
                </div>

                {/* Sosial Media dengan SVG */}
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h3 className="text-sm font-bold text-gray-900 mb-4">Media Sosial</h3>
                  <div className="flex items-center gap-3">
                    {CONTACT_DATA.socials.map((social, idx) => (
                      <a
                        key={idx}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        className="w-10 h-10 rounded-xl bg-gray-100 hover:bg-[var(--green-bright,#22c55e)] hover:text-white text-gray-700 flex items-center justify-center transition-colors"
                      >
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                          <path d={social.svgPath} />
                        </svg>
                      </a>
                    ))}
                  </div>
                </div>

              </div>
            </ScrollReveal>
          </div>

          {/* Kolom Kanan: Form Kontak */}
          <div className="lg:col-span-7">
            <ScrollReveal delay={200}>
              <div className="p-8 sm:p-10 rounded-3xl bg-[var(--green-dark)] text-white shadow-xl border border-white/10">
                <h3 className="text-xl sm:text-2xl font-bold mb-6">Kirim Pesan</h3>
                
                {submitted ? (
                  <div className="py-12 text-center space-y-4">
                    <div className="w-16 h-16 bg-[var(--green-bright,#22c55e)]/20 text-[var(--green-bright,#22c55e)] rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-white">Pesan Terkirim!</h3>
                    <p className="text-gray-300 text-sm">Makasih udah ngehubungi kami. Tim kami bakal segera merespons pesan kamu.</p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-4 px-6 py-2.5 rounded-xl text-sm font-semibold bg-[var(--green-bright,#22c55e)] text-white hover:opacity-95 transition-all cursor-pointer"
                    >
                      Kirim Pesan Lain
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-gray-200 mb-2">Nama Lengkap</label>
                      <input 
                        type="text" 
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        placeholder="Masukkan nama kamu"
                        className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-[var(--green-bright,#22c55e)] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-gray-200 mb-2">Email</label>
                      <input 
                        type="email" 
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        placeholder="nama@email.com"
                        className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-[var(--green-bright,#22c55e)] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-gray-200 mb-2">Pesan</label>
                      <textarea 
                        rows={4}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        placeholder="Tuliskan pesan atau kebutuhan kamu..."
                        className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-[var(--green-bright,#22c55e)] transition-colors resize-none"
                      />
                    </div>

                    <button 
                      type="submit"
                      className="w-full py-3.5 px-6 rounded-xl text-sm font-semibold bg-[var(--green-bright,#22c55e)] text-white hover:opacity-95 transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>Kirim Pesan</span>
                      <Send className="w-4 h-4" />
                    </button>
                  </form>
                )}
              </div>
            </ScrollReveal>
          </div>

        </div>
      </section>

    </main>
  );
}