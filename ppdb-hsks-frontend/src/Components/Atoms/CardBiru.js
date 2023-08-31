import React from "react";
import hsksdepok from "../../Assets/Images/page-1/Sekolah Depok.svg";
import akreditasA from "../../Assets/Images/page-1/akreditasi.svg";

const CardBiru = () => {
  return (
    <div className="block rounded-lg bg-biruprimary text-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20p x_-2px_rgba(0,0,0,0.04)]">
      <div className="relative">
          <img
          className="rounded-t-lg"
          src={hsksdepok}
          alt="kak seto pusat"
          width="100%"
          ></img>
          <div className="font-black text-stroke-blue">
          <h6 className="absolute font-bold text-xs w-3/4 text-white bottom-2 left-2">
          HOMESCHOOLING KAK SETO PUSAT</h6>
          </div>
        </div>
      <div className="p-4">
        <div className="grid grid-cols-2">
          <h5 className="mb-2 text-sm font-medium leading-tight">
            Sekolah Formal
          </h5>
          <img
            src={akreditasA}
            alt="akreditasi"
            className="relative left-10"
            width="50%"
          />
        </div>
        <div className="font-bold text-sm mb-4 text-stroke">
          <span className="text-TK mr-1">TK</span>
          <span className="text-SD mr-1">SD</span>
          <span className="text-SMP mr-1">SMP</span>
          <span className="text-SMA">SMA</span>
        </div>
        <p className="text-[11px] font-light">Kota Tangerang Selatan, Banten</p>
        <h5 className="text-sm font-medium leading-tight mt-4 mb-1 text-[10px]">
          Program Tersedia :
        </h5>
        <div className="text-xs font-light ml-6">
          <ul style={{ listStyleType: "disc" }}>
            <li>Distance Learning</li>
            <li>Distance Learning Tunggal</li>
            <li>Inklusi</li>
            <li>Komunitas</li>
            <li>Komunitas Online Plus</li>
            <li>Komunitas Online Reguler</li>
          </ul>
        </div>
      </div>
      <div className="fix-button flex items-end justify-center">
        <button
          type="button"
          className="rounded px-7 py-2 text-xs font-medium border-2 border-white text-white mb-4"
          data-te-ripple-init
          data-te-ripple-color="light"
        >
          Pilih
        </button>
      </div>
    </div>
  );
};
export default CardBiru;
