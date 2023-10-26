import React from "react";
import Header2 from "../../Organisms/Header2";
import Footer from "../../Organisms/Footer";
import MasukPPDB from "../Page-2/MasukPPDB";
import Content from "../Page-2/Content";

function Body() {
  return (
    <>
      <Header2 />
      <div className="flex">
        <div className="flex-1 pattern shadow-md"></div>
        <div className="">
          <MasukPPDB />
          <Content />
        </div>
        <div className="flex-1 pattern shadow-md"></div>
      </div>
      <Footer />
    </>
  );
}

export default Body;
