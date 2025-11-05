import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CardFeature = ({ service }) => {
  return (
    <Link
      to={`/feature/${service.id}`}
      className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer group hover:-translate-y-1"
    >
      <div className={`${service.color} w-16 h-16 rounded-lg flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform`}>
        {service.icon}
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-2">
        {service.title}
      </h3>
      <p className="text-gray-600 mb-4">
        {service.description}
      </p>
      <div className="flex items-center text-blue-600 font-semibold group-hover:gap-2 transition-all">
        Selengkapnya
        <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
      </div>
    </Link>
  );
};

export default CardFeature;