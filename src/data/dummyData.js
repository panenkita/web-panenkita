// Extended planting plans for pagination demo (35 items total)
const additionalPlantingPlans = [
  {
    id: 7,
    name: 'Apel Fuji',
    period: 'Mar 2026 - Jun 2026',
    farmer: {
      name: 'Siti Aminah',
      image: 'https://i.pravatar.cc/150?u=a042581f4e29026716p',
    },
    area: '0.7 Hektare',
    location: 'Kab. Brebes, Jawa Tengah',
    status: 'Proses',
    quantity: '100 Kg',
    farmImage:
      'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=300',
  },
  {
    id: 8,
    name: 'Jeruk Manis',
    period: 'Apr 2026 - Jul 2026',
    farmer: {
      name: 'Joko Susilo',
      image: 'https://i.pravatar.cc/150?u=a042581f4e29026711k',
    },
    area: '1.8 Hektare',
    location: 'Kab. Bandung, Jawa Barat',
    status: 'Proses',
    quantity: '12 Ton',
    farmImage:
      'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=300',
  },
  {
    id: 9,
    name: 'Wortel Baby',
    period: 'May 2026 - Aug 2026',
    farmer: {
      name: 'Rina Sari',
      image: null,
    },
    area: '0.6 Hektare',
    location: 'Kab. Malang, Jawa Timur',
    status: 'Proses',
    quantity: '4 Ton',
    farmImage:
      'https://images.unsplash.com/photo-1445282768818-728615cc910a?w=300',
  },
  {
    id: 10,
    name: 'Bayam Hijau',
    period: 'Jun 2026 - Aug 2026',
    farmer: {
      name: 'Agus Setiawan',
      image: null,
    },
    area: '0.4 Hektare',
    location: 'Kab. Bogor, Jawa Barat',
    status: 'Selesai',
    quantity: '1.8 Ton',
    farmImage:
      'https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=300',
  },
  {
    id: 11,
    name: 'Kangkung Darat',
    period: 'Jul 2026 - Sep 2026',
    farmer: {
      name: 'Wati Suryani',
      image: 'https://i.pravatar.cc/150?u=a042581f4e29026714n',
    },
    area: '0.3 Hektare',
    location: 'Kab. Bekasi, Jawa Barat',
    status: 'Selesai',
    quantity: '1.2 Ton',
    farmImage:
      'https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?w=300',
  },
  {
    id: 12,
    name: 'Terong Ungu',
    period: 'Aug 2026 - Nov 2026',
    farmer: {
      name: 'Bambang Wijaya',
      image: 'https://i.pravatar.cc/150?u=a042581f4e29026715o',
    },
    area: '0.9 Hektare',
    location: 'Kab. Klaten, Jawa Tengah',
    status: 'Proses',
    quantity: '6 Ton',
    farmImage:
      'https://images.unsplash.com/photo-1528712306091-ed0763094c98?w=300',
  },
  {
    id: 13,
    name: 'Timun Suri',
    period: 'Sep 2026 - Nov 2026',
    farmer: {
      name: 'Lestari Indah',
      image: 'https://i.pravatar.cc/150?u=a042581f4e29026716p',
    },
    area: '0.5 Hektare',
    location: 'Kab. Yogyakarta, DIY',
    status: 'Proses',
    quantity: '3.5 Ton',
    farmImage:
      'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=300',
  },
  {
    id: 14,
    name: 'Labu Siam',
    period: 'Oct 2026 - Jan 2027',
    farmer: {
      name: 'Hendra Kusuma',
      image: 'https://i.pravatar.cc/150?u=a042581f4e29026717q',
    },
    area: '0.8 Hektare',
    location: 'Kab. Sukabumi, Jawa Barat',
    status: 'Proses',
    quantity: '5 Ton',
    farmImage:
      'https://images.unsplash.com/photo-1471194402529-8e0f5a675de6?w=300',
  },
  {
    id: 15,
    name: 'Pare Hijau',
    period: 'Nov 2026 - Jan 2027',
    farmer: {
      name: 'Sari Dewi',
      image: 'https://i.pravatar.cc/150?u=a042581f4e29026718r',
    },
    area: '0.4 Hektare',
    location: 'Kab. Purwakarta, Jawa Barat',
    status: 'Selesai',
    quantity: '2 Ton',
    farmImage:
      'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=300',
  },
  {
    id: 16,
    name: 'Okra Hijau',
    period: 'Dec 2026 - Mar 2027',
    farmer: {
      name: 'Tono Hartono',
      image: 'https://i.pravatar.cc/150?u=a042581f4e29026719s',
    },
    area: '0.6 Hektare',
    location: 'Kab. Karawang, Jawa Barat',
    status: 'Proses',
    quantity: '3 Ton',
    farmImage:
      'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=300',
  },
  {
    id: 17,
    name: 'Kacang Panjang',
    period: 'Jan 2027 - Apr 2027',
    farmer: {
      name: 'Maya Sari',
      image: 'https://i.pravatar.cc/150?u=a042581f4e29026720t',
    },
    area: '0.7 Hektare',
    location: 'Kab. Cirebon, Jawa Barat',
    status: 'Proses',
    quantity: '4.5 Ton',
    farmImage:
      'https://images.unsplash.com/photo-1445282768818-728615cc910a?w=300',
  },
  {
    id: 18,
    name: 'Buncis Hijau',
    period: 'Feb 2027 - May 2027',
    farmer: {
      name: 'Eko Prasetyo',
      image: 'https://i.pravatar.cc/150?u=a042581f4e29026721u',
    },
    area: '0.5 Hektare',
    location: 'Kab. Magelang, Jawa Tengah',
    status: 'Proses',
    quantity: '2.8 Ton',
    farmImage:
      'https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=300',
  },
  {
    id: 19,
    name: 'Selada Keriting',
    period: 'Mar 2027 - May 2027',
    farmer: {
      name: 'Fitri Handayani',
      image: 'https://i.pravatar.cc/150?u=a042581f4e29026722v',
    },
    area: '0.3 Hektare',
    location: 'Kab. Bandung, Jawa Barat',
    status: 'Selesai',
    quantity: '1.5 Ton',
    farmImage:
      'https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?w=300',
  },
  {
    id: 20,
    name: 'Pakcoy Mini',
    period: 'Apr 2027 - Jun 2027',
    farmer: {
      name: 'Dedi Kurniawan',
      image: 'https://i.pravatar.cc/150?u=a042581f4e29026723w',
    },
    area: '0.4 Hektare',
    location: 'Kab. Depok, Jawa Barat',
    status: 'Proses',
    quantity: '2.2 Ton',
    farmImage:
      'https://images.unsplash.com/photo-1528712306091-ed0763094c98?w=300',
  },
  {
    id: 21,
    name: 'Kemangi Wangi',
    period: 'May 2027 - Jul 2027',
    farmer: {
      name: 'Nurul Aini',
      image: 'https://i.pravatar.cc/150?u=a042581f4e29026724x',
    },
    area: '0.2 Hektare',
    location: 'Kab. Tangerang, Banten',
    status: 'Proses',
    quantity: '0.8 Ton',
    farmImage:
      'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=300',
  },
  {
    id: 22,
    name: 'Daun Bawang',
    period: 'Jun 2027 - Aug 2027',
    farmer: {
      name: 'Yudi Santoso',
      image: 'https://i.pravatar.cc/150?u=a042581f4e29026725y',
    },
    area: '0.3 Hektare',
    location: 'Kab. Bogor, Jawa Barat',
    status: 'Selesai',
    quantity: '1.3 Ton',
    farmImage:
      'https://images.unsplash.com/photo-1471194402529-8e0f5a675de6?w=300',
  },
  {
    id: 23,
    name: 'Seledri Segar',
    period: 'Jul 2027 - Sep 2027',
    farmer: {
      name: 'Lia Permata',
      image: 'https://i.pravatar.cc/150?u=a042581f4e29026726z',
    },
    area: '0.25 Hektare',
    location: 'Kab. Sukabumi, Jawa Barat',
    status: 'Proses',
    quantity: '1 Ton',
    farmImage:
      'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=300',
  },
  {
    id: 24,
    name: 'Peterseli Hijau',
    period: 'Aug 2027 - Oct 2027',
    farmer: {
      name: 'Roni Wijaya',
      image: 'https://i.pravatar.cc/150?u=a042581f4e29026727aa',
    },
    area: '0.2 Hektare',
    location: 'Kab. Cianjur, Jawa Barat',
    status: 'Proses',
    quantity: '0.9 Ton',
    farmImage:
      'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=300',
  },
  {
    id: 25,
    name: 'Mint Segar',
    period: 'Sep 2027 - Nov 2027',
    farmer: {
      name: 'Dina Marlina',
      image: 'https://i.pravatar.cc/150?u=a042581f4e29026728bb',
    },
    area: '0.15 Hektare',
    location: 'Kab. Garut, Jawa Barat',
    status: 'Proses',
    quantity: '0.6 Ton',
    farmImage:
      'https://images.unsplash.com/photo-1445282768818-728615cc910a?w=300',
  },
  {
    id: 26,
    name: 'Basil Thailand',
    period: 'Oct 2027 - Dec 2027',
    farmer: {
      name: 'Andi Pratama',
      image: 'https://i.pravatar.cc/150?u=a042581f4e29026729cc',
    },
    area: '0.3 Hektare',
    location: 'Kab. Bekasi, Jawa Barat',
    status: 'Selesai',
    quantity: '1.4 Ton',
    farmImage:
      'https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=300',
  },
  {
    id: 27,
    name: 'Rosemary Organik',
    period: 'Nov 2027 - Jan 2028',
    farmer: {
      name: 'Sinta Dewi',
      image: 'https://i.pravatar.cc/150?u=a042581f4e29026730dd',
    },
    area: '0.2 Hektare',
    location: 'Kab. Bandung, Jawa Barat',
    status: 'Proses',
    quantity: '0.7 Ton',
    farmImage:
      'https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?w=300',
  },
  {
    id: 28,
    name: 'Thyme Segar',
    period: 'Dec 2027 - Feb 2028',
    farmer: {
      name: 'Bayu Adi',
      image: 'https://i.pravatar.cc/150?u=a042581f4e29026731ee',
    },
    area: '0.18 Hektare',
    location: 'Kab. Sukabumi, Jawa Barat',
    status: 'Proses',
    quantity: '0.8 Ton',
    farmImage:
      'https://images.unsplash.com/photo-1528712306091-ed0763094c98?w=300',
  },
  {
    id: 29,
    name: 'Oregano Premium',
    period: 'Jan 2028 - Mar 2028',
    farmer: {
      name: 'Ratna Sari',
      image: 'https://i.pravatar.cc/150?u=a042581f4e29026732ff',
    },
    area: '0.25 Hektare',
    location: 'Kab. Cianjur, Jawa Barat',
    status: 'Proses',
    quantity: '1.1 Ton',
    farmImage:
      'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=300',
  },
  {
    id: 30,
    name: 'Sage Organik',
    period: 'Feb 2028 - Apr 2028',
    farmer: {
      name: 'Irwan Setiadi',
      image: 'https://i.pravatar.cc/150?u=a042581f4e29026733gg',
    },
    area: '0.2 Hektare',
    location: 'Kab. Bogor, Jawa Barat',
    status: 'Selesai',
    quantity: '0.9 Ton',
    farmImage:
      'https://images.unsplash.com/photo-1471194402529-8e0f5a675de6?w=300',
  },
  {
    id: 31,
    name: 'Cilantro Segar',
    period: 'Mar 2028 - May 2028',
    farmer: {
      name: 'Mega Putri',
      image: 'https://i.pravatar.cc/150?u=a042581f4e29026734hh',
    },
    area: '0.3 Hektare',
    location: 'Kab. Depok, Jawa Barat',
    status: 'Proses',
    quantity: '1.2 Ton',
    farmImage:
      'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=300',
  },
  {
    id: 32,
    name: 'Dill Organik',
    period: 'Apr 2028 - Jun 2028',
    farmer: {
      name: 'Fajar Ramadhan',
      image: null,
    },
    area: '0.15 Hektare',
    location: 'Kab. Karawang, Jawa Barat',
    status: 'Proses',
    quantity: '0.6 Ton',
    farmImage:
      'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=300',
  },
  {
    id: 33,
    name: 'Chives Mini',
    period: 'May 2028 - Jul 2028',
    farmer: {
      name: 'Novi Anggraini',
      image: 'https://i.pravatar.cc/150?u=a042581f4e29026736jj',
    },
    area: '0.2 Hektare',
    location: 'Kab. Tangerang, Banten',
    status: 'Proses',
    quantity: '0.8 Ton',
    farmImage:
      'https://images.unsplash.com/photo-1445282768818-728615cc910a?w=300',
  },
  {
    id: 34,
    name: 'Tarragon Segar',
    period: 'Jun 2028 - Aug 2028',
    farmer: {
      name: 'Rizki Pratama',
      image: 'https://i.pravatar.cc/150?u=a042581f4e29026737kk',
    },
    area: '0.18 Hektare',
    location: 'Kab. Bekasi, Jawa Barat',
    status: 'Selesai',
    quantity: '0.7 Ton',
    farmImage:
      'https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=300',
  },
  {
    id: 35,
    name: 'Marjoram Premium',
    period: 'Jul 2028 - Sep 2028',
    farmer: {
      name: 'Indah Permatasari',
      image: 'https://i.pravatar.cc/150?u=a042581f4e29026738ll',
    },
    area: '0.25 Hektare',
    location: 'Kab. Sukabumi, Jawa Barat',
    status: 'Proses',
    quantity: '1 Ton',
    farmImage:
      'https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?w=300',
  },
];

