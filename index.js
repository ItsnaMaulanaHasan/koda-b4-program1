import { showHistory, history } from "./lib/history.js";
import { input } from "./lib/interfaceInput.js";
import { pilihKendaraan, daftarKendaraan } from "./lib/kendaraan.js";
import { listSewa, keranjang } from "./lib/keranjang.js";
import { keluar } from "./lib/keluar.js";

const main = async () => {
  let loop = true;
  while (loop) {
    process.stdout.write("\x1Bc");
    console.log("\nSelamat datang di Hasan Sport Rental, silahkan pilih menu\n");
    console.log("1. Lihat Kendaraan");
    console.log("2. List Sewa");
    console.log("3. History Sewa");
    console.log("4. Keluar\n");

    const inputMenu = await input("Masukkan nomor menu: ");

    switch (inputMenu) {
      case "1":
        await pilihKendaraan(daftarKendaraan);
        break;
      case "2":
        await listSewa(keranjang);
        break;
      case "3":
        await showHistory(history);
        break;
      case "4":
        loop = await keluar(loop, keranjang, history);
        break;
      default:
        await input("\n ⚠️ Input tidak sesuai yang diharapkan");
        break;
    }
  }
};

main();
