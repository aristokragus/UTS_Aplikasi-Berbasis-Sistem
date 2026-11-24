# Baku Hisap Collective

Aplikasi katalog event berbasis React Native (Expo) yang dibuat untuk Ujian Tengah Semester mata kuliah Aplikasi Berbasis Platform. Aplikasi ini menyajikan arsip dokumentasi event di Bali dari Baku Hisap Collective, kolektif dokumentasi event yang berbasis di Denpasar: mulai dari festival budaya, konser musik, hingga pertemuan korporat.

## Identitas

- Nama: I Gst.N.Pt. Diana Putra Pratama
- NIM: 240040118
- Mata Kuliah: Aplikasi Berbasis Platform

## Fitur

Aplikasi terdiri dari empat tab utama dan satu halaman detail.

**Home**

Halaman pembuka berisi header wordmark "Baku Hisap Collective", kartu besar untuk event unggulan (featured event), tagline kolektif, deretan event pilihan yang bisa digeser horizontal, dan kutipan penutup. Tombol "Lihat semua" mengarahkan pengguna ke tab Events.

**Events**

Daftar seluruh event arsip 2026. Di bagian atas terdapat chip filter kategori: Semua, Budaya, Musik, Festival, Corporate, dan Seremonial. Memilih chip akan menyaring daftar event secara langsung menggunakan state. Di bawah chip ditampilkan kartu event unggulan, lalu daftar event lainnya dalam bentuk kartu (nama, kategori, tanggal, dan lokasi singkat). Ketuk salah satu kartu untuk membuka halaman detail.

**Detail Event**

Halaman dinamis dengan rute `/event/[id]`. Menampilkan foto utama, tanggal dan lokasi, bagian "Tentang Event", daftar lineup (jika ada), dokumentasi foto, serta tombol Daftar di bagian bawah. Tombol ini memunculkan konfirmasi pendaftaran dalam bentuk dialog.

**Gallery**

Galeri foto dalam susunan dua kolom berisi momen-momen terpilih dari dokumentasi event, lengkap dengan keterangan foto dan nomor urut.

**About**

Profil singkat kolektif, visi, daftar tim, dan informasi kontak.

## Teknologi

- React Native dengan Expo, navigasi menggunakan Expo Router (berbasis file, termasuk rute dinamis untuk halaman detail)
- Google Fonts: Playfair Display (judul) dan Plus Jakarta Sans (teks), dimuat lewat expo-font
- Ikon: Lucide
- Data event disimpan terpisah di file konstanta, tidak ditulis langsung di dalam halaman

## Struktur Folder

```
src/
├── app/               # Halaman dan navigasi (Expo Router)
│   ├── (tabs)/        # Tab utama: home, events, gallery, about
│   └── event/         # Halaman detail event (rute dinamis [id])
├── components/        # Komponen UI yang dipakai ulang
│   ├── EventCard      # Kartu event pada daftar
│   ├── FeaturedCard   # Kartu besar event unggulan
│   ├── MiniEventCard  # Kartu kecil pada baris horizontal
│   ├── CategoryChip   # Chip filter kategori
│   ├── PageHeader     # Judul halaman dengan kicker
│   └── TabBarIcon     # Ikon pada tab bar
└── constants/
    ├── events.js      # Data event, kategori, event unggulan, dan galeri
    └── theme.js       # Palet warna dan jenis huruf
```

## Cara Menjalankan

Pastikan Node.js sudah terinstal, lalu jalankan:

```
npm install
npx expo start
```

Scan QR code yang muncul menggunakan aplikasi Expo Go di HP.
