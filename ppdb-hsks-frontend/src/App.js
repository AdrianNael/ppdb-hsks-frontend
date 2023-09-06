// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Page1 from "./Components/Pages/Page-1/body";
import LoginPage from "./Components/Pages/Page-2/Body2";
import Form from "./Components/Pages/Page-3/Body3";
import Survei from "./Components/Pages/Page-4/Page4";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import Cpd from "./Components/Pages/Page-5/Page5";
import Langkah2 from "./Components/Pages/Page-7/body";
import Langkah4 from "./Components/Pages/Page-9/body";


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Page1} />
        <Route path="/login" component={LoginPage} />
        <Route path="/form" component={Form} />
        <Route path="/survei" component={Survei} />
        <Route path="/datacalonsiswa" component={Cpd} />
        <Route path="/langkah2" component={Langkah2} />
        <Route path="/langkah4" component={Langkah4} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
