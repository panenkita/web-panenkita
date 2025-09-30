import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';

// Icons
import {
  FaSeedling,
  FaChevronLeft,
  FaChevronRight,
  FaSearch,
  FaFilter,
  FaSortAmountDown,
  FaUser,
} from 'react-icons/fa';
import { LuWheat } from 'react-icons/lu';
import { FaWheatAwn } from 'react-icons/fa6';

// Data Dummy
import { plantingPlans, harvestNeeds } from '../data/dummyData';

// --- KONSTANTA & FUNGSI BANTUAN ---

// Jumlah item
const ITEMS_PER_PAGE = 20;

// Peta Kategori Tanaman berdasarkan nama produk
const CROP_CATEGORY_MAP = {
  'Biji-bijian': ['padi', 'jagung', 'beras'],
  Rempah: [
    'cabai',
    'bawang',
    'kemangi',
    'daun',
    'seledri',
    'peterseli',
    'mint',
    'basil',
    'rosemary',
    'thyme',
    'oregano',
    'sage',
    'cilantro',
    'dill',
    'chives',
    'tarragon',
    'marjoram',
  ],
  'Kacang-kacangan': ['kacang'],
  'Umbi-umbian': ['kentang', 'ubi', 'singkong', 'talas', 'ganyong'],
  'Buah-buahan': [
    'apel',
    'jeruk',
    'mangga',
    'pisang',
    'semangka',
    'anggur',
    'pepaya',
    'melon',
  ],
};

/**
 * Mendapatkan kategori tanaman dari nama produk.
 * @param {string} cropName (Nama tanaman).
 * @returns {string} Kategori tanaman.
 */
const getCropCategory = (cropName) => {
  const name = cropName.toLowerCase();

  for (const category in CROP_CATEGORY_MAP) {
    if (CROP_CATEGORY_MAP[category].some((keyword) => name.includes(keyword))) {
      return category;
    }
  }

  return 'Sayuran'; // Default category
};

// Warna status untuk label
const getStatusColor = (status) => {
  switch (status.toLowerCase()) {
    case 'selesai': // Rencana Tanam
    case 'tersedia': // Kebutuhan Panen
      return 'bg-mint-green/12 text-mint-green border border-mint-green/30';
    case 'proses': // Rencana Tanam
      return 'bg-teal-blue/12 text-teal-blue border border-teal-blue/30';
    case 'mencari': // Kebutuhan Panen
      return 'bg-red-100 text-red-700 border border-red-200';
    default:
      return 'bg-gray-100 text-gray-700 border border-gray-200';
  }
};

// --- KOMPONEN ANAK (REUSABLE UI COMPONENTS) ---

