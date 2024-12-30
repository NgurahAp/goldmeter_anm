export interface ProductDetails {
  name: string;
  description: string;
  image: string;
  modePadatFeatures?: string[]; // Make optional
  modeCairFeatures?: string[]; // Make optional
  features?: string[]; // Add general features
  spesifikasi: string[];
}

export const productsData: Record<string, ProductDetails> = {
  "Alfa Mirage Densimeter MD-300S": {
    name: "Alfa Mirage Densimeter MD-300S",
    description:
      "Model populer dengan resolusi 0,001 g / cm yang ditingkatkan dari sebelumnya model MD-200S. Bodi kompak dan pengukuran kepadatan yang akurat untuk benda padat dan sampel cair.",
    image: "/landing/md-300s.jpeg",
    modePadatFeatures: [
      "Kepadatan minimum dan resolusi volume 0,001 g / cm.",
      "Rentang pengukuran maksimuum hingga 300g.",
      "Pengoperasian yang lebih mulus dan mudah dengan Container yang didesain ulang dan Tangki Air Styrol tahan bahan kimia.",
      "Hanya 10 klik untuk mengukur.",
      "Mengukur tingkat perubahan kepadatan dan volume dimungkinkan.",
      "Penilaian hasil dengan Mode Pembandingan tersedia.",
      "Mode Pengaturan Opsional tersedia untuk perbedaan yang tidak pasti sampel atau pengembangan material baru.",
      "Koneksi mudah ke PC dengan melengkapi RS232C antarmuka standar.",
    ],
    modeCairFeatures: [
      "MD-300S dapat mengukur densitas cairan terkompensasi dengan pengaturan suhu cairan terkompensasi dan laju suhu kompensasi.",
    ],
    spesifikasi: [
      "Model : MD-300S",
      "Resolusi : 0.001g/cm",
      "Kapasitas : 0.01~300g",
      "Fitur : Padat, Cair",
      "Berat : 1.6kg",
      "Dimensi : (D) 218 x (W) 190 x (H) 170mm",
      "Asesoris : Pinset, Termometer, Berat Kalibrasi 200g, Sudut Baja, Adaptor AC, Mudah terhubung ke PC dengan perlengkapan standar RS232C, Kaca depan kedap udara.",
    ],
  },
  "Elektronik Densimeter MDS-300": {
    name: "Elektronik Densimeter MDS-300",
    description:
      "Pengukuran kerapatan yang mudah tidak hanya padat, dan kepadatan sampel cair, tetapi juga fungsi baru pengukuran kepadatan bubuk ditambah dengan resolusi 0,001 g/cm³ dan nilai referensi 0,0001 g/cm³. Sensor desain baru dan fungsi penimbangan otomatis meningkatkan akurasi dan efisiensi kerja.",
    image: "/landing/mds-300.jpeg",
    modePadatFeatures: [
      "Akurasi lebih tinggi dengan resolusi 0,001 g/cm³, dan nilai referensi 0,0001 g/cm³ dapat ditampilkan.",
      "Tidak perlu membuka dan menutup penutup dengan sensor desain baru.",
      "Tutup ukuran yang lebih kecil membawa lebih sedikit nilai kesalahan, dan lebih sedikit waktu pengukuran.",
      "Meningkatkan efisiensi kerja dan pengulangan dengan penimbangan otomatis (fungsi penimbangan semi-otomatis).",
      "Rendah kesalahan, mudah digunakan.",
      "Wadah pengukuran dan pelet dapat dibuat dengan mudah.",
      "Waktu pengukuran yang dapat dipilih hingga 5 jenis.",
    ],
    modeCairFeatures: [
      "Akurasi lebih tinggi dengan resolusi 0,001 g/cm³ dan nilai referensi 0,0001 g/cm³.",
      "Kompensasi suhu kepadatan cairan dengan mengukur cairan.",
      "Waktu pengukuran yang dapat dipilih.",
    ],
    spesifikasi: [
      "Model : MDS-300",
      "Resolusi : 0.001 g/cm³ (0.0001 g/cm³)",
      "Kapasitas : 0.001~300 g (0.001~300 g)",
      "Fitur: Padat, Cair, Bubuk",
      "Berat : 2.8kg",
      "Dimensi : (D) 260 x (W) 190 x (H) 200 mm",
      "Aksesoris : Pinset, Termometer, Berat Kalibrasi 200g, Sudut Baja, Adaptor AC, Mudah terhubung ke PC dengan perlengkapan standar RS232C, Kaca Depan Kedap Udara",
    ],
  },
  "Elektronik Densimeter MDS-3000": {
    name: "Elektronik Densimeter MDS-3000",
    description:
      'MDS-3000 dapat mengukur kapasitas maksimum hingga 3kg. Pengukuran luas kapasitas memungkinkan untuk mengukur sampel lapis mencolok, dan itu memberi kepadatan rata-rata seluruh sampel. Sensor & Ukuran tangki air bisa disesuaikan tergantung pada ukuran sampel. Mudah dan nyaman "Fungsi Penimbangan Otomatis" adalah fitur standar.',
    image: "/landing/mds-3000.jpeg",
    modePadatFeatures: [
      "Sampel yang lebih besar yang tidak dapat dimuat dalam model sebelumnya, dengan berat hingga 3kg dapat diukur.",
      "Resolusi minimum 0,01g/ρ dan nilai referensi 0,001g/ρ dapat ditampilkan.",
      "Meningkatkan efisiensi kerja dan pengulangan dengan Penimbangan Otomatis fungsi. (Pengukuran semi-otomatis)",
      "Fungsi baru: pengukuran pengulangan kegiatan bubuk.",
      "Rendah menambahnya dan lebih dapat diukur dengan mudah.",
    ],
    modeCairFeatures: [
      "Kit opsional diperlukan.",
      "Resolusi kepadatan 0,01g/ρ dan nilai referensi 0,001g/ρ.",
      "Kompresi suhu kepadatan cairan dengan mengatur cairan nilai koefisien tergantung pada suhu.",
      "Waktu pengukuran yang dapat dipilih.",
    ],
    spesifikasi: [
      "Model : MDS-3000",
      "Resolusi: 0,01g/ρ (0,001g/ρ)",
      "Kapasitas: 0,01~3000g (0,01~3000g)",
      "Fitur : Padat, Cair, Bubuk",
      "Berat : 4.2kg",
      "Dimensi : (D)260 × (W)240 × (H)240mm",
      "Aksesoris : Piranti, Termometer, Sudut Baja, Adaptor AC, Muatan tambahan ke PC dengan penghubung standar RS232C",
    ],
  },
  "Alfa Mirage Gold Meter GKS-3000": {
    name: "Alfa Mirage Gold Meter GKS-3000",
    description:
      "Alfa Mirage GKS-3000 adalah alat penguji logam mulia berbasis pengukuran berat jenis (density) yang memungkinkan Anda mengukur kemurnian logam tanpa merusak sampel. Dengan teknologi terkini dari Jepang, alat ini mampu memberikan hasil yang cepat dan akurat, ideal untuk berbagai kebutuhan di sektor perhiasan, perdagangan logam mulia, hingga laboratorium.",
    image: "/detailProduct/gold-meter-gks-3000.jfif",
    features: [
      "Akurasi pengukuran hingga ±0.01 g/cm³ untuk memastikan hasil yang dapat dipercaya.",
      "Mampu mendeteksi logam mulia campuran dan tingkat kemurnian dengan mudah.",
      "Tampilan yang jelas dan mudah dibaca, bahkan dalam kondisi pencahayaan rendah.",
      "Alat dilengkapi dengan fitur kalibrasi otomatis untuk menjaga akurasi pengukuran.",
      "Tombol intuitif dan panduan pengguna membuat alat ini mudah digunakan, bahkan untuk pemula.",
      "Ringan dan kompak, memudahkan mobilitas untuk penggunaan di toko emas, pameran, atau di tempat kerja.",
    ],
    spesifikasi: [
      "Menggunakan metode Archimedes (membandingkan massa udara dan massa dalam air).",
      "Rentang Pengukuran : Karat emas 6k hingga 24k, kemurnian emas 25% hingga 100%, densitas 1.000–22.000 g/cm³.",
      "Akurasi : Karat ±0.1k, Densitas: ±0.01 g/cm³.",
      "Kapasitas Timbangan : Maksimum 300 gram, Resolusi 0.005 gram.",
      "Material yang Didukung : Emas kuning, emas putih, platinum, perak, dan logam mulia lainnya.",
      "Dimensi : (D) 185 x (w) 250 x (H) 175 mm.",
      "Berat : 2.5kg",
      "Daya : Power supply: AC 100V–240V, 50/60 Hz.",
      "Fitur Tambahan : Mode hemat energi, Kalibrasi internal otomatis."
    ],
  },
};
