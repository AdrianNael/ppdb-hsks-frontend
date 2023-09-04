// src/App.js
import React from "react";
<<<<<<< Updated upstream
import { BrowserRouter as Router } from "react-router-dom";
import Page1 from "./Components/Pages/Page-1/Body";
=======
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Body1 from "./Components/Pages/Page-1/body";
import LoginPage from "./Components/Pages/Page-2/Body2";
import Form from "./Components/Pages/Page-3/Body3"

>>>>>>> Stashed changes

function App() {
  return (
    <Router>
<<<<<<< Updated upstream
      <Page1 />
=======
      <Switch>
        <Route exact path="/" component={Body1} />
        <Route path="/login" component={LoginPage} />
        <Route path="/form" component={Form} />
      </Switch>
>>>>>>> Stashed changes
    </Router>
  );
}

export default App;
