import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { Search, Filter, ListOrdered, Infinity as InfinityIcon } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import CardFeature from '../components/cardfeature';
import Pagination from '../components/Pagination';
// GANTI ke dummy:
import { servicesData } from '../data/services-dummy';

const PAGE_SIZE = 8;

const Feature = () => {
  const [services, setServices] = useState(servicesData);
  const [filteredServices, setFilteredServices] = useState(servicesData);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [loading, setLoading] = useState(false);

  // mode: 'pagination' | 'infinite'
  const [mode, setMode] = useState('pagination');
  const [page, setPage] = useState(1);
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const [searchParams] = useSearchParams();

  // ===== Filter function (memoized) =====
  const filterServices = useCallback((query, category) => {
    let filtered = services;

    if (query) {
      filtered = filtered.filter(
        (s) =>
          s.title.toLowerCase().includes(query.toLowerCase()) ||
          s.description.toLowerCase().includes(query.toLowerCase())
      );
    }

    if (category && category !== 'all') {
      filtered = filtered.filter((s) => s.slug === category);
    }

    setFilteredServices(filtered);
  }, [services]);

  // ===== Dummy fetch =====
  const fetchServices = async () => {
    setLoading(true);
    try {
      setServices(servicesData);
      setFilteredServices(servicesData);
    } catch (error) {
      console.error('Error fetching services:', error);
    } finally {
      setLoading(false);
    }
  };

  // ===== Apply query param after data loaded =====
  useEffect(() => {
    const qpCategory = searchParams.get('category'); // ex: ?category=umkm
    const qpQuery = searchParams.get('q');           // ex: ?q=pelatihan
    if (qpCategory) {
      setSelectedCategory(qpCategory);
      filterServices(qpQuery ?? '', qpCategory);
      if (qpQuery) setSearchQuery(qpQuery);
    } else if (qpQuery) {
      setSearchQuery(qpQuery);
      filterServices(qpQuery, 'all');
    }
    // reset pagination/infinite when filter changes from query
    setPage(1);
    setVisibleCount(PAGE_SIZE);
  }, [filterServices, searchParams, services]);

  useEffect(() => {
    fetchServices();
  }, []);

  // ===== Handlers =====
  const handleSearch = (query) => {
    setSearchQuery(query);
    filterServices(query, selectedCategory);
    setPage(1);
    setVisibleCount(PAGE_SIZE);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    filterServices(searchQuery, category);
    setPage(1);
    setVisibleCount(PAGE_SIZE);
  };

  const handleModeChange = (newMode) => {
    setMode(newMode);
    setPage(1);
    setVisibleCount(PAGE_SIZE);
  };

  // ===== Derived (pagination) =====
  const totalPages = useMemo(() => {
    return Math.max(1, Math.ceil(filteredServices.length / PAGE_SIZE));
  }, [filteredServices.length]);

  const pageItems = useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;
    const end = start + PAGE_SIZE;
    return filteredServices.slice(start, end);
  }, [filteredServices, page]);

  // ===== Derived (infinite) =====
  const infiniteItems = useMemo(() => {
    return filteredServices.slice(0, visibleCount);
  }, [filteredServices, visibleCount]);

  // ===== Intersection Observer for Infinite Scroll =====
  const sentinelRef = useRef(null);

  useEffect(() => {
    if (mode !== 'infinite') return;
    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setVisibleCount((prev) => {
            const next = prev + PAGE_SIZE;
            return next > filteredServices.length ? filteredServices.length : next;
          });
        }
      },
      { rootMargin: '200px' }
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [mode, filteredServices.length]);

  // ===== Categories =====
  const categories = [
    { value: 'all', label: 'Semua Layanan' },
    { value: 'wisata', label: 'Wisata' },
    { value: 'layanan-publik', label: 'Layanan Publik' },
    { value: 'umkm', label: 'UMKM' },
    { value: 'budaya', label: 'Budaya' },
    { value: 'pendidikan', label: 'Pendidikan' },
    { value: 'kesehatan', label: 'Kesehatan' }
  ];

  // ===== Items to render (based on mode) =====
  const itemsToRender = mode === 'pagination' ? pageItems : infiniteItems;

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Header */}
      <section className="pt-24 pb-12 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl font-bold mb-4">Layanan Kami</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Jelajahi berbagai layanan dan informasi yang tersedia di Kabupaten Bantul
          </p>
        </div>
      </section>

      {/* Controls: Search + Filter + Mode Switch */}
      <section className="py-8 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            {/* Search + Filter */}
            <div className="flex flex-col md:flex-row gap-4 flex-1 md:items-center">
              <div className="flex-1 bg-gray-50 rounded-lg p-2 flex items-center">
                <Search className="text-gray-400 ml-2" size={20} />
                <input
                  type="text"
                  placeholder="Cari layanan..."
                  className="flex-1 px-4 py-2 outline-none bg-transparent text-gray-700"
                  value={searchQuery}
                  onChange={(e) => handleSearch(e.target.value)}
                />
              </div>

              <div className="flex items-center gap-2">
                <Filter className="text-gray-400" size={20} />
                <select
                  value={selectedCategory}
                  onChange={(e) => handleCategoryChange(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg outline-none focus:border-blue-500"
                >
                  {categories.map((c) => (
                    <option key={c.value} value={c.value}>
                      {c.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Mode Switch */}
            <div className="flex items-center gap-2">
              <button
                className={`flex items-center gap-2 px-3 py-2 rounded-lg border ${mode === 'pagination' ? 'bg-gray-100' : 'hover:bg-gray-50'}`}
                onClick={() => handleModeChange('pagination')}
                title="Mode Pagination"
              >
                <ListOrdered size={18} /> <span className="text-sm">Pagination</span>
              </button>
              <button
                className={`flex items-center gap-2 px-3 py-2 rounded-lg border ${mode === 'infinite' ? 'bg-gray-100' : 'hover:bg-gray-50'}`}
                onClick={() => handleModeChange('infinite')}
                title="Mode Infinite Scroll"
              >
                <InfinityIcon size={18} /> <span className="text-sm">Infinite</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
              <p className="mt-4 text-gray-600">Memuat layanan...</p>
            </div>
          ) : itemsToRender.length > 0 ? (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {itemsToRender.map((service) => (
                  <CardFeature key={service.id} service={service} />
                ))}
              </div>

              {/* Pagination controls */}
              {mode === 'pagination' && (
                <Pagination
                  page={page}
                  totalPages={totalPages}
                  onPageChange={(p) => setPage(Math.min(Math.max(1, p), totalPages))}
                />
              )}

              {/* Infinite sentinel */}
              {mode === 'infinite' && itemsToRender.length < filteredServices.length && (
                <div ref={sentinelRef} className="mt-10 h-10 flex items-center justify-center text-gray-400">
                  Memuat lagi...
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Tidak ada layanan ditemukan
              </h3>
              <p className="text-gray-600">
                Coba gunakan kata kunci lain atau pilih kategori berbeda
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Feature;