// Keep original array for backward compatibility
const originalPlantingPlans = [
  {
    id: 1,
    name: 'Padi Organik IR64',
    period: 'Sep 2025 - Des 2025',
    farmer: {
      name: 'Budi Santoso',
      image: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
    },
    area: '2 Hektare',
    location: 'Kab. Subang, Jawa Barat',
    status: 'Selesai',
    quantity: '10 Ton',
    farmImage:
      'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=300',
  },
  {
    id: 2,
    name: 'Jagung Manis Hibrida',
    period: 'Okt 2025 - Jan 2026',
    farmer: {
      name: 'Sri Wahyuni',
      image: 'https://i.pravatar.cc/150?u=a042581f4e29026705e',
    },
    area: '1.5 Hektare',
    location: 'Kab. Boyolali, Jawa Tengah',
    status: 'Proses',
    quantity: '8 Ton',
    farmImage:
      'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=300',
  },
  {
    id: 3,
    name: 'Cabai Rawit Merah',
    period: 'Nov 2025 - Feb 2026',
    farmer: {
      name: 'Ahmad Fauzi',
      image: 'https://i.pravatar.cc/150?u=a042581f4e29026706f',
    },
    area: '0.8 Hektare',
    location: 'Kab. Garut, Jawa Barat',
    status: 'Selesai',
    quantity: '3 Ton',
    farmImage:
      'https://images.unsplash.com/photo-1445282768818-728615cc910a?w=300',
  },
  {
    id: 4,
    name: 'Tomat Cherry Organik',
    period: 'Des 2025 - Mar 2026',
    farmer: {
      name: 'Indra Kurniawan',
      image: 'https://i.pravatar.cc/150?u=a042581f4e29026707g',
    },
    area: '0.5 Hektare',
    location: 'Kab. Cianjur, Jawa Barat',
    status: 'Proses',
    quantity: '2 Ton',
    farmImage:
      'https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=300',
  },
  {
    id: 5,
    name: 'Kacang Tanah Valencia',
    period: 'Jan 2026 - Apr 2026',
    farmer: {
      name: 'Dewi Sartika',
      image: 'https://i.pravatar.cc/150?u=a042581f4e29026708h',
    },
    area: '1.2 Hektare',
    location: 'Kab. Wonogiri, Jawa Tengah',
    status: 'Proses',
    quantity: '1.5 Ton',
    farmImage:
      'https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?w=300',
  },
  {
    id: 6,
    name: 'Sawi Hijau Hidroponik',
    period: 'Feb 2026 - Apr 2026',
    farmer: {
      name: 'Rudi Hartono',
      image: null,
    },
    area: '0.3 Hektare',
    location: 'Kota Batu, Jawa Timur',
    status: 'Proses',
    quantity: '1 Ton',
    farmImage:
      'https://images.unsplash.com/photo-1528712306091-ed0763094c98?w=300',
  },
];

