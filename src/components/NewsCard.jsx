// src/components/NewsCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function formatDate(d) {
  try {
    return new Date(d).toLocaleDateString('id-ID', { day: '2-digit', month: 'long', year: 'numeric' });
  } catch {
    return d;
  }
}

const NewsCard = ({ item }) => {
  return (
    <Link
      to={`/berita/${item.id}`}
      className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition overflow-hidden flex flex-col"
    >
      <div className="h-44 bg-gray-100">
        <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
      </div>
      <div className="p-5 flex-1 flex flex-col">
        <div className="text-xs font-medium text-teal-700 bg-teal-50 inline-block px-2 py-1 rounded mb-2">
          {item.category}
        </div>
        <h3 className="font-semibold text-gray-900 leading-snug line-clamp-2">{item.title}</h3>
        <p className="text-sm text-gray-600 mt-2 line-clamp-2">{item.excerpt}</p>
        <div className="mt-auto pt-4 text-xs text-gray-500 flex items-center justify-between">
          <span>{formatDate(item.date)}</span>
          <span>Oleh {item.author}</span>
        </div>
      </div>
    </Link>
  );
};

export default NewsCard;
