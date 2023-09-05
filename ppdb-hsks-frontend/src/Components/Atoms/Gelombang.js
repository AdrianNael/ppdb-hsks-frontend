import React from "react";
import Logo2 from "../../Assets/Images/page-1/gelombang-biru.svg";
import Logo3 from "../../Assets/Images/page-1/Book.svg";
import Logo4 from "../../Assets/Images/page-1/Backpack.svg";

const gelombang = () => {
  return (
    <div className="relative">
      <img
        src={Logo2}
        alt="gelombang biru"
        className="-mt-2 md:-mt-20 w-full max-h-72 xl:-mt-20"
      />
      <div className="svg flex justify-between absolute top-3 left-0 right-0 lsm:mt-7 md:mt-[5rem]">
        <img src={Logo3} alt="Book" className="inline bottom-24 xl:w-56 xl:ml-10" />
        <img src={Logo4} alt="Backpack" className="inline bottom-20 left-24 xl:w-56 xl:mt-10 xl:mr-8" />
      </div>
    </div>
  );
};
export default gelombang;
