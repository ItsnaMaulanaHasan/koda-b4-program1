import { formatHarga } from "./kendaraan.js";
import { input } from "./interfaceInput.js";

export let keranjang = [];

const daftarSewa = () => {
  process.stdout.write("\x1Bc");
  console.log(" --- List Sewa --- \n");
  if (keranjang.length === 0) {
    console.log("\n ☹️ List sewa masih kosong\n");
  } else {
    let totalAll = 0;
    keranjang.forEach((item, index) => {
      console.log(` ${index + 1}. ${item.nama}`);
      console.log(`    Harga sewa per hari: ${formatHarga(item.harga)}`);
      console.log(`    Waktu sewa: ${item.days} hari`);
      console.log(`    Subtotal: ${formatHarga(item.subTotal)}`);
      totalAll += item.subTotal;
    });
    console.log(` \n\n Total sewa: ${formatHarga(totalAll)}`);
  }
};

const hapusPesanan = async (index) => {
  let loop = true;
  while (loop) {
    process.stdout.write("\x1Bc");
    const item = keranjang[index];
    const confirm = await input(` Yakin ingin menghapus ${item.nama} dari list sewa (y/n)? `);
    if (confirm === "y") {
      keranjang.splice(index, 1);
      await input(` ✅ ${item.nama} berhasil dihapus! `);
      loop = false;
      continue;
    } else if (confirm === "n") {
      loop = false;
      continue;
    } else {
      await input("\n ⚠️ Input tidak sesuai yang diharapkan, silahkan ulangi lagi ");
      continue;
    }
  }
};

const editPesanan = async (index) => {
  let loop = true;
  while (loop) {
    let inputDays = await input(" Masukkan durasi sewa yang baru: ");
    inputDays = parseInt(inputDays);
    if (inputDays === 0) {
      await input(" ⚠️ Input tidak boleh 0, harap ulangi lagi ");
      continue;
    } else {
      keranjang[index].days = inputDays;
      keranjang[index].subTotal = keranjang[index].harga * inputDays;
      loop = false;
      continue;
    }
  }
};

export const listSewa = async () => {
  let loop = true;
  while (loop) {
    daftarSewa();
    console.log("\n -------------------------\n\n");
    if (keranjang.length === 0) {
      await input(" Kembali ");
      loop = false;
      continue;
    } else {
      console.log(" Note: Masukkan 'nomor-del' (2-del) untuk hapus");
      console.log("       Masukkan 'nomor-edit' (2-edit) untuk edit\n");
      console.log(" 0. Sewa");
      console.log(" 00. Kembali");
      const inputMenu = await input(" Input : ");
      if (inputMenu === "00") {
        loop = false;
        continue;
      } else if (inputMenu === "0") {
        console.log("checkout");
      } else if (!inputMenu.includes("-") || (!inputMenu.includes("del") && !inputMenu.includes("edit"))) {
        await input("\n ⚠️ Input tidak sesuai yang diharapkan, silahkan ulangi lagi ");
        continue;
      }
      let [noInput, act] = inputMenu.split("-");
      act = act.trim();
      noInput = parseInt(noInput);
      noInput -= 1;
      if (noInput >= 0 && noInput < keranjang.length) {
        if (act === "del") {
          await hapusPesanan(noInput);
          continue;
        } else if (act === "edit") {
          await editPesanan(noInput);
          continue;
        }
      } else if (noInput > keranjang.length - 1) {
        await input("\n ⚠️ Input melebihi dari batas list dewa, silahkan ulangi lagi ");
        continue;
      } else {
        await input("\n ⚠️ Input tidak sesuai yang diharapkan, silahkan ulangi lagi ");
        continue;
      }
    }
  }
};
