import React from "react";
import Logo1 from "../../Assets/Images/page-1/Logo.svg";
import Logo2 from "../../Assets/Images/page-1/gelombang-biru.svg";
import Logo3 from "../../Assets/Images/page-1/Book.svg";
import Logo4 from "../../Assets/Images/page-1/Backpack.svg";

const Navbar = () => {
  return (
    <div>
      <nav className="bg-biruprimary h-32 flex flex-col items-center justify-center relative">
        <img src={Logo1} alt="logo" className="h-30 mb-2 mt-8 md:w-56" />
      </nav>
    </div>
  );
};

export default Navbar;
