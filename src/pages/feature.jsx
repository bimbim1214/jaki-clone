import React, { useState, useEffect } from 'react';
import { Search, Filter } from 'lucide-react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import CardFeature from '../components/cardfeature';
import { servicesData } from '../data/services';
// import { getServices } from '../services/api'; // Uncomment ketika API sudah siap

const Feature = () => {
  const [services, setServices] = useState(servicesData);
  const [filteredServices, setFilteredServices] = useState(servicesData);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [loading, setLoading] = useState(false);

  // Fetch services from API
  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    setLoading(true);
    try {
      // TODO: Uncomment ketika API sudah siap
      // const data = await getServices();
      // setServices(data);
      // setFilteredServices(data);
      
      // Sementara menggunakan data dummy
      setServices(servicesData);
      setFilteredServices(servicesData);
    } catch (error) {
      console.error('Error fetching services:', error);
    } finally {
      setLoading(false);
    }
  };

  // Handle search
  const handleSearch = (query) => {
    setSearchQuery(query);
    filterServices(query, selectedCategory);
  };

  // Handle category filter
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    filterServices(searchQuery, category);
  };

  // Filter services
  const filterServices = (query, category) => {
    let filtered = services;

    // Filter by search query
    if (query) {
      filtered = filtered.filter(service =>
        service.title.toLowerCase().includes(query.toLowerCase()) ||
        service.description.toLowerCase().includes(query.toLowerCase())
      );
    }

    // Filter by category
    if (category !== 'all') {
      filtered = filtered.filter(service => service.slug === category);
    }

    setFilteredServices(filtered);
  };

  const categories = [
    { value: 'all', label: 'Semua Layanan' },
    { value: 'wisata', label: 'Wisata' },
    { value: 'layanan-publik', label: 'Layanan Publik' },
    { value: 'umkm', label: 'UMKM' },
    { value: 'budaya', label: 'Budaya' },
    { value: 'pendidikan', label: 'Pendidikan' },
    { value: 'kesehatan', label: 'Kesehatan' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Header Section */}
      <section className="pt-24 pb-12 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold mb-4">Layanan Kami</h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Jelajahi berbagai layanan dan informasi yang tersedia di Kabupaten Bantul
            </p>
          </div>
        </div>
      </section>

      {/* Search & Filter Section */}
      <section className="py-8 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search Bar */}
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

            {/* Category Filter */}
            <div className="flex items-center gap-2">
              <Filter className="text-gray-400" size={20} />
              <select
                value={selectedCategory}
                onChange={(e) => handleCategoryChange(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg outline-none focus:border-blue-500"
              >
                {categories.map((category) => (
                  <option key={category.value} value={category.value}>
                    {category.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
              <p className="mt-4 text-gray-600">Memuat layanan...</p>
            </div>
          ) : filteredServices.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredServices.map((service) => (
                <CardFeature key={service.id} service={service} />
              ))}
            </div>
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