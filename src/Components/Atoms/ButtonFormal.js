// src/components/atoms/Button.js
import React from "react";

const ButtonFormal = ({ label, onClick }) => {
  return (
    <div className="button-category flex  justify-center gap-4 mb-3 mt-5">
      <button onClick={onClick} className="px-4 py-3 bg-biruprimary rounded-2xl text-white font-semibold text-sm">
        {label}
        NONFORMAL
      </button>
      <button onClick={onClick} className="px-6 py-3   bg-biruprimary rounded-2xl text-white font-semibold text-sm">
        {label}
        FORMAL
      </button>
      <button onClick={onClick} className="px-4 py-3 bg-biruprimary rounded-2xl text-white font-semibold text-sm">
        {label}
        INFORMAL
      </button>
    </div>
  );
};

export default ButtonFormal;
