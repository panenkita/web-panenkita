import React, { useState, useMemo, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

// Data API
import { fetchAllProducts } from '../data/api';

// Icons
import {
  FaSearch,
  FaSortAmountDown,
  FaFilter,
  FaChevronLeft,
  FaChevronRight,
  FaUser,
  FaExclamationCircle,
} from 'react-icons/fa';

const ITEMS_PER_PAGE = 20;

// --- KOMPONEN ANAK (REUSABLE UI COMPONENTS) ---

// Komponen Card Produk
const ProductCard = ({ product }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef(null);
  const [imageError, setImageError] = useState(false);

  // Mengambil gambar dari array of objects { url: '...' }
  const images = product.images.map((img) => img.url);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
    const container = scrollContainerRef.current;
    if (container) {
      const scrollLeft = container.offsetWidth * index;
      container.scrollTo({
        left: scrollLeft,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    setImageError(false);
  }, [product.user.avatar]);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div className="bg-cream/50 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 border border-dark-green/10 flex flex-col overflow-hidden">
      {/* Header */}
      <div className="p-3">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-base font-bold text-dark-green line-clamp-2 flex-1">
            {product.name}
          </h3>
          <span className="bg-light-green/20 text-dark-green px-2 py-1 text-xs font-semibold rounded-full border border-light-green/30 whitespace-nowrap">
            {product.category.name}
          </span>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="px-3 mb-3 relative">
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-hidden scroll-smooth rounded-xl"
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`${product.name} - ${index + 1}`}
              className="w-full h-50 flex-shrink-0 aspect-square object-cover bg-gray-200"
            />
          ))}
        </div>

        {images.length > 1 && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 rounded-full bg-black/30 p-1 backdrop-blur-sm">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                aria-label={`Go to image ${index + 1}`}
                className={`h-1.5 w-1.5 rounded-full transition-colors duration-300 ${
                  currentIndex === index ? 'bg-white' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="px-3 pb-3 flex flex-col flex-grow">
        <div className="text-xl font-extrabold text-teal-blue mb-2">
          <span className="font-semibold text-base">Rp </span>
          {product.price.toLocaleString('id-ID')}{' '}
          <span className="text-xs font-normal text-dark-green/60">
            /{product.priceUnit}
          </span>
        </div>

        <div className="mb-2">
          <div className="flex items-center gap-2">
            {product.user.avatar && !imageError ? (
              <img
                src={product.user.avatar}
                alt={product.user.name}
                className="w-8 h-8 rounded-full border border-light-green/30 object-cover"
                onError={handleImageError}
              />
            ) : (
              <div className="w-8 h-8 bg-light-green/20 rounded-full flex items-center justify-center border border-light-green/30">
                <FaUser className="w-4 h-4 text-light-green" />
              </div>
            )}

            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-dark-green truncate">
                {product.user.name}
              </p>

              <p className="text-xs text-dark-green/60 truncate">
                {product.user.village && product.user.district
                  ? `Desa ${product.user.village}, Kec. ${product.user.district}`
                  : 'Belum ada alamat'}
              </p>
            </div>
          </div>
        </div>

        <p className="text-dark-green/60 text-xs line-clamp-3 flex-grow">
          {product.description}
        </p>
      </div>
    </div>
  );
};

// Komponen Toolbar
const Toolbar = ({
  searchTerm,
  setSearchTerm,
  selectedCategory,
  setSelectedCategory,
  sortBy,
  setSortBy,
  categories,
}) => (
  <div className="pt-6 px-6 bg-white/80">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      <div className="relative md:col-span-2">
        <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Cari produk pertanian..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-blue"
        />
      </div>

      <div className="relative">
        <FaFilter className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-blue appearance-none"
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div className="relative">
        <FaSortAmountDown className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-blue appearance-none"
        >
          <option value="name">Nama Produk</option>
          <option value="price">Harga</option>
          <option value="category">Kategori</option>
        </select>
      </div>
    </div>
  </div>
);

// Komponen Pagination
const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  if (totalPages <= 1) return null;

  return (
    <div className="flex justify-center items-center mt-8 space-x-2">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="flex items-center px-3 py-2 text-sm font-medium text-dark-green bg-white border border-light-green/30 rounded-lg hover:bg-cream disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <FaChevronLeft className="mr-1" size={12} />
        Sebelumnya
      </button>

      <div className="flex space-x-1">
        {[...Array(totalPages)].map((_, index) => {
          const page = index + 1;
          return (
            <button
              key={page}
              onClick={() => onPageChange(page)}
              className={`px-3 py-2 text-sm font-medium rounded-lg ${
                currentPage === page
                  ? 'bg-teal-blue text-white'
                  : 'text-dark-green bg-white border border-light-green/30 hover:bg-cream'
              }`}
            >
              {page}
            </button>
          );
        })}
      </div>

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="flex items-center px-3 py-2 text-sm font-medium text-dark-green bg-white border border-light-green/30 rounded-lg hover:bg-cream disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Selanjutnya
        <FaChevronRight className="ml-1" size={12} />
      </button>
    </div>
  );
};

// --- KOMPONEN UTAMA ---

const Produk = () => {
  // State untuk data dan UI
  const [allProducts, setAllProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const [sortBy, setSortBy] = useState('name');
  const [currentPage, setCurrentPage] = useState(1);

  // State untuk loading dan error
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // --- EFEK UNTUK MENGAMBIL DATA ---
  useEffect(() => {
    const loadProducts = async () => {
      try {
        setIsLoading(true);
        const productsData = await fetchAllProducts();
        setAllProducts(productsData);
      } catch (err) {
        setError(err.message || 'Gagal memuat data produk.');
      } finally {
        setIsLoading(false);
      }
    };

    loadProducts();
  }, []); // Dependency array kosong, hanya berjalan sekali saat mount

  // --- MEMOIZE UNTUK PERFORMA ---

  // Menghitung daftar kategori dari data API
  const categories = useMemo(
    () => [
      'Semua',
      ...new Set(allProducts.map((product) => product.category.name)),
    ],
    [allProducts] // Bergantung pada data produk yang sudah di-fetch
  );

  // Fungsi untuk filter dan sorting produk (client-side)
  const filteredProducts = useMemo(() => {
    let tempProducts = [...allProducts];

    // 1. Filter berdasarkan Search Term dan Kategori
    tempProducts = tempProducts.filter((product) => {
      const searchLower = searchTerm.toLowerCase();
      const matchesSearch =
        product.name.toLowerCase().includes(searchLower) ||
        product.description.toLowerCase().includes(searchLower);
      const matchesCategory =
        selectedCategory === 'Semua' ||
        product.category.name === selectedCategory;
      return matchesSearch && matchesCategory;
    });

    // 2. Sorting
    tempProducts.sort((a, b) => {
      switch (sortBy) {
        case 'price':
          return a.price - b.price;
        case 'category':
          return a.category.name.localeCompare(b.category.name);
        case 'name':
        default:
          return a.name.localeCompare(b.name);
      }
    });

    return tempProducts;
  }, [allProducts, searchTerm, selectedCategory, sortBy]);

  // Reset halaman ke 1 jika filter berubah
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedCategory, sortBy]);

  // --- KALKULASI PAGINASI ---

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const currentProducts = filteredProducts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
      document
        .getElementById('products-section')
        ?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // --- KONTEN UNTUK DIRENDER ---

  const renderContent = () => {
    // Tampilan saat loading
    if (isLoading) {
      return (
        <div className="flex justify-center items-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-blue"></div>
        </div>
      );
    }

    // Tampilan saat error
    if (error) {
      return (
        <div className="text-center py-16">
          <FaExclamationCircle
            size={64}
            className="mx-auto text-red-400 mb-6"
          />
          <h3 className="text-2xl font-bold text-dark-green mb-4">
            Oops, Terjadi Kesalahan
          </h3>
          <p className="text-dark-green/70 max-w-md mx-auto">{error}</p>
        </div>
      );
    }

    // Tampilan jika produk tidak ditemukan setelah filter
    if (currentProducts.length === 0) {
      return (
        <div className="text-center py-16">
          <FaSearch size={64} className="mx-auto text-dark-green/40 mb-6" />
          <h3 className="text-2xl font-bold text-dark-green mb-4">
            Tidak ada produk ditemukan
          </h3>
          <p className="text-dark-green/70 max-w-md mx-auto">
            Coba ubah kata kunci pencarian atau filter kategori Anda.
          </p>
        </div>
      );
    }

    // Tampilan jika produk ada
    return (
      <>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
          {currentProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </>
    );
  };

  return (
    <div className="min-h-screen bg-cream py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="bg-white py-7 sm:py-11 rounded-2xl mb-6 shadow-sm">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="text-sm font-medium text-gray-500 mb-4">
              <Link
                to="/"
                className="hover:text-emerald-600 transition-colors duration-300"
              >
                Beranda
              </Link>
              <span className="mx-2">/</span>
              <span className="text-gray-800">Produk</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-[#377638] to-[#7AAF59] p-2 bg-clip-text text-transparent tracking-tight">
              Produk Hasil Panen
            </h1>

            <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">
              Temukan beragam produk pertanian berkualitas langsung dari petani
              lokal terpercaya di berbagai daerah.
            </p>
            <p className="mt-3 max-w-3xl mx-auto text-xs italic text-gray-400">
              *Unduh Aplikasi Mobile <b>PanenKita</b> untuk menghubungi petani
              secara langsung.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <Toolbar
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            sortBy={sortBy}
            setSortBy={setSortBy}
            categories={categories}
          />

          <div id="products-section" className="p-6">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Produk;
