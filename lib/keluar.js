import { input } from "./interfaceInput.js";

export const keluar = async (exit, keranjang = [], history = []) => {
  let loop = true;
  while (loop) {
    process.stdout.write("\x1Bc");
    if (keranjang.length !== 0) {
      const confirmExit = await input("\n Masih ada item di list sewa, apakah Anda ingin membatalkannya (y/n)? ", "text");
      if (confirmExit === "y") {
        exit = false;
        loop = false;
        process.stdout.write("\x1Bc");
        console.log("\n Terima Kasih ☺️\n");
        continue;
      } else if (confirmExit === "n") {
        loop = false;
        continue;
      } else {
        await input(" ⚠️ Input tidak sesuai yang diharapkan, harap ulangi lagi ");
        continue;
      }
    } else if (history.length !== 0) {
      const confirmInput = await input("\n Apakah anda yakin ingin keluar (y/n)? ", "text");
      if (confirmInput === "y") {
        exit = false;
        loop = false;
        process.stdout.write("\x1Bc");
        console.log("\n Selamat Berkendara, jangan lupa dibalikin ya ☺️\n");
        continue;
      } else if (confirmInput === "n") {
        loop = false;
        continue;
      } else {
        await input(" ⚠️ Input tidak sesuai yang diharapkan, harap ulangi lagi ");
        continue;
      }
    } else {
      const inputConfirm = await input("\n Yakin mau keluar, lamborghini menantimu lho (y/n)? ", "text");
      if (inputConfirm === "y") {
        exit = false;
        loop = false;
        process.stdout.write("\x1Bc");
        console.log("\n Terima Kasih ☺️\n");
        continue;
      } else if (inputConfirm === "n") {
        loop = false;
        continue;
      } else {
        await input(" ⚠️ Input tidak sesuai yang diharapkan, harap ulangi lagi ");
        continue;
      }
    }
  }
  return exit;
};
