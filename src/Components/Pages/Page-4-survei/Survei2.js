import React, { useState,useEffect } from "react";
import { useDataSurveiAlasan } from "../../../features/useDataSurveiAlasan";


function Survei2() {
  const [experience, setExperience] = useState("");
  const {data: dataSurveiAlasan} = useDataSurveiAlasan();

  const handleExperienceChange = (event) => {
    setExperience(event.target.value);
  };

   useEffect(() => {
    console.log("Data Survei Voting:", dataSurveiAlasan);
  }, [dataSurveiAlasan]);

  return (
    <div className="bg-biruprimary text-white  ">
      <div className="mx-10  text-sm	">
        <h2 className=" text-xl font-semibold mb-5 ">Apa yang membuat anda tertarik dengan Sekolah Kak Seto?</h2>
        <div className="space-y-5  text-lg ">
        {dataSurveiAlasan.map((option, index) => (
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
        <p className="mt-4 ">Anda memilih: {experience}</p>
      </div>{" "}
      <div className="border-t-2 border-biruprimary mt-10"></div>
    </div>
  );
}

export default Survei2;
