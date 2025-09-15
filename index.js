import { input } from "./interfaceInput.js";

const main = async () => {
  let loop = true;
  while (loop) {
    process.stdout.write("\x1Bc");
    console.log("\nSilahkan pilih menu\n");
    console.log("1. Lihat Kendaraan Sewa");
    console.log("2. Lihat Keranjang");
    console.log("3. Lihat History");
    console.log("4. Keluar\n");

    const inputMenu = await input("Masukkan nomor menu: ");

    switch (inputMenu) {
      case 1:
        console.log("Lihat Kendaraan Sewa");
        break;
      case 2:
        console.log("Lihat Keranjang");
        break;
      case 3:
        console.log("Lihat History Pemesanan");
        break;
      case 4:
        console.log("Keluar");
        break;
      default:
        await input("\n ⚠️ Input tidak sesuai yang diharapkan");
        break;
    }
  }
};

main();
