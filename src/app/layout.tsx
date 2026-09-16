import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SITE_CONFIG } from "@/constants/siteConfig";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://agrofly.vercel.app'),
  title: {
    default: `${SITE_CONFIG.name} - Layanan Drone Pertanian Profesional`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.tagline,
  keywords: [
    "drone pertanian", 
    "jasa drone sprayer", 
    "penyemprotan lahan pertanian", 
    "tebar benih drone", 
    "drone agriculture indonesia", 
    "AgroFly",
    "AgroFly.vercel",
    "Penyemprotan Lahan",
    "Pengangkutan Logistik Tani",
    "Tebar Benih & Granul",
    "Penyerbukan Buatan",
    "Nagata Darmawan",
    "nagata darmawan website",
    "nagata darmawan vercel"
  ],
  authors: [{ name: "Nagata Darmawan" }],
  creator: "Nagata Darmawan",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://agrofly.vercel.app",
    title: `${SITE_CONFIG.name} - Layanan Drone Pertanian Profesional`,
    description: SITE_CONFIG.tagline,
    siteName: SITE_CONFIG.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_CONFIG.name} - Layanan Drone Pertanian Profesional`,
    description: SITE_CONFIG.tagline,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}