import { input } from "./lib/interfaceInput.js";
import { pilihKendaraan } from "./lib/kendaraan.js";

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
        await pilihKendaraan();
        break;
      case "2":
        console.log("List Sewa");
        break;
      case "3":
        console.log("History Sewa");
        break;
      case "4":
        console.log("Keluar");
        break;
      default:
        await input("\n ⚠️ Input tidak sesuai yang diharapkan");
        break;
    }
  }
};

main();
