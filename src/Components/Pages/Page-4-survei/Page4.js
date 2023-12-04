import React from "react";
import Survei1 from "./Survei1";
import Survei2 from "./Survei2";
import Survei3 from "./Survei3";
import Header2 from "../../Organisms/Header2";
import Footer from "../../Organisms/Footer";
import CustomerServiceButton from "../../Atoms/CustomServiesButton";

function App() {

  return (
    <div>
      <div className="flex">
        <div className="flex-1 pattern shadow-md"></div>
        <div className="flex-2 ">
        <Header2 />
            <Survei1 />
            <Survei2 />
            <Survei3 />
            <CustomerServiceButton />
      <Footer />
        </div>
        <div className="flex-1 pattern shadow-md"></div>
      </div>
    </div>
  );
}

export default App;
