import React, { useState } from "react";
import { useDataSurvei } from "../../../features/useDataSurvei";

function Survei1() {
  const [experience, setExperience] = useState(""); // Untuk menyimpan pilihan pengalaman
  const { data } = useDataSurvei();

  const handleExperienceChange = (event) => {
    setExperience(event.target.value);
  };

  return (
    <div className="bg-biruprimary text-white ">
      <div className="border-t-2 border-biruprimary"></div>
      <div className="mx-10">
        <h4 className="font-bold text-3xl mt-10 mb-1">Registrasi PPDB</h4>
        <h4 className="font-bold text-3xl">Sekolah Kak Seto</h4>
        <h6 className="font-bold text-lg mt-5 ">
          Kami mohon kesediaan Bapak/Ibu untuk mengisi survei berikut,
        </h6>
      </div>
      <div className="mx-10 mt-20 text-sm">
        <h2 className="text-xl font-semibold mb-5">
          Bagaimana Pengalaman Bapak/Ibu dalam pengisian registrasi Online
          Sekolah Kak Seto?
        </h2>

        <div className="space-y-5 text-lg">
          {data.voting && data.voting.length > 0 ? (
            // Menghasilkan dinamis tombol radio berdasarkan data voting
            data.voting.map((voting) => (
              <div key={voting.id} className="flex items-center">
                <input
                  type="radio"
                  id={voting.reff_kronologies_sub.toLowerCase()}
                  value={voting.reff_kronologies_sub}
                  checked={experience === voting.reff_kronologies_sub}
                  onChange={handleExperienceChange}
                  className="mr-2"
                />
                <label htmlFor={voting.reff_kronologies_sub.toLowerCase()}>
                  {voting.reff_kronologies_sub}
                </label>
              </div>
            ))
          ) : (
            <p>Data voting tidak tersedia.</p>
          )}
        </div>

        <p className="mt-4">Anda memilih: {experience}</p>
      </div>
      <div className="border-t-2 border-biruprimary mt-10"></div>
    </div>
  );
}


export default Survei1;
