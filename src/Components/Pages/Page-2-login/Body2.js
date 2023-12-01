import React from "react";
import Header2 from "../../Organisms/Header2";
import Footer from "../../Organisms/Footer";
import MasukPPDB from "../Page-2-login/MasukPPDB";
import Content from "../Page-2-login/Content";

function Body() {
  return (
    <>
      <div className="flex">
        <div className="flex-1 pattern shadow-md"></div>
        <div className="flex-auto">
          <Header2 />
          <MasukPPDB />
          <Content />
          <Footer />
        </div>
        <div className="flex-1 pattern shadow-md"></div>
      </div>
    </>
  );
}

export default Body;
