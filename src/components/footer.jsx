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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="text-2xl font-bold mb-4">
              Bantul<span className="text-green-400">Pedia</span>
            </div>
            <p className="text-gray-400">
              Portal informasi terpadu untuk masyarakat Kabupaten Bantul
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-bold mb-4">Layanan</h3>
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
            <h3 className="font-bold mb-4">Kontak</h3>
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
            <h3 className="font-bold mb-4">Ikuti Kami</h3>
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

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 BantulPedia. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;