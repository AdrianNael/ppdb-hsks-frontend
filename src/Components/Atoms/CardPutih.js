import React from "react";
import hskspusat from "../../Assets/Images/page-1/kaksetopusat.svg";
import akreditasi from "../../Assets/Images/page-1/akreditasi.svg";

const Card = () => {
  return (
    <div>
      <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] border-2 border-biruprimary hover:-translate-y-10 hover:scale-105 hover:transition hover:duration-300 hover:ease-linear">
        <div className="relative">
          <img
            className="rounded-t-lg"
            src={hskspusat}
            alt="kak seto pusat"
            width="100%"
          ></img>
          <div className="font-black text-stroke-blue">
            <h6 className="absolute font-bold text-xs w-3/4 text-white bottom-2 left-2 xl:text-xl">
              HOMESCHOOLING KAK SETO PUSAT
            </h6>
          </div>
        </div>
        <div className="p-4">
          <div className="grid grid-cols-2">
            <h5 className="mb-2 text-sm font-medium leading-tight xl:text-base">
              Sekolah Formal
            </h5>
            <img
              src={akreditasi}
              alt="akreditasi"
              className="relative left-10"
              width="50%"
            ></img>
          </div>
          <div className="font-bold text-sm mb-4 xl:text-base">
            <span className="text-TK mr-1">TK</span>
            <span className="text-SD mr-1">SD</span>
            <span className="text-SMP mr-1">SMP</span>
            <span className="text-SMA">SMA</span>
          </div>
          <p className="text-SMP text-[11px] font-light xl:text-base">
            Kota Tangerang Selatan, Banten
          </p>
          <h5 className="text-sm font-medium leading-tight mt-4 mb-1 text-secondary text-[10px] xl:text-base">
            Program Tersedia :
          </h5>
          <div className="text-xs font-light ml-6 xl:text-base">
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
            className="rounded px-7 py-2 text-xs font-medium border-2 border-biruprimary text-biruprimary mb-4 hover:bg-green-400"
            data-te-ripple-init
            data-te-ripple-color="light"
          >
            Pilih
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
