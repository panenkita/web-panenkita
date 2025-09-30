import React from 'react';
import { Link } from 'react-router-dom';

// Icons
import {
  FiCheckCircle,
  FiLink2,
  FiMail,
  FiMapPin,
  FiPhone,
  FiTrendingDown,
} from 'react-icons/fi';
import { TbPointFilled, TbTargetArrow } from 'react-icons/tb';
import { PiPlantLight } from 'react-icons/pi';

// Assets
import visiMisiImg from '../assets/visi-misi.jpg';
import bgPertanianIndonesia from '../assets/bg-pertanian-indonesia.jpg';

const Tentang = () => {
  const problemsData = [
    {
      icon: <FiTrendingDown size={32} />,
      title: 'Ketidakpastian Stok Hasil Panen',
      description:
        'Kurangnya informasi rencana tanam dan kebutuhan hasil panen membuat petani kesulitan memprediksi hasil panen, yang berdampak pada perencanaan produksi dan pemasaran.',
    },
    {
      icon: <FiLink2 size={32} />,
      title: 'Rantai Pasok Panjang & Tidak Efisien',
      description:
        'Banyaknya lapisan perantara menyebabkan harga jual petani rendah, sementara harga beli konsumen tinggi, serta meningkatkan risiko kerusakan produk.',
    },
    {
      icon: <FiMapPin size={32} />,
      title: 'Akses Pasar Terbatas',
      description:
        'Petani di daerah terpencil seringkali kesulitan menjangkau pasar yang lebih luas, membatasi potensi pendapatan dan pertumbuhan usaha tani mereka.',
    },
  ];

  const contactData = [
    {
      icon: <FiMapPin size={32} />,
      title: 'Alamat Kantor',
      content: (
        <p className="text-gray-600 leading-relaxed">
          Jl. Raya Cibolang Cisaat - Sukabumi No.21, Kabupaten Sukabumi, Jawa
          Barat 43152
        </p>
      ),
    },
    {
      icon: <FiMail size={32} />,
      title: 'Email Resmi',
      content: (
        <a
          href="mailto:panenkita.official@gmail.com"
          className="text-emerald-600 font-semibold transition-colors duration-300 hover:text-emerald-700 hover:underline"
        >
          panenkita.official@gmail.com
        </a>
      ),
    },
    {
      icon: <FiPhone size={32} />,
      title: 'Telepon & WhatsApp',
      content: (
        <a
          href="tel:+6281234567890"
          className="text-emerald-600 font-semibold transition-colors duration-300 hover:text-emerald-700 hover:underline"
        >
          +62 812-3456-7890
        </a>
      ),
    },
  ];

  const ValueItem = ({ children }) => (
    <li className="flex items-center gap-3">
      <TbPointFilled className="text-emerald-500 flex-shrink-0" size={20} />
      <span className="text-gray-600 mb-1">{children}</span>
    </li>
  );

  return (
    <div className="min-h-screen bg-white/80">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[550px] bg-gray-900 flex items-center justify-center text-white">
        {/* Image Background */}
        <div className="absolute inset-0 z-0">
          <img
            src={bgPertanianIndonesia}
            alt="Tim PanenKita bersama petani"
            className="w-full h-full object-cover"
          />

          {/* Overlay Gelap */}
          <div className="absolute inset-0 bg-gradient-to-t from-dark-green/50 to-black/30"></div>
        </div>

        {/* Text */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-base text-white/80 mb-4">
            <Link to="/" className="hover:text-white transition-colors">
              Beranda
            </Link>
            <span className="mx-2">/</span>
            <span>Tentang Kami</span>
          </div>

          <PiPlantLight className="text-white mx-auto mt-7" size={50} />
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            Menumbuhkan Masa Depan Pertanian Indonesia
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Kami adalah jembatan digital yang menghubungkan semangat para petani
            dengan pasar yang lebih luas, menciptakan ekosistem yang adil,
            transparan, dan berkelanjutan untuk semua.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-white/80 py-24 animate-fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Column */}
            <div className="relative">
              <img
                src={visiMisiImg}
                alt="Petani tersenyum memegang hasil panen"
                className="rounded-2xl shadow-xl w-full h-auto object-cover aspect-[4/3]"
              />
            </div>

            {/* Right Column */}
            <div className="space-y-12">
              {/* Visi */}
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center bg-teal-100 text-teal-600 rounded-2xl">
                  <TbTargetArrow size={28} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    Visi Kami
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    Menjadi platform agritech terdepan yang menghubungkan
                    seluruh ekosistem pertanian diberbagai daerah, dari hulu
                    hingga hilir, demi terciptanya sektor pertanian yang modern,
                    berkelanjutan, dan sejahtera.
                  </p>
                </div>
              </div>

              {/* Misi */}
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center bg-emerald-100 text-emerald-600 rounded-2xl">
                  <FiCheckCircle size={25} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    Misi Kami
                  </h2>
                  <ValueItem>
                    Memberdayakan petani dengan teknologi dan informasi pasar
                    terkini.
                  </ValueItem>
                  <ValueItem>
                    Menyediakan Informasi Rencana Tanam, Harga Pasar, dan
                    Permintaan Produk secara real-time.
                  </ValueItem>
                  <ValueItem>
                    Membangun jaringan distribusi yang efisien dan transparan
                    antara petani dan pembeli.
                  </ValueItem>
                  <ValueItem>
                    Menciptakan ekosistem pertanian yang inklusif dan
                    berkelanjutan.
                  </ValueItem>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Title Section */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm font-bold tracking-wider uppercase text-emerald-600">
              Tantangan Utama
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-teal-blue mt-2 tracking-tight">
              Mengapa Perubahan itu Penting?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Sektor pertanian kita menghadapi berbagai tantangan sistemik yang
              menghambat kesejahteraan petani dan efisiensi rantai pasok pangan.
            </p>
          </div>

          {/* Card Problem */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {problemsData.map((problem, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl border border-gray-200/80 shadow-sm hover:shadow-xl hover:border-emerald-200 transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className="w-16 h-16 flex items-center justify-center bg-emerald-100 rounded-xl mb-6 transition-colors duration-300 group-hover:bg-emerald-200">
                  <div className="text-emerald-600 transition-transform duration-300 group-hover:scale-110">
                    {problem.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {problem.title}
                </h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  {problem.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-24 bg-white/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Title Section */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm font-bold tracking-wider uppercase text-teal-blue">
              Terhubung dengan Kami
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-[#377638] to-[#7AAF59] p-2 bg-clip-text text-transparent tracking-tight">
              Hubungi Tim PanenKita
            </h2>
            <p className="mt-2 text-lg text-gray-600">
              Punya pertanyaan atu masukan? Kami siap membantu Anda.
            </p>
          </div>

          {/* Card Contact */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {contactData.map((item, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl border border-gray-200/80 shadow-sm hover:shadow-xl hover:border-emerald-200 transition-all duration-300 transform hover:-translate-y-2 group text-center"
              >
                <div className="mx-auto w-16 h-16 flex items-center justify-center bg-emerald-100 rounded-xl mb-6 transition-colors duration-300 group-hover:bg-emerald-200">
                  <div className="text-emerald-600 transition-transform duration-300 group-hover:scale-110">
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <div className="text-base">{item.content}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tentang;
