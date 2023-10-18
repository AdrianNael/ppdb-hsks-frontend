// src/components/atoms/Button.js
import React from "react";

const ButtonFormal = ({ label, onClick }) => {
  const handleButtonClickNonformal = () => {
    // Lakukan sesuatu ketika tombol di klik, misalnya, ubah filter
    const cardElement1 = document.getElementById("filterButtonInformal");
    const cardElement2 = document.getElementById("filterButtonFormal");
    const cardElement3 = document.getElementById("filterButtonNonformal");
    const hasHiddenClass1 = cardElement1.classList.contains("hidden");
    const hasHiddenClass2 = cardElement2.classList.contains("hidden");
    const hasMarkGreenClass1 = cardElement3.classList.contains("mark-green");
    if (hasHiddenClass1 || hasHiddenClass2 || hasMarkGreenClass1) {
      // cardElement1.classList.remove("hidden");
      // cardElement2.classList.remove("hidden");
      cardElement3.classList.remove("mark-green");
    } else {
      // cardElement1.classList.add("hidden");
      // cardElement2.classList.add("hidden");
      cardElement3.classList.add("mark-green");
    }
  };
  const handleButtonClickFormal = (event) => {
    // Lakukan sesuatu ketika tombol di klik, misalnya, ubah filter
    const cardElement3 = document.getElementById("filterButtonFormal");
    const hasMarkGreenClass1 = cardElement3.classList.contains("mark-green");
    if (hasMarkGreenClass1) {
      cardElement3.classList.remove("mark-green");
    } else {
      const isClickOutside = !event.target.closest("#filterButtonFormal");
      if (isClickOutside) {
        cardElement3.classList.remove("mark-green");
      } else {
        cardElement3.classList.add("mark-green");
      }
    }
  };
  const handleButtonClickInFormal = () => {
    // Lakukan sesuatu ketika tombol di klik, misalnya, ubah filter
    const cardElement1 = document.getElementById("filterButtonNonformal");
    const cardElement2 = document.getElementById("filterButtonFormal");
    const cardElement3 = document.getElementById("filterButtonInformal");
    const hasHiddenClass1 = cardElement1.classList.contains("hidden");
    const hasHiddenClass2 = cardElement2.classList.contains("hidden");
    const hasMarkGreenClass1 = cardElement3.classList.contains("mark-green");
    if (hasHiddenClass1 || hasHiddenClass2 || hasMarkGreenClass1) {
      cardElement3.classList.remove("mark-green");
    } else {
      cardElement3.classList.add("mark-green");
    }
  };
  return (
    <div className="button-category flex  justify-center gap-4 mb-3 mt-5">
      <button
        id="filterButtonNonformal"
        onClick={handleButtonClickNonformal}
        className="px-4 py-3 bg-biruprimary rounded-2xl text-white font-semibold text-sm"
      >
        {label}
        NONFORMAL
      </button>
      <button
        id="filterButtonFormal"
        onClick={handleButtonClickFormal}
        className="px-6 py-3   bg-biruprimary rounded-2xl text-white font-semibold text-sm "
      >
        {label}
        FORMAL
      </button>
      <button
        id="filterButtonInformal"
        onClick={handleButtonClickInFormal}
        className="px-4 py-3 bg-biruprimary rounded-2xl text-white font-semibold text-sm"
      >
        {label}
        INFORMAL
      </button>
    </div>
  );
};

export default ButtonFormal;
  