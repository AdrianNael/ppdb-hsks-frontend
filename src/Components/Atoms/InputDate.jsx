import React from "react";

function Input({id, name, value, onChange}) {
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
          type="date"
          placeholder="Tuliskan Disini"
          id={id}
          name={name}
          value={value}
          onChange={onChange}
        >
        </input>
    </div>
  );
}

export default Input;
