import React, { useState, useEffect } from "react";
import { useDataSurveiVoting } from "../../../features/useDataSurveiVoting";


function Survei1() {
  const [experience, setExperience] = useState("");
  const {data: dataSurveiVoting} = useDataSurveiVoting();

  const handleExperienceChange = (event) => {
    setExperience(event.target.value);
  };
  
  // useEffect(() => {
  //   console.log("Data Survei Voting:", dataSurveiVoting);
  // }, [dataSurveiVoting]);

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
      <div className="mx-10 mt-10 text-sm">
        <h2 className="text-xl font-semibold mb-5">
          Bagaimana Pengalaman Bapak/Ibu dalam pengisian registrasi Online
          Sekolah Kak Seto?
        </h2>
        <div className="space-y-5 text-lg">
          {dataSurveiVoting.map((option, index) => (
            <div className="flex items-center" key={index}>
              <input
                type="radio"
                id={option.toLowerCase()}
                value={option}
                checked={experience === option}
                onChange={handleExperienceChange}
                className="mr-2"
              />
              <label htmlFor={option.toLowerCase()}>{option}</label>
            </div>
          ))}
        </div>
        <p className="mt-4">Anda memilih: {experience}</p>
      </div>
      <div className="border-t-2 border-biruprimary mt-10"></div>
    </div>
  );
}

export default Survei1;
