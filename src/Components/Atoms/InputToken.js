import React from "react";

function InputToken({ placeholder, type, value, name, onChange }) {
  return (
    <div>
      <input
        className="border-none bg-transparent w-full"
        style={{
          color: "white",
          outline: "none",
          borderBottom: "2px solid white",
          paddingBottom: "5px",
        }}
        type={type}
        placeholder={placeholder}
        value={value}
        name={name}
        onChange={onChange}
      />
    </div>
  );
}

export default InputToken;
