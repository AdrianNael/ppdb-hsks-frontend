import React from "react";
import Logo2 from "../../Assets/Images/page-1/gelombang-biru.svg";
import Logo3 from "../../Assets/Images/page-1/Book.svg";
import Logo4 from "../../Assets/Images/page-1/Backpack.svg";

const gelombang = () => {
  return (
    <div className="relative">
      <div className="svg flex justify-between absolute top-0 left-0 right-0">
        <img src={Logo3} alt="Book" className="inline bottom-24" />
        <img src={Logo4} alt="Backpack" className="inline bottom-20 left-24" />
      </div>
      <img
        src={Logo2}
        alt="gelombang biru"
        className="mx-fit w-full h-[100px] object-cover"
      />
    </div>
  );
};
export default gelombang;
