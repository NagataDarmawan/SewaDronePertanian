'use client';

import React, { useState } from 'react';
import { X, Send, MapPin, Calendar, Layers, Hash } from 'lucide-react';
import { SITE_CONFIG } from '@/constants/siteConfig';
import Button from '@/components/ui/Button';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceTitle: string;
}

export default function BookingModal({ isOpen, onClose, serviceTitle }: BookingModalProps) {
  const [formData, setFormData] = useState({
    location: '',
    areaSize: '',
    workDate: '',
    notes: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const waMessage = `Halo ${SITE_CONFIG.name}, saya ingin booking layanan *${serviceTitle}*.

Berikut detail kebutuhan lahan saya:
- *Layanan*: ${serviceTitle}
- *Lokasi / Daerah*: ${formData.location || '-'}
- *Estimasi Luas Lahan*: ${formData.areaSize ? `${formData.areaSize} Hektar` : '-'}
- *Waktu Pekerjaan*: ${formData.workDate || '-'}
${formData.notes ? `- *Catatan Tambahan*: ${formData.notes}` : ''}

Mohon informasi ketersediaan jadwal dan konfirmasinya. Terima kasih!`;

    const waUrl = `${SITE_CONFIG.contact.whatsapp}?text=${encodeURIComponent(waMessage)}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 animate-scaleUp"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Modal */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100 bg-gray-50/50">
          <div>
            <span className="text-xs font-mono font-semibold text-[var(--green-dark,#15803d)] uppercase tracking-wider">Form Booking</span>
            <h3 className="text-xl font-bold text-gray-900 leading-snug">{serviceTitle}</h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Tutup modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Isian Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[var(--green-dark,#15803d)] mb-1.5 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[var(--green-dark,#15803d)]" />
              Lokasi / Daerah Lahan
            </label>
            <input
              type="text"
              placeholder="Contoh: Kec. Ngawi, Kabupaten Ngawi"
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[var(--green-dark,#15803d)]/20 focus:border-[var(--green-dark,#15803d)] text-sm text-gray-800 placeholder-gray-400 transition-all"
              required
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[var(--green-dark,#15803d)] mb-1.5 flex items-center gap-1.5">
                <Hash className="w-3.5 h-3.5 text-[var(--green-dark,#15803d)]" />
                Estimasi Luas (Hektar)
              </label>
              <input
                type="number"
                step="0.5"
                placeholder="Contoh: 5"
                value={formData.areaSize}
                onChange={(e) => setFormData({ ...formData, areaSize: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[var(--green-dark,#15803d)]/20 focus:border-[var(--green-dark,#15803d)] text-sm text-gray-800 placeholder-gray-400 transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[var(--green-dark,#15803d)] mb-1.5 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[var(--green-dark,#15803d)]" />
                Waktu Pekerjaan
              </label>
              <input
                type="date"
                value={formData.workDate}
                onChange={(e) => setFormData({ ...formData, workDate: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[var(--green-dark,#15803d)]/20 focus:border-[var(--green-dark,#15803d)] text-sm text-gray-800 transition-all"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[var(--green-dark,#15803d)] mb-1.5 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-[var(--green-dark,#15803d)]" />
              Catatan Tambahan (Opsional)
            </label>
            <textarea
              rows={3}
              placeholder="Sebutkan jenis tanaman, komoditas, atau instruksi khusus..."
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[var(--green-dark,#15803d)]/20 focus:border-[var(--green-dark,#15803d)] text-sm text-gray-800 placeholder-gray-400 transition-all resize-none"
            />
          </div>

          <div className="pt-2">
            <Button
              type="submit"
              variant="primary"
              className="w-full py-4 text-center justify-center font-bold shadow-md gap-2"
            >
              <Send className="w-4 h-4" />
              <span>Lanjutkan ke WhatsApp</span>
            </Button>
            <p className="text-[11px] text-center text-gray-400 mt-2">
              Detail akan otomatis terisi rapi pada obrolan WhatsApp Anda.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}