import { SITE_CONFIG } from './siteConfig';

export const FOOTER_DATA = {
  brand: SITE_CONFIG,
  links: [
    {
      title: "Navigasi",
      items: SITE_CONFIG.navLinks,
    },
    {
      title: "Layanan Utama",
      items: [
        { label: "Penyemprotan Lahan", href: "/#services" },
        { label: "Pengangkutan Logistik Tani", href: "/#services" },
        { label: "Tebar Benih & Granul", href: "/#services" },
        { label: "Penyerbukan Buatan", href: "/#services" },
      ],
    },
  ],
};