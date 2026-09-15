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
        { label: "Penyemprotan Presisi", href: "#services" },
        { label: "Penebaran Benih", href: "#services" },
        { label: "Kargo & Angkut Panen", href: "#services" },
        { label: "Pemetaan Lahan", href: "#services" },
      ],
    },
  ],
};