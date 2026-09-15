export interface WorkflowStep {
  id: string;
  title: string;
  description: string;
}

export interface WorkflowData {
  subtitle: string;
  title: string;
  description: string;
  images: [string, string];
  steps: WorkflowStep[];
}

export const WORKFLOW_DATA: WorkflowData = {
  subtitle: "Dari kebutuhan di lahan, hingga pekerjaan selesai.",
  title: "Setiap Pekerjaan Dimulai dari Memahami Lahan",
  description: "Tidak ada pekerjaan yang dimulai hanya dengan menerbangkan drone. Kami terlebih dahulu memahami apa yang dibutuhkan, bagaimana kondisi lahannya, dan pekerjaan seperti apa yang harus dilakukan. Setelah semuanya siap, barulah drone mengambil perannya.",
  images: [
    "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=1000&auto=format&fit=crop"
  ],
  steps: [
    {
      id: "01",
      title: "Ceritakan Kebutuhanmu",
      description: "Setiap lahan memiliki kebutuhan yang berbeda. Kami mulai dengan mendengarkan pekerjaan apa yang ingin dilakukan dan memahami kondisi yang ada di lapangan.",
    },
    {
      id: "02",
      title: "Siapkan Pekerjaan",
      description: "Setelah kebutuhan dipahami, kami menyiapkan pekerjaan berdasarkan area, jenis layanan, dan kondisi lahan agar pelaksanaannya dapat berjalan dengan baik.",
    },
    {
      id: "03",
      title: "Saatnya Bekerja",
      description: "Drone kemudian digunakan sesuai kebutuhan pekerjaan. Operator mengatur penerbangan dan memastikan proses berjalan sesuai rencana di lapangan.",
    },
    {
      id: "04",
      title: "Pekerjaan Selesai",
      description: "Setelah pekerjaan selesai, kami memastikan seluruh area yang menjadi bagian dari pekerjaan telah ditangani sesuai kesepakatan.",
    },
  ],
};