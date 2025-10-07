import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

// Icons
import {
  FaGooglePlay,
  FaLeaf,
  FaStar,
  FaHandshake,
  FaBoxOpen,
  FaSeedling,
} from 'react-icons/fa';
import { PiPlantFill } from 'react-icons/pi';
import { FiHeart, FiPackage } from 'react-icons/fi';
import { FiBox, FiShoppingCart, FiMessageSquare } from 'react-icons/fi';

// Assets
import heroPetani from '../assets/hero-petani.jpg';
import circlePetani1 from '../assets/circle-petani-1.jpg';
import circlePetani2 from '../assets/circle-petani-2.jpg';
import circlePetani3 from '../assets/circle-petani-3.jpg';

import screenshotStok from '../assets/app-screenshot.jpg';
import screenshotProduk from '../assets/app-screenshot.jpg';
import screenshotChat from '../assets/app-screenshot.jpg';

// Data Fetching
import {
  fetchAllHarvestNeeds,
  fetchAllPlantingPlans,
  fetchAllProducts,
} from '../data/api';
import { LuWheat } from 'react-icons/lu';

const Beranda = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [allPlantingPlans, setAllPlantingPlans] = useState([]);
  const [allHarvestNeeds, setAllHarvestNeeds] = useState([]);

  // --- EFEK UNTUK MENGAMBIL DATA ---
  useEffect(() => {
    const loadProducts = async () => {
      try {
        const productsData = await fetchAllProducts();
        const plantingPlansData = await fetchAllPlantingPlans();
        const harvestNeedsData = await fetchAllHarvestNeeds();

        setAllProducts(productsData);
        setAllPlantingPlans(plantingPlansData);
        setAllHarvestNeeds(harvestNeedsData);
      } catch (err) {
        console.error('Gagal memuat data:', err);
      }
    };

    loadProducts();
  }, []); // Dependency array kosong, hanya berjalan sekali saat mount

  const handleDownload = () => {
    window.open('https://play.google.com/', '_blank');
  };

  const features = [
    {
      icon: <FaBoxOpen className="text-teal-blue" size={55} />,
      title: 'Informasi Stok',
      description:
        'Rencana Tanam (Petani) dan Kebutuhan Hasil Panen (Pembeli) yang dapat menjadi acuan tanam dan acuan untuk pembelian.',
      color: 'teal-blue',
    },
    {
      icon: <FaHandshake className="text-mustard-yellow" size={55} />,
      title: 'Koneksi Langsung',
      description:
        'Hubungkan petani langsung dengan pembeli tanpa perantara, memastikan harga yang adil untuk semua pihak.',
      color: 'mustard-yellow',
    },
    {
      icon: <FaLeaf className="text-mint-green" size={50} />,
      title: 'Produk Segar',
      description:
        'Produk segar yang langsung dari petani yang dipanen langsung dengan standar terbaik bagi konsumen.',
      color: 'mint-green',
    },
  ];

  const appScreenshots = [
    {
      icon: <FiBox size={24} />,
      title: 'Informasi Stok Real-Time',
      description:
        'Pantau rencana tanam dan ketersediaan hasil panen secara real-time untuk perencanaan yang lebih baik.',
      image: screenshotStok,
    },
    {
      icon: <FiShoppingCart size={24} />,
      title: 'Jelajahi Katalog Produk',
      description:
        'Temukan berbagai hasil panen berkualitas dari petani terbaik dari berbagai daerah.',
      image: screenshotProduk,
    },
    {
      icon: <FiMessageSquare size={24} />,
      title: 'Transaksi via Whatsapp',
      description:
        'Komunikasi dan negosiasi langsung dengan penjual melalui WhatsApp yang terintegrasi dengan aplikasi.',
      image: screenshotChat,
    },
  ];

  const stats = [
    {
      icon: <FaSeedling size={32} />,
      end: allPlantingPlans.length,
      suffix: '+',
      label: 'Rencana Tanam',
    },
    {
      icon: <LuWheat size={32} />,
      end: allHarvestNeeds.length,
      suffix: '+',
      label: 'Kebutuhan Hasil Panen',
    },
    {
      icon: <FiPackage size={32} />,
      end: allProducts.length,
      suffix: '+',
      label: 'Produk Tersedia',
    },
    {
      icon: <FiHeart size={32} />,
      end: 94,
      suffix: '%',
      label: 'Tingkat Kepuasan Pengguna',
    },
  ];

  // Component untuk statistik dengan animasi hitung
  const AnimatedStat = ({ stat }) => {
    const { ref, inView } = useInView({
      triggerOnce: true,
      threshold: 0.5,
    });

    return (
      <div ref={ref} className="flex flex-col items-center text-center p-4">
        <div className="w-12 h-12 flex items-center justify-center bg-emerald-100 rounded-full mb-4">
          <div className="w-7 h-7 flex items-center justify-center text-emerald-600">
            {stat.icon}
          </div>
        </div>
        <div className="text-4xl font-extrabold text-gray-900 tracking-tight">
          {inView ? <CountUp end={stat.end} duration={4} separator="." /> : '0'}
          {stat.suffix}
        </div>
        <p className="text-base text-gray-600 mt-1">{stat.label}</p>
      </div>
    );
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-cream py-16 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-6">
                <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
                  <span className="bg-gradient-to-r from-[#377638] to-[#7AAF59] bg-clip-text text-transparent">
                    Kenali Petaninya,
                  </span>{' '}
                  <br />
                  <span className="text-teal-blue">Nikmati Hasilnya.</span>
                </h1>
                <p className="text-lg max-w-lg text-gray-600 leading-relaxed">
                  Platform digital yang menghubungkan petani dengan pembeli
                  untuk menciptakan ekosistem pertanian yang berkelanjutan dan
                  menguntungkan.
                </p>
              </div>

              {/* CTA Button */}
              <button
                onClick={handleDownload}
                className="mt-13 bg-emerald-600 hover:bg-teal-blue text-white px-7 py-3 rounded-xl font-semibold text-base flex items-center gap-3 transition-all duration-300 transform hover:scale-105 hover:shadow-xl animate-bounce-gentle shadow-lg shadow-emerald-200"
              >
                <FaGooglePlay size={20} />
                Download Aplikasi
              </button>

              {/* Social Proof */}
              <div className="flex items-center gap-5 pt-2">
                <div className="flex -space-x-3">
                  <img
                    className="w-13 h-13 rounded-full border-2 border-white object-cover"
                    src={circlePetani1}
                    alt="Petani 1"
                  />
                  <img
                    className="w-13 h-13 rounded-full border-2 border-white object-cover"
                    src={circlePetani2}
                    alt="Petani 2"
                  />
                  <img
                    className="w-13 h-13 rounded-full border-2 border-white object-cover"
                    src={circlePetani3}
                    alt="Petani 3"
                  />
                </div>

                <div>
                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-400" />
                    <span className="text-base font-bold text-gray-800">
                      4.8 / 5
                    </span>
                  </div>
                  <p className="text-base text-gray-500">
                    dari 205+ petani terdaftar
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="relative w-full h-full flex items-center justify-center animate-fade-in">
              <img
                src={heroPetani}
                alt="Petani Indonesia tersenyum"
                className="relative z-10 w-full max-w-md h-[555px] object-cover rounded-3xl shadow-2xl rotate-[3deg] transition-transform duration-300 hover:rotate-0"
              />

              {/* Pop-up Card dengan Efek Kaca */}
              <div className="absolute z-20 -bottom-8 -left-0 md:-left-8 backdrop-blur-xl bg-white/70 p-4 rounded-2xl shadow-lg border border-white/50 w-64">
                <div className="flex items-center gap-3">
                  <div className="bg-emerald-100 p-3 rounded-full">
                    <PiPlantFill className="text-emerald-600" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">
                      100% Produk Segar
                    </p>
                    <p className="text-sm text-gray-600">
                      Langsung dari Petani
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-white/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Judul Section */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm font-bold tracking-wider uppercase text-teal-blue">
              Fitur Unggulan
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-[#377638] to-[#7AAF59] p-2 bg-clip-text text-transparent tracking-tight">
              Satu Platform, Banyak Solusi
            </h2>
            <p className="mt-2 text-lg text-gray-600">
              Kami menyediakan berbagai fitur yang dirancang untuk mempermudah,
              meningkatkan, dan mengoptimalkan berbagai aspek pertanian Anda.
            </p>
          </div>

          {/* Grid Kartu Fitur */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl border border-light-green/20 shadow-sm hover:shadow-xl hover:border-emerald-200 transition-all duration-300 transform hover:-translate-y-2 group"
              >
                {/* Wadah Ikon */}
                <div className="w-16 h-10 flex items-center justify-center rounded-xl mb-4 transition-colors duration-300">
                  <div className="duration-300 group-hover:scale-115">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App Screenshots Section */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Title Section */}
          <div className="text-center max-w-3xl mx-auto mb-15">
            <span className="text-sm font-bold tracking-wider uppercase text-emerald-600">
              Tampilan Aplikasi
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-teal-blue mt-2 tracking-tight">
              Intuitif & Penuh Fitur
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Kami merancang setiap detail dengan cermat untuk memastikan
              pengalaman Anda dalam bertani dan berjualan menjadi lebih efisien
              dan menyenangkan.
            </p>
          </div>

          {/* Feature Grid Card */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {appScreenshots.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center group"
              >
                {/* Mockup Ponsel */}
                <div className="relative w-[280px] sm:w-[300px] transition-all duration-300 transform group-hover:scale-105 group-hover:-translate-y-3">
                  <div className="bg-gray-800 p-2 sm:p-1.5 rounded-[1.5rem] shadow-lg">
                    <div className="bg-black rounded-[1rem] overflow-hidden">
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Feature Description */}
                <div className="mt-8">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-emerald-100 text-emerald-600 rounded-2xl mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-gray-600 leading-relaxed max-w-xs">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="pt-20 bg-white/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-teal-blue tracking-tight">
              Dampak Kami dalam Angka
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Kami bangga dapat bertumbuh bersama komunitas petani di berbagai
              daerah untuk membantu mereka membangun pertanian.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 md:divide-x md:divide-gray-200">
            {stats.map((stat, index) => (
              <AnimatedStat key={index} stat={stat} />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-white/80 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden bg-gradient-to-br from-emerald-500 to-teal-600 rounded-3xl px-6 py-8 sm:p-15 text-center shadow-2xl shadow-emerald-200">
            <div className="relative z-10">
              {/* Judul dan Deskripsi */}
              <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                Mulai Transformasi Pertanian Anda
              </h2>
              <p className="mt-4 text-lg text-white/90 max-w-2xl mx-auto">
                Unduh aplikasi <b>PanenKita</b> sekarang. Bergabunglah dengan
                ratusan petani modern, nikmati informasi dan kemudahannya di
                ujung jari Anda.
              </p>

              {/* Tombol CTA Utama */}
              <button
                onClick={handleDownload}
                className="mt-9 bg-white text-emerald-700 font-bold text-lg px-8 py-4 rounded-xl flex items-center gap-3 mx-auto transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
              >
                <FaGooglePlay size={24} />
                Download Aplikasi Gratis
              </button>

              {/* Social Proof yang Terstruktur */}
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-x-6 gap-y-2 text-white/80">
                <div className="flex items-center gap-2">
                  <FaStar className="text-yellow-300" />
                  <span className="font-medium">Rating 4.8 / 5</span>
                </div>
                <div className="hidden sm:block w-px h-4 bg-white/30"></div>{' '}
                {/* Divider */}
                <div className="font-medium">100% Gratis diunduh</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Beranda;
