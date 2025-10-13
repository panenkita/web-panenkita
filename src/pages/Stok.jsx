import React, { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Data API
import { fetchAllPlantingPlans, fetchAllHarvestNeeds } from '../data/api';

// Icons
import {
  FaSeedling,
  FaChevronLeft,
  FaChevronRight,
  FaSearch,
  FaFilter,
  FaSortAmountDown,
  FaUser,
  FaExclamationCircle,
} from 'react-icons/fa';
import { LuWheat } from 'react-icons/lu';
import { FaWheatAwn } from 'react-icons/fa6';

// --- KONSTANTA & FUNGSI BANTUAN ---

const ITEMS_PER_PAGE = 20;

const formatDate = (dateString) => {
  if (!dateString) return '';
  const options = { day: 'numeric', month: 'short', year: 'numeric' };
  return new Date(dateString).toLocaleDateString('id-ID', options);
};

const convertToKg = (value, unit) => {
  const unitLower = unit.toLowerCase();

  if (unitLower.includes('ton')) {
    return value * 1000;
  }
  if (unitLower.includes('kuintal') || unitLower.includes('kwintal')) {
    return value * 100;
  }
  if (unitLower.includes('gram')) {
    return value / 1000;
  }
  return value;
};

const getStatusColor = (status) => {
  switch (status.toLowerCase()) {
    case 'selesai':
      return 'bg-mint-green/12 text-mint-green border border-mint-green/30';
    case 'proses':
    case 'mencari':
      return 'bg-yellow-100 text-yellow-700 border border-yellow-200';
    case 'direncanakan':
      return 'bg-blue-100 text-blue-700 border border-blue-200';
    default:
      return 'bg-gray-100 text-gray-700 border border-gray-200';
  }
};

// --- KOMPONEN ANAK (REUSABLE UI COMPONENTS) ---

const Avatar = ({ src, alt }) => {
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    // Reset error state jika src berubah
    setImageError(false);
  }, [src]);

  const handleImageError = () => {
    setImageError(true);
  };

  // Tampilkan fallback jika tidak ada src atau jika gambar error
  if (!src || imageError) {
    return (
      <div className="w-8 h-8 bg-light-green/20 rounded-full flex items-center justify-center border border-light-green/30">
        <FaUser className="w-4 h-4 text-light-green" />
      </div>
    );
  }

  // Tampilkan gambar jika berhasil
  return (
    <img
      src={src}
      alt={alt}
      className="w-8 h-8 rounded-full border border-light-green/30 object-cover"
      onError={handleImageError}
    />
  );
};

