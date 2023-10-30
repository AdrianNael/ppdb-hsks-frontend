// src/App.js
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
      <Header2 />
      <div className="flex">
        <div className="flex-1 pattern shadow-md"></div>
        <div className="flex-auto">
          <form>
            <Survei1 />
            <Survei2 />
            <Survei3 />
            <div className="flex justify-center pb-7">
              <input
                type="submit"
                value="SELANJUTNYA"
                className="bg-white rounded-lg px-12 py-4 text-lg text-biruprimary font-bold mb-5 mt-5 flex items-center"
              />
            </div>
          </form>
        </div>
        <div className="flex-1 pattern shadow-md"></div>
      </div>
      <CustomerServiceButton />
      <Footer />
    </div>
  );
}

export default App;
