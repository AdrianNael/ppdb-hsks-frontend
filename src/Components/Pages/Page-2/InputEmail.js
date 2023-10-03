import React from "react";
import Input2 from "../../Atoms/InputText"

function Body() {

  return (
    <div style={{ position: "relative" }}>
        <label className="block text-xl text-white font-bold mb-2 pt-7" htmlFor="username">Email</label> 
        <Input2 />
    </div>
  );
}

export default Body;