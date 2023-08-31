import React from "react";
import ButtonFormal from "../../Atoms/ButtonFormal";
import CardPutih from "../../Atoms/CardPutih"
import CardBiru from "../../Atoms/CardBiru"
import Button from "../../Atoms/Button";
import GelombangBawah from "../../Atoms/GelombangBawah";


const body = () => {
  const handleButtonClick = () => {
    // Logika yang ingin Anda lakukan saat tombol ditekan
    console.log('Tombol ditekan');
  };


  return (
    <div>
      <div className="ml-[3rem]">
        <h4 className="font-bold text-2xl mt-1 mb-1">Registrasi PPDB</h4>
        <h4 className="font-bold text-2xl"> Sekolah Kak Seto</h4>
        <h6 className="text-Emas text-sm">
          Sudah Registrasi? Klik Masuk Proses PPDB
        </h6>
      </div>
        <ButtonFormal />
      <div>
      <h4 class="ml-12 font-bold text-lg">Lokasi Sekolah :</h4>
        <h6 className="ml-12 font-normal text-sm text-Emas">(Klik untuk penjelasan)</h6>
      </div>
      <div class="lokasi-card grid grid-cols-2 auto-cols-max mx-8 gap-6 max-w-full mt-4">
    <CardPutih/>
    <CardBiru/>
    <CardBiru/>
    <CardPutih/>
      </div>
      <div className="h-[9.375rem] -mb-3">
        <GelombangBawah />
      </div>
      <div className="bg-biruprimary pb-4 mx-auto">
        <h4 className="text-white font-semibold mb-2 mx-8">Tahun Pelajaran</h4>
        <div className="flex justify-center w-full">
          <select className="mx-auto border-2 bg-transparent text-biruprimary">
            <option>Pilih</option>
            <option>Tahun Pelajaran 2023/2024</option>
            <option>Tahun Pelajaran 2022/2023</option>
            <option>Tahun Pelajaran 2021/2022</option>
          </select>
        </div>
      </div>
      <div className="bg-biruprimary">
        <h4 className="text-white font-semibold mb-1 mx-8">
          Jenjang Sekolah :
        </h4>
        <div className="grid grid-cols-2 gap-6 mr-4 ml-4">
          <Button label="TK" className="ml-24" />
          <Button label="SD" />
          <Button label="SMP" className="ml-24" />
          <Button label="SMA" />
        </div>
    </div>
    </div>
  );
};

export default body;
