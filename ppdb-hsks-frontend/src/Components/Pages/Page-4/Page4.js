// src/App.js
import React from "react";
import Survei1 from "./Survei1";
import Survei2 from "./Survei2";
import Survei3 from "./Survei3";
import Header2 from "../../Organisms/Header2";
import Footer from "../../Organisms/Footer";



function App() {
  return (
    <div>
      <Header2/>
      <Survei1 />
      <Survei2 />
      <Survei3 />
      <Footer/>
    </div>
  );
}

export default App;
