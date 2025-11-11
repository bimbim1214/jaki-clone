// src/pages/news.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, Eye } from 'lucide-react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import { newsData } from '../data/news-dummy';

function formatDate(d) {
  try {
    return new Date(d).toLocaleDateString('id-ID', {
      weekday: 'long', day: '2-digit', month: 'long', year: 'numeric',
    });
  } catch { return d; }
}

/* ==== Komponen kecil ==== */
const FeaturedBig = ({ item }) => (
  <Link to={`/berita/${item.id}`} className="relative block rounded-2xl overflow-hidden h-[380px] bg-gray-200 group">
    <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
    <div className="absolute left-0 right-0 bottom-0 p-5 md:p-6 text-white">
      <h2 className="text-2xl md:text-3xl font-bold leading-tight mb-3 group-hover:underline">{item.title}</h2>
      <div className="flex flex-wrap items-center gap-4 text-xs md:text-sm text-white/90">
        <span className="flex items-center gap-2"><Calendar size={16} /> {formatDate(item.date)}</span>
        <span className="flex items-center gap-2"><User size={16} /> {item.author}</span>
        <span className="flex items-center gap-2"><Eye size={16} /> {1000 + (item.id % 300)}</span>
      </div>
    </div>
  </Link>
);

const FeaturedSmall = ({ item }) => (
  <Link to={`/berita/${item.id}`} className="relative block rounded-2xl overflow-hidden h-[180px] bg-gray-200 group">
    <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent" />
    <div className="absolute left-0 right-0 bottom-0 p-4 text-white">
      <h3 className="text-lg font-semibold leading-snug line-clamp-2 group-hover:underline">{item.title}</h3>
      <div className="mt-2 text-[12px] text-white/90 flex items-center gap-3">
        <span className="flex items-center gap-1"><Calendar size={14} /> {formatDate(item.date)}</span>
      </div>
    </div>
  </Link>
);

const PressCard = ({ item }) => (
  <Link to={`/berita/${item.id}`} className="bg-white rounded-2xl shadow-sm hover:shadow-md transition overflow-hidden flex flex-col border border-gray-100">
    <div className="h-36 bg-gray-100">
      <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
    </div>
    <div className="p-4 flex-1 flex flex-col">
      <div className="text-[11px] font-medium text-teal-700 bg-teal-50 inline-block px-2 py-1 rounded mb-2">
        {item.category}
      </div>
      <h4 className="font-semibold text-gray-900 text-sm leading-snug line-clamp-2">{item.title}</h4>
      <div className="mt-auto pt-3 text-[11px] text-gray-500 flex items-center justify-between">
        <span className="flex items-center gap-1"><Calendar size={13} /> {formatDate(item.date)}</span>
        <span className="flex items-center gap-1"><Eye size={13} /> {500 + (item.id % 300)}</span>
      </div>
    </div>
  </Link>
);

/* ==== Halaman ==== */
const News = () => {
  const sorted = [...newsData].sort((a, b) => new Date(b.date) - new Date(a.date));
  const featuredBig = sorted[0];
  const featuredSide = sorted.slice(1, 3);
  const pressList = sorted.slice(3);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* ===== HEADER GRADIENT (tanpa ubah navbar) ===== */}
      <section className="bg-gradient-to-r from-blue-600 via-teal-600 to-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-14 text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold">Berita & Artikel</h1>
          <p className="opacity-90 mt-3 text-base md:text-lg max-w-3xl mx-auto">
            Jelajahi kabar terkini seputar program, layanan, dan kegiatan di Kabupaten Bantul.
          </p>
        </div>
      </section>

      {/* TOP: headline besar + 2 headline kecil */}
      <section className="pb-8 pt-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">{featuredBig && <FeaturedBig item={featuredBig} />}</div>
            <div className="space-y-6">{featuredSide.map((it) => <FeaturedSmall item={it} key={it.id} />)}</div>
          </div>
        </div>
      </section>

      {/* SIARAN PERS */}
      <section className="py-2 pb-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <img src="/images/logo512.png" alt="Siaran Pers" className="w-8 h-8 rounded" />
              <h2 className="text-xl font-bold text-gray-900">SIARAN PERS</h2>
            </div>
            <Link to="/berita" className="text-sm text-teal-600 hover:text-teal-700 font-semibold">
              Selengkapnya..
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pressList.map((item) => <PressCard item={item} key={item.id} />)}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default News;
