import React from "react";
import GelombangBiru from "../../Assets/Images/page-1/gelombang-biru.svg";

const GelombangBawah = () => {
  return (
    <img
      src={GelombangBiru}
      alt="Gelombang Biru"
      className="mx-auto relative top-10 rotate-180 w-full -z-10"
    ></img>
  );
};

export default GelombangBawah;