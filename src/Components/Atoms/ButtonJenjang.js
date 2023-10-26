import React, { useState } from "react";

const ButtonJenjang = ({ label, ClassName }) => {
  const [isMarkGreen, setIsMarkGreen] = useState(false);

  const handleButtonClickTK = () => {
    // Get the button element
    const bgTK = document.getElementById("buttonJenjangTK");

    // Check if the button has the "bg-TK" class
    const hasBgTK = bgTK.classList.contains("bg-TK");

    if (hasBgTK) {
      // If it has the "bg-TK" class, remove it and add "mark-green"
      bgTK.classList.remove("bg-TK");
      bgTK.classList.add("mark-green-jenjang");
    } else {
      // If it doesn't have the "bg-TK" class, add it and remove "mark-green-jenjang"
      bgTK.classList.add("bg-TK");
      bgTK.classList.remove("mark-green-jenjang");
    }
  };
  const handleButtonClickSD = () => {
    // Logika yang ingin Anda lakukan saat tombol ditekan
    const bgSD = document.getElementById("buttonJenjangSD");

    // Check if the button has the "bg-TK" class
    const hasbgSD = bgSD.classList.contains("bg-SD");

    if (hasbgSD) {
      // If it has the "bg-TK" class, remove it and add "mark-green"
      bgSD.classList.remove("bg-SD");
      bgSD.classList.add("mark-green-jenjang");
    } else {
      // If it doesn't have the "bg-TK" class, add it and remove "mark-green-jenjang"
      bgSD.classList.add("bg-SD");
      bgSD.classList.remove("mark-green-jenjang");
    }
  };
  const handleButtonClickSMP = () => {
    // Logika yang ingin Anda lakukan saat tombol ditekan
    const bgSMP = document.getElementById("buttonJenjangSMP");

    // Check if the button has the "bg-TK" class
    const hasBgSMP = bgSMP.classList.contains("bg-SMP");

    if (hasBgSMP) {
      // If it has the "bg-SMP" class, remove it and add "mark-green"
      bgSMP.classList.remove("bg-SMP");
      bgSMP.classList.add("mark-green-jenjang");
    } else {
      // If it doesn't have the "bg-SMP" class, add it and remove "mark-green-jenjang"
      bgSMP.classList.add("bg-SMP");
      bgSMP.classList.remove("mark-green-jenjang");
    }
  };
  const handleButtonClickSMA = () => {
    // Logika yang ingin Anda lakukan saat tombol ditekan
    const bgSMA = document.getElementById("buttonJenjangSMA");

    // Check if the button has the "bg-TK" class
    const hasBgSMA = bgSMA.classList.contains("bg-SMA");

    if (hasBgSMA) {
      // If it has the "bg-SMA" class, remove it and add "mark-green"
      bgSMA.classList.remove("bg-SMA");
      bgSMA.classList.add("mark-green-jenjang");
    } else {
      // If it doesn't have the "bg-SMA" class, add it and remove "mark-green-jenjang"
      bgSMA.classList.add("bg-SMA");
      bgSMA.classList.remove("mark-green-jenjang");
    }
  };
  return (
    <>
      <button
        id="buttonJenjangTK"
        onClick={handleButtonClickTK} // 'O' should be capitalized
        className={`rounded px-4 py-2 text-lg font-medium bg-TK border-2 hover:-skew-y-6 hover:scale-125 hover:transition hover:duration-300 hover:ease-in-out md:font-bold md:text-2xl md:w-40 md:h-20`}
        data-te-triple-inti // 'd' should be lowercase
        data-te-triple-color="light"
      >
        {label} TK
      </button>
      <button
        id="buttonJenjangSD"
        onClick={handleButtonClickSD}
        className={`rounded border-2 px-4 py-2 text-lg font-medium bg-SD hover:-skew-y-6 hover:scale-125 hover:transition hover:duration-300 hover:ease-in-out md:font-bold md:text-xl md:w-40 md:h-20`}
        data-te-triple-inti
        data-te-triple-color="light"
      >
        {label} SD
      </button>
      <button
        id="buttonJenjangSMP"
        onClick={handleButtonClickSMP}
        className={`rounded border-2 px-4 py-2 text-lg font-medium bg-SMP hover:-skew-y-6 hover:scale-125 hover:transition hover:duration-300 hover:ease-in-out md:font-bold md:text-xl md:w-40 md:h-20`}
        data-te-triple-inti
        data-te-triple-color="light"
      >
        {label} SMP
      </button>
      <button
        id="buttonJenjangSMA"
        onClick={handleButtonClickSMA}
        className={`rounded border-2 px-4 py-2 text-lg font-medium bg-SMA hover:-skew-y-6 hover:scale-125 hover:transition hover:duration-300 hover:ease-in-out md:font-bold md:text-xl md:w-40 md:h-20`}
        data-te-triple-inti
        data-te-triple-color="light"
      >
        {label} SMA
      </button>
    </>
  );
};

export default ButtonJenjang;
