// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import PPDBForm from './Components/PPDBForm';
import Kontak from './Components/Pages/Kontak';
import Home from './Components/Pages/Home';
import Header from './Components/Organisms/Header';
import About from './Components/Pages/About'

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Kontak} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
