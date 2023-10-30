import React, { useState } from "react";

const ButtonJenjang = ({ setJenjang }) => {
  const handleJenjang = (event) => {
    setJenjang(event.target.id); // Mengatur nilai jenjang sesuai dengan ID tombol yang diklik
  };

  return (
    <>
      <button
        id="TK"
        onClick={handleJenjang}
        className={`rounded px-4 py-2 text-lg font-medium bg-TK border-2 hover:-skew-y-6 hover:scale-125 hover:transition hover:duration-300 hover:ease-in-out md:font-bold md:text-2xl md:w-40 md:h-20`}
        data-te-triple-inti
        data-te-triple-color="light"
      >
        TK
      </button>
      <button
        id="SD"
        onClick={handleJenjang}
        className={`rounded border-2 px-4 py-2 text-lg font-medium bg-SD hover:-skew-y-6 hover:scale-125 hover:transition hover:duration-300 hover:ease-in-out md:font-bold md:text-xl md:w-40 md:h-20`}
        data-te-triple-inti
        data-te-triple-color="light"
      >
        SD
      </button>
      <button
        id="SMP"
        onClick={handleJenjang}
        className={`rounded border-2 px-4 py-2 text-lg font-medium bg-SMP hover:-skew-y-6 hover:scale-125 hover:transition hover:duration-300 hover:ease-in-out md:font-bold md:text-xl md:w-40 md:h-20`}
        data-te-triple-inti
        data-te-triple-color="light"
      >
        SMP
      </button>
      <button
        id="SMA"
        onClick={handleJenjang}
        className={`rounded border-2 px-4 py-2 text-lg font-medium bg-SMA hover:-skew-y-6 hover:scale-125 hover:transition hover:duration-300 hover:ease-in-out md:font-bold md:text-xl md:w-40 md:h-20`}
        data-te-triple-inti
        data-te-triple-color="light"
      >
        SMA
      </button>
      <div>
        <p>
        </p>
      </div>
    </>
  );
};

export default ButtonJenjang;
