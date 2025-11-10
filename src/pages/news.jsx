// src/pages/news.jsx
import React, { useMemo, useState } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import NewsCard from '../components/NewsCard';
import { newsData } from '../data/news-dummy';
import { Search, Filter } from 'lucide-react';

const PAGE_SIZE = 9;

const categories = ['Semua', 'Pemerintahan', 'UMKM', 'Pendidikan', 'Kesehatan', 'Budaya', 'Wisata', 'Teknologi'];

const News = () => {
  const [q, setQ] = useState('');
  const [cat, setCat] = useState('Semua');
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    const kw = q.toLowerCase();
    let items = newsData.filter(
      n =>
        n.title.toLowerCase().includes(kw) ||
        n.excerpt.toLowerCase().includes(kw) ||
        n.content.toLowerCase().includes(kw)
    );
    if (cat !== 'Semua') {
      items = items.filter(n => n.category === cat);
    }
    return items.sort((a, b) => new Date(b.date) - new Date(a.date));
  }, [q, cat]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const start = (page - 1) * PAGE_SIZE;
  const pageItems = filtered.slice(start, start + PAGE_SIZE);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Header */}
      <section className="pt-24 pb-10 bg-gradient-to-r from-indigo-600 to-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold">Berita & Artikel</h1>
          <p className="opacity-90 mt-2 max-w-2xl">
            Kumpulan informasi terbaru seputar program, layanan, dan kegiatan di Kabupaten Bantul.
          </p>
        </div>
      </section>

      {/* Controls */}
      <section className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-2 bg-gray-50 rounded-lg px-3 py-2 flex-1">
            <Search className="text-gray-400" size={18} />
            <input
              value={q}
              onChange={(e) => { setQ(e.target.value); setPage(1); }}
              placeholder="Cari berita..."
              className="bg-transparent outline-none flex-1 text-gray-700 py-1"
            />
          </div>

          <div className="flex items-center gap-2">
            <Filter size={18} className="text-gray-500" />
            <select
              value={cat}
              onChange={(e) => { setCat(e.target.value); setPage(1); }}
              className="px-3 py-2 border rounded-lg"
            >
              {categories.map(c => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {pageItems.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🧐</div>
              <h3 className="text-xl font-semibold text-gray-800">Tidak ada berita</h3>
              <p className="text-gray-600">Coba ubah kata kunci atau kategori.</p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {pageItems.map(item => (
                  <NewsCard key={item.id} item={item} />
                ))}
              </div>

              {/* Pagination */}
              <div className="mt-10 flex items-center justify-center gap-2">
                <button
                  onClick={() => setPage(p => Math.max(1, p - 1))}
                  className="px-3 py-2 rounded-lg border hover:bg-gray-50"
                  disabled={page === 1}
                >
                  Sebelumnya
                </button>
                <div className="text-sm text-gray-600">
                  Halaman <span className="font-semibold">{page}</span> dari {totalPages}
                </div>
                <button
                  onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                  className="px-3 py-2 rounded-lg border hover:bg-gray-50"
                  disabled={page === totalPages}
                >
                  Berikutnya
                </button>
              </div>
            </>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default News;
