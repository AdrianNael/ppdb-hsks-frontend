// src/components/atoms/Button.js
import React from 'react';

const Button = ({ label, onClick }) => {
  return (
    <div className="button-category flex items-center justify-center gap-2 mb-3 mt-5">
    <button
      onClick={onClick}
      className="p-[0.6rem] bg-biruprimary rounded-2xl text-white font-semibold text-sm">
      {label}
      NONFORMAL
    </button>
    <button
      onClick={onClick}
      className="p-[0.6rem] bg-biruprimary rounded-2xl text-white font-semibold text-sm">
      {label}
      FORMAL
    </button>
    <button
      onClick={onClick}
      className="p-[0.6rem] bg-biruprimary rounded-2xl text-white font-semibold text-sm">
      {label}
      INFORMAL
    </button>
    </div>
  );
};

export default Button;