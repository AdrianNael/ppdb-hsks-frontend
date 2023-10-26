import React, { useState } from "react";

function Survei1() {
  const [experience, setExperience] = useState(""); // Untuk menyimpan pilihan pengalaman

  const handleExperienceChange = (event) => {
    setExperience(event.target.value);
  };
  return (
    <div className="bg-biruprimary text-white ">
      <div className="border-t-2 border-biruprimary"></div>
      <div className=" mx-10">
        <h4 className="font-bold text-3xl	 mt-10 mb-1">Registrasi PPDB</h4>
        <h4 className="font-bold text-3xl"> Sekolah Kak Seto</h4>
        <h6 className="font-bold text-lg mt-5 ">
          Kami mohon kesediaan Bapak/ Ibu untuk mengisi survei berikut,
        </h6>
      </div>
      <div className=" mx-10 mt-20 text-sm">
        <h2 className="text-xl font-semibold mb-5">
          Bagaimana Pengalaman Bapak/Ibu dalam pengisian registrasi Online
          Sekolah Kak Seto?
        </h2>
        <div className="space-y-5  text-lg">
          <div className="flex items-center">
            <input
              type="radio"
              id="baik"
              value="Baik"
              checked={experience === "Baik"}
              onChange={handleExperienceChange}
              className="mr-2"
            />
            <label htmlFor="baik">Baik</label>
          </div>
          <div className="flex items-center">
            <input
              type="radio"
              id="cukup"
              value="Cukup"
              checked={experience === "Cukup"}
              onChange={handleExperienceChange}
              className="mr-2"
            />
            <label htmlFor="cukup">Cukup</label>
          </div>
          <div className="flex items-center">
            <input
              type="radio"
              id="buruk"
              value="Buruk"
              checked={experience === "Buruk"}
              onChange={handleExperienceChange}
              className="mr-2"
            />
            <label htmlFor="buruk">Buruk</label>
          </div>
        </div>
        <p className="mt-4">Anda memilih: {experience}</p>
      </div>{" "}
      <div className="border-t-2 border-biruprimary mt-10"></div>
    </div>
  );
}

export default Survei1;
