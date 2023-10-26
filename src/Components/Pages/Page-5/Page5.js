import React from "react";
import Header2 from "../../Organisms/Header2";
import Footer from "../../Organisms/Footer";
import DataOrtu from "./DataOrtu";
import DataPeserta from "./DataPeserta";
import DataJenjang from "./DataJenjang";
import ProsesSelanjutnya from "./ProsesSelanjutnya.js";
import ProductKnowlodge from "./ProductKnowlodge.js";
import ButtonLoginPage5 from "./ButtonLoginPage5";
import CustomerServiceButton from "../../Atoms/CustomServiesButton";

function App() {
  return (
    <div>
      <Header2 />
      <div className="flex">
        <div className="flex-1 pattern shadow-md"></div>
        <div>
          <DataOrtu />
          <DataPeserta />
          <DataJenjang />
          <ProsesSelanjutnya />
          <ProductKnowlodge />
          <ButtonLoginPage5 />
        </div>
        <div className="flex-1 pattern shadow-md"></div>
      </div>
      <CustomerServiceButton />
      <Footer />
    </div>
  );
}

export default App;
