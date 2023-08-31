// src/App.js
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./Components/Organisms/Header";
import Body1 from "./Components/Pages/Page-1/body";

function App() {
  return (
    <Router>
      <div className="overflow-scroll">
        <Header />
        <Body1 />
      </div>
    </Router>
  );
}

export default App;
