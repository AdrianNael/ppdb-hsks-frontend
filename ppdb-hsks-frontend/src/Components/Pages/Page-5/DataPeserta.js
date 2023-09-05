import React, { useState } from "react";

function DataPeserta() {
  const [experience, setExperience] = useState(""); // Untuk menyimpan pilihan pengalaman

  const handleExperienceChange = (event) => {
    setExperience(event.target.value);
  };
  return (
    <div className="bg-biruprimary text-white ">
      <div className="border-t-2 border-biruprimary"></div>
      <div className="max-w-md mx-10">
        <p className="text-2xl font-bold mb-5 text-BiruSecondary1">Data Peserta Didik</p>
      </div>
      <div className="border-t border-white my-4 mx-8"></div>
      <div className="max-w-md mx-10 mt-5 text-sm my-5">
        <h2 className="text-xl font-bold ">Nama Peserta Didik:</h2>
        <h2 className="text-xl  mb-5">X</h2>
        <h2 className="text-xl font-bold ">Jenis Kelamin :</h2>
        <h2 className="text-xl  mb-5">Laki-Lai</h2>
        <h2 className="text-xl font-bold ">Tanggal Lahir :</h2>
        <h2 className="text-xl  mb-5">085155207987</h2>
        <h2 className="text-xl font-bold ">Apakah calon peserta didik terindikasi “Anak berkebutuhan khusus”?</h2>
        <h2 className="text-xl  mb-5 text-SD">Tidak</h2>
        <h2 className="text-xl font-bold ">Apakah calon peserta didik pernah melakukan pemeriksaan psikologis dari psikolog / psikiater ?</h2>
        <h2 className="text-xl  mb-5 text-Hijau">Iya</h2>
      </div>
      <div className="border-t border-white my-4 mx-8"></div>



      <div className="border-t-2 border-biruprimary mt-5"></div>
    </div>
  );
}

export default DataPeserta;
