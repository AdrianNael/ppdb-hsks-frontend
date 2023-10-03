import React, { useState } from "react";

function Survei2() {
  const [experience, setExperience] = useState(""); // Untuk menyimpan pilihan pengalaman

  const handleExperienceChange = (event) => {
    setExperience(event.target.value);
  };
  return (
    <div className="bg-biruprimary text-white  ">
      <div className="mx-10  text-sm	">
        <h2 className=" text-xl font-semibold mb-5 ">Apa yang membuat anda tertarik dengan Sekolah Kak Seto?</h2>
        <div className="space-y-5  text-lg ">
          <div className="flex items-center">
            <input type="radio" id="baik" value="Baik" checked={experience === "Baik"} onChange={handleExperienceChange} className="mr-2" />
            <label htmlFor="baik">Brand Name Kak Seto</label>
          </div>
          <div className="flex items-center">
            <input type="radio" id="cukup" value="Cukup" checked={experience === "Cukup"} onChange={handleExperienceChange} className="mr-2" />
            <label htmlFor="cukup">Jarak dekat dengan rumah</label>
          </div>
          <div className="flex items-center">
            <input type="radio" id="buruk" value="Buruk" checked={experience === "Buruk"} onChange={handleExperienceChange} className="mr-2" />
            <label htmlFor="buruk">Pendekatan individual terhada anak</label>
          </div>
          <div className="flex items-center">
            <input type="radio" id="Profesional" value="Profesional" checked={experience === "Profesional"} onChange={handleExperienceChange} className="mr-2" />
            <label htmlFor="buruk">Pengajarannya yang Profesional</label>
          </div>
        </div>
        <p className="mt-4 ">Anda memilih: {experience}</p>
      </div>{" "}
      <div className="border-t-2 border-biruprimary mt-10"></div>
    </div>
  );
}

export default Survei2;
