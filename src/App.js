import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import "./App.css";
import AstroApi from "./components/AstroApi";

function App() {
  return (
    <div className="App">

      <Router>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/about">About</Link>
        </nav>
      </Router>
      <AstroApi />
    </div>
  );
}

export default App;
