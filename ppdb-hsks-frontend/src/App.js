// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import PPDBForm from './Components/PPDBForm';
import Kontak from './Components/Pages/Kontak';

function App() {
  return (
    <Router>
      <div>
        <nav className="p-4 bg-gray-900 text-white">
          <ul className="flex">
            <li className="mr-6">
              <Link to="/">Beranda</Link>
            </li>
            <li>
              <Link to="/kontak">Kontak</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/kontak">
            <Kontak />
          </Route>
          <Route path="/">
            <div className="flex justify-center items-center h-screen bg-gray-100">
              <PPDBForm />
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
