// src/App.js
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Page1 from "./Components/Pages/Page-1/Body";

function App() {
  return (
    <Router>
      <Page1 />
    </Router>
  );
}

export default App;
