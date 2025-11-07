// Data dummy untuk layanan utama (nanti akan diganti dengan API)
export const servicesData = [
  {
    id: 1,
    title: 'Informasi Wisata',
    description: 'Temukan destinasi wisata menarik di Bantul',
    icon: '🏖️',
    color: 'bg-blue-500',
    slug: 'wisata'
  },
  {
    id: 2,
    title: 'Layanan Publik',
    description: 'Akses layanan administrasi dan publik',
    icon: '🏛️',
    color: 'bg-green-500',
    slug: 'layanan-publik'
  },
  {
    id: 3,
    title: 'Berita & Artikel',
    description: 'Informasi terkini seputar Bantul',
    icon: '📰',
    color: 'bg-purple-500',
    slug: 'berita'
  },
  {
    id: 4,
    title: 'UMKM Lokal',
    description: 'Produk dan usaha lokal Bantul',
    icon: '🛍️',
    color: 'bg-orange-500',
    slug: 'umkm'
  },
  {
    id: 5,
    title: 'Budaya & Seni',
    description: 'Kekayaan budaya dan seni Bantul',
    icon: '🎭',
    color: 'bg-red-500',
    slug: 'budaya'
  },
  {
    id: 6,
    title: 'Pendidikan',
    description: 'Informasi sekolah dan pendidikan',
    icon: '📚',
    color: 'bg-indigo-500',
    slug: 'pendidikan'
  },
  {
    id: 7,
    title: 'Kesehatan',
    description: 'Fasilitas kesehatan di Bantul',
    icon: '🏥',
    color: 'bg-teal-500',
    slug: 'kesehatan'
  },
  {
    id: 8,
    title: 'Pengaduan',
    description: 'Sampaikan aspirasi dan pengaduan',
    icon: '📢',
    color: 'bg-yellow-500',
    slug: 'pengaduan'
  }
];

// Data statistik
export const statsData = [
  { label: 'Layanan', value: '50+' },
  { label: 'Pengguna', value: '10K+' },
  { label: 'Wisata', value: '100+' },
  { label: 'UMKM', value: '500+' }
];

// Data untuk Kategorisasi Fitur (4 Kategori Utama)
export const featureCategoriesData = [
  {
    id: 1,
    title: 'Semua Layanan',
    category: 'Semua Layanan',
    image: '/images/logobantul1.png',
    //gradient: 'from-teal-400 to-emerald-500',
    totalServices: 58,
    features: [
      { icon: '🏥', name: 'Layanan Kesehatan', link: '/layanan/kesehatan' },
      { icon: '🚌', name: 'Transportasi Publik', link: '/layanan/transportasi' },
      { icon: '🏛️', name: 'Layanan Kependudukan', link: '/layanan/kependudukan' },
      { icon: '📚', name: 'Layanan Pendidikan', link: '/layanan/pendidikan' },
      { icon: '🏖️', name: 'Pariwisata & Budaya', link: '/layanan/wisata' }
    ],
    viewAllLink: '/semua-layanan'
  },
  {
    id: 2,
    title: 'Informasi Publik',
    category: 'Informasi Publik',
    image: '/images/logobantul1.png',
    //gradient: 'from-blue-400 to-blue-600',
    totalServices: 8,
    features: [
      { icon: '📰', name: 'Berita Terkini', link: '/informasi/berita' },
      { icon: '📢', name: 'Pengumuman Resmi', link: '/informasi/pengumuman' },
      { icon: '📊', name: 'Data & Statistik', link: '/informasi/data' },
      { icon: '📅', name: 'Agenda Kegiatan', link: '/informasi/agenda' },
      { icon: '🎯', name: 'Program Unggulan', link: '/informasi/program' }
    ],
    viewAllLink: '/informasi-publik'
  },
  {
    id: 3,
    title: 'Layanan Publik',
    category: 'Layanan Publik',
    image: '/images/logobantul1.png',
    //gradient: 'from-orange-400 to-orange-500',
    totalServices: 45,
    features: [
      { icon: '👥', name: 'Kependudukan & Catatan Sipil', link: '/publik/dukcapil' },
      { icon: '🏠', name: 'Perizinan & IMB', link: '/publik/perizinan' },
      { icon: '💼', name: 'Ketenagakerjaan', link: '/publik/ketenagakerjaan' },
      { icon: '🌾', name: 'Pertanian & Pangan', link: '/publik/pertanian' },
      { icon: '🛍️', name: 'UMKM & Koperasi', link: '/publik/umkm' }
    ],
    viewAllLink: '/layanan-publik'
  },
  {
    id: 4,
    title: 'Layanan Administrasi Pemerintah',
    category: 'Administrasi Pemerintah',
    image: '/images/logobantul1.png',
    //gradient: 'from-purple-400 to-pink-500',
    totalServices: 3,
    features: [
      { icon: '📋', name: 'Surat Keterangan', link: '/administrasi/surat-keterangan' },
      { icon: '📄', name: 'Legalisir Dokumen', link: '/administrasi/legalisir' },
      { icon: '🏢', name: 'Pengaduan Masyarakat', link: '/administrasi/pengaduan' }
    ],
    viewAllLink: null // Tidak perlu tombol view all karena hanya 3 layanan
  }
];