export const SITE_CONFIG = {
  name: "AgroFly",
  logo: "/AgroFlyLogo.jpg", // Path atau URL foto logo Anda
  tagline: "Solusi layanan drone pertanian profesional untuk produktivitas dan efisiensi lahan modern.",
  contact: {
    email: "halo@agrofly.id",
    phone: "+62 812-3456-7890",
    whatsapp: "https://wa.me/6281234567890",
    address: "Gumayun, Kec. Dukuhwaru, Kab. Tegal, Jawa Tengah, Indonesia",
  },
  waMessageTemplate: (serviceTitle: string) => 
    `Halo AgroFly, saya mau konsultasi & booking untuk layanan *${serviceTitle}*.

Berikut detail kebutuhan lahan saya:
- Layanan: ${serviceTitle}
- Lokasi / Daerah: 
- Estimasi Luas Lahan: 
- Waktu Pekerjaan: 

Mohon informasi ketersediaan jadwal dan konfirmasinya. Terima kasih!`,

  ctaMessageTemplate: 
    `Halo AgroFly, saya ingin berkonsultasi mengenai solusi layanan drone pertanian untuk kebutuhan lahan saya. Mohon informasi lebih lanjut. Terima kasih!`,

  socials: [
    {
      label: "Instagram",
      href: "https://instagram.com",
      svgPath: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
    },
    {
      label: "Facebook",
      href: "https://facebook.com",
      svgPath: "M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.378 14.5 5 15.5 5H18V0h-3.808C10.59 0 9 1.581 9 4.615V8z"
    },
    {
      label: "TikTok",
      href: "https://tiktok.com",
      svgPath: "M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"
    },
    {
      label: "YouTube",
      href: "https://youtube.com",
      svgPath: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
    }
  ],
  navLinks: [
    { label: "Beranda", href: "/" },
    { label: "Tentang", href: "/tentang-kami" },
    { 
      label: "Layanan", 
      href: "/#services",
      dropdown: [
        { label: "Penyemprotan Lahan", href: "/layanan/penyemprotan-lahan" },
        { label: "Pengangkutan Logistik Tani", href: "/layanan/pengangkutan-logistik-tani" },
        { label: "Tebar Benih & Granul", href: "/layanan/tebar-benih-granul" },
        { label: "Penyerbukan Buatan", href: "/layanan/penyerbukan-buatan" },
      ]
    },
    { label: "FAQ", href: "/#faq" },
    { label: "Kontak", href: "/kontak" },
  ],
};