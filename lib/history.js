import moment from "moment";
import { input } from "./interfaceInput.js";
import { formatHarga } from "./kendaraan.js";
import { keranjang } from "./keranjang.js";
import { daftarKendaraan } from "./kendaraan.js";

export const history = [];

export const createInvoice = async (itemKeranjang) => {
  const date = moment(new Date());
  const dateCheckout = date.format("DD-MM-YYYY");
  const noInv = `INV-${date.format("DDMMYYYY")}-${Math.random().toString().substring(2, 7)}`;
  const total = itemKeranjang.reduce((a, b) => a + b.subTotal, 0);

  daftarKendaraan.forEach((item) => {
    keranjang.forEach((itemKeranjang) => {
      if (item.nama === itemKeranjang.nama) {
        item.booked = true;
      }
    });
  });

  const itemsRental = itemKeranjang.map((item) => {
    const limit = date.add(item.days, "days").format("DD-MM-YYYY");
    return {
      ...item,
      limit: limit,
    };
  });

  const results = {
    noInv,
    dateCheckout,
    checkout: itemsRental,
    total,
  };
  return results;
};

export const showHistory = async () => {
  let loop = true;
  while (loop) {
    process.stdout.write("\x1Bc");
    console.log(" --- Daftar History Belanja --- \n");
    if (history.length === 0) {
      console.log("\n ☹️ History belanja masih kosong \n");
    } else {
      history.forEach((item) => {
        console.log("----- INVOICE -----");
        console.log(` NO. INVOICE: ${item.noInv}`);
        console.log(` TANGGAL: ${item.dateCheckout} `);
        item.checkout.forEach((rental, index) => {
          console.log(` ${index + 1}. ${rental.nama}`);
          console.log(`    Harga: ${formatHarga(rental.harga)}`);
          console.log(`    Durasi: ${rental.days} hari`);
          console.log(`    Batas waktu: ${rental.limit}`);
          console.log(`    Subtotal: ${formatHarga(rental.subTotal)}`);
        });
        console.log(` \n\nTotal: ${formatHarga(item.total)}\n`);
        console.log("------ TERIMA KASIH☺️  ------\n\n");
      });
    }
    await input("\n\nKembali ke menu utama");
    loop = false;
    continue;
  }
};
