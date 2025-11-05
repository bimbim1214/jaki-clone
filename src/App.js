import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Feature from './pages/feature';
// import Kontak from './pages/kontak'; // Import ketika sudah dibuat

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/feature" element={<Feature />} />
        {/* <Route path="/kontak" element={<Kontak />} /> */}
        {/* <Route path="/feature/:id" element={<FeatureDetail />} /> */}
        
        {/* 404 Page */}
        <Route path="*" element={
          <div className="min-h-screen flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-6xl font-bold text-blue-600 mb-4">404</h1>
              <p className="text-xl text-gray-600 mb-8">Halaman tidak ditemukan</p>
              <a href="/" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                Kembali ke Beranda
              </a>
            </div>
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;