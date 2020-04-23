import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "./App.css";
import AstroApi from "./components/AstroApi";

function App() {
  return (
    <div className="App">
      <AstroApi />
    </div>
  );
}

export default App;
