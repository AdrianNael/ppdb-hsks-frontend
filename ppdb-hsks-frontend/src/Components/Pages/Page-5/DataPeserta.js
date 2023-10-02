import React, { useState, useEffect } from "react";
import axios from "axios"; // Import Axios untuk mengambil data dari API

function DataPeserta() {
  const [dataPeserta, setDataPeserta] = useState({}); // Menyimpan data peserta dari API

  useEffect(() => {
    // Mengambil data peserta dari API saat komponen dimuat
    axios
      .get("URL_API_ANDA")
      .then((response) => {
        setDataPeserta(response.data); // Menyimpan data dari API ke state
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []); // Menyatakan bahwa useEffect hanya perlu dijalankan sekali saat komponen dimuat

  return (
    <div className="bg-biruprimary text-white">
      {/* ... kode lain yang tetap sama ... */}
      <div className="text-xl font-bold">Nama Peserta Didik:</div>
      <div className="text-xl mb-5">{dataPeserta.nama}</div>
      <div className="text-xl font-bold">Jenis Kelamin :</div>
      <div className="text-xl mb-5">{dataPeserta.jenis_kelamin}</div>
      <div className="text-xl font-bold">Tanggal Lahir :</div>
      <div className="text-xl mb-5">{dataPeserta.tanggal_lahir}</div>
      <div className="text-xl font-bold">Apakah calon peserta didik terindikasi “Anak berkebutuhan khusus”?</div>
      <div className="text-xl mb-5 text-SD">{dataPeserta.kebutuhan_khusus ? "Iya" : "Tidak"}</div>
      <div className="text-xl font-bold">Apakah calon peserta didik pernah melakukan pemeriksaan psikologis dari psikolog / psikiater ?</div>
      <div className="text-xl mb-5 text-Hijau">{dataPeserta.pemeriksaan_psikologis ? "Iya" : "Tidak"}</div>
      {/* ... kode lain yang tetap sama ... */}
    </div>
  );
}

export default DataPeserta;