// Combine original and additional data
export const plantingPlans = [
  ...originalPlantingPlans,
  ...additionalPlantingPlans,
];

// Keep original array for backward compatibility
export const harvestNeeds = [
  {
    id: 1,
    name: 'Cabai Merah Keriting',
    period: '15 Okt 2025 - 20 Okt 2025',
    buyer: {
      name: 'PT. Pedas Makmur',
      image: 'https://i.pravatar.cc/150?u=a042581f4e29026703c',
    },
    locationDua: 'Kab. Malang, Jawa Timur',
    status: 'Mencari',
    quantity: '500 Kg',
  },
  {
    id: 2,
    name: 'Beras Premium',
    period: '1 Nov 2025 - 5 Nov 2025',
    buyer: {
      name: 'CV. Beras Sejahtera',
      image: null,
    },
    locationDua: 'Kab. Indramayu, Jawa Barat',
    status: 'Tersedia',
    quantity: '1 Ton',
  },
  {
    id: 3,
    name: 'Jagung Pipil Kering',
    period: '10 Nov 2025 - 15 Nov 2025',
    buyer: {
      name: 'UD. Pangan Utama',
      image: 'https://i.pravatar.cc/150?u=a042581f4e29026714m',
    },
    locationDua: 'Kab. Lampung Tengah, Lampung',
    status: 'Mencari',
    quantity: '800 Kg',
  },
  {
    id: 4,
    name: 'Bawang Merah Brebes',
    period: '20 Okt 2025 - 25 Okt 2025',
    buyer: {
      name: 'PT. Bumbu Nusantara',
      image: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
    },
    locationDua: 'Kab. Brebes, Jawa Tengah',
    status: 'Tersedia',
    quantity: '1.2 Ton',
  },
  {
    id: 5,
    name: 'Kopi Robusta Lampung',
    period: '5 Nov 2025 - 10 Nov 2025',
    buyer: {
      name: 'CV. Aroma Kopi',
      image: 'https://i.pravatar.cc/150?u=a042581f4e29026705e',
    },
    locationDua: 'Kab. Lampung Barat, Lampung',
    status: 'Mencari',
    quantity: '750 Kg',
  },
  {
    id: 6,
    name: 'Kentang Dieng',
    period: '1 Des 2025 - 5 Des 2025',
    buyer: {
      name: 'PT. Sumber Pangan',
      image: null,
    },
    locationDua: 'Kab. Wonosobo, Jawa Tengah',
    status: 'Tersedia',
    quantity: '2 Ton',
  },
  {
    id: 7,
    name: 'Tomat Ceri',
    period: '22 Okt 2025 - 27 Okt 2025',
    buyer: {
      name: 'Resto Segar Alami',
      image: 'https://i.pravatar.cc/150?u=a042581f4e29026706f',
    },
    locationDua: 'Kota Batu, Jawa Timur',
    status: 'Mencari',
    quantity: '300 Kg',
  },
  {
    id: 8,
    name: 'Kelapa Sawit',
    period: '18 Nov 2025 - 25 Nov 2025',
    buyer: {
      name: 'PT. Palma Jaya',
      image: 'https://i.pravatar.cc/150?u=a042581f4e29026707g',
    },
    locationDua: 'Kab. Rokan Hulu, Riau',
    status: 'Mencari',
    quantity: '10 Ton',
  },
  {
    id: 9,
    name: 'Singkong',
    period: '1 Des 2025 - 10 Des 2025',
    buyer: {
      name: 'Pabrik Tepung Tapioka',
      image: null,
    },
    locationDua: 'Kab. Gunung Kidul, Yogyakarta',
    status: 'Tersedia',
    quantity: '5 Ton',
  },
  {
    id: 10,
    name: 'Ikan Lele',
    period: '1 Nov 2025 - 7 Nov 2025',
    buyer: {
      name: 'Warung Pecel Lele Berkah',
      image: 'https://i.pravatar.cc/150?u=a042581f4e29026708h',
    },
    locationDua: 'Kab. Boyolali, Jawa Tengah',
    status: 'Mencari',
    quantity: '400 Kg',
  },
  {
    id: 11,
    name: 'Gula Aren',
    period: '25 Nov 2025 - 30 Nov 2025',
    buyer: {
      name: 'CV. Manis Legit',
      image: 'https://i.pravatar.cc/150?u=a042581f4e29026709i',
    },
    locationDua: 'Kab. Lebak, Banten',
    status: 'Tersedia',
    quantity: '600 Kg',
  },
  {
    id: 12,
    name: 'Cengkeh Kering',
    period: '10 Des 2025 - 20 Des 2025',
    buyer: {
      name: 'PT. Rempah Wangi',
      image: null,
    },
    locationDua: 'Kab. Maluku Tengah, Maluku',
    status: 'Mencari',
    quantity: '250 Kg',
  },
  {
    id: 13,
    name: 'Wortel Brastagi',
    period: '15 Okt 2025 - 19 Okt 2025',
    buyer: {
      name: 'Supplier Sayur Medan',
      image: 'https://i.pravatar.cc/150?u=a042581f4e29026710j',
    },
    locationDua: 'Kab. Karo, Sumatera Utara',
    status: 'Tersedia',
    quantity: '1.5 Ton',
  },
  {
    id: 14,
    name: 'Jahe Merah',
    period: '28 Okt 2025 - 2 Nov 2025',
    buyer: {
      name: 'Produsen Jamu Herbal',
      image: 'https://i.pravatar.cc/150?u=a042581f4e29026711k',
    },
    locationDua: 'Kab. Sukabumi, Jawa Barat',
    status: 'Mencari',
    quantity: '500 Kg',
  },
  {
    id: 15,
    name: 'Mangga Harum Manis',
    period: '12 Nov 2025 - 18 Nov 2025',
    buyer: {
      name: 'Toko Buah Segar Jaya',
      image: null,
    },
    locationDua: 'Kab. Probolinggo, Jawa Timur',
    status: 'Tersedia',
    quantity: '2 Ton',
  },
  {
    id: 16,
    name: 'Kedelai Lokal',
    period: '20 Nov 2025 - 26 Nov 2025',
    buyer: {
      name: 'Koperasi Tahu Tempe',
      image: 'https://i.pravatar.cc/150?u=a042581f4e29026712l',
    },
    locationDua: 'Kab. Grobogan, Jawa Tengah',
    status: 'Mencari',
    quantity: '3 Ton',
  },
  {
    id: 17,
    name: 'Teh Hijau',
    period: '5 Des 2025 - 10 Des 2025',
    buyer: {
      name: 'PT. Minuman Sehat',
      image: 'https://i.pravatar.cc/150?u=a042581f4e29026713n',
    },
    locationDua: 'Kab. Cianjur, Jawa Barat',
    status: 'Tersedia',
    quantity: '400 Kg',
  },
  {
    id: 18,
    name: 'Lada Putih',
    period: '1 Jan 2026 - 10 Jan 2026',
    buyer: {
      name: 'Eksportir Rempah Global',
      image: 'https://i.pravatar.cc/150?u=a042581f4e29026715o',
    },
    locationDua: 'Kab. Bangka, Bangka Belitung',
    status: 'Mencari',
    quantity: '1 Ton',
  },
  {
    id: 19,
    name: 'Kubis',
    period: '18 Okt 2025 - 22 Okt 2025',
    buyer: {
      name: 'CV. Sayur Mayur',
      image: null,
    },
    locationDua: 'Kab. Bandung Barat, Jawa Barat',
    status: 'Tersedia',
    quantity: '2.5 Ton',
  },
  {
    id: 20,
    name: 'Udang Vaname',
    period: '25 Des 2025 - 31 Des 2025',
    buyer: {
      name: 'PT. Hasil Laut Indonesia',
      image: 'https://i.pravatar.cc/150?u=a042581f4e29026716p',
    },
    locationDua: 'Kab. Sidoarjo, Jawa Timur',
    status: 'Mencari',
    quantity: '800 Kg',
  },
  {
    id: 21,
    name: 'Salak Pondoh',
    period: '10 Nov 2025 - 15 Nov 2025',
    buyer: {
      name: 'Agen Buah Sleman',
      image: 'https://i.pravatar.cc/150?u=a042581f4e29026717q',
    },
    locationDua: 'Kab. Sleman, Yogyakarta',
    status: 'Tersedia',
    quantity: '1 Ton',
  },
  {
    id: 22,
    name: 'Kakao Fermentasi',
    period: '15 Jan 2026 - 25 Jan 2026',
    buyer: {
      name: 'Pabrik Cokelat Klasik',
      image: null,
    },
    locationDua: 'Kab. Jembrana, Bali',
    status: 'Mencari',
    quantity: '600 Kg',
  },
  {
    id: 23,
    name: 'Beras Merah Organik',
    period: '20 Des 2025 - 25 Des 2025',
    buyer: {
      name: 'Toko Pangan Sehat',
      image: 'https://i.pravatar.cc/150?u=a042581f4e29026718r',
    },
    locationDua: 'Kab. Tasikmalaya, Jawa Barat',
    status: 'Tersedia',
    quantity: '700 Kg',
  },
  {
    id: 24,
    name: 'Cabai Rawit Merah',
    period: '5 Nov 2025 - 10 Nov 2025',
    buyer: {
      name: 'Sambal Bu Tini',
      image: 'https://i.pravatar.cc/150?u=a042581f4e29026719s',
    },
    locationDua: 'Kab. Blitar, Jawa Timur',
    status: 'Mencari',
    quantity: '350 Kg',
  },
  {
    id: 25,
    name: 'Tembakau',
    period: '1 Feb 2026 - 10 Feb 2026',
    buyer: {
      name: 'PT. Gudang Tembakau',
      image: null,
    },
    locationDua: 'Kab. Temanggung, Jawa Tengah',
    status: 'Mencari',
    quantity: '1.5 Ton',
  },
  {
    id: 26,
    name: 'Alpukat Mentega',
    period: '1 Des 2025 - 7 Des 2025',
    buyer: {
      name: 'Juice Bar Sehat',
      image: 'https://i.pravatar.cc/150?u=a042581f4e29026720t',
    },
    locationDua: 'Kab. Pasuruan, Jawa Timur',
    status: 'Tersedia',
    quantity: '500 Kg',
  },
  {
    id: 27,
    name: 'Sorgum',
    period: '20 Jan 2026 - 30 Jan 2026',
    buyer: {
      name: 'Pabrik Pakan Ternak',
      image: 'https://i.pravatar.cc/150?u=a042581f4e29026721u',
    },
    locationDua: 'Kab. Flores Timur, NTT',
    status: 'Mencari',
    quantity: '4 Ton',
  },
  {
    id: 28,
    name: 'Vanili Kering',
    period: '10 Feb 2026 - 20 Feb 2026',
    buyer: {
      name: 'PT. Aroma Esensial',
      image: null,
    },
    locationDua: 'Kab. Garut, Jawa Barat',
    status: 'Tersedia',
    quantity: '100 Kg',
  },
  {
    id: 29,
    name: 'Kacang Tanah',
    period: '1 Nov 2025 - 10 Nov 2025',
    buyer: {
      name: 'Produsen Bumbu Pecel',
      image: 'https://i.pravatar.cc/150?u=a042581f4e29026722v',
    },
    locationDua: 'Kab. Tuban, Jawa Timur',
    status: 'Mencari',
    quantity: '1.8 Ton',
  },
  {
    id: 30,
    name: 'Brokoli',
    period: '25 Okt 2025 - 30 Okt 2025',
    buyer: {
      name: 'Katering Diet Sehat',
      image: 'https://i.pravatar.cc/150?u=a042581f4e29026723w',
    },
    locationDua: 'Lembang, Jawa Barat',
    status: 'Tersedia',
    quantity: '450 Kg',
  },
  {
    id: 31,
    name: 'Getah Karet',
    period: '1 Mar 2026 - 15 Mar 2026',
    buyer: {
      name: 'PT. Karet Alam Lestari',
      image: null,
    },
    locationDua: 'Kab. Ogan Komering Ilir, Sumsel',
    status: 'Mencari',
    quantity: '20 Ton',
  },
  {
    id: 32,
    name: 'Jeruk Siam',
    period: '10 Des 2025 - 18 Des 2025',
    buyer: {
      name: 'Pasar Induk Kramat Jati',
      image: 'https://i.pravatar.cc/150?u=a042581f4e29026724x',
    },
    locationDua: 'Kab. Jember, Jawa Timur',
    status: 'Tersedia',
    quantity: '3 Ton',
  },
  {
    id: 33,
    name: 'Bawang Putih',
    period: '15 Des 2025 - 20 Des 2025',
    buyer: {
      name: 'Importir Bawang Nasional',
      image: 'https://i.pravatar.cc/150?u=a042581f4e29026725y',
    },
    locationDua: 'Kab. Temanggung, Jawa Tengah',
    status: 'Mencari',
    quantity: '5 Ton',
  },
  {
    id: 34,
    name: 'Rumput Laut Kering',
    period: '20 Feb 2026 - 28 Feb 2026',
    buyer: {
      name: 'PT. Agar Sari Laut',
      image: null,
    },
    locationDua: 'Kab. Takalar, Sulawesi Selatan',
    status: 'Tersedia',
    quantity: '2 Ton',
  },
  {
    id: 35,
    name: 'Kacang Hijau',
    period: '5 Jan 2026 - 12 Jan 2026',
    buyer: {
      name: 'Produsen Bubur Kacang Ijo',
      image: 'https://i.pravatar.cc/150?u=a042581f4e29026726z',
    },
    locationDua: 'Kab. Pati, Jawa Tengah',
    status: 'Mencari',
    quantity: '1.3 Ton',
  },
];

