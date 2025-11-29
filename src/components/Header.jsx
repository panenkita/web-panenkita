import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaGooglePlay, FaBars, FaTimes } from 'react-icons/fa';

// Assets
import panenKitaLogo from '../assets/logo/logo-15.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Beranda', path: '/' },
    { name: 'Stok', path: '/stok' },
    { name: 'Produk', path: '/produk' },
    { name: 'Tentang', path: '/tentang' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleDownload = () => {
    window.open(
      'https://drive.google.com/file/d/1a89IvoT3xzqcXYWOdPoATrCg7vGPiSV_/view?usp=sharing',
      '_blank'
    );
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-17">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              to="/"
              className="text-2xl font-bold text-dark-green hover:text-teal-blue transition-colors duration-200"
            >
              <img src={panenKitaLogo} alt="PanenKita Logo" className="h-13" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`px-3 py-2 text-sm transition-all duration-200 ${
                    location.pathname === item.path
                      ? 'text-teal-blue border-b-2 border-teal-blue font-bold'
                      : 'text-dark-green font-medium hover:text-teal-blue hover:border-b-2 hover:border-light-green'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <button
              onClick={handleDownload}
              className="bg-emerald-600 hover:bg-teal-blue text-white px-6 py-2 rounded-lg font-semibold flex items-center gap-2 transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg"
            >
              <FaGooglePlay />
              Download Aplikasi
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-dark-green focus:outline-none transition-colors duration-200"
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out transform origin-top ${
            isMenuOpen
              ? 'max-h-96 scale-y-100 opacity-100'
              : 'max-h-0 scale-y-0 opacity-0'
          }`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-light-green/20">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-2 text-base transition-colors duration-200 rounded-md ${
                  location.pathname === item.path
                    ? 'text-teal-blue bg-mint-green/20 font-bold'
                    : 'text-dark-green font-medium hover:text-teal-blue hover:bg-light-green/10'
                }`}
              >
                {item.name}
              </Link>
            ))}

            <button
              onClick={handleDownload}
              className="w-full mt-4 bg-emerald-600 hover:bg-teal-blue text-white px-6 py-2 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-200 transform hover:scale-105"
            >
              <FaGooglePlay />
              Download Aplikasi
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
