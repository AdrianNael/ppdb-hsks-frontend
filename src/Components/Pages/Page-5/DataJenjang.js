import React, { useState, useEffect } from "react";
import axios from "axios"; // Import Axios untuk mengambil data dari API

function DataJenjang() {
  const [dataJenjang, setDataJenjang] = useState({}); // Menyimpan data jenjang dari API

  useEffect(() => {
    // Mengambil data jenjang dari API saat komponen dimuat
    axios
      .get("URL_API_ANDA")
      .then((response) => {
        setDataJenjang(response.data); // Menyimpan data dari API ke state
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []); // Menyatakan bahwa useEffect hanya perlu dijalankan sekali saat komponen dimuat

  return (
    <div className="bg-biruprimary text-white">
      {/* ... kode lain yang tetap sama ... */}
      <div className="text-xl font-bold">Lokasi Sekolah:</div>
      <div className="text-xl mb-5">{dataJenjang.lokasi_sekolah}</div>
      <div className="text-xl font-bold">Tahun Pelajaran:</div>
      <div className="text-xl mb-5">{dataJenjang.tahun_pelajaran}</div>
      <div className="text-xl font-bold">Jenjang:</div>
      <div className="text-xl mb-5">{dataJenjang.jenjang}</div>
      <div className="text-xl font-bold">Tingkat:</div>
      <div className="text-xl mb-5">{dataJenjang.tingkat}</div>
      <div className="text-xl font-bold">Program yang dipilih:</div>
      <div className="text-xl mb-5">{dataJenjang.program}</div>
      {/* ... kode lain yang tetap sama ... */}
    </div>
  );
}

export default DataJenjang;
