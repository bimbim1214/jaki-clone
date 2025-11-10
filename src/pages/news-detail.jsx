// src/pages/news-detail.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import { newsData } from '../data/news-dummy';

function formatDate(d) {
  try {
    return new Date(d).toLocaleDateString('id-ID', { day: '2-digit', month: 'long', year: 'numeric' });
  } catch {
    return d;
  }
}

const NewsDetail = () => {
  const { id } = useParams();
  const item = newsData.find(n => String(n.id) === String(id));

  if (!item) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 text-center">
          <h1 className="text-2xl font-semibold mb-2">Berita tidak ditemukan</h1>
          <p className="text-gray-600 mb-6">Konten yang Anda cari mungkin sudah dipindahkan.</p>
          <Link to="/berita" className="px-4 py-2 rounded-lg bg-teal-600 text-white hover:bg-teal-700">Kembali ke Berita</Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <section className="pt-24 pb-6 bg-white shadow-sm">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-sm text-gray-500 mb-2">
            <Link to="/" className="hover:underline">Beranda</Link> /{' '}
            <Link to="/berita" className="hover:underline">Berita</Link> /{' '}
            <span className="text-gray-700">{item.title}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">{item.title}</h1>
          <div className="mt-3 text-sm text-gray-500">
            <span className="mr-3">{item.author}</span> • <span className="ml-3">{formatDate(item.date)}</span> •{' '}
            <span className="ml-3 px-2 py-0.5 rounded bg-teal-50 text-teal-700">{item.category}</span>
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl overflow-hidden mb-6">
            <img src={item.image} alt={item.title} className="w-full h-[360px] object-cover" />
          </div>
          <article className="prose max-w-none prose-p:leading-relaxed">
            <p className="text-gray-800 mb-4">{item.content}</p>
          </article>

          <div className="mt-8">
            <Link to="/berita" className="inline-block px-4 py-2 rounded-lg border hover:bg-gray-50">
              ← Kembali ke daftar
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NewsDetail;
