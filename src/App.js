import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import AstroApi from './components/AstroApi';
import About from './components/About';
import GalleryApi from './components/GalleryApi';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import IssTracker from "./components/IssTracker";

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}


      <Router>
        <Navbar />
        <IssTracker />
        <Route exact path="/gallery" component={GalleryApi} />
        <Route exact path="/about" component={About} />
        <Route exact path="/" component={AstroApi} />

      </Router>

    </div>
  );
}

export default App;
