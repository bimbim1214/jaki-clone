// src/components/cardfeature.jsx
import React from "react";
import { Link } from "react-router-dom";

const CardFeature = ({ service }) => {
  return (
    <div
      className="
        bg-white rounded-2xl p-8 shadow-sm border border-gray-100 
        hover:shadow-xl hover:-translate-y-2 transition-all duration-300 
        cursor-pointer group
      "
    >
      {/* Icon Bulat */}
      <div className="w-16 h-16 rounded-full bg-teal-50 flex items-center justify-center mb-6 ring-8 ring-teal-50/70">
        <span className="text-3xl">{service.icon}</span>
      </div>

      {/* Judul */}
      <h3 className="text-xl font-bold text-gray-900 mb-3">
        {service.title}
      </h3>

      {/* Deskripsi */}
      <p className="text-gray-600 text-sm mb-6 leading-relaxed">
        {service.description}
      </p>

      {/* Tombol Selengkapnya */}
      <Link
        to={`/layanan?category=${service.slug}`}
        className="inline-flex items-center text-teal-600 font-semibold text-sm hover:text-teal-700 transition-colors"
      >
        <span>Selengkapnya</span>
        <span className="ml-1 transform transition-transform group-hover:translate-x-1">→</span>
      </Link>
    </div>
  );
};

export default CardFeature;