const StatTotalCard = ({ title, icon, data, showDetails, onToggleDetails }) => (
  <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm font-medium text-dark-green/70 mb-1">{title}</p>
        <p className="text-3xl font-bold text-dark-green mb-3">
          {data.grandTotal.toLocaleString('id-ID')}{' '}
          <span className="text-lg">Kg</span>
        </p>
        <div className="text-xs text-dark-green/60">
          {!showDetails ? (
            <button
              onClick={onToggleDetails}
              className="text-teal-blue hover:text-dark-green font-medium text-xs"
            >
              Rincian →
            </button>
          ) : (
            <div>
              {Object.entries(data.totalsByCategory).map(
                ([category, total]) => (
                  <div
                    key={category}
                    className="mb-1 flex justify-between items-center bg-light-green/10 rounded-full px-3 py-1"
                  >
                    <strong>{category}</strong>
                    <span className="flex-1 text-right ml-4 font-semibold">
                      {total.toLocaleString('id-ID')} kg
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
      <div className="opacity-90">{icon}</div>
    </div>
  </div>
);

const DataCard = ({ item }) => (
  <div className="bg-cream/50 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 border border-dark-green/10 overflow-hidden">
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
    {item.image && (
      <div className="px-3 mb-3">
        <img
          src={item.image}
          alt={`Gambar ${item.name}`}
          className="w-full h-32 object-cover rounded-lg bg-gray-200"
        />
      </div>
    )}
    <div className="px-3 mb-3">
      <div className="flex items-center gap-2">
        <Avatar src={item.user.avatar} alt={item.user.name} />

        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-dark-green truncate">
            {item.user.name}
          </p>
          <p className="text-xs text-dark-green/60 truncate">
            {item.user.village && item.user.district
              ? `Desa ${item.user.village}, Kec. ${item.user.district}`
              : 'Belum ada alamat'}
          </p>
        </div>
      </div>
    </div>
    <div className="px-3 pb-3 space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-xs text-dark-green/60">Periode:</span>
        <span className="text-xs font-medium text-dark-green">
          {item.period}
        </span>
      </div>
      {item.area && (
        <div className="flex justify-between items-center">
          <span className="text-xs text-dark-green/60">Luas Lahan:</span>
          <span className="text-xs font-medium text-dark-green">
            {item.area}
          </span>
        </div>
      )}
      <div className="flex justify-between items-center">
        <span className="text-xs text-dark-green/60">
          {item.quantityLabel}:
        </span>
        <span className="text-xs font-semibold text-teal-blue">
          {item.quantity}
        </span>
      </div>
    </div>
  </div>
);

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
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index + 1}
            onClick={() => onPageChange(index + 1)}
            className={`px-3 py-2 text-sm font-medium rounded-lg ${
              currentPage === index + 1
                ? 'bg-teal-blue text-white'
                : 'text-dark-green bg-white border border-light-green/30 hover:bg-cream'
            }`}
          >
            {index + 1}
          </button>
        ))}
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
  // State untuk Data dan UI
  const [allPlantingPlans, setAllPlantingPlans] = useState([]);
  const [allHarvestNeeds, setAllHarvestNeeds] = useState([]);
  const [activeTab, setActiveTab] = useState('rencana');
  const [showPlantingDetails, setShowPlantingDetails] = useState(false);
  const [showHarvestDetails, setShowHarvestDetails] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  // State untuk Filter dan Sort
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const [sortBy, setSortBy] = useState('name');

  // State untuk Loading dan Error
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // --- EFEK UNTUK MENGAMBIL DATA API ---
  useEffect(() => {
    const loadData = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const [plansData, needsData] = await Promise.all([
          fetchAllPlantingPlans(),
          fetchAllHarvestNeeds(),
        ]);
        setAllPlantingPlans(plansData);
        setAllHarvestNeeds(needsData);
      } catch (err) {
        setError(err.message || 'Gagal memuat data dari server.');
      } finally {
        setIsLoading(false);
      }
    };
    loadData();
  }, []);

  // --- TRANSFORMASI DATA DARI API ---
  const { processedPlantingPlans, processedHarvestNeeds } = useMemo(() => {
    const now = new Date();

    const transformPlan = (item) => {
      const startDate = new Date(item.plantingStart);
      const endDate = new Date(item.plantingEnd);
      let status = 'Direncanakan';

      if (now >= startDate && now <= endDate) {
        status = 'Proses';
      } else if (now > endDate) {
        status = 'Selesai';
      }

      return {
        ...item,
        type: 'rencana',
        status,
        period: `${formatDate(item.plantingStart)} - ${formatDate(
          item.plantingEnd
        )}`,
        area: `${item.landArea} ${item.landAreaUnit}`,
        quantity: `${item.estimatedYield.toLocaleString('id-ID')} ${
          item.yieldUnit
        }`,
        quantityKg: convertToKg(item.estimatedYield, item.yieldUnit),
        quantityLabel: 'Estimasi Hasil',
        image: item.category.image,
      };
    };

    const transformNeed = (item) => {
      const startDate = new Date(item.needStart);
      const endDate = new Date(item.needEnd);
      let status = 'Direncanakan';

      if (now >= startDate && now <= endDate) {
        status = 'Mencari';
      } else if (now > endDate) {
        status = 'Selesai';
      }

      return {
        ...item,
        type: 'kebutuhan',
        status,
        period: `${formatDate(item.needStart)} - ${formatDate(item.needEnd)}`,
        quantity: `${item.amountNeeded.toLocaleString('id-ID')} ${
          item.amountUnit
        }`,
        quantityKg: convertToKg(item.amountNeeded, item.amountUnit),
        quantityLabel: 'Jumlah Dibutuhkan',
        location: item.user.whatsappNumber || 'Kontak via Aplikasi',
        image: item.category.image,
      };
    };

    return {
      processedPlantingPlans: allPlantingPlans.map(transformPlan),
      processedHarvestNeeds: allHarvestNeeds.map(transformNeed),
    };
  }, [allPlantingPlans, allHarvestNeeds]);

  const { plantingData, harvestData, categories } = useMemo(() => {
    const calculateTotals = (data) => {
      const totalsByCategory = {};
      let grandTotal = 0;

      const activeData = data.filter((item) => item.status !== 'Selesai');

      activeData.forEach((item) => {
        const quantity = item.quantityKg;
        grandTotal += quantity;
        const categoryName = item.category.name;
        totalsByCategory[categoryName] =
          (totalsByCategory[categoryName] || 0) + quantity;
      });
      return { grandTotal, totalsByCategory };
    };

    const getCategories = (data) => [
      'Semua',
      ...new Set(data.map((item) => item.category.name)),
    ];

    const currentData =
      activeTab === 'rencana' ? processedPlantingPlans : processedHarvestNeeds;

    return {
      plantingData: calculateTotals(processedPlantingPlans),
      harvestData: calculateTotals(processedHarvestNeeds),
      categories: getCategories(currentData),
    };
  }, [processedPlantingPlans, processedHarvestNeeds, activeTab]);

  // --- FILTERING DAN SORTING (MEMOIZED) ---
  const filteredData = useMemo(() => {
    const data =
      activeTab === 'rencana' ? processedPlantingPlans : processedHarvestNeeds;

    const filtered = data.filter((item) => {
      const searchLower = searchTerm.toLowerCase();
      const matchesSearch =
        item.name.toLowerCase().includes(searchLower) ||
        item.user.name.toLowerCase().includes(searchLower) ||
        item.location.toLowerCase().includes(searchLower);
      const matchesCategory =
        selectedCategory === 'Semua' || item.category.name === selectedCategory;
      return matchesSearch && matchesCategory;
    });

    return filtered.sort((a, b) => {
      let aValue, bValue;
      switch (sortBy) {
        case 'user':
          aValue = a.user.name;
          bValue = b.user.name;
          break;
        case 'location':
          aValue = a.location;
          bValue = b.location;
          break;
        case 'period':
          aValue = new Date(
            a.type === 'rencana' ? a.plantingStart : a.needStart
          );
          bValue = new Date(
            b.type === 'rencana' ? b.plantingStart : b.needStart
          );
          break;
        case 'status':
          aValue = a.status;
          bValue = b.status;
          break;
        case 'name':
        default:
          aValue = a.name;
          bValue = b.name;
          break;
      }
      if (typeof aValue === 'string') return aValue.localeCompare(bValue);
      if (aValue instanceof Date) return aValue - bValue;
      return 0;
    });
  }, [
    activeTab,
    searchTerm,
    selectedCategory,
    sortBy,
    processedPlantingPlans,
    processedHarvestNeeds,
  ]);

  // --- PAGINATION ---
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
  };

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // --- RENDER LOGIC ---
  const renderContent = () => {
    if (isLoading)
      return <div className="text-center py-12">Memuat data...</div>;
    if (error)
      return (
        <div className="text-center py-12 text-red-600">
          <FaExclamationCircle className="mx-auto mb-2" />
          {error}
        </div>
      );
    if (currentPageData.length === 0)
      return (
        <div className="text-center py-12">
          <FaSearch size={48} className="mx-auto text-dark-green/40 mb-4" />
          <h3 className="text-xl font-bold text-dark-green mb-2">
            Tidak ada data ditemukan
          </h3>
          <p className="text-dark-green/70">
            Coba ubah kata kunci pencarian atau filter kategori Anda.
          </p>
        </div>
      );
    return (
      <>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {currentPageData.map((item) => (
            <DataCard key={`${item.type}-${item.id}`} item={item} />
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
              <span className="text-gray-800">Stok</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-[#377638] to-[#7AAF59] p-2 bg-clip-text text-transparent tracking-tight">
              Manajemen Stok Pertanian
            </h1>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">
              Pantau rencana tanam para petani dan lihat kebutuhan hasil panen
              dari para pembeli dengan mudah dan efisien.
            </p>
            <p className="mt-3 max-w-3xl mx-auto text-xs italic text-gray-400">
              *Download Aplikasi Mobile <b>PanenKita</b> untuk menghubungi
              petani dan pembeli secara langsung.
            </p>
          </div>
        </div>

        {/* Kartu Statistik */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-8">
          <StatTotalCard
            title="Total Estimasi Rencana Tanam"
            icon={<FaSeedling className="text-dark-green" size={40} />}
            data={plantingData}
            showDetails={showPlantingDetails}
            onToggleDetails={() => setShowPlantingDetails((p) => !p)}
          />
          <StatTotalCard
            title="Total Kebutuhan Hasil Panen"
            icon={<FaWheatAwn className="text-mustard-yellow" size={40} />}
            data={harvestData}
            showDetails={showHarvestDetails}
            onToggleDetails={() => setShowHarvestDetails((p) => !p)}
          />
        </div>

        {/* Konten Utama dengan Tab */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
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
                  <FaSeedling /> Rencana Tanam ({allPlantingPlans.length})
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
                  <LuWheat /> Kebutuhan Hasil Panen ({allHarvestNeeds.length})
                </div>
              </button>
            </nav>
          </div>

          {/* Kontrol Filter, Search, Sort */}
          <div className="pt-6 px-6 bg-white/80">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative md:col-span-2">
                <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder={
                    activeTab === 'rencana'
                      ? 'Cari nama, petani, lokasi...'
                      : 'Cari nama, kontak...'
                  }
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
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
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
                  <option value="name">Nama</option>
                  <option value="user">
                    {activeTab === 'rencana' ? 'Petani' : 'Pembeli'}
                  </option>
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
          <div className="p-6">{renderContent()}</div>
        </div>
      </div>
    </div>
  );
};

export default Stok;
