# Hasil pengujian — 23 September 2026

- Build produksi: berhasil (Vite 8.3.0).
- Unit test: 3 lulus; normalisasi respons, pencarian/filter gabungan, rentang gaji invalid.
- Browser Chrome: desktop 1440px, tablet 768px, mobile 390px; tidak ada overflow horizontal.
- Navigasi mobile, pencarian kosong, reset filter, status ditutup, detail + refresh, halaman 404, error + retry: lulus.
- Tidak ada exception JavaScript pada alur uji.
- API daftar dan detail: HTTP 200 saat diperiksa langsung.
- Browser memakai snapshot respons API aktual untuk hasil uji konsisten. Gambar eksternal diblokir saat pengujian untuk memeriksa fallback logo.
- npm audit setelah pembaruan dependensi: 0 vulnerabilities saat instalasi.
- Deployment publik belum dilakukan; URL hosting belum diuji.