// Komponen Kartu Statistik Total
const StatTotalCard = ({ title, icon, data, showDetails, onToggleDetails }) => (
  <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm font-medium text-dark-green/70 mb-1">{title}</p>
        <p className="text-3xl font-bold text-dark-green mb-3">
          {data.grandTotal.toLocaleString()} <span className="text-lg">Kg</span>
        </p>

        {/* Rincian */}
        <div className="text-xs text-dark-green/60">
          {!showDetails ? (
            <div>
              <button
                onClick={onToggleDetails}
                className="text-teal-blue hover:text-dark-green font-medium text-xs"
              >
                Rincian →
              </button>
            </div>
          ) : (
            <div>
              {Object.entries(data.totalsByCategory).map(
                ([category, total]) => (
                  <div
                    key={category}
                    className="mb-1 flex justify-between items-center bg-light-green/10 rounded-full px-3 py-1"
                  >
                    <strong>{category}</strong>
                    <span className="flex-1 text-right ml-20 font-semibold">
                      {total.toLocaleString()} kg
                    </span>
                  </div>
                )
              )}
              <button
                onClick={onToggleDetails}
                className="text-teal-blue hover:text-dark-green font-medium text-xs mt-1"
              >
                ← Tutup
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="opacity-90 pr-8">{icon}</div>
    </div>
  </div>
);

// Komponen Kartu Data (Rencana Tanam dan Kebutuhan Panen)
const DataCard = ({ item, type }) => {
  const isPlanting = type === 'rencana';

  return (
    <div className="bg-cream/50 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 border border-dark-green/10 overflow-hidden">
      {/* Header */}
      <div className="p-3">
        <div className="flex items-start justify-between">
          <h3 className="text-base font-bold text-dark-green line-clamp-1 flex-1 mr-2">
            {item.name}
          </h3>
          <span
            className={`px-2 py-1 text-xs font-semibold rounded-full whitespace-nowrap ${getStatusColor(
              item.status
            )}`}
          >
            {item.status}
          </span>
        </div>
      </div>

      {isPlanting && (
        <div className="px-3 mb-3">
          <img
            src={item.farmImage}
            alt={`Kebun ${item.name}`}
            className="w-full h-35 object-cover rounded-lg"
          />
        </div>
      )}

      {/* Profile/Buyer Section */}
      <div className="px-3 mb-3">
        <div className="flex items-center gap-2">
          {isPlanting ? (
            item.farmer.image ? (
              <img
                src={item.farmer.image}
                alt={item.farmer.name}
                className="w-8 h-8 rounded-full border border-light-green/30"
              />
            ) : (
              <div className="w-8 h-8 bg-light-green/20 rounded-full flex items-center justify-center border border-light-green/30">
                <FaUser className="w-4 h-4 text-light-green" />
              </div>
            )
          ) : (
            <>
              {item.buyer.image ? (
                <img
                  src={item.buyer.image}
                  alt={item.buyer.name}
                  className="w-8 h-8 rounded-full border border-teal-blue/30"
                />
              ) : (
                <div className="w-8 h-8 bg-teal-blue/20 rounded-full flex items-center justify-center border border-teal-blue/30">
                  <FaUser className="w-4 h-4 text-teal-blue" />
                </div>
              )}
            </>
          )}

          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-dark-green truncate">
              {isPlanting ? item.farmer.name : item.buyer.name}
            </p>
            <p className="text-xs text-dark-green/60 truncate">
              {isPlanting ? item.location : item.locationDua}
            </p>
          </div>
        </div>
      </div>

      {/* Details */}
      <div className="px-3 pb-3 space-y-2">
        <div className="flex justify-between items-center">
          <span className="text-xs text-dark-green/60">Periode:</span>
          <span className="text-xs font-medium text-dark-green">
            {item.period}
          </span>
        </div>
        {isPlanting && item.area && (
          <div className="flex justify-between items-center">
            <span className="text-xs text-dark-green/60">Luas Lahan:</span>
            <span className="text-xs font-medium text-dark-green">
              {item.area}
            </span>
          </div>
        )}
        <div className="flex justify-between items-center">
          <span className="text-xs text-dark-green/60">
            {isPlanting ? 'Estimasi Hasil:' : 'Jumlah Dibutuhkan:'}
          </span>
          <span className="text-xs font-semibold text-teal-blue">
            {item.quantity}
          </span>
        </div>
      </div>
    </div>
  );
};

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

const Stok = () => {
  const [activeTab, setActiveTab] = useState('rencana');
  const [showPlantingDetails, setShowPlantingDetails] = useState(false);
  const [showHarvestDetails, setShowHarvestDetails] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const [sortBy, setSortBy] = useState('name');
  const [sortOrder, setSortOrder] = useState('asc');

  // Memoized calculation of totals
  // Fungsi menghitung total kuantitas per kategori dan grand total (jika ada perubahan data, ini akan dihitung ulang)
  const { plantingData, harvestData } = useMemo(() => {
    const calculateData = (data) => {
      const totalsByCrop = {};
      const totalsByCategory = {};
      let grandTotal = 0;

      data.forEach((item) => {
        const quantityStr = item.quantity.replace(/[^0-9.]/g, '');
        let quantity = parseFloat(quantityStr);
        if (item.quantity.toLowerCase().includes('ton')) {
          quantity *= 1000;
        }
        grandTotal += quantity;

        // Kalkulasi total per tanaman (untuk potensi grafik)
        const cropName = item.name.split(' ')[0];
        totalsByCrop[cropName] = (totalsByCrop[cropName] || 0) + quantity;

        // Kalkulasi total per kategori (untuk detail kartu)
        const category = getCropCategory(item.name);
        totalsByCategory[category] =
          (totalsByCategory[category] || 0) + quantity;
      });

      return { grandTotal, totalsByCrop, totalsByCategory };
    };

    return {
      plantingData: calculateData(plantingPlans),
      harvestData: calculateData(harvestNeeds),
    };
  }, []); // Hanya dijalankan sekali karena data dummy statis

  // Memoized unique categories for filter dropdown
  // Fungsi untuk mengambil kategori tanaman (jika ada perubahan data, ini akan dihitung ulang)
  const { plantingCategories, harvestCategories } = useMemo(() => {
    const getCategories = (data) => [
      'Semua',
      ...new Set(data.map((item) => getCropCategory(item.name))),
    ];

    return {
      plantingCategories: getCategories(plantingPlans),
      harvestCategories: getCategories(harvestNeeds),
    };
  }, []);

  // Memoized filtering and sorting
  // Fungsi untuk memfilter dan mengurutkan data berdasarkan tab aktif, kata kunci pencarian, kategori terpilih, dan opsi pengurutan
  const filteredData = useMemo(() => {
    const data = activeTab === 'rencana' ? plantingPlans : harvestNeeds;
    const isPlanting = activeTab === 'rencana';

    const filtered = data.filter((item) => {
      const searchLower = searchTerm.toLowerCase();

      const matchesSearch =
        item.name.toLowerCase().includes(searchLower) ||
        (isPlanting && item.farmer.name.toLowerCase().includes(searchLower)) ||
        (isPlanting && item.location.toLowerCase().includes(searchLower)) ||
        (!isPlanting && item.buyer.toLowerCase().includes(searchLower));

      const matchesCategory =
        selectedCategory === 'Semua' ||
        getCropCategory(item.name) === selectedCategory;

      return matchesSearch && matchesCategory;
    });

    return filtered.sort((a, b) => {
      let aValue, bValue;
      switch (sortBy) {
        case 'name':
          aValue = a.name;
          bValue = b.name;
          break;
        case 'farmer':
          aValue = a.farmer.name;
          bValue = b.farmer.name;
          break;
        case 'buyer':
          aValue = a.buyer;
          bValue = b.buyer;
          break;
        case 'location':
          aValue = a.location;
          bValue = b.location;
          break;
        case 'period':
          aValue = a.period;
          bValue = b.period;
          break;
        case 'status':
          aValue = a.status;
          bValue = b.status;
          break;
        default:
          aValue = a.name;
          bValue = b.name;
          break;
      }

      return sortOrder === 'asc'
        ? String(aValue).localeCompare(String(bValue))
        : String(bValue).localeCompare(String(aValue));
    });
  }, [activeTab, searchTerm, selectedCategory, sortBy, sortOrder]);

  // Pagination
  // Fungsi untuk memotong data yang sudah difilter dan diurutkan berdasarkan halaman saat ini
  const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);
  const currentPageData = filteredData.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setCurrentPage(1);
    setSearchTerm('');
    setSelectedCategory('Semua');
    setSortBy('name');
    setSortOrder('asc');
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
              <span className="text-gray-800">Stok</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-[#377638] to-[#7AAF59] p-2 bg-clip-text text-transparent tracking-tight">
              Manajemen Stok Pertanian
            </h1>

            <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">
              Pantau rencana tanam para petani dan lihat kebutuhan panen dari
              para pembeli dengan mudah dan efisien.
            </p>
            <p className="mt-3 max-w-3xl mx-auto text-xs italic text-gray-400">
              *Unduh Aplikasi Mobile <b>PanenKita</b> untuk menghubungi petani
              dan pembeli secara langsung.
            </p>
          </div>
        </div>

        {/* Kartu Statistik */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-8">
          <StatTotalCard
            title="Total Rencana Tanam"
            icon={<FaSeedling className="text-dark-green" size={40} />}
            data={plantingData}
            showDetails={showPlantingDetails}
            onToggleDetails={() => setShowPlantingDetails((prev) => !prev)}
          />

          <StatTotalCard
            title="Total Kebutuhan Panen"
            icon={<FaWheatAwn className="text-mustard-yellow" size={40} />}
            data={harvestData}
            showDetails={showHarvestDetails}
            onToggleDetails={() => setShowHarvestDetails((prev) => !prev)}
          />
        </div>

        {/* Konten Utama dengan Tab */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          {/* Header Tab */}
          <div className="border-b border-dark-green/20 bg-white/80">
            <nav className="-mb-px flex space-x-8 px-6">
              <button
                onClick={() => handleTabChange('rencana')}
                className={`py-4 px-1 border-b-2 font-semibold text-sm transition-colors ${
                  activeTab === 'rencana'
                    ? 'border-teal-blue text-teal-blue'
                    : 'border-transparent text-dark-green/70 hover:text-teal-blue'
                }`}
              >
                <div className="flex items-center gap-2">
                  <FaSeedling />
                  Rencana Tanam ({plantingPlans.length})
                </div>
              </button>
              <button
                onClick={() => handleTabChange('kebutuhan')}
                className={`py-4 px-1 border-b-2 font-semibold text-sm transition-colors ${
                  activeTab === 'kebutuhan'
                    ? 'border-teal-blue text-teal-blue'
                    : 'border-transparent text-dark-green/70 hover:text-teal-blue'
                }`}
              >
                <div className="flex items-center gap-2">
                  <LuWheat />
                  Kebutuhan Hasil Panen ({harvestNeeds.length})
                </div>
              </button>
            </nav>
          </div>

          {/* Kontrol Filter, Search, Sort */}
          <div className="pt-6 px-6 bg-white/80">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Search lebih lebar */}
              <div className="relative md:col-span-2">
                <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder={
                    activeTab === 'rencana'
                      ? 'Cari nama, petani, lokasi...'
                      : 'Cari nama, pembeli...'
                  }
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-blue"
                />
              </div>

              {/* Filter */}
              <div className="relative">
                <FaFilter className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-blue appearance-none"
                >
                  {(activeTab === 'rencana'
                    ? plantingCategories
                    : harvestCategories
                  ).map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>

              {/* Sort */}
              <div className="relative">
                <FaSortAmountDown className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-blue appearance-none"
                >
                  <option value="name">Nama Produk</option>
                  {activeTab === 'rencana' && (
                    <option value="farmer">Petani</option>
                  )}
                  {activeTab === 'kebutuhan' && (
                    <option value="buyer">Pembeli</option>
                  )}
                  {activeTab === 'rencana' && (
                    <option value="location">Lokasi</option>
                  )}
                  <option value="period">Periode</option>
                  <option value="status">Status</option>
                </select>
              </div>
            </div>
          </div>

          {/* Konten Tab */}
          <div className="p-6 bg-white/80">
            {currentPageData.length > 0 ? (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {currentPageData.map((item) => (
                    <DataCard key={item.id} item={item} type={activeTab} />
                  ))}
                </div>

                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={(page) => setCurrentPage(page)}
                />
              </>
            ) : (
              <div className="text-center py-12">
                <FaSearch
                  size={48}
                  className="mx-auto text-dark-green/40 mb-4"
                />
                <h3 className="text-xl font-bold text-dark-green mb-2">
                  Tidak ada tanaman ditemukan
                </h3>
                <p className="text-dark-green/70">
                  Coba ubah kata kunci pencarian atau filter kategori Anda.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stok;
