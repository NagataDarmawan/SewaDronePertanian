export const ABOUT_DATA = {
  // -------------------------------------------------------------
  // RINGKASAN BERANDA (Landing page)
  // -------------------------------------------------------------
  title: "Cara Kami Melihat Pertanian",
  description: "Bagi kami, teknologi pertanian bukan sekadar tentang mesin canggih, melainkan tentang memahami dinamika lapangan dan menghargai setiap proses di dalamnya.",
  points: [
    {
      id: "01",
      title: "Pertanian Bukan Sekadar Pekerjaan",
      description: "Di balik setiap hektare lahan, ada waktu, tenaga, modal, dan harapan besar atas hasil panen. Kami menghargai setiap prosesnya sebagai kerja keras yang bernilai tinggi.",
    },
    {
      id: "02",
      title: "Setiap Lahan Punya Kebutuhan Berbeda",
      description: "Kondisi kontur, luas area, hingga jenis tanaman selalu memiliki karakteristik unik. Pendekatan operasional kami selalu fleksibel menyesuaikan kebutuhan spesifik lahan Anda.",
    },
    {
      id: "03",
      title: "Teknologi Membantu, Bukan Menggantikan",
      description: "Drone diposisikan sebagai alat pendukung agar pekerjaan fisik di lapangan menjadi jauh lebih praktis, aman, dan terukur tanpa menggeser peran vital petani.",
    },
    {
      id: "04",
      title: "Pertanian Terus Berkembang",
      description: "Inovasi teknologi akan terus bergerak maju. Kami berkomitmen membawa efisiensi modern ke dalam ekosistem pertanian tanpa pernah menghilangkan sisi manusianya.",
    },
  ],
  // Foto untuk Section 3 (3 Foto Miring di Tengah)
  section3Images: [
    "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=1000&auto=format&fit=crop",
  ],

  // -------------------------------------------------------------
  // DETAIL HALAMAN (AboutPage.tsx)
  // -------------------------------------------------------------
  hero: {
    subtitle: "Tentang Kami",
    title: "Transformasi Presisi Modern di Sektor Pertanian",
    description: "Menghubungkan inovasi teknologi udara tingkat lanjut dengan ekosistem agrikultur nasional guna mendongkrak efisiensi dan hasil panen.",
    backgroundImage: "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?q=80&w=1920&auto=format&fit=crop",
  },
  
  // Kisah Awal & Visi Misi
  story: {
    subtitle: "Kisah Awal & Perjalanan",
    title: "Lahir dari Keresahan Lapangan Menuju Solusi Presisi",
    bannerTagline: "Memaksimalkan potensi lahan pertanian melalui modernisasi teknologi pemetaan dan penyemprotan presisi.",
    // Field baru untuk mengganti foto drone banner bawah dari data
    droneBannerImage: "/drone.jpg",
    paragraphs: [
      "Perjalanan kami dimulai dari sebuah komitmen sederhana: memahami tantangan nyata di tengah hektaran lahan pertanian lokal. Kami menyaksikan langsung berbagai kendala operasional yang dihadapi petani—mulai dari kelangkaan tenaga kerja manual untuk pemupukan, lambatnya proses pengerjaan di lahan luas, hingga tingginya risiko kesehatan akibat paparan bahan kimia secara langsung.",
      "Selama bertahun-tahun membersamai ekosistem agrikultur, kami terus berinovasi bertransformasi dari sekadar penyedia layanan manual menjadi penyedia solusi teknologi udara modern yang terintegrasi. Kematangan operasional kami tercermin dalam setiap standar pelayanan yang dirancang khusus untuk menjawab kebutuhan spesifik di lapangan."
    ],
    storyImages: [
      "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?q=80&w=1000&auto=format&fit=crop",
    ],
    missionsTitle: "Visi & Misi Kami",
    missions: [
      "Visi: Menjadi pelopor dan pemimpin layanan mekanisasi berbasis udara terpadu dengan standar kualitas terbaik untuk mendukung kemandirian petani.",
      "Misi 1: Menghadirkan layanan aplikasi pupuk dan proteksi tanaman presisi tinggi yang cepat, merata, dan terjangkau.",
      "Misi 2: Menjamin keamanan serta kesehatan pekerja melalui eliminasi kontak langsung dengan substansi kimia berbahaya.",
      "Misi 3: Berperan aktif dalam memajukan efisiensi agrikultur nasional melalui pemanfaatan teknologi yang ramah lingkungan."
    ],
    missionImage: "/drone2.jpg",
  },
};