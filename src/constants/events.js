export const CATEGORIES = ['Semua', 'Budaya', 'Musik', 'Festival', 'Corporate', 'Seremonial'];

const img = () => ({ uri: 'https://placehold.co/600x400/png' });

export const EVENTS = [
  {
    id: '1',
    nama: 'Teruna Teruni Denpasar 2026',
    venue: 'Ruang Taksu, Gedung Dharma Negara Alaya',
    venueShort: 'Gedung Dharma Negara Alaya',
    tanggal: '21 Februari 2026',
    tanggalShort: '21 Feb',
    kategori: 'Budaya',
    kategoriLengkap: 'Pemilihan / Budaya',
    tema: 'Grand Final pemilihan Teruna Teruni Kota Denpasar',
    deskripsi:
      'Malam puncak pemilihan Teruna Teruni Kota Denpasar di Ruang Taksu. Dokumentasi kami fokus pada prosesi adat, penampilan para finalis, dan momen pengumuman pemenang yang hangat.',
    foto: img(),
    privat: false,
    lineup: [],
  },
  {
    id: '2',
    nama: 'Kesanga Festival 2026',
    venue: 'Lapangan Puputan Badung, Denpasar',
    venueShort: 'Lapangan Puputan Badung',
    tanggal: '6 Maret 2026',
    tanggalShort: '6 Mar',
    kategori: 'Budaya',
    kategoriLengkap: 'Budaya / Festival',
    tema: 'Festival ogoh-ogoh menjelang Nyepi',
    deskripsi:
      'Lebih dari 230 sekaa taruna berlomba mempertunjukkan ogoh-ogoh menjelang Nyepi. Kami merekam dari pelarungan hingga pengumuman pemenang di Lapangan Puputan Badung.',
    foto: img(),
    privat: false,
    lineup: [],
  },
  {
    id: '3',
    nama: 'Dies Natalis Poltekpar Bali ke-48',
    venue: 'Aula Joop Ave, Kampus Poltekpar Bali, Nusa Dua',
    venueShort: 'Aula Joop Ave, Nusa Dua',
    tanggal: '27 Maret 2026',
    tanggalShort: '27 Mar',
    kategori: 'Seremonial',
    kategoriLengkap: 'Seremonial / Kampus',
    tema: '"Taru Sekala: Mengakar Warisan Semasta"',
    deskripsi:
      'Rangkaian Dies Natalis ke-48 Poltekpar Bali dengan pembukaan bertema "Nawa Rasa" dan pengukuhan Guru Besar. Dokumentasi seremonial dengan pendekatan editorial yang tenang.',
    foto: img(),
    privat: false,
    lineup: [],
  },
  {
    id: '4',
    nama: 'Unilever Finance 2026',
    venue: 'Grand Mercure Seminyak',
    venueShort: 'Grand Mercure Seminyak',
    tanggal: '23 April 2026',
    tanggalShort: '23 Apr',
    kategori: 'Corporate',
    kategoriLengkap: 'Corporate / Internal',
    tema: 'Gathering internal keuangan',
    deskripsi:
      'Dokumentasi acara internal korporat di Grand Mercure Seminyak. Sebagian materi bersifat privat dan tidak dipublikasikan; tersedia cuplikan suasana untuk arsip klien.',
    foto: img(),
    privat: true,
    lineup: [],
  },
  {
    id: '5',
    nama: 'Beachwalk Kuta Fest 2026',
    venue: 'Beachwalk Shopping Center & Kuta Beach',
    venueShort: 'Beachwalk, Kuta',
    tanggal: '6 Juni 2026',
    tanggalShort: '6 Jun',
    kategori: 'Festival',
    kategoriLengkap: 'Festival / Lifestyle',
    tema: '"Waves of Harmony"',
    deskripsi:
      'Festival tepi laut yang memadukan surfing, musik, budaya, wellness, fashion, dan coffee culture di Beachwalk Kuta. Dokumentasi mengikuti ritme festival dari pagi hingga malam.',
    foto: img(),
    privat: false,
    lineup: [],
  },
  {
    id: '6',
    nama: 'Stakeholders Meeting TNI 2026',
    venue: 'Hotel Inn Express Kuta',
    venueShort: 'Hotel Inn Express Kuta',
    tanggal: '8 Juli 2026',
    tanggalShort: '8 Jul',
    kategori: 'Corporate',
    kategoriLengkap: 'Corporate / Pemerintahan',
    tema: 'Pertemuan pemangku kepentingan internal',
    deskripsi:
      'Pertemuan pemangku kepentingan di Kuta. Materi bersifat privat; arsip yang tersedia terbatas pada suasana ruangan dan moment protokoler.',
    foto: img(),
    privat: true,
    lineup: [],
  },
  {
    id: '7',
    nama: 'Konser Diesteria INSTIKI 2026',
    venue: 'Lapangan Niti Mandala, Denpasar',
    venueShort: 'Lapangan Niti Mandala',
    tanggal: '11 Juli 2026',
    tanggalShort: '11 Jul',
    kategori: 'Musik',
    kategoriLengkap: 'Musik / Konser',
    tema: '"Sonic Waves" · Loud, Free, Alive',
    deskripsi:
      'Konser tahunan INSTIKI yang menggemparkan Lapangan Niti Mandala dengan konsep "Sonic Waves". Ribuan penonton menari sepanjang malam dibawakan lineup papan atas musik Indonesia, dari pop-punk legendaris hingga indie yang intim.',
    foto: img(),
    fotoHero: img(),
    privat: false,
    lineup: [
      { nama: 'Tipe-X', avatar: img() },
      { nama: 'Hindia', avatar: img() },
      { nama: '.Feast', avatar: img() },
      { nama: 'Anggis Devaki', avatar: img() },
      { nama: 'Ary Kencana', avatar: img() },
    ],
    dokumentasi: [
      img(),
      img(),
      img(),
      img(),
    ],
  },
  {
    id: '8',
    nama: 'Prima Executive Gathering 2026',
    venue: 'The Mulia, Nusa Dua',
    venueShort: 'The Mulia, Nusa Dua',
    tanggal: '6 Agustus 2026',
    tanggalShort: '6 Agu',
    kategori: 'Corporate',
    kategoriLengkap: 'Corporate / Conference',
    tema: '"Beyond Tomorrow: Securing Progress - Accelerating in Unity"',
    deskripsi:
      'Executive Gathering jaringan PRIMA di The Mulia Nusa Dua dengan sekitar 250 peserta. Dokumentasi mencakup sesi pleno, Prima Awards, dan gala dinner.',
    foto: img(),
    privat: false,
    lineup: [],
  },
  {
    id: '9',
    nama: 'Bank Indonesia Meeting',
    venue: 'Padma Resort Legian',
    venueShort: 'Padma Resort Legian',
    tanggal: '24 Oktober 2026',
    tanggalShort: '24 Okt',
    kategori: 'Corporate',
    kategoriLengkap: 'Corporate / Keuangan',
    tema: 'Forum dialog strategis perbankan',
    deskripsi:
      'Pertemuan internal Bank Indonesia di Padma Resort Legian. Arsip publik terbatas; dokumentasi lengkap tersimpan untuk kebutuhan internal klien.',
    foto: img(),
    privat: true,
    lineup: [],
  },
  {
    id: '10',
    nama: 'Festival Karmany Smansa XVII',
    venue: 'Lapangan Timur Niti Mandala, Denpasar',
    venueShort: 'Lapangan Timur Niti Mandala',
    tanggal: '15 November 2026',
    tanggalShort: '15 Nov',
    kategori: 'Musik',
    kategoriLengkap: 'Musik / Festival',
    tema: 'FKS XVII "Luminoria" · In Cinema',
    deskripsi:
      'FKS XVII "Luminoria" memadukan weekend market, konser, kuliner, dan layar tancap bertema "In Cinema" di Lapangan Timur Niti Mandala. Dokumentasi fokus pada energi penonton dan karnaval kreator muda.',
    foto: img(),
    privat: false,
    lineup: [],
  },
];

export const FEATURED_EVENT = EVENTS.find((e) => e.id === '7');

export const GALLERY_ITEMS = [
  { id: 1, foto: img(), caption: 'Diesteria 2026', tinggi: 180 },
  { id: 2, foto: img(), caption: 'Beachwalk Kuta Fest', tinggi: 150 },
  { id: 3, foto: img(), caption: 'Stakeholders TNI', tinggi: 168 },
  { id: 4, foto: img(), caption: 'Dies Natalis Poltekpar', tinggi: 158 },
  { id: 5, foto: img(), caption: 'Kuta Beach', tinggi: 200 },
  { id: 6, foto: img(), caption: 'FKS XVII · Luminoria', tinggi: 148 },
  { id: 7, foto: img(), caption: 'Diesteria 2026', tinggi: 190 },
  { id: 8, foto: img(), caption: 'Sekala · Bali', tinggi: 150 },
];

EVENTS.forEach((e) => {
  if (!e.dokumentasi) {
    e.dokumentasi = [e.foto, GALLERY_ITEMS[0].foto, GALLERY_ITEMS[6].foto];
  }
});

export const getEventById = (id) => EVENTS.find((e) => e.id === String(id));