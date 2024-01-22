import React from "react";
import { BsPen } from "react-icons/bs";

function Input({ id, name, value, onChange }) {
  return (
    <div>
      <div className="flex items-center">
        <BsPen className="inline-block mr-1 text-white" size={20} />
        <input
          className="border-none bg-transparent w-full"
          style={{
            color: "white",
            outline: "none",
            borderBottom: "2px solid white",
            paddingBottom: "5px",
          }}
          type="text"
          placeholder="Tuliskan Disini"
          name={name}
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
}

export default Input;
