export interface AdvantageItem {
  id: string;
  title: string;
  description: string;
}

export interface AdvantageData {
  subtitle: string;
  title: string;
  description: string;
  images: [string, string];
  advantages: AdvantageItem[];
}

export const ADVANTAGE_DATA: AdvantageData = {
  subtitle: "Mengapa Memilih Kami",
  title: "Keunggulan Pendekatan Kami di Lapangan",
  description: "Kami tidak sekadar menerbangkan drone, tetapi memastikan setiap solusi dirancang khusus berdasarkan pemahaman mendalam tentang kondisi lahan dan kebutuhan nyata Anda.",
  images: [
    "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=1000&auto=format&fit=crop"
  ],
  advantages: [
    {
      id: "01",
      title: "Solusi Disesuaikan dengan Kondisi Lahan",
      description: "Setiap lahan memiliki karakteristik unik. Kami mendengarkan dan menganalisis kondisi area serta jenis tanaman Anda sebelum menentukan tindakan.",
    },
    {
      id: "02",
      title: "Pengerjaan Rapi & Merata",
      description: "Memanfaatkan teknologi pemetaan jalur penerbangan presisi untuk memastikan sebaran semprotan atau pupuk konsisten di seluruh area.",
    },
    {
      id: "03",
      title: "Tim Pilot Bersertifikasi",
      description: "Pengoperasian drone ditangani langsung oleh pilot profesional bersertifikat resmi demi ketepatan dan keselamatan di lapangan.",
    },
    {
      id: "04",
      title: "Komunikasi & Transparansi Lapangan",
      description: "Berkoordinasi secara langsung dengan pemilik lahan selama pengerjaan dan menyampaikan laporan hasil pelaksanaan dengan transparan.",
    },
  ],
};