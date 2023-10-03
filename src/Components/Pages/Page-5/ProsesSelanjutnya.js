import React, { useState, useEffect } from "react";
import axios from "axios"; // Import Axios untuk mengambil data dari API

function ProsesSelanjutnya() {
  const [dataProses, setDataProses] = useState({}); // Menyimpan data proses selanjutnya dari API

  useEffect(() => {
    // Mengambil data proses selanjutnya dari API saat komponen dimuat
    axios
      .get("URL_API_ANDA")
      .then((response) => {
        setDataProses(response.data); // Menyimpan data dari API ke state
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []); // Menyatakan bahwa useEffect hanya perlu dijalankan sekali saat komponen dimuat

  return (
    <div className="bg-biruprimary text-white ">
      <div className="border-t-2 border-biruprimary"></div>
      <div className="max-w-md mx-10">
        <p className="text-xl font-bold mb-5">Proses selanjutnya dapat dilakukan dengan mengakses halaman login, dengan akun:</p>
      </div>
      <div className="max-w-md mx-10 mt-5 text-sm my-5">
        <h2 className="text-xl font-bold">Email:</h2>
        <h2 className="text-xl mb-5">{dataProses.email}</h2>
        <h2 className="text-xl font-bold">Token:</h2>
        <h2 className="text-xl mb-5">{dataProses.token}</h2>
        <h2 className="text-xl mb-5">{dataProses.informasi_pembayaran}</h2>
        <h2 className="text-xl font-bold">Email Panitia:</h2>
        <h2 className="text-xl mb-5">{dataProses.email_panitia}</h2>
        <h2 className="text-xl font-bold">Whatsapp Panitia:</h2>
        <h2 className="text-xl">{dataProses.whatsapp_panitia.join(", ")}</h2>
        <h2 className="text-xl font-bold">Nomor Telepon Panitia:</h2>
        <h2 className="text-xl mb-5">{dataProses.nomor_telepon_panitia}</h2>
        <h2 className="text-xl mb-5">{dataProses.informasi_tambahan}</h2>
      </div>
      <div className="border-t border-white my-4 mx-8"></div>
      <div className="border-t-2 border-biruprimary mt-5"></div>
    </div>
  );
}

export default ProsesSelanjutnya;
