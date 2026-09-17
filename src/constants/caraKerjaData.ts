import { SERVICES_DATA } from './servicesData';

export const WORKFLOW_DATA = {
  subtitle: "ALUR PENGERJAAN",
  title: "Tahapan Kerja yang Terencana",
  description: "Proses pengerjaan dirancang transparan dan terstruktur dari awal hingga akhir untuk hasil operasional lahan yang maksimal.",
  mainImage: SERVICES_DATA.headerImage || "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?q=80&w=1000&auto=format&fit=crop",
  
  // Mengambil langsung alur bookingSteps asli dari data layanan websitemu
  steps: SERVICES_DATA.services[0].bookingSteps.map((stepTitle, idx) => ({
    id: idx + 1,
    title: stepTitle,
    description: [
      "Bagikan titik lokasi lahan dan estimasi luas area yang akan dikerjakan via WhatsApp.",
      "Diskusi kebutuhan spesifik, jenis tanaman, obat/pupuk, serta pemilihan jadwal.",
      "Konfirmasi akses area, pengecekan kondisi cuaca, dan kesiapan pemetaan penerbangan.",
      "Penetapan tanggal dan waktu pelaksanaan eksekusi armada drone di lokasi.",
      "Pelaksanaan operasional penyemprotan atau penebaran oleh tim pilot profesional."
    ][idx] || "Tahapan proses layanan presisi untuk lahan pertanian Anda."
  }))
};