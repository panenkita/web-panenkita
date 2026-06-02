import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaFacebookF,
  FaInstagram,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaTiktok,
} from 'react-icons/fa';

// Assets
import panenKitaLogo from '../assets/logo/logo-11.png';

const Footer = () => {
  return (
    <footer className="bg-cream text-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-15 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-12">
          {/* Column 1: Info PanenKita */}
          <div className="md:col-span-3 lg:col-span-5 space-y-4 ">
            <Link to="/">
              <img
                src={panenKitaLogo}
                alt="PanenKita Logo"
                className="h-24 w-auto mb-2"
              />
            </Link>
            <p className="text-sm text-gray-600 leading-relaxed">
              Menghubungkan petani dengan pembeli, mewujudkan kesejahteraan
              bersama melalui teknologi digital yang inovatif, berkelanjutan dan
              berkomitmen untuk memberikan kemudahan bagi petani.
            </p>
          </div>

          {/* Column 2: Fast Navigation */}
          <div className="md:col-span-4 lg:col-span-3 space-y-4 ">
            <h3 className="text-base font-semibold text-gray-900">Navigasi</h3>
            <ul className="space-y-2">
              <li>
                <FooterLink to="/">Beranda</FooterLink>
              </li>
              <li>
                <FooterLink to="/stok">Stok</FooterLink>
              </li>
              <li>
                <FooterLink to="/produk">Produk</FooterLink>
              </li>
              <li>
                <FooterLink to="/privacy-policy">Privacy Policy</FooterLink>
              </li>
              <li>
                <FooterLink to="/tentang">Tentang Kami</FooterLink>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Us */}
          <div className="md:col-span-4 lg:col-span-4 space-y-4">
            <h3 className="text-base font-semibold text-gray-900">
              Hubungi Kami
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-emerald-600 mt-1 flex-shrink-0" />
                <p className="text-gray-600">
                  Jl. Raya Cibolang Cisaat - Sukabumi No.21, Cibolang Kaler,
                  Kec. Cisaat, Kabupaten Sukabumi, Jawa Barat 43152
                </p>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-emerald-600 flex-shrink-0" />
                <a
                  href="mailto:panenkita.official@gmail.com"
                  className="text-gray-600 hover:text-emerald-600 transition-colors"
                >
                  panenkita.official@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <FaPhone className="text-emerald-600 flex-shrink-0" />
                <a
                  href="tel:+6281234567890"
                  className="text-gray-600 hover:text-emerald-600 transition-colors"
                >
                  +62 831-1103-0309
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom : Copyright & Social Media */}
        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-6">
          <p className="text-sm text-gray-500 text-center sm:text-left">
            © {new Date().getFullYear()} PanenKita. All Rights Reserved.
          </p>
          <div className="flex space-x-4">
            <SocialLink href="https://www.instagram.com/panenkita.official">
              <FaInstagram size={20} />
            </SocialLink>
            <SocialLink href="#">
              <FaFacebookF size={20} />
            </SocialLink>
            <SocialLink href="#">
              <FaTiktok size={20} />
            </SocialLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({ to, children }) => (
  <Link
    to={to}
    className="text-sm text-gray-600 hover:text-emerald-600 hover:underline transition-colors duration-200"
  >
    {children}
  </Link>
);

const SocialLink = ({ href, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-dark-green bg-light-green/15 hover:bg-emerald-600 hover:text-white transition-all duration-300 w-10 h-10 flex items-center justify-center rounded-full"
  >
    {children}
  </a>
);

export default Footer;
