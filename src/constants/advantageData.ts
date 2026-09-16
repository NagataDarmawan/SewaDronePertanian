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
      title: "Solusi Sesuai Kebutuhan",
      description: "Setiap lahan memiliki karakteristik unik. Kami mendengarkan dan menganalisis kebutuhan spesifik Anda sebelum menentukan tindakan.",
    },
    {
      id: "02",
      title: "Persiapan & Perencanaan Matang",
      description: "Pekerjaan dipersiapkan secara detail berdasarkan area dan jenis layanan agar eksekusi di lapangan berjalan optimal.",
    },
    {
      id: "03",
      title: "Operasional Profesional",
      description: "Pengoperasian drone ditangani langsung oleh tenaga ahli yang memastikan ketepatan dan keselamatan di lapangan.",
    },
    {
      id: "04",
      title: "Hasil Tuntas & Terjamin",
      description: "Kami memastikan seluruh area yang dikerjakan telah diselesaikan dengan standar kualitas terbaik sesuai kesepakatan.",
    },
  ],
};