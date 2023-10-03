import React, { useState } from "react";

function DataOrtu() {
  const [experience, setExperience] = useState(""); // Untuk menyimpan pilihan pengalaman

  const handleExperienceChange = (event) => {
    setExperience(event.target.value);
  };
  return (
    <div className="bg-biruprimary text-white ">
      <div className="border-t-2 border-biruprimary"></div>
      <div className=" max-w-md mx-10">
        <h4 className="font-bold text-3xl	 mt-10 mb-1">Registrasi PPDB</h4>
        <h4 className="font-bold text-3xl"> Sekolah Kak Seto</h4>
        <h6 className="font-semibold text-lg mt-5 ">Terima kasih Bapak/ Ibu telah mengisi form registrasi PPDB kami, calon peserta didik dengan nama  X telah terdaftar dalam sistem kami.</h6>
      </div>
      <div className="max-w-md mx-10 mt-20 ">
        <p className="text-2xl font-bold mb-5 text-BiruSecondary1">Data Orang tua / Wali </p>
      </div>
      <div className="border-t border-white my-4 mx-8"></div>
      <div className="max-w-md mx-10 mt-5 text-sm my-5">
        <h2 className="text-xl font-bold ">Hubungan Keluarga :</h2>
        <h2 className="text-xl  mb-5">IBU</h2>
        <h2 className="text-xl font-bold ">Nama :</h2>
        <h2 className="text-xl  mb-5">x</h2>
        <h2 className="text-xl font-bold ">Nomor Handphone :</h2>
        <h2 className="text-xl  mb-5">085155207987</h2>
        <h2 className="text-xl font-bold ">Nomor Whatsapp :</h2>
        <h2 className="text-xl  mb-5">085155207987</h2>
        <h2 className="text-xl font-bold ">Email :</h2>
        <h2 className="text-xl  mb-5">pppdb@gmail.com</h2>
      </div>
      <div className="border-t border-white my-4 mx-8"></div>
      <div className="border-t-2 border-biruprimary mt-5"></div>
    </div>
  );
}

export default DataOrtu;
