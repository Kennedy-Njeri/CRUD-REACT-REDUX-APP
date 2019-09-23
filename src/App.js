import React from 'react';
import './App.css';
import AppNavbar from "./components/layout/AppNavbar";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App() {
  return (
      <Router>
    <div className="App">
      <AppNavbar />
      <h1>Hello</h1>
    </div>
      </Router>
  );
}

export default App;
