# Simple Drawing Application with HTML and Javascript

## Tugas Akhir Grafika Komputer dan Multimedia

### Deskripsi Proyek

Aplikasi Drawing Tool ini dikembangkan sebagai bagian dari Tugas Akhir untuk mata kuliah Grafika Komputer dan Multimedia. Aplikasi ini memungkinkan pengguna untuk menggambar berbagai bentuk dasar seperti garis, lingkaran, dan elips dengan menggunakan algoritma grafis yang berbeda. Selain itu, aplikasi ini juga mendukung berbagai transformasi geometris seperti translasi, skala, rotasi, dan pencerminan.

### Fitur

- **Menggambar Garis:**
  - Algoritma DDA (Digital Differential Analyzer)
  - Algoritma Bresenham
- **Menggambar Lingkaran:**
  - Algoritma Midpoint
- **Menggambar Elips:**
  - Algoritma Midpoint
- **Transformasi Geometris:**
  - Translasi
  - Skala
  - Rotasi
  - Pencerminan (Mirror)
- **Pengaturan Warna:**
  - Warna Garis
  - Warna Isi
- **Pengaturan Ketebalan Garis**

### Cara Penggunaan

1. **Menggambar Bentuk:**
   - Pilih jenis bentuk yang ingin digambar (garis, lingkaran, atau elips) dari toolbar di sebelah kiri.
   - Klik dan seret di kanvas untuk menggambar bentuk tersebut.
   
2. **Mengubah Warna:**
   - Gunakan picker warna untuk mengatur warna garis dan isi bentuk.
   
3. **Mengatur Ketebalan Garis:**
   - Gunakan input untuk mengatur ketebalan garis sebelum menggambar.

4. **Transformasi Bentuk:**
   - Gunakan kontrol di toolbar sebelah kanan untuk melakukan transformasi seperti translasi, skala, rotasi, dan pencerminan.

5. **Menghapus Kanvas:**
   - Klik tombol "Clear" untuk menghapus semua gambar di kanvas.

### Struktur Proyek

- **index.html:** Struktur halaman utama aplikasi.
- **canvasSetup.js:** Inisialisasi kanvas dan pengaturan dasar aplikasi.
- **toolListeners.js:** Event listener untuk alat-alat menggambar dan transformasi.
- **drawingFunctions.js:** Fungsi untuk menggambar bentuk-bentuk dasar.
- **transformationFunctions.js:** Fungsi untuk melakukan transformasi geometris.
- **utilityFunctions.js:** Fungsi utilitas seperti pengisian warna (flood fill) dan konversi warna.

### Instalasi dan Penggunaan

1. Clone repository ini:
   ```sh
   git clone https://github.com/pesuts/simple-drawing-tool.git
   ```
2. Buka file `index.html` di browser untuk menjalankan aplikasi.

### Screenshots

![](screenshots/screenshots%20(1).png)
![](screenshots/screenshots%20(2).png)
![](screenshots/screenshots%20(3).png)
![](screenshots/screenshots%20(4).png)
![](screenshots/screenshots%20(5).png)
![](screenshots/screenshots%20(6).png)
![](screenshots/screenshots%20(7).png)
![](screenshots/screenshots%20(8).png)
![](screenshots/screenshots%20(9).png)
![](screenshots/screenshots%20(10).png)
![](screenshots/screenshots%20(11).png)