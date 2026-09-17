# Tugas 8 — React CRUD

Implementasi sudah ditambahkan ke proyek tugas-reactjs yang digunakan untuk Tugas 7.

## Menjalankan proyek

Dari folder tugas-reactjs, jalankan:

```sh
npm install
npm run dev
```

Buka alamat yang ditampilkan Vite, lalu akses /student atau klik menu Student.

## File implementasi

App.jsx dan Navbar.jsx menyertakan route serta menu Student dalam proyek tugas-reactjs yang sudah ada.

- src/views/StudentView.jsx: tabel, fetching, form tambah/edit, hapus dengan konfirmasi, validasi, status loading dan pesan kesalahan.
- src/utils/studentGrade.js: konversi nilai menjadi A/B/C/D/E.
- src/App.jsx: menambahkan route /student di dalam MainLayout.
- src/components/Navbar.jsx: menu Student pada desktop dan seluler.

## API

GET dan POST: https://backend.reactjssanbercode.my.id/api/student-scores
PUT dan DELETE: endpoint yang sama ditambah /{studentId}.
Body POST/PUT: name, course, score (angka).
Index nilai: >=80 A, >=70 B, >=60 C, >=50 D, <50 E.

## Pemeriksaan

- npm run build: berhasil.
- Sepuluh pemeriksaan batas index nilai: berhasil.
- GET API: HTTP 200, respons berupa array mahasiswa.
- POST/PUT/DELETE belum diuji langsung ke server. Pengujian antarmuka browser belum dilakukan.

## Pengumpulan

Tugas 8 menggunakan repository Sanbercode-Reactjs-Batch-80 dan melanjutkan proyek tugas-reactjs dari Tugas 7, sesuai instruksi agar tidak membuat repository atau proyek React baru.
