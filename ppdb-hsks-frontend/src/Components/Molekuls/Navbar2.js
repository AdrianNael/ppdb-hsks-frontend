import React from "react";
import Logo1 from "../../Assets/Images/page-1/Logo.svg";

function Navbar2() {
    return (
        <div className="h-32 flex flex-col items-center justify-center relative">
            <img src={Logo1} alt="logo" className="h-30 mb-2 mt-8" />
        </div>
    )
}

export default Navbar2;