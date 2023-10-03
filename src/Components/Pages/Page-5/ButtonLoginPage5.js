import React, { useState } from "react";
import { FaFileDownload } from "react-icons/fa";


function ProductKnowlodge() {
  const [experience, setExperience] = useState(""); // Untuk menyimpan pilihan pengalaman

  const handleExperienceChange = (event) => {
    setExperience(event.target.value);
  };
  return (
    <div className="bg-biruprimary text-white ">
      <div className="border-t-2 border-biruprimary"></div>
      <div className="border-t border-white my-4 mx-8"></div>
      <div className="max-w-md mx-10">
      <button className="bg-Hijau rounded-xl px-8 py-4 text-md text-white font-bold mb-5 mt-5 flex items-center">
      Login Dengan Token 
        </button>
        <button className="bg-Kuning rounded-xl px-8 py-4 text-md text-white font-bold mb-5 mt-5 flex items-center">
        Klik untuk isi data PPDB baru 
        </button>
         </div>
      <div className="border-t-2 border-biruprimary mt-20"></div>
    </div>
  );
}

export default ProductKnowlodge;
