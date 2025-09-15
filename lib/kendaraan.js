import { input } from "./interfaceInput.js";
import { keranjang } from "./keranjang.js";

const daftarKendaraan = [
  {
    nama: "Ford Mustang",
    harga: 8500000,
  },
  {
    nama: "Mazda MX-5 Miata",
    harga: 4000000,
  },
  {
    nama: "Porsche 718 Cayman",
    harga: 8000000,
  },
  {
    nama: "McLaren 720S",
    harga: 100000000,
  },
  {
    nama: "Lamborghini Huracan",
    harga: 95000000,
  },
];

export const formatHarga = (harga) => {
  return `Rp${Number(harga).toLocaleString("id")},-`;
};

export const pilihKendaraan = async () => {
  let loop = true;
  while (loop) {
    process.stdout.write("\x1Bc");
    console.log(" --- Daftar Kendaraan --- \n");
    daftarKendaraan.forEach((item, index) => {
      console.log(` ${index + 1}. ${item.nama}, Harga sewa per hari: ${formatHarga(item.harga)}`);
    });
    console.log(" \n\n\n 99. Kembali ke menu utama");
    console.log(" -------------------------\n");

    const inputMenu = await input(" Pilih nomor kendaraan dan berapa hari sewa (cth: 1-2): ");
    let [noInput, day] = inputMenu.split("-");
    noInput = parseInt(noInput);
    day = parseInt(day);
    noInput -= 1;
    if (inputMenu === "99") {
      loop = false;
      continue;
    } else if (noInput >= 0 && noInput <= daftarKendaraan.length - 1 && day > 0) {
      let dataKendaraanDipilih = {
        ...daftarKendaraan[noInput],
        ...{
          days: day,
        },
        ...{
          subTotal: daftarKendaraan[noInput].harga * day,
        },
      };
      let sameItem = keranjang.findIndex((item) => item.nama === dataKendaraanDipilih.nama);
      if (sameItem >= 0) {
        await input(`\n ✅ Pesanan ${dataKendaraanDipilih.nama} berhasil diperbarui dengan lama sewa ${dataKendaraanDipilih.days} `);
        keranjang[sameItem] = dataKendaraanDipilih;
      } else {
        keranjang.push(dataKendaraanDipilih);
        await input(`\n ✅ ${dataKendaraanDipilih.nama} sejumlah ${dataKendaraanDipilih.qty} berhasil ditambahkan ke list sewa🛒 `);
      }
    } else if (noInput > daftarKendaraan.length - 1) {
      await input("\n ⚠️ Input melebihi dari batas no kendaraan, silahkan ulangi lagi ");
    } else if (day === 0 || day < 0) {
      await input("\n ⚠️ Input hari tidak boleh 0 atau kurang dari 0, silahkan ulangi lagi ");
    } else {
      await input("\n ⚠️ Input tidak sesuai yang diharapkan, silahkan ulangi lagi ");
    }
  }
};
