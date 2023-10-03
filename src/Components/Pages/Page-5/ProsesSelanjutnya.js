import React, { useState } from "react";

function ProsesSelanjutnya() {
  const [experience, setExperience] = useState(""); // Untuk menyimpan pilihan pengalaman

  const handleExperienceChange = (event) => {
    setExperience(event.target.value);
  };
  return (
    <div className="bg-biruprimary text-white ">
      <div className="border-t-2 border-biruprimary"></div>
      <div className="max-w-md mx-10">
        <p className="text-xl font-bold mb-5 ">Proses selanjutnya dapat dilakukan dengan mengakses halaman login, dengan akun : </p>
      </div>
      <div className="max-w-md mx-10 mt-5 text-sm my-5">
        <h2 className="text-xl font-bold ">Email :</h2>
        <h2 className="text-xl  mb-5">x@gmail.com</h2>
        <h2 className="text-xl font-bold ">Token :</h2>
        <h2 className="text-xl  mb-5">SKDHAISDJ0</h2>
        <h2 className="text-xl  mb-5">Untuk melanjutkan proses PPDB Bapak/ Ibu dapat melakukan pembayaran sebesar Rp.500.000 untuk pembelian formulir</h2>
        <h2 className="text-xl  mb-5">Silahkan menghubungi CS kami untuk informasi pembayaran pada nomor berikut :</h2>
        <h2 className="text-xl font-bold ">Email Panitia :  </h2>
        <h2 className="text-xl  mb-5 ">billing.smp@hsks.co.id</h2>
        <h2 className="text-xl font-bold ">Whatsap Panitia :</h2>
        <h2 className="text-xl   ">+628119511845</h2>
        <h2 className="text-xl   ">+6285770127688</h2>
        <h2 className="text-xl  mb-5 ">+6287777217460</h2>
        <h2 className="text-xl font-bold ">Nomor Telepon Panitia :  </h2>
        <h2 className="text-xl mb-5 ">(+6221) 2221 1078</h2>
        <h2 className="text-xl  mb-5">Tim kami akan segera menghubungi Bapak/ Ibu setelah pembayaran terverifikasi.</h2>


      </div>
      <div className="border-t border-white my-4 mx-8"></div>
      <div className="border-t-2 border-biruprimary mt-5"></div>
    </div>
  );
}

export default ProsesSelanjutnya;
