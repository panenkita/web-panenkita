import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Header from './components/Header';
import Footer from './components/Footer';

// Pages
import Beranda from './pages/Beranda';
import Stok from './pages/Stok';
import Produk from './pages/Produk';
import Tentang from './pages/Tentang';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Beranda />} />
            <Route path="/stok" element={<Stok />} />
            <Route path="/produk" element={<Produk />} />
            <Route path="/tentang" element={<Tentang />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
