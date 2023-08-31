import React from "react";
import Button from "../../Atoms/Button";
import CardPutih from "../../Atoms/CardPutih"
import CardBiru from "../../Atoms/CardBiru"
const body = () => {
  return (
    <div>
      <div className="ml-[3rem]">
        <h4 className="font-bold text-2xl mt-1 mb-1">Registrasi PPDB</h4>
        <h4 className="font-bold text-2xl"> Sekolah Kak Seto</h4>
        <h6 className="text-Emas text-sm">
          Sudah Registrasi? Klik Masuk Proses PPDB
        </h6>
      </div>
        <Button />
      <div>
      <h4 class="ml-12 font-bold text-lg">Lokasi Sekolah :</h4>
        <h6 className="ml-12 font-normal text-sm text-Emas">(Klik untuk penjelasan)</h6>
      </div>
      <div class="lokasi-card grid grid-cols-2 auto-cols-max mx-8 gap-6 max-w-full mt-4">
    <CardPutih/>
    <CardBiru/>
      </div>
    </div>
  );
};

export default body;