// export const products = [
//   {
//     id: 1,
//     name: 'Beras Merah Organik',
//     price: '15.000',
//     unit: 'kg',
//     description:
//       'Beras merah berkualitas tinggi dari lahan organik, kaya serat, dan nutrisi penting untuk gaya hidup sehat.',
//     category: 'Biji-bijian',
//     images: [
//       'https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=400',
//       'https://images.unsplash.com/photo-1594968600100-336c5720937a?q=80&w=400',
//       'https://images.unsplash.com/photo-1579755498870-071a93e36e3c?q=80&w=400',
//     ],
//     seller: {
//       name: 'Petani Sejahtera',
//       location: 'Cianjur',
//       image: null,
//     },
//   },
//   {
//     id: 2,
//     name: 'Jagung Manis Segar',
//     price: '8.000',
//     unit: 'kg',
//     description:
//       'Jagung manis segar hasil panen hari ini, sangat cocok untuk direbus atau dibakar, manis dan renyah.',
//     category: 'Sayuran',
//     images: [
//       'https://images.unsplash.com/photo-1551754655-cd27e38d2076?q=80&w=400',
//       'https://images.unsplash.com/photo-1629828854448-f865f3d538e9?q=80&w=400',
//     ],
//     seller: {
//       name: 'Kebun Ibu Siti',
//       location: 'Sukabumi',
//       image: 'https://randomuser.me/api/portraits/women/44.jpg',
//     },
//   },
//   {
//     id: 3,
//     name: 'Alpukat Mentega',
//     price: '25.000',
//     unit: 'buah',
//     description:
//       'Alpukat mentega pilihan dengan daging tebal dan creamy, ukuran jumbo, siap santap.',
//     category: 'Buah-buahan',
//     images: [
//       'https://images.unsplash.com/photo-1601004928122-f81ee9c27702?q=80&w=400',
//       'https://images.unsplash.com/photo-1623831818789-f5d713c77d48?q=80&w=400',
//     ],
//     seller: {
//       name: 'Toko Buah Segar',
//       location: 'Bogor',
//       image: 'https://randomuser.me/api/portraits/men/50.jpg',
//     },
//   },
//   {
//     id: 4,
//     name: 'Telur Ayam Kampung',
//     price: '2.500',
//     unit: 'butir',
//     description:
//       'Telur ayam kampung organik, diproduksi oleh ayam yang sehat dan bebas antibiotik. Kualitas terjamin.',
//     category: 'Hewani',
//     images: [
//       'https://images.unsplash.com/photo-1577717903180-87779f324838?q=80&w=400',
//       'https://images.unsplash.com/photo-1628102491629-b69528f1165a?q=80&w=400',
//       'https://images.unsplash.com/photo-1587522533250-9343715c0e0c?q=80&w=400',
//     ],
//     seller: {
//       name: 'Ternak Barokah',
//       location: 'Bandung',
//       image: 'https://randomuser.me/api/portraits/women/62.jpg',
//     },
//   },
//   {
//     id: 5,
//     name: 'Ikan Lele Segar',
//     price: '18.000',
//     unit: 'kg',
//     description:
//       'Ikan lele segar hasil budidaya lokal, sangat cocok untuk pecel lele atau masakan lainnya. Ukuran sedang.',
//     category: 'Perikanan',
//     images: [
//       'https://images.unsplash.com/photo-1627964402324-4f279d01e1d0?q=80&w=400',
//       'https://images.unsplash.com/photo-1575454178345-d41933f7c9e0?q=80&w=400',
//     ],
//     seller: {
//       name: 'Tambak Pak Roni',
//       location: 'Indramayu',
//       image: 'https://randomuser.me/api/portraits/men/78.jpg',
//     },
//   },
// ];

