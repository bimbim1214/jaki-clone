import React from 'react';
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const services = [
    { name: 'Wisata', href: '/wisata' },
    { name: 'UMKM', href: '/umkm' },
    { name: 'Berita', href: '/berita' },
    { name: 'Pengaduan', href: '/pengaduan' }
  ];

  const socialMedia = [
    { icon: Facebook, href: '#', color: 'hover:bg-blue-600' },
    { icon: Twitter, href: '#', color: 'hover:bg-blue-400' },
    { icon: Instagram, href: '#', color: 'hover:bg-pink-600' },
    { icon: Youtube, href: '#', color: 'hover:bg-red-600' }
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="w-full px-8">

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10">

          {/* About */}
          <div className="col-span-2 md:col-span-2 lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              {/* === Bagian Kiri: Logo dan Nama === */}
              <Link to="/" className="flex items-center gap-2">
                {/* Logo yang ditambahkan */}
                <img 
                  src="/images/logobantul1.png" // <-- GANTI DENGAN PATH LOGO ANDA
                  alt="Logo BantulPedia" 
                  className="h-9 w-9 object-contain" // Sesuaikan ukuran di sini
                />
                {/* Teks Nama */}
                <span className="text-2xl font-bold text-green-600">
                  Bantul<span className="font-bold text-green-600">Pedia</span>
                </span>
              </Link>
            </div>
            <p className="text-gray-400 leading-relaxed max-w-md">
              Portal informasi terpadu untuk masyarakat Kabupaten Bantul.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold mb-4 text-lg">Layanan</h3>
            <ul className="space-y-2 text-gray-400">
              {services.map((service, index) => (
                <li key={index}>
                  <Link to={service.href} className="hover:text-white transition">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold mb-4 text-lg">Kontak</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center gap-2">
                <MapPin size={16} />
                <span>Bantul, Yogyakarta</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <span>(0274) 367000</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <span>info@bantulpedia.id</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-bold mb-4 text-lg">Ikuti Kami</h3>
            <div className="flex gap-4">
              {socialMedia.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center ${social.color} transition`}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

        </div>

        <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-400">
          <p>&copy; 2025 BantulPedia. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
