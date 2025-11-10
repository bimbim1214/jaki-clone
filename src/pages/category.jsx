import React, { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import CardFeature from '../components/cardfeature';
import { servicesData } from '../data/services-dummy';

function toTitle(slug) {
  if (!slug) return '';
  if (slug === 'semua') return 'Semua Layanan';
  return slug.split('-').map(s => s[0]?.toUpperCase() + s.slice(1)).join(' ');
}

const CategoryPage = () => {
  const { slug } = useParams(); // contoh: 'semua', 'layanan-publik', 'umkm', dll
  const title = toTitle(slug);

  const items = useMemo(() => {
    if (slug === 'semua') return servicesData;
    return servicesData.filter(s => s.slug === slug);
  }, [slug]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Header */}
      <section className="pt-24 pb-10 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-emerald-100 text-sm">
            <Link to="/" className="hover:underline">Beranda</Link>
            <span className="mx-2">/</span>
            <Link to="/layanan" className="hover:underline">Layanan</Link>
            <span className="mx-2">/</span>
            <span className="font-semibold">{title}</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold mt-3">{title}</h1>
          <p className="opacity-90 mt-2">
            Menampilkan {items.length} item {slug === 'semua' ? 'dari semua kategori' : `kategori ${title.toLowerCase()}`}.
          </p>
        </div>
      </section>

      {/* Grid daftar layanan */}
      <section className="py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {items.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {items.map(item => (
                <CardFeature key={item.id} service={item} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="text-6xl mb-3">🤔</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-1">Belum ada layanan</h3>
              <p className="text-gray-600">Coba pilih kategori lain.</p>
              <div className="mt-6">
                <Link to="/layanan" className="px-5 py-2 rounded-lg bg-teal-600 text-white hover:bg-teal-700 transition">
                  Kembali ke Layanan
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CategoryPage;
