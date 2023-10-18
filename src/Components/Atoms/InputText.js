import React from 'react';

function Input() {
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
        type="text"
        placeholder="Masukan 2 - 100 Karakter"
        />
    </div>
  );
};

export default Input;