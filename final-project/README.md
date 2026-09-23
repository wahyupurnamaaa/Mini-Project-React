# Langkah — Final Project ReactJS

Website lowongan pekerjaan untuk Final Project Web Frontend ReactJS Level Menengah. Dibuat mengikuti dokumen `Final Project.docx`. Peserta: Wahyu Purnama Magribi (mengikuti README repository tugas harian).

## Menjalankan

Gunakan Node.js 22.12+ atau versi yang kompatibel dengan Vite.

```bash
cd final-project
npm ci
npm run dev
```

Buka alamat yang tercetak pada terminal. Koneksi internet diperlukan untuk mengambil data API.

```bash
npm test
npm run build
npm run preview
```

`dist/` adalah hasil build produksi; jangan membuka index.html melalui file://, gunakan server atau hosting.

## Pemetaan ketentuan

| Ketentuan dokumen | Implementasi |
| --- | --- |
| Folder final-project sejajar tugas sebelumnya | Folder ini berada di root repository tugas harian |
| React function components dan hooks | Seluruh komponen di src/main.jsx; useState, useEffect, useMemo; fetch dengan cleanup AbortController |
| UI library | Tailwind CSS + DaisyUI untuk button, input, select, badge, card, dan loading |
| Navbar, hero, footer | Halaman beranda `/` |
| Data lowongan bukan tabel | Kartu lowongan di beranda dan `/job-vacancy` |
| Halaman about | `/about` |
| Responsif PC, tablet, mobile | Grid adaptif, menu mobile, breakpoint 640px dan 1023px |
| API daftar dan detail | GET /api/jobs dan GET /api/jobs/{jobId} |
| Deployment tanpa not found pada rute | Konfigurasi Vercel dan Netlify tersedia; publikasi membutuhkan akun hosting |

## Fitur

- Beranda dengan hero, pencarian, lowongan terbuka, dan ajakan menjelajahi lowongan.
- Pencarian posisi/perusahaan/lokasi; filter kota, cara kerja, dan status; pagination 9 kartu per halaman.
- Filter tersimpan di query URL dan dapat dibagikan.
- Detail: deskripsi, kualifikasi, perusahaan, lokasi, cara kerja, jenis pekerjaan, status, dan rentang gaji.
- Loading, error + coba lagi, hasil kosong, fallback logo, halaman 404, dan navigasi keyboard.
- Tidak ada data lowongan fiktif yang menggantikan kegagalan API.
- API tidak menyediakan tautan melamar, sehingga halaman detail mengarahkan pengguna mencari kanal karier resmi perusahaan tanpa tombol lamaran palsu.

## Sumber API

https://final-project-api-alpha.vercel.app/api/jobs

Respons daftar berupa array; identitas data memakai `_id`. Aplikasi juga menerima respons berbungkus `data`. String dari API dirender sebagai teks biasa, bukan HTML mentah.

## Deployment — pilih salah satu

### Vercel

1. Masukkan folder ini ke repository tugas harian dan push dengan akun Anda.
2. Di Vercel pilih Add New Project, import repository tersebut.
3. Pilih Root Directory `final-project`, Framework Preset `Vite`.
4. Build command `npm run build`, Output Directory `dist`, lalu Deploy.
5. `vercel.json` mengatur fallback rute React ke index.html.
6. Uji URL publik `/`, `/about`, `/job-vacancy`, dan `/job-vacancy/ID_VALID`. Buka masing-masing langsung dan refresh; ID valid diambil dari kartu lowongan.

### Netlify

1. Jalankan `npm ci` dan `npm run build`.
2. Login ke Netlify, gunakan deploy manual, unggah folder `dist` (atau ekstrak `langkah-deploy.zip` dan unggah isinya).
3. File `_redirects` di dalam dist mengatur fallback rute React.
4. Jika import repository: Base directory `final-project`, Build `npm run build`, Publish `dist`.
5. Uji rute publik dan refresh seperti langkah Vercel.

**Status:** file siap deploy; belum ada URL publik yang dibuat atau diverifikasi. Konfigurasi hosting bukan bukti deployment selesai. Ketentuan deployment baru terpenuhi sesudah langkah di atas dilakukan.

## Pengumpulan

- Isi tab tugas dan quiz dengan URL aplikasi yang sudah di-deploy dan URL repository sesuai kolom yang disediakan.
- Lampirkan ZIP source apabila diminta; ZIP tidak berisi node_modules.
- Deadline pada dokumen: **Sabtu, 26 September 2026, pukul 23:59 WIB**.
- Pastikan halaman about, navigasi, dan detail bekerja di URL publik sebelum mengumpulkan.

## Struktur

- `src/main.jsx`: komponen, halaman, routing, dan hook pengambilan data.
- `src/jobs.js`: normalisasi respons, pencarian/filter, format gaji.
- `src/style.css`: Tailwind/DaisyUI dan desain responsif.
- `tests/jobs.test.js`: tes normalisasi, filter gabungan, dan gaji invalid.
- `vercel.json`, `netlify.toml`, `public/_redirects`: pengaturan hosting SPA.

Referensi teknis: https://vite.dev/guide/ dan https://tailwindcss.com/docs/installation/using-vite .
