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
      <div className="max-w-md mx-10">
        <div>
         <p className="text-xl font-bold mb-5 ">Siliahkan Mengunduh Product Knowledge dibawah ini untuk mempelajari program pendidikan yang akan kami berikan kepada Putera/ Puteri  Bapak/ Ibu.</p>
         <a
            href="./../Assets/Materials"
            download="nama_file_anda.ext"
            className="bg-white rounded-lg px-8 py-4 text-lg text-biruprimary font-semibold mb-5 mt-5 flex items-center"
        > Unduh Product Knowledge Disini<FaFileDownload className=" text-SD" size={24} /> </a> 
         </div>
         <div>
         <p className="text-xl font-bold mb-5 ">Serta untuk mengetahui prosedur PPDB secara keseluruhan silahkan unduh dibawah ini</p>
         <a
            href="./../Assets/Materials"
            download="nama_file_anda.ext"
            className="bg-white rounded-lg px-8 py-4 text-lg text-biruprimary font-semibold mb-5 mt-5 flex items-center"
        > Undur Prosedur Pendaftaran Disini<FaFileDownload className=" text-SD" size={24} /> </a>  
         </div>
      </div>
      <div className="border-t border-white my-4 mx-8"></div>
      <div className="max-w-md mx-10">
         <p className="text-xl font-bold mb-5 ">Silahkan unduh atau cetak sebagai bukti pendaftaran dengan menekan tombol bawah ini : </p>
         <a
            href="./../Assets/Materials"
            download="nama_file_anda.ext"
            className="bg-white rounded-lg px-8 py-4 text-lg text-biruprimary font-semibold mb-5 mt-5 flex items-center"
        >Cetak Halaman Ini !!!<FaFileDownload className=" text-SD ml-2" size={24} /> </a> 
         </div>
      <div className="border-t-2 border-biruprimary mt-5"></div>
    </div>
  );
}

export default ProductKnowlodge;
