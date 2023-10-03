import React from "react";

const Input = ({ label, type, value, onChange }) => {
  return (
    <>
      <label className="block mt-4 mb-1">{label}</label>
      <input
        type={type}
        className="w-full p-2 border-2 border-black rounded-md"
        value={value}
        onChange={onChange}
        required
      />
    </>
  );
};

export default Input;
