import React, { useState } from "react";
import { FaFileDownload } from "react-icons/fa";

function ProductKnowledge() {
  const [experience, setExperience] = useState(""); // Untuk menyimpan pilihan pengalaman

  const handleExperienceChange = (event) => {
    setExperience(event.target.value);
  };

  return (
    <div className="bg-biruprimary text-white">
      <div className="border-t-2 border-biruprimary"></div>
      <div className="max-w-md mx-10">
        <div>
          <p className="text-xl font-bold mb-5">
            Silahkan Mengunduh Product Knowledge dibawah ini untuk mempelajari
            program pendidikan yang akan kami berikan kepada Putera/ Puteri
            Bapak/ Ibu.
          </p>
          <a
            href="../../Materials/Product_Knowledge_Homeschooling_Kak_Seto.pdf" // Ganti dengan path file yang benar
            download="Product_Knowledge_Homeschooling_Kak_Seto.pdf" // Sesuaikan dengan nama file dan ekstensinya
            className="bg-white rounded-lg px-8 py-4 text-lg text-biruprimary font-semibold mb-5 mt-5 flex items-center"
            target="_blank" // Menambahkan properti target="_blank"
            rel="noopener noreferrer" // Menambahkan rel="noopener noreferrer" untuk keamanan
          >
            Unduh Product Knowledge Disini
            <FaFileDownload className=" text-SD" size={24} />
          </a>
        </div>
        <div>
          <p className="text-xl font-bold mb-5">
            Serta untuk mengetahui prosedur PPDB secara keseluruhan silahkan
            unduh dibawah ini
          </p>
          <a
            href="./../../Assets/Materials/Prosedur_PPDB_Homeschooling_Kak_Seto.pdf"
            download="nama_file_anda.ext"
            className="bg-white rounded-lg px-8 py-4 text-lg text-biruprimary font-semibold mb-5 mt-5 flex items-center"
            target="_blank" // Menambahkan properti target="_blank"
            rel="noopener noreferrer" // Menambahkan rel="noopener noreferrer" untuk keamanan
          >
            Undur Prosedur Pendaftaran Disini
            <FaFileDownload className=" text-SD" size={24} />
          </a>
        </div>
      </div>
      <div className="border-t border-white my-4 mx-8"></div>
      <div className="max-w-md mx-10">
        <p className="text-xl font-bold mb-5">
          Silahkan unduh atau cetak sebagai bukti pendaftaran dengan menekan
          tombol bawah ini :
        </p>
        <a
          href="./../Assets/Materials"
          download="Prosedur_PPDB_Homeschooling_Kak_Seto.pdf"
          className="bg-white rounded-lg px-8 py-4 text-lg text-biruprimary font-semibold mb-5 mt-5 flex items-center"
          target="_blank" // Menambahkan properti target="_blank"
          rel="noopener noreferrer" // Menambahkan rel="noopener noreferrer" untuk keamanan
        >
          Cetak Halaman Ini !!!
          <FaFileDownload className=" text-SD ml-2" size={24} />
        </a>
      </div>
      <div className="border-t-2 border-biruprimary mt-5"></div>
    </div>
  );
}

export default ProductKnowledge;
