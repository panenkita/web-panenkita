import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  FaGooglePlay,
  FaUserCheck,
  FaLeaf,
  FaStore,
  FaWhatsapp,
  FaClipboardList,
  FaSearch,
  FaRegLightbulb,
  FaCheckCircle,
  FaBookOpen,
  FaShieldAlt,
  FaArrowRight,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaQuestionCircle,
  FaShoppingBag,
  FaExchangeAlt,
} from 'react-icons/fa';
import { FiChevronDown, FiChevronUp, FiHeart, FiSliders, FiEye } from 'react-icons/fi';
import { TbPlant2, TbTruckDelivery, TbBuildingStore } from 'react-icons/tb';
import { LuWheat } from 'react-icons/lu';

// Assets
import bgPertanian from '../assets/bg-pertanian-indonesia.jpg';
import screenshotStok from '../assets/screenshots/stock.jpg';
import screenshotProduk from '../assets/screenshots/product.jpg';
import screenshotChat from '../assets/screenshots/history-whatsapp.jpg';

const BukuPanduan = () => {
  const [activeTab, setActiveTab] = useState('petani'); // 'petani' | 'pembeli' | 'website' | 'faq'
  const [searchQuery, setSearchQuery] = useState('');
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleDownload = () => {
    window.open(
      'https://play.google.com/store/apps/details?id=com.panenkita.app&pcampaignid=web_share',
      '_blank'
    );
  };

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  // --- DATA PANDUAN PETANI ---
  const farmerSteps = [
    {
      number: '01',
      title: 'Daftar & Masuk Akun dengan Google Sign-In',
      badge: 'Autentikasi Cepat',
      icon: <FaUserCheck className="text-emerald-600" size={24} />,
      desc: 'Tidak perlu mengingat kata sandi rumit. Petani dapat masuk ke aplikasi dengan akun Google yang sudah terpasang di ponsel Android.',
      details: [
        'Buka Aplikasi PanenKita di ponsel Android Anda.',
        'Pilih peran sebagai "Petani" saat pertama kali mendaftar.',
        'Tekan tombol "Sign in with Google" dan pilih akun Google Anda.',
        'Sistem akan otomatis memverifikasi dan mengarahkan Anda ke Beranda utama.',
      ],
      tip: 'Pastikan akun Google Anda aktif di perangkat Android yang digunakan.',
    },
    {
      number: '02',
      title: 'Lengkapi Data Profil & Alamat Tani',
      badge: 'Identitas & Lokasi',
      icon: <FaMapMarkerAlt className="text-emerald-600" size={24} />,
      desc: 'Alamat lengkap dan nomor WhatsApp sangat penting agar calon pembeli dapat mengetahui lokasi kebun/lahan dan menghubungi Anda secara langsung.',
      details: [
        'Buka menu "Profil" pada navigasi bawah aplikasi.',
        'Isi nomor WhatsApp aktif Anda (format otomatis +62).',
        'Lengkapi rincian alamat: Jalan, RT/RW, Desa/Kelurahan, Kecamatan, dan Kabupaten Sukabumi.',
        'Tekan tombol "Simpan" untuk menyimpan perubahan identitas Anda.',
      ],
      tip: 'Nomor WhatsApp Anda akan digunakan sebagai jalur komunikasi pesanan langsung.',
    },
    {
      number: '03',
      title: 'Mencatat & Mempublikasikan Rencana Tanam (SCM Plan)',
      badge: 'Fitur Unggulan SCM',
      icon: <TbPlant2 className="text-emerald-600" size={26} />,
      desc: 'Bagikan informasi jadwal penanaman dan estimasi panen kepada pasar. Sistem akan mengubah status komoditas secara otomatis.',
      details: [
        'Masuk ke menu "Stok", pilih tab "Rencana Tanam", lalu tekan ikon Tambah (+).',
        'Pilih kategori komoditas (misal: Tanaman Pangan, Sayuran, Buah, Peternakan, Perikanan).',
        'Masukkan nama tanaman/hewan, tanggal mulai tanam, dan estimasi tanggal panen.',
        'Tentukan estimasi hasil panen (dalam Kg) dan luas lahan (dalam Hektar/m²).',
        'Tentukan alamat rencana distribusi hasil panen (opsional).',
        'Simpan formulir. Data Anda akan langsung muncul di katalog publik dan aplikasi pembeli!',
      ],
      statusNote: [
        { label: 'Rencana', desc: 'Tanggal saat ini sebelum masa tanam dimulai.' },
        { label: 'Proses', desc: 'Saat ini tanaman sedang dalam masa tanam & pemeliharaan.' },
        { label: 'Selesai', desc: 'Tanaman telah melewati tanggal estimasi panen dan siap dijual.' },
      ],
      tip: 'Status berubah otomatis tanpa perlu Anda update manual setiap hari.',
    },
    {
      number: '04',
      title: 'Melihat Kebutuhan Pasar & Calon Pembeli (SCM Source)',
      badge: 'Peluang Pasar',
      icon: <FaSearch className="text-emerald-600" size={24} />,
      desc: 'Ketahui apa yang sedang dicari pembeli dan pedagang saat ini agar produksi tanam Anda memiliki kepastian pembeli sebelum panen tiba.',
      details: [
        'Buka menu "Stok", lalu pilih tab "Kebutuhan Hasil Panen".',
        'Lihat daftar komoditas yang diminta pembeli beserta kuantitas (Kg) dan periode waktu yang diinginkan.',
        'Gunakan kolom pencarian atau filter kategori untuk mencari kebutuhan yang sesuai dengan hasil tani Anda.',
        'Tekan tombol "Hubungi via WhatsApp" pada item kebutuhan untuk langsung menawarkan pasokan Anda kepada pembeli tersebut.',
      ],
      tip: 'Ini cara terbaik menghindari harga anjlok saat panen raya karena sudah memiliki komitmen pembeli lebih awal.',
    },
    {
      number: '05',
      title: 'Mengunggah Produk Siap Jual ke Marketplace (SCM Deliver)',
      badge: 'Etalase Digital',
      icon: <FaStore className="text-emerald-600" size={24} />,
      desc: 'Pajang hasil panen segar yang siap dikirim langsung ke pembeli tanpa melalui tengkulak.',
      details: [
        'Buka menu "Produk" atau menu profil "Kelola Produk Saya", tekan tombol Tambah Produk (+).',
        'Unggah 1 hingga 5 foto asli produk pertanian Anda yang jelas dan menarik.',
        'Tulis nama produk, pilih kategori yang sesuai, dan tentukan harga per satuan (misal: Rp 15.000 / Kg).',
        'Berikan deskripsi detail mengenai kualitas, varietas, kesegaran, dan minimal pembelian.',
        'Tekan "Simpan". Produk Anda akan langsung tayang di katalog marketplace mobile dan website publik!',
      ],
      tip: 'Gunakan foto pencahayaan terang agar produk tampak segar dan diminati pembeli.',
    },
    {
      number: '06',
      title: 'Menerima Pesanan & Konfirmasi via WhatsApp',
      badge: 'Disintermediasi & Transaksi',
      icon: <FaWhatsapp className="text-emerald-600" size={26} />,
      desc: 'Pembeli yang tertarik akan langsung mengirimkan pesan WhatsApp ke nomor Anda dengan informasi produk yang terisi otomatis.',
      details: [
        'Saat pembeli menekan tombol WhatsApp, mereka akan diarahkan langsung ke obrolan pribadi dengan Anda.',
        'Lakukan negosiasi harga akhir, kesepakatan jumlah, metode pembayaran (Transfer / COD), serta jadwal pengiriman/pengambilan barang.',
        'Setelah kesepakatan tercapai, buka menu "Histori WhatsApp" di aplikasi Anda.',
        'Tekan tombol "Tandai Transaksi Berhasil" untuk mencatat rekam jejak penjualan sukses Anda.',
      ],
      tip: '100% hasil penjualan adalah milik Anda tanpa potongan komisi atau biaya perantara!',
    },
  ];

  // --- DATA PANDUAN PEMBELI ---
  const buyerSteps = [
    {
      number: '01',
      title: 'Daftar & Masuk Akun sebagai Pembeli',
      badge: 'Akses Mudah',
      icon: <FaUserCheck className="text-teal-600" size={24} />,
      desc: 'Masuk dengan satu kali klik menggunakan akun Google untuk menjelajahi seluruh pasokan hasil tani segar langsung dari sumbernya.',
      details: [
        'Buka Aplikasi PanenKita, pilih peran "Pembeli / Konsumen".',
        'Tekan tombol "Sign in with Google" untuk login instan.',
        'Lengkapi profil dan nomor WhatsApp Anda agar petani dapat mengonfirmasi pesanan Anda.',
      ],
      tip: 'Peran pembeli dapat digunakan oleh konsumen rumah tangga, pemilik restoran, pedagang pasar, maupun pelaku industri pangan.',
    },
    {
      number: '02',
      title: 'Pantau Jadwal & Rencana Tanam Petani',
      badge: 'Kepastian Pasokan',
      icon: <FaCalendarAlt className="text-teal-600" size={24} />,
      desc: 'Dapatkan informasi komoditas apa saja yang sedang ditanam petani dan kapan estimasi waktu panennya tiba.',
      details: [
        'Buka menu "Stok", pilih tab "Rencana Tanam".',
        'Gunakan filter kategori (misal: Beras, Sayur Daun, Cabai, Buah) dan fitur pencarian.',
        'Perhatikan tanggal estimasi panen dan status tanam (Rencana / Proses / Selesai).',
        'Hubungi petani melalui tombol WhatsApp untuk melakukan pre-order atau pemesanan awal sebelum produk habis.',
      ],
      tip: 'Membeli langsung saat masa panen memastikan Anda mendapatkan harga terbaik dan produk paling segar.',
    },
    {
      number: '03',
      title: 'Publikasikan Kebutuhan Komoditas Anda (SCM Demand)',
      badge: 'Petani Menghubungi Anda',
      icon: <FaClipboardList className="text-teal-600" size={24} />,
      desc: 'Jika Anda membutuhkan komoditas dalam volume tertentu atau secara rutin, buat postingan kebutuhan agar para petani dapat menawarkan hasil panennya kepada Anda.',
      details: [
        'Masuk ke menu "Stok", pilih tab "Kebutuhan Hasil Panen", lalu tekan tombol Tambah (+).',
        'Masukkan nama komoditas yang dicari (contoh: Cabai Rawit Merah, Bawang Merah, Ikan Nila).',
        'Tentukan kuantitas yang dibutuhkan (misal: 250 Kg) dan rentang tanggal kebutuhan.',
        'Simpan data. Postingan Anda akan dapat dilihat oleh seluruh mitra petani di platform!',
      ],
      tip: 'Sangat cocok untuk pengusaha katering, rumah makan, hotel, maupun pedagang grosir.',
    },
    {
      number: '04',
      title: 'Jelajahi Marketplace & Simpan ke Keranjang (Wishlist)',
      badge: 'Etalase Segar',
      icon: <FaShoppingBag className="text-teal-600" size={24} />,
      desc: 'Temukan aneka produk hasil tani yang siap dikirim langsung oleh para petani terpercaya.',
      details: [
        'Buka menu "Produk" untuk melihat katalog produk marketplace.',
        'Gunakan filter kategori atau sortir berdasarkan harga dan produk terbaru.',
        'Klik kartu produk untuk melihat detail foto, deskripsi, harga per satuan, dan lokasi petani penjual.',
        'Tekan tombol "Tambah ke Keranjang" untuk menyimpan produk favorit Anda ke dalam wishlist sebelum memutuskan membeli.',
      ],
      tip: 'Keranjang berfungsi sebagai daftar simpan untuk mempermudah Anda membandingkan beberapa produk pilihan.',
    },
    {
      number: '05',
      title: 'Hubungi Petani Langsung via WhatsApp & Selesaikan Transaksi',
      badge: 'Tanpa Biaya Admin',
      icon: <FaWhatsapp className="text-teal-600" size={26} />,
      desc: 'Mulai percakapan langsung dengan petani. Sistem otomatis menyiapkan format pesan pemesanan yang jelas.',
      details: [
        'Pada halaman detail produk atau rencana tanam, tekan tombol "Hubungi via WhatsApp".',
        'Aplikasi WhatsApp akan otomatis terbuka dengan pesan pembuka yang memuat nama produk, harga, dan identitas Anda.',
        'Diskusikan jumlah pesanan, jadwal kirim, alamat pengantaran, dan cara pembayaran (COD / Transfer bank).',
        'Nikmati produk pertanian segar berkualitas tinggi dengan harga yang adil langsung dari tangan pertama!',
      ],
      tip: 'Periksa kesesuaian barang saat diterima dan dukung petani lokal dengan transaksi yang transparan.',
    },
  ];

  // --- DATA PANDUAN WEBSITE PUBLIK ---
  const websiteSteps = [
    {
      number: '01',
      title: 'Akses Informasi Stok & Rencana Tanam Terbuka',
      desc: 'Website PanenKita menyediakan akses publik tanpa login bagi siapa saja yang ingin memantau kondisi pasokan pangan dan rencana tanam di wilayah Sukabumi.',
      details: [
        'Kunjungi menu "Stok" pada bilah navigasi atas website.',
        'Pilih tab "Rencana Tanam" untuk melihat komoditas yang sedang ditanam oleh mitra petani.',
        'Pilih tab "Kebutuhan Hasil Panen" untuk melihat apa saja permintaan pasar yang sedang terbuka.',
        'Gunakan kolom pencarian kata kunci dan filter kategori untuk menyaring data dengan cepat.',
      ],
    },
    {
      number: '02',
      title: 'Melihat Katalog Produk Siap Jual',
      desc: 'Lihat etalase produk pertanian segar yang sedang dijual oleh para petani langsung dari peramban (browser) laptop maupun ponsel pintar Anda.',
      details: [
        'Buka menu "Produk" pada website.',
        'Jelajahi foto, harga per Kg, dan profil petani penjual.',
        'Gunakan fitur pencarian produk secara real-time.',
      ],
    },
    {
      number: '03',
      title: 'Mengunduh Aplikasi Mobile Android',
      desc: 'Untuk dapat melakukan posting rencana tanam, posting kebutuhan panen, atau menghubungi petani/pembeli via WhatsApp, Anda dapat mengunduh Aplikasi Mobile PanenKita.',
      details: [
        'Tekan tombol "Download Aplikasi" di bagian kanan atas Header atau banner Beranda.',
        'Anda akan diarahkan langsung ke Google Play Store.',
        'Instal aplikasi di smartphone Android (minimum Android 6.0 Marshmallow).',
      ],
    },
  ];

  // --- FAQ DATA ---
  const faqData = [
    {
      q: 'Apakah aplikasi PanenKita memungut biaya pendaftaran atau komisi transaksi?',
      a: 'Tidak. Aplikasi PanenKita 100% GRATIS digunakan oleh petani maupun pembeli. PanenKita tidak memotong komisi penjualan dan tidak mengenakan biaya langganan, sehingga seluruh nilai transaksi dinikmati penuh oleh pihak yang bertransaksi.',
    },
    {
      q: 'Sektor apa saja yang didukung oleh PanenKita?',
      a: 'PanenKita mendukung sektor agribisnis dalam arti luas, meliputi: Tanaman Pangan (Padi, Jagung, dll.), Hortikultura (Sayuran, Buah-buahan, Rempah), Peternakan (Ayam, Telur, Sapi, Kambing), dan Perikanan (Ikan Nila, Lele, Gurame, Udang, dll.).',
    },
    {
      q: 'Bagaimana cara kerja status otomatis pada fitur Rencana Tanam?',
      a: 'Status Rencana Tanam dihitung otomatis oleh sistem berdasarkan tanggal mulai dan selesai tanam: (1) "Rencana" jika tanggal saat ini sebelum tanggal mulai tanam, (2) "Proses" jika saat ini berada di antara tanggal mulai dan selesai tanam, dan (3) "Selesai" jika sudah melewati tanggal panen yang diestimasikan.',
    },
    {
      q: 'Bagaimana metode pembayaran dan pengiriman dilakukan?',
      a: 'Sesuai konsep disintermediasi dan fleksibilitas bagi masyarakat pertanian, koordinasi pembayaran (Transfer Bank / Cash on Delivery/COD) dan mekanisme pengiriman/pengambilan barang disepakati langsung secara fleksibel antara pembeli dan petani melalui komunikasi WhatsApp.',
    },
    {
      q: 'Bagaimana jika saya ingin memperbarui nomor WhatsApp atau alamat saya?',
      a: 'Anda dapat memperbarui nomor WhatsApp dan alamat kapan saja melalui menu "Profil" di aplikasi mobile PanenKita. Data yang diperbarui akan otomatis disesuaikan pada postingan produk dan kartu rencana tanam Anda.',
    },
    {
      q: 'Apakah saya bisa mengakses data stok tanpa menginstal aplikasi mobile?',
      a: 'Ya, Anda dapat memantau data Rencana Tanam dan Kebutuhan Hasil Panen secara terbuka dan real-time melalui halaman "Stok" di website PanenKita ini tanpa perlu login atau menginstal aplikasi.',
    },
    {
      q: 'Apa itu fitur "Tandai Transaksi" pada Histori WhatsApp?',
      a: 'Fitur ini memungkinkan pengguna mencatat bahwa komunikasi via WhatsApp yang dilakukan telah mencapai kesepakatan jual-beli nyata. Ini membantu Anda melacak riwayat transaksi yang pernah berhasil dilakukan di PanenKita.',
    },
  ];

  // Search Filter logic
  const filteredFarmerSteps = farmerSteps.filter(
    (step) =>
      step.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      step.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      step.details.some((d) => d.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const filteredBuyerSteps = buyerSteps.filter(
    (step) =>
      step.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      step.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      step.details.some((d) => d.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const filteredWebsiteSteps = websiteSteps.filter(
    (step) =>
      step.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      step.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      step.details.some((d) => d.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const filteredFaqs = faqData.filter(
    (faq) =>
      faq.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.a.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-cream/40 via-white to-cream/30 text-gray-800">
      {/* 1. HERO HEADER SECTION */}
      <section className="relative bg-gradient-to-br from-dark-green via-emerald-800 to-teal-900 text-white pt-16 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Decorative Pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <img
            src={bgPertanian}
            alt="Pattern Latar"
            className="w-full h-full object-cover mix-blend-overlay"
          />
        </div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-light-green/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-teal-blue/20 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative max-w-5xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20 text-xs sm:text-sm font-semibold tracking-wide text-mint-green shadow-inner">
            <FaBookOpen className="text-mustard-yellow" />
            <span>Pusat Panduan Resmi Aplikasi PanenKita</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
            Buku Panduan Penggunaan <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-light-green via-mint-green to-white bg-clip-text text-transparent">
              Platform Digital PanenKita
            </span>
          </h1>

          <p className="text-base sm:text-lg text-emerald-100 max-w-3xl mx-auto font-normal leading-relaxed">
            Panduan lengkap langkah demi langkah untuk memaksimalkan fitur Supply Chain Management (SCM),
            mulai dari monitoring rencana tanam, kebutuhan pasar, marketplace, hingga transaksi langsung via WhatsApp.
          </p>

          {/* Quick Search Bar */}
          <div className="max-w-2xl mx-auto pt-4">
            <div className="relative flex items-center bg-white rounded-2xl shadow-xl p-1.5 border border-white/20">
              <div className="pl-4 pr-2 text-emerald-700">
                <FaSearch size={18} />
              </div>
              <input
                type="text"
                placeholder="Cari panduan (misal: Rencana Tanam, Login Google, Upload Produk, WhatsApp)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full py-2.5 px-2 text-sm text-gray-800 focus:outline-none placeholder-gray-400 font-medium"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="px-3 py-1 text-xs text-gray-400 hover:text-gray-600 font-semibold"
                >
                  Reset
                </button>
              )}
            </div>
            {searchQuery && (
              <p className="text-xs text-emerald-200 mt-2 text-left px-2">
                Menampilkan hasil pencarian untuk: <span className="font-bold underline">"{searchQuery}"</span>
              </p>
            )}
          </div>

          {/* Quick Highlights Pills */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/10 text-center">
              <span className="block text-2xl font-black text-mustard-yellow">100%</span>
              <span className="text-xs text-emerald-100 font-medium">Tanpa Perantara (Disintermediasi)</span>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/10 text-center">
              <span className="block text-2xl font-black text-mint-green">Real-Time</span>
              <span className="text-xs text-emerald-100 font-medium">Status Siklus Tanam Otomatis</span>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/10 text-center">
              <span className="block text-2xl font-black text-light-green">Langsung</span>
              <span className="text-xs text-emerald-100 font-medium">WhatsApp Pre-filled Message</span>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/10 text-center">
              <span className="block text-2xl font-black text-amber-300">Agribisnis</span>
              <span className="text-xs text-emerald-100 font-medium">Tani, Ternak & Ikan</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SCM FLOW CONCEPT BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 sm:p-8">
          <div className="text-center max-w-3xl mx-auto mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              Konsep Rantai Pasok Terpadu
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mt-2">
              Bagaimana Alur SCM di Aplikasi PanenKita Bekerja?
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 mt-1">
              PanenKita memadukan 3 aliran utama Supply Chain Management untuk menyelaraskan pasokan di hulu dan permintaan di hilir.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Flow 1 */}
            <div className="relative p-5 rounded-xl bg-gradient-to-b from-emerald-50/70 to-white border border-emerald-100 flex flex-col items-start hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-bold text-lg mb-3 shadow-md">
                1
              </div>
              <h3 className="font-bold text-dark-green text-base flex items-center gap-2">
                <LuWheat className="text-emerald-600" />
                Aliran Informasi (Information Flow)
              </h3>
              <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                Petani membagikan <strong>Rencana Tanam</strong> dan pembeli mempublikasikan <strong>Kebutuhan Panen</strong>. Menghilangkan asimetri informasi dan mencegah oversupply / kelangkaan stok.
              </p>
              <div className="mt-4 pt-3 border-t border-emerald-100 w-full text-xs font-semibold text-emerald-700">
                Fitur: Rencana Tanam & Kebutuhan Panen
              </div>
            </div>

            {/* Flow 2 */}
            <div className="relative p-5 rounded-xl bg-gradient-to-b from-teal-50/70 to-white border border-teal-100 flex flex-col items-start hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-lg bg-teal-600 text-white flex items-center justify-center font-bold text-lg mb-3 shadow-md">
                2
              </div>
              <h3 className="font-bold text-teal-800 text-base flex items-center gap-2">
                <TbBuildingStore className="text-teal-600" />
                Aliran Produk (Product Flow)
              </h3>
              <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                Petani memajang hasil panen siap kirim pada <strong>Marketplace</strong>. Pembeli dapat menjelajahi katalog segar dan menyimpannya di <strong>Keranjang (Wishlist)</strong>.
              </p>
              <div className="mt-4 pt-3 border-t border-teal-100 w-full text-xs font-semibold text-teal-700">
                Fitur: Marketplace & Keranjang
              </div>
            </div>

            {/* Flow 3 */}
            <div className="relative p-5 rounded-xl bg-gradient-to-b from-amber-50/70 to-white border border-amber-100 flex flex-col items-start hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-lg bg-amber-600 text-white flex items-center justify-center font-bold text-lg mb-3 shadow-md">
                3
              </div>
              <h3 className="font-bold text-amber-900 text-base flex items-center gap-2">
                <FaWhatsapp className="text-amber-600" />
                Aliran Komunikasi (Communication Flow)
              </h3>
              <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                Interaksi terhubung langsung tanpa perantara tengkulak melalui <strong>WhatsApp Redirect</strong> dengan pesan terisi otomatis sesuai konteks produk/rencana tanam.
              </p>
              <div className="mt-4 pt-3 border-t border-amber-100 w-full text-xs font-semibold text-amber-700">
                Fitur: WhatsApp Redirect & Histori
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. INTERACTIVE ROLE NAVIGATION TABS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-6">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900">
            Pilih Kategori Panduan
          </h2>
          <p className="text-sm text-gray-600 mt-1">
            Pilih peran Anda untuk membaca panduan yang disesuaikan dengan kebutuhan Anda
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 max-w-4xl mx-auto">
          <button
            onClick={() => setActiveTab('petani')}
            className={`flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-sm sm:text-base transition-all duration-300 shadow-sm ${
              activeTab === 'petani'
                ? 'bg-dark-green text-white shadow-lg scale-105 ring-2 ring-emerald-500/50'
                : 'bg-white text-gray-700 hover:bg-emerald-50 hover:text-dark-green border border-gray-200'
            }`}
          >
            <LuWheat size={20} className={activeTab === 'petani' ? 'text-mustard-yellow' : 'text-emerald-600'} />
            <span>Panduan Petani (Mitra Tani)</span>
          </button>

          <button
            onClick={() => setActiveTab('pembeli')}
            className={`flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-sm sm:text-base transition-all duration-300 shadow-sm ${
              activeTab === 'pembeli'
                ? 'bg-teal-700 text-white shadow-lg scale-105 ring-2 ring-teal-500/50'
                : 'bg-white text-gray-700 hover:bg-teal-50 hover:text-teal-700 border border-gray-200'
            }`}
          >
            <FaShoppingBag size={18} className={activeTab === 'pembeli' ? 'text-amber-300' : 'text-teal-600'} />
            <span>Panduan Pembeli (Pasar / Konsumen)</span>
          </button>

          <button
            onClick={() => setActiveTab('website')}
            className={`flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-sm sm:text-base transition-all duration-300 shadow-sm ${
              activeTab === 'website'
                ? 'bg-emerald-800 text-white shadow-lg scale-105 ring-2 ring-emerald-400/50'
                : 'bg-white text-gray-700 hover:bg-emerald-50 hover:text-emerald-800 border border-gray-200'
            }`}
          >
            <FaStore size={18} className={activeTab === 'website' ? 'text-mint-green' : 'text-emerald-600'} />
            <span>Panduan Website Publik</span>
          </button>

          <button
            onClick={() => setActiveTab('faq')}
            className={`flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-sm sm:text-base transition-all duration-300 shadow-sm ${
              activeTab === 'faq'
                ? 'bg-amber-600 text-white shadow-lg scale-105 ring-2 ring-amber-400/50'
                : 'bg-white text-gray-700 hover:bg-amber-50 hover:text-amber-700 border border-gray-200'
            }`}
          >
            <FaQuestionCircle size={18} className={activeTab === 'faq' ? 'text-yellow-200' : 'text-amber-600'} />
            <span>FAQ & Tips Transaksi</span>
          </button>
        </div>
      </section>

      {/* 4. MAIN GUIDE CONTENT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* --- TAB 1: PANDUAN PETANI --- */}
        {activeTab === 'petani' && (
          <div className="space-y-8 animate-fade-in">
            <div className="bg-emerald-50/80 border border-emerald-200 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-200/70 px-3 py-1 rounded-full">
                  Peran Mitra Petani (Hulu Rantai Pasok)
                </span>
                <h3 className="text-2xl font-black text-gray-900 mt-2">
                  Langkah Mudah Mengembangkan Usaha Tani dengan PanenKita
                </h3>
                <p className="text-sm text-gray-600 mt-1 max-w-2xl">
                  Ikuti 6 langkah terstruktur di bawah ini untuk memasarkan hasil panen langsung ke pembeli,
                  menjaga kestabilan harga, dan menjalin kemitraan agribisnis yang berkelanjutan.
                </p>
              </div>
              <button
                onClick={handleDownload}
                className="bg-dark-green hover:bg-emerald-700 text-white font-bold px-6 py-3 rounded-xl flex items-center gap-2 shadow-md hover:shadow-lg transition-all text-sm flex-shrink-0"
              >
                <FaGooglePlay /> Unduh Aplikasi Mobile
              </button>
            </div>

            {filteredFarmerSteps.length === 0 ? (
              <div className="text-center py-12 bg-white rounded-2xl border border-gray-200">
                <p className="text-gray-500 font-medium">Tidak ada panduan petani yang sesuai dengan kata kunci "{searchQuery}".</p>
                <button onClick={() => setSearchQuery('')} className="mt-3 text-sm text-emerald-600 font-bold hover:underline">
                  Tampilkan Semua Panduan Petani
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredFarmerSteps.map((step, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl p-6 sm:p-7 border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                  >
                    <div>
                      {/* Top Header */}
                      <div className="flex items-center justify-between gap-2 mb-4">
                        <div className="flex items-center gap-3">
                          <span className="w-10 h-10 rounded-xl bg-emerald-100 text-dark-green font-black text-base flex items-center justify-center group-hover:bg-dark-green group-hover:text-white transition-colors">
                            {step.number}
                          </span>
                          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                            {step.badge}
                          </span>
                        </div>
                        <div className="p-2 rounded-lg bg-gray-50 text-gray-700">{step.icon}</div>
                      </div>

                      {/* Title & Desc */}
                      <h4 className="text-lg font-bold text-gray-900 group-hover:text-dark-green transition-colors">
                        {step.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed">
                        {step.desc}
                      </p>

                      {/* Steps Checklist */}
                      <div className="mt-4 space-y-2">
                        <span className="text-xs font-bold text-gray-700 uppercase tracking-wider block">
                          Instruksi Langkah:
                        </span>
                        <ul className="space-y-2">
                          {step.details.map((detail, dIdx) => (
                            <li key={dIdx} className="text-xs sm:text-sm text-gray-600 flex items-start gap-2.5">
                              <FaCheckCircle className="text-emerald-500 mt-0.5 flex-shrink-0" size={14} />
                              <span className="leading-snug">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Status Note if available */}
                      {step.statusNote && (
                        <div className="mt-4 p-3.5 bg-gray-50 rounded-xl border border-gray-200 space-y-2">
                          <span className="text-xs font-bold text-gray-800 block">
                            Arti 3 Status Otomatis Rencana Tanam:
                          </span>
                          <div className="grid grid-cols-3 gap-2 text-center text-xs">
                            <div className="p-2 bg-blue-50 border border-blue-200 rounded-lg">
                              <span className="font-bold text-blue-700 block">Rencana</span>
                              <span className="text-[10px] text-blue-600 mt-0.5 block leading-tight">Pra-Tanam</span>
                            </div>
                            <div className="p-2 bg-emerald-50 border border-emerald-200 rounded-lg">
                              <span className="font-bold text-emerald-700 block">Proses</span>
                              <span className="text-[10px] text-emerald-600 mt-0.5 block leading-tight">Masa Rawat</span>
                            </div>
                            <div className="p-2 bg-amber-50 border border-amber-200 rounded-lg">
                              <span className="font-bold text-amber-700 block">Selesai</span>
                              <span className="text-[10px] text-amber-600 mt-0.5 block leading-tight">Siap Panen</span>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Bottom Tip */}
                    <div className="mt-5 pt-3.5 border-t border-gray-100 flex items-start gap-2 text-xs text-emerald-800 bg-emerald-50/60 p-3 rounded-lg">
                      <FaRegLightbulb className="text-mustard-yellow mt-0.5 flex-shrink-0" size={14} />
                      <span className="font-medium leading-tight">
                        <strong>Tips Sukses:</strong> {step.tip}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* --- TAB 2: PANDUAN PEMBELI --- */}
        {activeTab === 'pembeli' && (
          <div className="space-y-8 animate-fade-in">
            <div className="bg-teal-50/80 border border-teal-200 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-teal-800 bg-teal-200/70 px-3 py-1 rounded-full">
                  Peran Pembeli & Pelaku Usaha (Hilir Rantai Pasok)
                </span>
                <h3 className="text-2xl font-black text-gray-900 mt-2">
                  Panduan Belanja Segar & Menjamin Pasokan Pangan
                </h3>
                <p className="text-sm text-gray-600 mt-1 max-w-2xl">
                  Dapatkan akses langsung ke hasil tani berkualitas tinggi, pantau masa panen petani,
                  dan publikasikan kebutuhan pasokan komoditas Anda tanpa biaya perantara.
                </p>
              </div>
              <button
                onClick={handleDownload}
                className="bg-teal-700 hover:bg-teal-800 text-white font-bold px-6 py-3 rounded-xl flex items-center gap-2 shadow-md hover:shadow-lg transition-all text-sm flex-shrink-0"
              >
                <FaGooglePlay /> Unduh Aplikasi Mobile
              </button>
            </div>

            {filteredBuyerSteps.length === 0 ? (
              <div className="text-center py-12 bg-white rounded-2xl border border-gray-200">
                <p className="text-gray-500 font-medium">Tidak ada panduan pembeli yang sesuai dengan kata kunci "{searchQuery}".</p>
                <button onClick={() => setSearchQuery('')} className="mt-3 text-sm text-teal-600 font-bold hover:underline">
                  Tampilkan Semua Panduan Pembeli
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredBuyerSteps.map((step, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl p-6 sm:p-7 border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                  >
                    <div>
                      {/* Top Header */}
                      <div className="flex items-center justify-between gap-2 mb-4">
                        <div className="flex items-center gap-3">
                          <span className="w-10 h-10 rounded-xl bg-teal-100 text-teal-800 font-black text-base flex items-center justify-center group-hover:bg-teal-700 group-hover:text-white transition-colors">
                            {step.number}
                          </span>
                          <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-2.5 py-1 rounded-md border border-teal-200">
                            {step.badge}
                          </span>
                        </div>
                        <div className="p-2 rounded-lg bg-gray-50 text-gray-700">{step.icon}</div>
                      </div>

                      {/* Title & Desc */}
                      <h4 className="text-lg font-bold text-gray-900 group-hover:text-teal-700 transition-colors">
                        {step.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed">
                        {step.desc}
                      </p>

                      {/* Steps Checklist */}
                      <div className="mt-4 space-y-2">
                        <span className="text-xs font-bold text-gray-700 uppercase tracking-wider block">
                          Instruksi Langkah:
                        </span>
                        <ul className="space-y-2">
                          {step.details.map((detail, dIdx) => (
                            <li key={dIdx} className="text-xs sm:text-sm text-gray-600 flex items-start gap-2.5">
                              <FaCheckCircle className="text-teal-500 mt-0.5 flex-shrink-0" size={14} />
                              <span className="leading-snug">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Bottom Tip */}
                    <div className="mt-5 pt-3.5 border-t border-gray-100 flex items-start gap-2 text-xs text-teal-900 bg-teal-50/60 p-3 rounded-lg">
                      <FaRegLightbulb className="text-amber-500 mt-0.5 flex-shrink-0" size={14} />
                      <span className="font-medium leading-tight">
                        <strong>Tips Pembeli:</strong> {step.tip}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* --- TAB 3: PANDUAN WEBSITE PUBLIK --- */}
        {activeTab === 'website' && (
          <div className="space-y-8 animate-fade-in">
            <div className="bg-emerald-50/80 border border-emerald-200 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-200/70 px-3 py-1 rounded-full">
                  Akses Terbuka Tanpa Login
                </span>
                <h3 className="text-2xl font-black text-gray-900 mt-2">
                  Eksplorasi Stok & Komoditas Melalui Website
                </h3>
                <p className="text-sm text-gray-600 mt-1 max-w-2xl">
                  Website PanenKita memungkinkan masyarakat, peneliti, pemerintah daerah, dan pelaku pasar untuk memantau data ketersediaan hasil panen secara transparan.
                </p>
              </div>
              <div className="flex gap-2">
                <Link
                  to="/stok"
                  className="bg-emerald-700 hover:bg-emerald-800 text-white font-bold px-5 py-2.5 rounded-xl text-sm transition-all shadow-sm"
                >
                  Buka Halaman Stok
                </Link>
                <Link
                  to="/produk"
                  className="bg-white hover:bg-gray-100 text-emerald-800 border border-emerald-300 font-bold px-5 py-2.5 rounded-xl text-sm transition-all shadow-sm"
                >
                  Katalog Produk
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {filteredWebsiteSteps.map((step, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 sm:p-7 border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 font-black text-base flex items-center justify-center mb-4">
                      {step.number}
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">
                      {step.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">
                      {step.desc}
                    </p>
                    <ul className="space-y-2">
                      {step.details.map((detail, dIdx) => (
                        <li key={dIdx} className="text-xs sm:text-sm text-gray-600 flex items-start gap-2.5">
                          <FaCheckCircle className="text-emerald-500 mt-0.5 flex-shrink-0" size={14} />
                          <span className="leading-snug">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            {/* Feature Showcase Grid */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 mt-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                Perbandingan Akses: Website vs Aplikasi Mobile
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead>
                    <tr className="border-b border-gray-200 bg-gray-50 text-gray-700">
                      <th className="p-3 font-bold">Fitur / Kemampuan</th>
                      <th className="p-3 font-bold text-center text-emerald-800">Website Publik</th>
                      <th className="p-3 font-bold text-center text-dark-green">Aplikasi Mobile Android</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 text-gray-600">
                    <tr>
                      <td className="p-3 font-medium text-gray-800">Melihat Rencana Tanam & Kebutuhan Panen</td>
                      <td className="p-3 text-center text-emerald-600 font-bold">✓ (Tanpa Login)</td>
                      <td className="p-3 text-center text-emerald-600 font-bold">✓</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-gray-800">Melihat Katalog Produk Marketplace</td>
                      <td className="p-3 text-center text-emerald-600 font-bold">✓ (Tanpa Login)</td>
                      <td className="p-3 text-center text-emerald-600 font-bold">✓</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-gray-800">Membuat & Mengelola Rencana Tanam (Petani)</td>
                      <td className="p-3 text-center text-gray-400">-</td>
                      <td className="p-3 text-center text-emerald-600 font-bold">✓ (CRUD Lengkap)</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-gray-800">Membuat & Mengelola Kebutuhan Panen (Pembeli)</td>
                      <td className="p-3 text-center text-gray-400">-</td>
                      <td className="p-3 text-center text-emerald-600 font-bold">✓ (CRUD Lengkap)</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-gray-800">Upload Produk & Foto Hasil Panen</td>
                      <td className="p-3 text-center text-gray-400">-</td>
                      <td className="p-3 text-center text-emerald-600 font-bold">✓ (Cloudinary)</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-gray-800">Hubungi via WhatsApp & Rekam Histori</td>
                      <td className="p-3 text-center text-gray-400">-</td>
                      <td className="p-3 text-center text-emerald-600 font-bold">✓ (One-Click Redirect)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* --- TAB 4: FAQ & TIPS --- */}
        {activeTab === 'faq' && (
          <div className="space-y-8 animate-fade-in">
            {/* Safety Tips Banner */}
            <div className="bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-2xl p-6 sm:p-8 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm flex-shrink-0">
                  <FaShieldAlt size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Tips Aman Bertransaksi Langsung (Disintermediasi)</h3>
                  <p className="text-xs sm:text-sm text-amber-100 mt-1 leading-relaxed">
                    Karena PanenKita menghubungkan petani dan pembeli secara langsung tanpa perantara, ikuti panduan berikut agar transaksi berjalan lancar dan saling menguntungkan:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4 text-xs text-amber-50">
                    <div className="bg-white/10 p-3 rounded-lg border border-white/10">
                      <strong>1. Komunikasi Jelas:</strong> Konfirmasikan jenis varietas, kuantitas (Kg), grade kualitas, dan tanggal panen sebelum bertransaksi.
                    </div>
                    <div className="bg-white/10 p-3 rounded-lg border border-white/10">
                      <strong>2. Pembayaran Transparan:</strong> Disepakati apakah menggunakan metode DP (Down Payment), COD saat barang sampai, atau transfer setelah timbang.
                    </div>
                    <div className="bg-white/10 p-3 rounded-lg border border-white/10">
                      <strong>3. Cek Fisik Komoditas:</strong> Pembeli disarankan memeriksa kualitas fisik saat serah terima barang guna menjaga kepuasan bersama.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Accordion List */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-md">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2.5">
                <FaQuestionCircle className="text-emerald-600" />
                Pertanyaan yang Sering Diajukan (FAQ)
              </h3>

              {filteredFaqs.length === 0 ? (
                <div className="text-center py-8 text-gray-500 font-medium">
                  Tidak ditemukan pertanyaan dengan kata kunci "{searchQuery}".
                </div>
              ) : (
                <div className="space-y-4">
                  {filteredFaqs.map((faq, fIdx) => (
                    <div
                      key={fIdx}
                      className="border border-gray-200 rounded-xl overflow-hidden transition-colors hover:border-emerald-300"
                    >
                      <button
                        onClick={() => toggleFaq(fIdx)}
                        className="w-full text-left p-4 sm:p-5 flex justify-between items-center gap-4 bg-gray-50/50 hover:bg-emerald-50/30 transition-colors"
                      >
                        <span className="font-bold text-sm sm:text-base text-gray-900">
                          {faq.q}
                        </span>
                        <div className="text-emerald-700 flex-shrink-0">
                          {openFaqIndex === fIdx ? <FiChevronUp size={20} /> : <FiChevronDown size={20} />}
                        </div>
                      </button>
                      {openFaqIndex === fIdx && (
                        <div className="p-4 sm:p-5 bg-white border-t border-gray-100 text-xs sm:text-sm text-gray-600 leading-relaxed animate-fade-in">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </section>

      {/* 5. CALL TO ACTION DOWNLOAD APP BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-gradient-to-r from-dark-green via-emerald-800 to-teal-900 rounded-3xl p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="relative z-10 max-w-2xl space-y-4 text-center md:text-left">
            <span className="inline-block bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold tracking-wide text-mint-green">
              Siap Memulai?
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black leading-tight">
              Unduh Aplikasi PanenKita & Rasakan Kemudahan Rantai Pasok Digital!
            </h2>
            <p className="text-sm text-emerald-100 leading-relaxed">
              Bergabunglah bersama komunitas petani dan pembeli di wilayah Sukabumi.
              Dukung ketahanan pangan dan nikmati harga yang adil serta transparan.
            </p>
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <button
              onClick={handleDownload}
              className="bg-emerald-500 hover:bg-emerald-400 text-white font-bold px-8 py-4 rounded-2xl flex items-center justify-center gap-3 shadow-xl hover:scale-105 transition-all text-base"
            >
              <FaGooglePlay size={22} />
              <span>Download di Google Play</span>
            </button>
          </div>

          {/* Background circles */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-2xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-light-green/10 rounded-full blur-2xl pointer-events-none"></div>
        </div>
      </section>
    </div>
  );
};

export default BukuPanduan;
