# Aplikasi Pemesanan Makanan Mixue (CLI)

Ini adalah aplikasi Penyewaan Kendaraan berbasis CLI (Command-Line Interface) sederhana untuk mensimulasikan proses rental kendaraan di Hasan Sport Rental.

Aplikasi ini dibangun menggunakan Node.js dan memungkinkan pengguna untuk melihat daftar kendaraan, memilih kendaraan yang ingin disewa, menambahkannya ke list sewa, melakukan sewa kendaraan, dan melihat riwayat penyewaan.

## Fitur Utama

Aplikasi ini memiliki beberapa fitur inti:

1. Cari Kendaraan
   - Menampilkan semua kendaraan yang tersedia beserta harga sewanya (per hari).
   - Pengguna dapat memilih kendaraan berdasarkan nomor dan memasukkan jumlah hari sewa.
   - Jika kendaraan yang sama dipilih lagi, durasi sewanya akan diperbarui di keranjang.
   - Pengguna bisa melihat kendaraan yang sudah di booked
2. Lihat List Sewa
   - Menampilkan semua kendaraan yang telah dipilih untuk disewa.
   - Detail yang ditampilkan meliputi nama kendaraan, harga sewa per hari, lama sewa (hari), dan subtotal per kendaraan.
   - Menghitung dan menampilkan total keseluruhan harga dari semua kendaraan di list sewa.
   - Dapat menghapus kendaraan dari list sewa, mengedit durasi penyewaan dan konfirmasi penyewaan.
3. Lihat History
   - Menampilkan daftar penyewaan yang sudah berhasil dikonfirmasi.
   - Memberikan catatan kendaraan yang pernah disewa beserta detail transaksi.

## Cara Menjalanlan Aplikasi

1. Buka terminal atau command prompt Anda.
2. Pindah ke direktori tempat Anda menyimpan file program
3. Eksekusi file menggunakan Node.js dengan perintah "npm install" lalu "npm run dev"
4. Aplikasi akan berjalan di terminal, dan Anda bisa berinteraksi dengan memasukkan angka sesuai menu yang tersedia.
