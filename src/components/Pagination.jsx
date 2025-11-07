// src/components/Pagination.jsx
import React from 'react';

export default function Pagination({ page, totalPages, onPageChange }) {
  const canPrev = page > 1;
  const canNext = page < totalPages;

  return (
    <div className="mt-10 flex items-center justify-center gap-2">
      <button
        onClick={() => onPageChange(1)}
        disabled={!canPrev}
        className={`px-3 py-2 rounded-lg border ${canPrev ? 'hover:bg-gray-50' : 'opacity-40 cursor-not-allowed'}`}
        aria-label="First page"
      >
        «
      </button>
      <button
        onClick={() => onPageChange(page - 1)}
        disabled={!canPrev}
        className={`px-3 py-2 rounded-lg border ${canPrev ? 'hover:bg-gray-50' : 'opacity-40 cursor-not-allowed'}`}
        aria-label="Previous page"
      >
        ‹
      </button>

      <span className="px-3 py-2 text-sm text-gray-700">
        Halaman <b>{page}</b> dari <b>{totalPages || 1}</b>
      </span>

      <button
        onClick={() => onPageChange(page + 1)}
        disabled={!canNext}
        className={`px-3 py-2 rounded-lg border ${canNext ? 'hover:bg-gray-50' : 'opacity-40 cursor-not-allowed'}`}
        aria-label="Next page"
      >
        ›
      </button>
      <button
        onClick={() => onPageChange(totalPages)}
        disabled={!canNext}
        className={`px-3 py-2 rounded-lg border ${canNext ? 'hover:bg-gray-50' : 'opacity-40 cursor-not-allowed'}`}
        aria-label="Last page"
      >
        »
      </button>
    </div>
  );
}