export const products = [
  {
    id: 1,
    name: 'Beras Merah Organik',
    price: '15.000',
    unit: 'kg',
    description:
      'Beras merah berkualitas tinggi dari lahan organik, kaya serat, dan nutrisi penting untuk gaya hidup sehat.',
    category: 'Biji-bijian',
    images: [
      'https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=400',
      'https://images.unsplash.com/photo-1594968600100-336c5720937a?q=80&w=400',
      'https://images.unsplash.com/photo-1579755498870-071a93e36e3c?q=80&w=400',
    ],
    seller: {
      name: 'Petani Sejahtera',
      location: 'Cianjur',
      image: null,
    },
  },
  {
    id: 2,
    name: 'Jagung Manis Segar',
    price: '8.000',
    unit: 'kg',
    description:
      'Jagung manis segar hasil panen hari ini, sangat cocok untuk direbus atau dibakar, manis dan renyah.',
    category: 'Sayuran',
    images: [
      'https://images.unsplash.com/photo-1551754655-cd27e38d2076?q=80&w=400',
      'https://images.unsplash.com/photo-1629828854448-f865f3d538e9?q=80&w=400',
    ],
    seller: {
      name: 'Kebun Ibu Siti',
      location: 'Sukabumi',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
  },
  {
    id: 3,
    name: 'Alpukat Mentega',
    price: '25.000',
    unit: 'buah',
    description:
      'Alpukat mentega pilihan dengan daging tebal dan creamy, ukuran jumbo, siap santap.',
    category: 'Buah-buahan',
    images: [
      'https://images.unsplash.com/photo-1601004928122-f81ee9c27702?q=80&w=400',
      'https://images.unsplash.com/photo-1623831818789-f5d713c77d48?q=80&w=400',
    ],
    seller: {
      name: 'Toko Buah Segar',
      location: 'Bogor',
      image: 'https://randomuser.me/api/portraits/men/50.jpg',
    },
  },
  {
    id: 4,
    name: 'Telur Ayam Kampung',
    price: '2.500',
    unit: 'butir',
    description:
      'Telur ayam kampung organik, diproduksi oleh ayam yang sehat dan bebas antibiotik. Kualitas terjamin.',
    category: 'Hewani',
    images: [
      'https://images.unsplash.com/photo-1577717903180-87779f324838?q=80&w=400',
      'https://images.unsplash.com/photo-1628102491629-b69528f1165a?q=80&w=400',
      'https://images.unsplash.com/photo-1587522533250-9343715c0e0c?q=80&w=400',
    ],
    seller: {
      name: 'Ternak Barokah',
      location: 'Bandung',
      image: 'https://randomuser.me/api/portraits/women/62.jpg',
    },
  },
  {
    id: 5,
    name: 'Ikan Lele Segar',
    price: '18.000',
    unit: 'kg',
    description:
      'Ikan lele segar hasil budidaya lokal, sangat cocok untuk pecel lele atau masakan lainnya. Ukuran sedang.',
    category: 'Perikanan',
    images: [
      'https://images.unsplash.com/photo-1627964402324-4f279d01e1d0?q=80&w=400',
      'https://images.unsplash.com/photo-1575454178345-d41933f7c9e0?q=80&w=400',
    ],
    seller: {
      name: 'Tambak Pak Roni',
      location: 'Indramayu',
      image: 'https://randomuser.me/api/portraits/men/78.jpg',
    },
  },
  {
    id: 6,
    name: 'Madu Hutan Asli',
    price: '85.000',
    unit: 'botol',
    description:
      'Madu murni dari lebah hutan liar, tanpa tambahan gula dan pengawet. Berkhasiat untuk menjaga imunitas tubuh.',
    category: 'Produk Olahan',
    images: [
      'https://images.unsplash.com/photo-1558323638-3dac73315995?q=80&w=400',
      'https://images.unsplash.com/photo-1600051125149-578a14f247d4?q=80&w=400',
    ],
    seller: {
      name: 'Rimba Madu',
      location: 'Sumatera',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
    },
  },
  {
    id: 7,
    name: 'Kopi Gayo Arabika',
    price: '55.000',
    unit: '250g',
    description:
      'Biji kopi Arabika Gayo asli dari dataran tinggi Aceh. Aroma khas dan cita rasa yang nikmat.',
    category: 'Minuman',
    images: [
      'https://images.unsplash.com/photo-1511920183353-3c2f5b3c5a1c?q=80&w=400',
      'https://images.unsplash.com/photo-1559493233-136a62454a80?q=80&w=400',
    ],
    seller: {
      name: 'Gayo Highland Coffee',
      location: 'Aceh',
      image: null,
    },
  },
  {
    id: 8,
    name: 'Ubi Cilembu',
    price: '12.000',
    unit: 'kg',
    description:
      'Ubi Cilembu asli Sumedang, dikenal dengan rasa manis seperti madu saat dipanggang.',
    category: 'Sayuran',
    images: [
      'https://images.unsplash.com/photo-1580910363289-53b342042129?q=80&w=400',
      'https://images.unsplash.com/photo-1621434338999-80415513a2a6?q=80&w=400',
    ],
    seller: {
      name: 'Petani Cilembu Jaya',
      location: 'Sumedang',
      image: 'https://randomuser.me/api/portraits/women/71.jpg',
    },
  },
  {
    id: 9,
    name: 'Mangga Harum Manis',
    price: '22.000',
    unit: 'kg',
    description:
      'Mangga Harum Manis pilihan dari Probolinggo, matang pohon dengan rasa manis dan aroma yang kuat.',
    category: 'Buah-buahan',
    images: [
      'https://images.unsplash.com/photo-1553452118-621e1f860f43?q=80&w=400',
      'https://images.unsplash.com/photo-1605346453912-870a411b43aa?q=80&w=400',
    ],
    seller: {
      name: 'Toko Buah Segar',
      location: 'Bogor',
      image: 'https://randomuser.me/api/portraits/men/50.jpg',
    },
  },
  {
    id: 10,
    name: 'Daging Sapi Rendang',
    price: '130.000',
    unit: 'kg',
    description:
      'Potongan daging sapi segar bagian paha, sangat cocok untuk diolah menjadi rendang atau masakan lainnya.',
    category: 'Hewani',
    images: [
      'https://images.unsplash.com/photo-1607583907703-a4421435f013?q=80&w=400',
      'https://images.unsplash.com/photo-1628268900609-0f62d8d17b8f?q=80&w=400',
    ],
    seller: {
      name: 'Rumah Daging',
      location: 'Jakarta',
      image: null,
    },
  },
  {
    id: 11,
    name: 'Bayam Hijau Segar',
    price: '5.000',
    unit: 'ikat',
    description:
      'Bayam hijau segar dari kebun hidroponik, bebas pestisida dan kaya akan zat besi.',
    category: 'Sayuran',
    images: [
      'https://images.unsplash.com/photo-1587351177721-9972c8f85854?q=80&w=400',
      'https://images.unsplash.com/photo-1576045057995-568f588f21fb?q=80&w=400',
    ],
    seller: {
      name: 'Kebun Ibu Siti',
      location: 'Sukabumi',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
  },
  {
    id: 12,
    name: 'Tempe Mendoan',
    price: '10.000',
    unit: 'papan',
    description:
      'Tempe segar berkualitas super, dibuat dari kedelai pilihan non-GMO. Cocok untuk mendoan atau orek.',
    category: 'Produk Olahan',
    images: [
      'https://images.unsplash.com/photo-1608622919302-311e51b14f6b?q=80&w=400',
      'https://images.unsplash.com/photo-1623931454228-32a82d02996c?q=80&w=400',
    ],
    seller: {
      name: 'Pengrajin Tempe 55',
      location: 'Banyumas',
      image: 'https://randomuser.me/api/portraits/men/55.jpg',
    },
  },
  {
    id: 13,
    name: 'Udang Vaname Segar',
    price: '75.000',
    unit: 'kg',
    description:
      'Udang vaname segar dari tambak modern, ukuran konsumsi, rasa manis dan gurih.',
    category: 'Perikanan',
    images: [
      'https://images.unsplash.com/photo-1615141992928-a53e449a21b3?q=80&w=400',
      'https://images.unsplash.com/photo-1599652395463-549887756f34?q=80&w=400',
    ],
    seller: {
      name: 'Tambak Pak Roni',
      location: 'Indramayu',
      image: 'https://randomuser.me/api/portraits/men/78.jpg',
    },
  },
  {
    id: 14,
    name: 'Jahe Merah',
    price: '30.000',
    unit: 'kg',
    description:
      'Jahe merah rimpang besar, memiliki rasa lebih pedas dan hangat, cocok untuk minuman herbal dan bumbu masak.',
    category: 'Rempah-rempah',
    images: [
      'https://images.unsplash.com/photo-1629837941581-2244a046b5a3?q=80&w=400',
      'https://images.unsplash.com/photo-1607370363229-1a617654a323?q=80&w=400',
    ],
    seller: {
      name: 'Rempah Nusantara',
      location: 'Solo',
      image: null,
    },
  },
  {
    id: 15,
    name: 'Salak Pondoh',
    price: '15.000',
    unit: 'kg',
    description:
      'Salak pondoh asli dari lereng Merapi, Yogyakarta. Daging buah tebal, rasa manis, dan renyah.',
    category: 'Buah-buahan',
    images: [
      'https://images.unsplash.com/photo-1623053389481-b5c65f29d7df?q=80&w=400',
      'https://images.unsplash.com/photo-1680287113885-61e86058e7b3?q=80&w=400',
    ],
    seller: {
      name: 'Sleman Fruit',
      location: 'Yogyakarta',
      image: 'https://randomuser.me/api/portraits/women/8.jpg',
    },
  },
  {
    id: 16,
    name: 'Kentang Dieng',
    price: '14.000',
    unit: 'kg',
    description:
      'Kentang berkualitas dari dataran tinggi Dieng. Ukuran besar, cocok untuk aneka masakan.',
    category: 'Sayuran',
    images: [
      'https://images.unsplash.com/photo-1518977676601-b53f82aba655?q=80&w=400',
      'https://images.unsplash.com/photo-1598136496997-2a6a5b6e4b9b?q=80&w=400',
    ],
    seller: {
      name: 'Kelompok Tani Dieng',
      location: 'Wonosobo',
      image: 'https://randomuser.me/api/portraits/men/11.jpg',
    },
  },
  {
    id: 17,
    name: 'Ayam Potong Broiler',
    price: '35.000',
    unit: 'ekor',
    description:
      'Ayam broiler segar, dipotong secara higienis dan halal. Berat rata-rata 0.8 - 1 kg per ekor.',
    category: 'Hewani',
    images: [
      'https://images.unsplash.com/photo-1631061923018-a73384389073?q=80&w=400',
      'https://images.unsplash.com/photo-1631061923058-15496b2a8d3e?q=80&w=400',
    ],
    seller: {
      name: 'Ternak Barokah',
      location: 'Bandung',
      image: 'https://randomuser.me/api/portraits/women/62.jpg',
    },
  },
  {
    id: 18,
    name: 'Gula Aren Cair',
    price: '28.000',
    unit: 'botol',
    description:
      'Gula aren asli yang diolah menjadi sirup kental, praktis untuk pemanis kopi, teh, atau jajanan tradisional.',
    category: 'Produk Olahan',
    images: [
      'https://images.unsplash.com/photo-1594759846101-f85a86498a4e?q=80&w=400',
      'https://images.unsplash.com/photo-1629580126245-a741e4590321?q=80&w=400',
    ],
    seller: {
      name: 'Manis Legit',
      location: 'Lebak',
      image: null,
    },
  },
  {
    id: 19,
    name: 'Teh Hitam Celup',
    price: '12.000',
    unit: 'box',
    description:
      'Teh hitam berkualitas dari pucuk daun teh pilihan, memberikan aroma wangi dan rasa yang menyegarkan. Isi 25 kantong.',
    category: 'Minuman',
    images: [
      'https://images.unsplash.com/photo-1597318181313-c2474b881182?q=80&w=400',
      'https://images.unsplash.com/photo-1576092762791-d2402a1e605c?q=80&w=400',
    ],
    seller: {
      name: 'Pabrik Teh Wangi',
      location: 'Pekalongan',
      image: 'https://randomuser.me/api/portraits/men/25.jpg',
    },
  },
  {
    id: 20,
    name: 'Ikan Tuna Fillet',
    price: '45.000',
    unit: '200g',
    description:
      'Fillet ikan tuna segar tanpa tulang dan kulit. Dikemas vakum untuk menjaga kualitas. Cocok untuk sashimi atau steak.',
    category: 'Perikanan',
    images: [
      'https://images.unsplash.com/photo-1437418747212-8d9709afab22?q=80&w=400',
      'https://images.unsplash.com/photo-1577906161982-628d71b335a1?q=80&w=400',
    ],
    seller: {
      name: 'Nelayan Makmur',
      location: 'Bali',
      image: 'https://randomuser.me/api/portraits/men/88.jpg',
    },
  },
  {
    id: 21,
    name: 'Wortel Berastagi',
    price: '9.000',
    unit: 'kg',
    description:
      'Wortel manis dan renyah dari dataran tinggi Berastagi, Sumatera Utara. Ukuran besar dan warna oranye cerah.',
    category: 'Sayuran',
    images: [
      'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?q=80&w=400',
      'https://images.unsplash.com/photo-1582515072040-3d5f5a5e3144?q=80&w=400',
    ],
    seller: {
      name: 'Petani Karo',
      location: 'Berastagi',
      image: null,
    },
  },
  {
    id: 22,
    name: 'Jeruk Medan',
    price: '18.000',
    unit: 'kg',
    description:
      'Jeruk manis khas Medan dengan kandungan air yang banyak dan rasa yang segar.',
    category: 'Buah-buahan',
    images: [
      'https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?q=80&w=400',
      'https://images.unsplash.com/photo-1588913685213-584a7a536137?q=80&w=400',
    ],
    seller: {
      name: 'Petani Karo',
      location: 'Berastagi',
      image: null,
    },
  },
  {
    id: 23,
    name: 'Kacang Tanah Kupas',
    price: '28.000',
    unit: 'kg',
    description:
      'Kacang tanah mentah yang sudah dikupas bersih, siap untuk diolah menjadi berbagai macam masakan atau camilan.',
    category: 'Biji-bijian',
    images: [
      'https://images.unsplash.com/photo-1573047243538-95a93dd41a9d?q=80&w=400',
      'https://images.unsplash.com/photo-1627042599229-2a953e51a6b4?q=80&w=400',
    ],
    seller: {
      name: 'Petani Sejahtera',
      location: 'Cianjur',
      image: null,
    },
  },
  {
    id: 24,
    name: 'Susu Sapi Murni',
    price: '15.000',
    unit: 'liter',
    description:
      'Susu sapi segar hasil pemerahan pagi hari, tanpa pengawet. Sebaiknya langsung dikonsumsi atau diolah.',
    category: 'Hewani',
    images: [
      'https://images.unsplash.com/photo-1559599558-c99dea8d39c0?q=80&w=400',
      'https://images.unsplash.com/photo-1620189507195-68309c04c4d0?q=80&w=400',
    ],
    seller: {
      name: 'Pangalengan Farm',
      location: 'Pangalengan',
      image: 'https://randomuser.me/api/portraits/women/33.jpg',
    },
  },
  {
    id: 25,
    name: 'Cabai Rawit Merah',
    price: '50.000',
    unit: 'kg',
    description:
      'Cabai rawit merah super pedas, segar dipetik dari kebun. Cocok untuk membuat sambal dan menambah rasa pedas masakan.',
    category: 'Sayuran',
    images: [
      'https://images.unsplash.com/photo-1567869792671-502a4a754b23?q=80&w=400',
      'https://images.unsplash.com/photo-1526346329939-54b411d35d55?q=80&w=400',
    ],
    seller: {
      name: 'Kebun Ibu Siti',
      location: 'Sukabumi',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
  },
  {
    id: 26,
    name: 'Bawang Merah Brebes',
    price: '35.000',
    unit: 'kg',
    description:
      'Bawang merah asli Brebes, terkenal dengan aroma yang kuat dan kualitas super.',
    category: 'Rempah-rempah',
    images: [
      'https://images.unsplash.com/photo-1618165529402-9a2d3e91605a?q=80&w=400',
      'https://images.unsplash.com/photo-1587393527568-9d41484197c3?q=80&w=400',
    ],
    seller: {
      name: 'Agen Bawang Brebes',
      location: 'Brebes',
      image: null,
    },
  },
  {
    id: 27,
    name: 'Minyak Kelapa VCO',
    price: '40.000',
    unit: '250ml',
    description:
      'Virgin Coconut Oil (VCO) murni yang dibuat tanpa pemanasan, kaya akan manfaat untuk kesehatan dan kecantikan.',
    category: 'Produk Olahan',
    images: [
      'https://images.unsplash.com/photo-1590486849887-24d14878a0a7?q=80&w=400',
      'https://images.unsplash.com/photo-1625243169032-131f45759b48?q=80&w=400',
    ],
    seller: {
      name: 'Nyiur Melambai',
      location: 'Kulon Progo',
      image: 'https://randomuser.me/api/portraits/women/17.jpg',
    },
  },
  {
    id: 28,
    name: 'Ikan Gurame Hidup',
    price: '45.000',
    unit: 'kg',
    description:
      'Ikan gurame hidup ukuran konsumsi (isi 2-3 ekor per kg). Cocok untuk dibakar atau dimasak kuah.',
    category: 'Perikanan',
    images: [
      'https://images.unsplash.com/photo-1591854228333-9386e889a429?q=80&w=400',
      'https://images.unsplash.com/photo-1631580242553-c64a5c3761a2?q=80&w=400',
    ],
    seller: {
      name: 'Tambak Pak Roni',
      location: 'Indramayu',
      image: 'https://randomuser.me/api/portraits/men/78.jpg',
    },
  },
  {
    id: 29,
    name: 'Stroberi Ciwidey',
    price: '25.000',
    unit: 'pack',
    description:
      'Stroberi segar dipetik langsung dari perkebunan di Ciwidey. Rasa manis sedikit asam, cocok untuk jus dan dessert.',
    category: 'Buah-buahan',
    images: [
      'https://images.unsplash.com/photo-1587324209994-53907a977c03?q=80&w=400',
      'https://images.unsplash.com/photo-1588164317779-6a3f0d4b9f5f?q=80&w=400',
    ],
    seller: {
      name: 'Petik Stroberi Ciwidey',
      location: 'Ciwidey',
      image: 'https://randomuser.me/api/portraits/men/91.jpg',
    },
  },
  {
    id: 30,
    name: 'Tahu Susu Lembang',
    price: '15.000',
    unit: 'bungkus',
    description:
      'Tahu susu khas Lembang yang lembut di dalam dan renyah di luar. Gurih dan nikmat disajikan hangat.',
    category: 'Produk Olahan',
    images: [
      'https://images.unsplash.com/photo-1579293484435-f7b5346067b5?q=80&w=400',
      'https://images.unsplash.com/photo-1562859546-538466e08f25?q=80&w=400',
    ],
    seller: {
      name: 'Pabrik Tahu 123',
      location: 'Lembang',
      image: null,
    },
  },
  {
    id: 31,
    name: 'Kacang Hijau',
    price: '24.000',
    unit: 'kg',
    description:
      'Kacang hijau kupas berkualitas, pilihan terbaik untuk bubur kacang hijau atau isian kue.',
    category: 'Biji-bijian',
    images: [
      'https://images.unsplash.com/photo-1632773950669-3a31c19b2a60?q=80&w=400',
      'https://images.unsplash.com/photo-1599599810759-383796dc6a42?q=80&w=400',
    ],
    seller: {
      name: 'Sumber Pangan',
      location: 'Grobogan',
      image: 'https://randomuser.me/api/portraits/men/4.jpg',
    },
  },
  {
    id: 32,
    name: 'Kunyit Bubuk',
    price: '10.000',
    unit: 'sachet',
    description:
      'Kunyit bubuk murni yang diolah secara higienis, praktis untuk bumbu masak dan jamu tradisional.',
    category: 'Rempah-rempah',
    images: [
      'https://images.unsplash.com/photo-1596039148753-e5705b186a24?q=80&w=400',
      'https://images.unsplash.com/photo-1607569707579-a1b1c31f13a7?q=80&w=400',
    ],
    seller: {
      name: 'Rempah Nusantara',
      location: 'Solo',
      image: null,
    },
  },
  {
    id: 33,
    name: 'Brokoli Organik',
    price: '15.000',
    unit: 'pcs',
    description:
      'Brokoli segar dari pertanian organik, bebas pestisida, dan kaya akan vitamin serta antioksidan.',
    category: 'Sayuran',
    images: [
      'https://images.unsplash.com/photo-1587351173816-53d711f7a048?q=80&w=400',
      'https://images.unsplash.com/photo-1628779234051-4d07064323e2?q=80&w=400',
    ],
    seller: {
      name: 'Green Farm',
      location: 'Puncak',
      image: 'https://randomuser.me/api/portraits/women/51.jpg',
    },
  },
  {
    id: 34,
    name: 'Nanas Madu Pemalang',
    price: '10.000',
    unit: 'buah',
    description:
      'Nanas madu asli dari Pemalang dengan rasa yang sangat manis dan daging buah yang renyah.',
    category: 'Buah-buahan',
    images: [
      'https://images.unsplash.com/photo-1550258987-190a2d41a8ba?q=80&w=400',
      'https://images.unsplash.com/photo-1601135759397-a6d1fac96515?q=80&w=400',
    ],
    seller: {
      name: 'Petani Nanas Pemalang',
      location: 'Pemalang',
      image: 'https://randomuser.me/api/portraits/men/66.jpg',
    },
  },
  {
    id: 35,
    name: 'Daging Kambing Muda',
    price: '95.000',
    unit: 'kg',
    description:
      'Daging kambing muda segar, empuk dan tidak prengus. Cocok untuk sate, gulai, atau tongseng.',
    category: 'Hewani',
    images: [
      'https://images.unsplash.com/photo-1599110397551-03e9a7e1f404?q=80&w=400',
      'https://images.unsplash.com/photo-1628030997325-1a3b84a9235e?q=80&w=400',
    ],
    seller: {
      name: 'Ternak Barokah',
      location: 'Bandung',
      image: 'https://randomuser.me/api/portraits/women/62.jpg',
    },
  },
  {
    id: 36,
    name: 'Ikan Kembung Segar',
    price: '30.000',
    unit: 'kg',
    description:
      'Ikan kembung segar hasil tangkapan harian nelayan, kaya akan omega 3. Cocok untuk digoreng atau dibakar.',
    category: 'Perikanan',
    images: [
      'https://images.unsplash.com/photo-1580913217983-509f6a6c471c?q=80&w=400',
      'https://images.unsplash.com/photo-1615950858784-3c9914486b77?q=80&w=400',
    ],
    seller: {
      name: 'Nelayan Makmur',
      location: 'Bali',
      image: 'https://randomuser.me/api/portraits/men/88.jpg',
    },
  },
  {
    id: 37,
    name: 'Beras Pandan Wangi',
    price: '70.000',
    unit: '5kg',
    description:
      'Beras Pandan Wangi asli Cianjur, pulen dan memiliki aroma wangi pandan alami saat dimasak.',
    category: 'Biji-bijian',
    images: [
      'https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?q=80&w=400',
      'https://images.unsplash.com/photo-1588613974447-b2a67e0e7a5e?q=80&w=400',
    ],
    seller: {
      name: 'Petani Sejahtera',
      location: 'Cianjur',
      image: null,
    },
  },
  {
    id: 38,
    name: 'Tomat Ceri',
    price: '8.000',
    unit: 'pack',
    description:
      'Tomat ceri hidroponik dengan rasa manis dan segar, cocok untuk salad atau camilan sehat.',
    category: 'Sayuran',
    images: [
      'https://images.unsplash.com/photo-1591991484744-12e2c5f1c2a0?q=80&w=400',
      'https://images.unsplash.com/photo-1561136594-7f6841389913?q=80&w=400',
    ],
    seller: {
      name: 'Green Farm',
      location: 'Puncak',
      image: 'https://randomuser.me/api/portraits/women/51.jpg',
    },
  },
  {
    id: 39,
    name: 'Kerupuk Kulit Sapi',
    price: '20.000',
    unit: 'bungkus',
    description:
      'Kerupuk kulit sapi asli, diolah dengan bumbu rempah tradisional. Renyah, gurih, dan nikmat.',
    category: 'Produk Olahan',
    images: [
      'https://images.unsplash.com/photo-1580822369405-77f620869a83?q=80&w=400',
      'https://images.unsplash.com/photo-1627888636881-9a79a3a129d2?q=80&w=400',
    ],
    seller: {
      name: 'Rumah Daging',
      location: 'Jakarta',
      image: null,
    },
  },
  {
    id: 40,
    name: 'Durian Montong',
    price: '80.000',
    unit: 'kg',
    description:
      'Durian montong Palu dengan daging tebal, biji kempes, dan rasa manis legit yang khas.',
    category: 'Buah-buahan',
    images: [
      'https://images.unsplash.com/photo-1627889182241-14c15370d588?q=80&w=400',
      'https://images.unsplash.com/photo-1626088210433-5e36d4128f32?q=80&w=400',
    ],
    seller: {
      name: 'Raja Durian',
      location: 'Palu',
      image: 'https://randomuser.me/api/portraits/men/1.jpg',
    },
  },
];
