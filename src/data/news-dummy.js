// src/data/news-dummy.js
export const newsData = [
  {
    id: 1,
    title: 'Pemkab Bantul Resmikan Layanan Digital Terpadu',
    excerpt: 'Layanan digital baru memudahkan warga mengurus administrasi tanpa datang ke kantor.',
    content:
      'Pemerintah Kabupaten Bantul meresmikan layanan digital terpadu untuk memudahkan warga dalam mengurus administrasi kependudukan, perizinan, dan pengaduan. Layanan ini dapat diakses melalui web dan aplikasi seluler. Dengan sistem ini, waktu tunggu layanan dipangkas hingga 40% dan transparansi proses meningkat.',
    category: 'Pemerintahan',
    author: 'Humas Bantul',
    date: '2025-11-05',
    image: '/images/gambaratas.png',
  },
  {
    id: 2,
    title: 'Festival UMKM Bantul 2025 Hadirkan 200 Tenant',
    excerpt: 'Produk lokal unggulan dipamerkan di alun-alun selama tiga hari.',
    content:
      'Festival UMKM Bantul 2025 resmi dibuka. Lebih dari 200 pelaku usaha kecil dan menengah memamerkan produk unggulan. Acara dimeriahkan workshop branding, konsultasi ekspor, dan klinik pembiayaan KUR. Pemkab mendorong digitalisasi pemasaran agar UMKM naik kelas.',
    category: 'UMKM',
    author: 'Redaksi',
    date: '2025-10-28',
    image: '/images/hp.jpg',
  },
  {
    id: 3,
    title: 'Peringatan Hari Sumpah Pemuda di Bantul',
    excerpt: 'Ribuan pelajar ikut upacara dan aksi bersih sungai.',
    content:
      'Dalam rangka Hari Sumpah Pemuda, Pemkab Bantul menggelar upacara di Lapangan Trirenggo dan dilanjutkan aksi bersih sungai. Kegiatan ini mengajak generasi muda menjaga lingkungan dan memperkuat semangat persatuan.',
    category: 'Budaya',
    author: 'Redaksi',
    date: '2025-10-28',
    image: '/images/orang.jpg',
  },
  {
    id: 4,
    title: 'Vaksin Booster Gratis di 27 Puskesmas',
    excerpt: 'Dinas Kesehatan membuka layanan vaksin booster setiap akhir pekan.',
    content:
      'Dinas Kesehatan Bantul menyediakan vaksin booster di 27 puskesmas dengan jadwal setiap akhir pekan. Warga dapat melakukan pendaftaran daring melalui tautan resmi. Harap membawa KTP dan kartu vaksin sebelumnya.',
    category: 'Kesehatan',
    author: 'Dinkes Bantul',
    date: '2025-10-18',
    image: '/images/kantor.jpeg',
  },
  {
    id: 5,
    title: 'Sekolah Digital: Pelatihan Coding untuk Siswa SMA',
    excerpt: 'Program literasi digital mengajarkan dasar pemrograman dan AI.',
    content:
      'Disdikpora Bantul bekerja sama dengan komunitas IT lokal mengadakan pelatihan coding dasar dan pengenalan AI bagi siswa SMA. Targetnya mencetak talenta digital dan mendorong inovasi di sekolah.',
    category: 'Pendidikan',
    author: 'Redaksi',
    date: '2025-10-10',
    image: '/images/kantorbupati.jpg',
  },
  // Tambah beberapa lagi agar list-nya panjang
];

// buat total 16–20 item cepat:
for (let i = 6; i <= 20; i++) {
  const cats = ['Pemerintahan', 'UMKM', 'Pendidikan', 'Kesehatan', 'Budaya', 'Wisata', 'Teknologi'];
  const cat = cats[i % cats.length];
  newsData.push({
    id: i,
    title: `Berita Contoh #${i} - ${cat}`,
    excerpt: 'Ringkasan singkat berita contoh untuk kebutuhan tampilan daftar.',
    content:
      `Ini adalah konten lengkap untuk berita contoh #${i}. Berisi uraian yang lebih panjang mengenai topik ${cat}, disertai program/kegiatan yang relevan.`,
    category: cat,
    author: 'Redaksi',
    date: `2025-09-${String((i % 28) + 1).padStart(2, '0')}`,
    image: '/images/gambar.png',
  });
}
