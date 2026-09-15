export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  location: string;
  content: string;
}

export const TESTIMONIALS_DATA = {
  subtitle: "MEREKA YANG TELAH BEKERJA BERSAMA KAMI",
  title: "Cerita dari Lapangan",
  image:
    "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?q=80&w=1000&auto=format&fit=crop",

  testimonials: [
    {
      id: "1",
      name: "Nama Pelanggan",
      role: "Petani",
      location: "Tegal",
      content:
        "Pekerjaan penyemprotan jadi lebih praktis. Prosesnya juga cukup mudah, dari koordinasi sampai pekerjaan selesai di lahan.",
    },
    {
      id: "2",
      name: "Nama Pelanggan",
      role: "Pengelola Lahan",
      location: "Brebes",
      content:
        "Kami terbantu untuk pekerjaan di area yang cukup luas. Koordinasinya jelas dan pekerjaan dilakukan sesuai kebutuhan lahan.",
    },
    {
      id: "3",
      name: "Nama Pelanggan",
      role: "Petani",
      location: "Pemalang",
      content:
        "Penggunaan drone membantu pekerjaan di lahan menjadi lebih ringan, terutama untuk area yang cukup luas.",
    },
    {
      id: "4",
      name: "Nama Pelanggan",
      role: "Pemilik Perkebunan",
      location: "Tegal",
      content:
        "Mulai dari komunikasi sampai pelaksanaan di lapangan berjalan dengan baik. Tim juga cukup responsif ketika kami menyampaikan kebutuhan.",
    },
    {
      id: "5",
      name: "Nagata Darmawan",
      role: "",
      location: "Tegal",
      content:
        "Nagata.",
    }
  ],
};