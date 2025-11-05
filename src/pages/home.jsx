import React, { useState } from 'react';
import { Search } from 'lucide-react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import CardFeature from '../components/cardfeature';
import { servicesData, statsData } from '../data/services';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    // TODO: Implement search functionality
    console.log('Searching for:', searchQuery);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section - Full Width */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-600 via-blue-700 to-green-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Portal Informasi Terpadu Kabupaten Bantul
              </h1>
              <p className="text-lg md:text-xl mb-8 text-blue-100">
                Akses mudah untuk berbagai layanan, informasi wisata, UMKM, dan berita terkini seputar Bantul
              </p>
              
              {/* Search Bar */}
              <div className="bg-white rounded-lg p-2 flex items-center shadow-xl">
                <Search className="text-gray-400 ml-2" size={20} />
                <input
                  type="text"
                  placeholder="Cari layanan, wisata, UMKM..."
                  className="flex-1 px-4 py-3 outline-none text-gray-700"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                />
                <button 
                  onClick={handleSearch}
                  className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
                >
                  Cari
                </button>
              </div>
            </div>

            {/* Hero Illustration */}
            <div className="hidden md:block">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-white">
                <div className="text-6xl mb-4">🏛️</div>
                <h3 className="text-2xl font-bold mb-2">Bantul Lebih Dekat</h3>
                <p className="text-blue-100">
                  Satu portal untuk semua kebutuhan informasi dan layanan di Kabupaten Bantul
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section - Full Width */}
      <section className="py-12 bg-white shadow-md">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statsData.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-blue-600">{stat.value}</div>
                <div className="text-gray-600 mt-2 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section - Full Width */}
      <section id="layanan" className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Layanan Kami
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Berbagai layanan dan informasi untuk memudahkan akses masyarakat terhadap potensi dan layanan di Kabupaten Bantul
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicesData.map((service) => (
              <CardFeature key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Full Width */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Siap Menjelajahi Bantul?
          </h2>
          <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Daftar sekarang untuk mendapatkan akses penuh ke semua layanan dan informasi terkini
          </p>
          <button className="px-10 py-4 bg-white text-blue-600 font-semibold text-lg rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl">
            Daftar Sekarang
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;