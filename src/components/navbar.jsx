import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Beranda', href: '/' },
    //{ name: 'Layanan', href: '/feature' },
    { name: 'Berita', href: '/berita' },
    { name: 'Tentang', href: '/tentang' },
    { name: 'Kontak', href: '/kontak' }
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg rounded-b-3xl' : 'bg-transparent'}`}>
      <div className="w-full px-6 lg:px-16">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
             <img 
                src="/images/logobantul1.png" // <-- GANTI DENGAN PATH LOGO ANDA
                alt="Logo BantulPedia" 
                className="h-9 w-9 object-contain" // Sesuaikan ukuran di sini
              />
            <div className={`text-2xl md:text-3xl font-bold transition-colors ${scrolled ? 'text-green-600' : 'text-green-600 '}`}>
              Bantul<span className={scrolled ? 'text-green-600' : 'text-green-600'}>Pedia</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                to={item.href}
                className={`transition font-medium ${scrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-200'}`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className={`px-5 py-2.5 rounded-lg transition font-medium ${scrolled ? 'text-blue-600 hover:bg-blue-50' : 'text-white border border-white hover:bg-white/10'}`}>
              Masuk
            </button>
            <button className={`px-5 py-2.5 rounded-lg transition font-medium ${scrolled ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-white text-blue-600 hover:bg-blue-50'}`}>
              Daftar
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className={`md:hidden p-2 ${scrolled ? 'text-gray-700' : 'text-white'}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <div className="px-6 py-4 space-y-3">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                to={item.href}
                className="block text-gray-700 hover:text-blue-600 py-2 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 space-y-3">
              <button className="w-full px-4 py-3 text-blue-600 border border-blue-600 rounded-lg font-medium">
                Masuk
              </button>
              <button className="w-full px-4 py-3 bg-blue-600 text-white rounded-lg font-medium">
                Daftar
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;