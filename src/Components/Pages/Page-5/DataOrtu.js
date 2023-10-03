import React, { useState, useEffect } from "react";
import axios from "axios"; // Import Axios untuk mengambil data dari API

function DataOrtu() {
  const [dataOrtu, setDataOrtu] = useState({}); // Menyimpan data orang tua dari API

  useEffect(() => {
    // Mengambil data orang tua dari API saat komponen dimuat
    axios
      .get("URL_API_ANDA")
      .then((response) => {
        setDataOrtu(response.data); // Menyimpan data dari API ke state
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []); // Menyatakan bahwa useEffect hanya perlu dijalankan sekali saat komponen dimuat

  return (
    <div className="bg-biruprimary text-white">
      {/* ... kode lain yang tetap sama ... */}
      <div className="text-xl font-bold">Hubungan Keluarga:</div>
      <div className="text-xl mb-5">{dataOrtu.hubungan}</div>
      <div className="text-xl font-bold">Nama:</div>
      <div className="text-xl mb-5">{dataOrtu.nama}</div>
      <div className="text-xl font-bold">Nomor Handphone:</div>
      <div className="text-xl mb-5">{dataOrtu.nomor_handphone}</div>
      <div className="text-xl font-bold">Nomor Whatsapp:</div>
      <div className="text-xl mb-5">{dataOrtu.nomor_whatsapp}</div>
      <div className="text-xl font-bold">Email:</div>
      <div className="text-xl mb-5">{dataOrtu.email}</div>
      {/* ... kode lain yang tetap sama ... */}
    </div>
  );
}

export default DataOrtu;
