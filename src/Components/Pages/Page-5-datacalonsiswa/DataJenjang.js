import React, { useState } from "react";

function DataJenjang() {
  const [experience, setExperience] = useState(""); // Untuk menyimpan pilihan pengalaman

  const handleExperienceChange = (event) => {
    setExperience(event.target.value);
  };
  return (
    <div className="bg-biruprimary text-white ">
      <div className="border-t-2 border-biruprimary"></div>
      <div className="max-w-md mx-10">
        <p className="text-2xl font-bold mb-5 text-BiruSecondary1">Jenjang yang di tuju</p>
      </div>
      <div className="border-t border-white my-4 mx-8"></div>
      <div className="max-w-md mx-10 mt-5 text-sm my-5">
        <h2 className="text-xl font-bold ">Lokasi Sekolah :</h2>
        <h2 className="text-xl  mb-5">HSKS Pusat</h2>
        <h2 className="text-xl font-bold ">Tahun Pelajaran :</h2>
        <h2 className="text-xl  mb-5">2023/2024</h2>
        <h2 className="text-xl font-bold ">Jenjang :</h2>
        <h2 className="text-xl  mb-5">SMP</h2>
        <h2 className="text-xl font-bold ">Tingkat :</h2>
        <h2 className="text-xl  mb-5 ">8</h2>
        <h2 className="text-xl font-bold ">Program yang dipilih :</h2>
        <h2 className="text-xl  mb-5 ">Distance Learning</h2>
      </div>
      <div className="border-t border-white my-4 mx-8"></div>
      <div className="border-t-2 border-biruprimary mt-5"></div>
    </div>
  );
}

export default DataJenjang;
