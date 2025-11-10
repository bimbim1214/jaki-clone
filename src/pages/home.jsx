import React, { useState } from 'react';
import { Search, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import { servicesData, statsData, featureCategoriesData } from '../data/services';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleSearch = () => {
    console.log('Searching for:', searchQuery);
    // contoh: arahkan ke halaman layanan dengan query
    // navigate(`/layanan?q=${encodeURIComponent(searchQuery)}`);
  };

  // Ambil hanya 4 layanan pertama
  const displayedServices = servicesData.slice(0, 4);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section (FULL SCREEN) */}
      <section
        className="relative min-h-[96vh] flex items-center bg-cover bg-center bg-no-repeat pt-28"
        style={{ backgroundImage: "url('/images/kantorbupati.jpg')" }}
      >
        {/* Overlay gelap */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
        {/* Fade ke section berikutnya */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-gray-50 to-transparent"></div>

        {/* Konten */}
        <div className="relative w-full">
          <div className="container mx-auto px-4 sm:px-6 lg:px-12">
            <div className="grid md:grid-cols-2 gap-12 items-center text-white">
              {/* Text */}
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-lg">
                  Portal Informasi Kabupaten Bantul
                </h1>

                <p className="text-lg md:text-xl mb-8 text-gray-100 drop-shadow-md">
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
                    onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                  />
                  <button
                    onClick={handleSearch}
                    className="bg-emerald-600 text-white px-6 py-3 rounded-md hover:bg-emerald-700 transition"
                  >
                    Cari
                  </button>
                </div>
              </div>

              {/* Illustration */}
              <div className="hidden md:flex justify-center">
                <div className="overflow-hidden rounded-3xl shadow-xl w-[320px] h-[460px]">
                  <img
                    src="/images/gambaratas.png"
                    alt="Bantul Hero"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-12 bg-white shadow-md">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statsData.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-emerald-600">{stat.value}</div>
                <div className="text-gray-600 mt-2 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="layanan" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Layanan Kami
            </h2>
            <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto">
              Berbagai layanan dan informasi untuk memudahkan akses masyarakat terhadap potensi dan layanan di Kabupaten Bantul
            </p>
          </div>

          {/* Services Grid */}
          <div className="relative max-w-6xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {displayedServices.map((service) => (
                <div
                  key={service.id}
                  className={`bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer ${
                    hoveredCard === service.id ? 'transform -translate-y-2' : ''
                  }`}
                  onMouseEnter={() => setHoveredCard(service.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {/* Icon */}
                  <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                    <span className="text-3xl">{service.icon}</span>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Link ke halaman layanan dengan preset kategori */}
                  <Link
                    to={`/layanan?category=${service.slug}`}
                    className="inline-flex items-center text-teal-600 font-semibold text-sm hover:text-teal-700 transition-colors"
                  >
                    Selengkapnya →
                  </Link>
                </div>
              ))}
            </div>

            {/* Tombol "Lihat Semua Layanan" */}
            <div className="flex justify-end mt-8">
              <Link
                to="/layanan"
                className="group flex items-center gap-2 bg-teal-600 text-white px-6 py-3 rounded-full hover:bg-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <span className="font-semibold">Lihat Semua Layanan</span>
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform duration-300"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Categories Section (SELURUH CARD BISA DIKLIK) */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          {/* Header with Navigation */}
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                Kategorisasi Fitur
              </h2>
              <p className="text-gray-600 text-base md:text-lg">
                Ada lebih banyak fitur yang bikin gampang hidup kamu di Bantul.
              </p>
            </div>

            {/* Navigation Arrows */}
            <div className="hidden md:flex gap-2">
              <button
                className="w-10 h-10 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center hover:bg-teal-200 transition"
                onClick={() => {
                  const container = document.getElementById('categories-scroll');
                  container?.scrollBy({ left: -400, behavior: 'smooth' });
                }}
              >
                ←
              </button>
              <button
                className="w-10 h-10 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center hover:bg-teal-200 transition"
                onClick={() => {
                  const container = document.getElementById('categories-scroll');
                  container?.scrollBy({ left: 400, behavior: 'smooth' });
                }}
              >
                →
              </button>
            </div>
          </div>

          {/* Scrollable Categories */}
          <div
            id="categories-scroll"
            className="overflow-x-auto scrollbar-hide -mx-4 px-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <div className="flex gap-6 min-w-max pb-4">
              {featureCategoriesData.map((category) => {
                const target = `/kategori/${category.slug || 'semua'}`;
                return (
                  <Link
                    key={category.id}
                    to={target}
                    className="bg-white rounded-3xl shadow-md overflow-hidden w-96 flex-shrink-0 hover:shadow-xl transition-all duration-300 border border-gray-100"
                  >
                    {/* Image with rounded corners */}
                    <div className={`h-56 bg-gradient-to-br ${category.gradient} relative overflow-hidden rounded-t-3xl`}>
                      <img
                        src={category.image}
                        alt={category.title}
                        className="w-full h-full object-cover"
                      />
                      {/* Small icon badge */}
                      <div className="absolute bottom-4 right-4 bg-white/30 backdrop-blur-sm rounded-full p-2">
                        <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-xs">
                          🔗
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      {/* Category Title with Total Count */}
                      <div className="flex justify-between items-center mb-5">
                        <h4 className="font-bold text-gray-900 text-lg">{category.category}</h4>
                        {category.totalServices > 5 && (
                          <span className="text-xs bg-teal-100 text-teal-700 px-2 py-1 rounded-full font-semibold">
                            {category.totalServices} layanan
                          </span>
                        )}
                      </div>

                      {/* Feature List */}
                      <ul className="space-y-4 mb-5">
                        {category.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-3 text-gray-700 text-sm">
                            <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center text-lg flex-shrink-0">
                              {feature.icon}
                            </div>
                            <span className="font-medium">{feature.name}</span>
                          </li>
                        ))}
                      </ul>

                      {/* View All Button */}
                      <div className="flex items-center justify-end gap-2 text-teal-600 font-semibold text-sm">
                        <span>Lihat Semua</span>
                        <div className="w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center">
                          <span className="text-xs">→</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        {/* CSS untuk hide scrollbar */}
        <style>{`
          .scrollbar-hide::-webkit-scrollbar { display: none; }
        `}</style>
      </section>

      {/* CTA + Second Hero */}
      <section className="relative w-full bg-gradient-to-br from-green-400 via-teal-500 to-emerald-600">
        <div className="py-16 text-center container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Siap Menjelajahi Bantul?</h2>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Daftar sekarang untuk mendapatkan akses penuh ke semua layanan dan informasi terkini
          </p>
          <button className="px-8 py-3 text-white font-semibold text-lg rounded-lg bg-gradient-to-r from-emerald-600 to-teal-600 hover:opacity-90 transition-all transform hover:scale-105 shadow-lg">
            Daftar Sekarang
          </button>
        </div>

        <div className="relative w-full min-h-[550px] flex items-center">
          <div className="container mx-auto px-6 lg:px-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Kamu <span className="text-yellow-200">Pelajar/Mahasiswa?</span><br />
                BantulPedia siap bantu urusanmu di Bantul
              </h1>
              <p className="text-lg text-white/90">Satu portal untuk akses semua informasi. Simple dan cepat.</p>

              {/* === GANTI tombol “Explore Layanan” dengan dua tombol store === */}
              <div className="flex flex-wrap items-center gap-3">
                {/* Play Store */}
                <a
                  href="https://play.google.com/store/apps/details?id=com.example.bantulpedia" // ganti dengan linkmu
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-white text-slate-900 px-4 py-2 rounded-xl shadow-md hover:shadow-lg transition"
                >
                  {/* Play icon */}
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M3.6 2.2c-.3.3-.5.7-.5 1.1v17.4c0 .4.2.8.5 1.1l9.6-9.8L3.6 2.2Z" fill="#34A853"/>
                    <path d="m20.5 10.6-3.4-1.9-3 3.3 3 3.3 3.4-1.9c1.5-.8 1.5-3 0-3.8Z" fill="#EA4335"/>
                    <path d="M7 4.3 3.6 2.2l9.6 9.8 3-3.3L7 4.3Z" fill="#4285F4"/>
                    <path d="m3.6 21.8 3.4-2.1 9.2-6.4-3-3.3-9.6 9.8Z" fill="#FBBC05"/>
                  </svg>
                  <span className="font-semibold">Play Store</span>
                </a>

                {/* App Store */}
                <a
                  href="https://apps.apple.com/app/id0000000000" // ganti dengan linkmu
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-white text-slate-900 px-4 py-2 rounded-xl shadow-md hover:shadow-lg transition"
                >
                  {/* Apple icon */}
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M16.365 1.43c.06.787-.292 1.56-.86 2.12-.57.56-1.32.93-2.11.86-.07-.77.27-1.55.84-2.12.59-.62 1.48-.97 2.13-.86zM21 17.33c-.4.92-.89 1.77-1.46 2.55-.78 1.07-1.7 2.27-2.96 2.29-1.24.02-1.63-.74-3.04-.74-1.41 0-1.84.72-3.05.76-1.25.02-2.2-1.16-2.98-2.23-1.62-2.23-2.87-6.31-1.2-9.05.84-1.35 2.34-2.2 3.95-2.22 1.22-.02 2.36.82 3.04.82.67 0 2.1-1.01 3.54-.86.6.02 2.29.24 3.37 1.84-.09.06-2.02 1.18-1.99 3.52.04 2.79 2.44 3.72 2.48 3.73z"/>
                  </svg>
                  <span className="font-semibold">App Store</span>
                </a>
              </div>
              {/* === end tombol store === */}
            </div>

            <div className="flex justify-center md:justify-end w-full">
              <img
                src="/images/gambaratas.png"
                alt="Hero"
                className="w-full max-w-[300px] rounded-2xl drop-shadow-1xl animate-float"
              />
            </div>
          </div>
        </div>
      </section>


      <Footer />
    </div>
  );
};

export default Home;
