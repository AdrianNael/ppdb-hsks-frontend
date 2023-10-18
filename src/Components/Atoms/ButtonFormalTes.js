import React, { useEffect, useRef, useState } from "react";

const ButtonFormal = ({ label }) => {
  const buttonFormalRef = useRef(null);
  const [isMarkGreen, setIsMarkGreen] = useState(false);

  const handleButtonClickFormal = () => {
    setIsMarkGreen(!isMarkGreen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (buttonFormalRef.current && !buttonFormalRef.current.contains(event.target)) {
        setIsMarkGreen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [buttonFormalRef]);

  return (
    <div className="button-category flex justify-center gap-4 mb-3 mt-5">
      <button
        id="filterButtonNonformal"
        onClick={handleButtonClickFormal}
        className={`px-4 py-3 bg-biruprimary rounded-2xl text-white font-semibold text-sm ${
          isMarkGreen ? "mark-green" : ""
        }`}
        ref={buttonFormalRef}
      >
        {label} NONFORMAL
      </button>
      <button
        id="filterButtonFormal"
        onClick={handleButtonClickFormal}
        className={`px-6 py-3 bg-biruprimary rounded-2xl text-white font-semibold text-sm ${
          isMarkGreen ? "mark-green" : ""
        }`}
      >
        {label} FORMAL
      </button>
      <button
        id="filterButtonInformal"
        onClick={handleButtonClickFormal}
        className={`px-4 py-3 bg-biruprimary rounded-2xl text-white font-semibold text-sm ${
          isMarkGreen ? "mark-green" : ""
        }`}
      >
        {label} INFORMAL
      </button>
    </div>
  );
};

export default ButtonFormal;
