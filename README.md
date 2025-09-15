# 🚗 Aplikasi Penyewaan Kendaraan Hasan Sport Rental (CLI)

Ini adalah aplikasi Penyewaan Kendaraan berbasis CLI (Command-Line Interface) sederhana untuk mensimulasikan proses rental kendaraan di Hasan Sport Rental.

Aplikasi ini dibangun menggunakan Node.js dan memungkinkan pengguna untuk melihat daftar kendaraan, memilih kendaraan yang ingin disewa, menambahkannya ke list sewa, melakukan sewa kendaraan, dan melihat riwayat penyewaan.

## ✨ Fitur Utama

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

## Flowchart Aplikasi Penyewaan Kendaraan Hasan Sport Rental

```mermaid
---
    title: Aplikasi Penyewaan Kendaraan Hasan Sport Rental
---
flowchart TD
    start@{shape: circle, label: "Start"}
    stop@{shape: dbl-circ, label: "Stop"}

    loop@{shape: rect, label: "loop = true"}
    while@{shape: diamond, label: "loop = true"}
    clear@{shape: rect, label: process.stdout.write("\x1Bc")}
    menu@{shape: lean-r, label: '"\nSelamat datang di Hasan Sport Rental, silahkan pilih menu\n
    1. Lihat Keranjang
    2. List Sewa
    3. History Sewa
    4. Keluar"' }
    inputMenu@{shape: lean-r, label: inputMenu}
    case1@{shape: diamond, label: inputMenu = "1"}
    case2@{shape: diamond, label: inputMenu = "2"}
    case3@{shape: diamond, label: inputMenu = "3"}
    case4@{shape: diamond, label: inputMenu = "4"}

    pilihKendaraan@{shape: rect, label: await pilihKendaraan()}
    listSewa@{shape: rect, label: await listSewa()}
    showHistory@{shape: rect, label: await showHistory()}
    false@{shape: rect, label: loop = false}

    break1@{shape: rect, label: break}
    break2@{shape: rect, label: break}
    break3@{shape: rect, label: break}
    break4@{shape: rect, label: break}
    break5@{shape: rect, label: break}

    outputWarning@{shape: lean-r, label: '"\n ⚠️ Input tidak sesuai yang diharapkan"'}
    inputWarning@{shape: lean-r, label: Click Enter}

    start --> loop --> while -- true --> clear --> menu --> inputMenu --> case1
    case1 -- true --> pilihKendaraan --> break1 --> while
    case1  -- false --> case2 -- true --> listSewa --> break2 --> while
    case2 -- false --> case3 --> true --> showHistory --> break3 --> while
    case3 -- false --> case4 -- true --> false --> break4 --> while
    case4 -- false --> outputWarning --> inputWarning --> break5 -->  while

    while -- false --> stop


```
