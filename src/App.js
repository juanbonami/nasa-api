import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import GalleryCard from "./components/GalleryCard";
import AstroApi from './components/AstroApi';
import About from './components/About';
import GalleryApi from './components/GalleryApi';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import IssTracker from "./components/IssTracker";

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}


      <Router>
        <GalleryCard />
        <IssTracker />
        <Route exact path="/gallery" component={GalleryApi} />
        <Route exact path="/about" component={About} />
        <Route exact path="/" component={AstroApi} />

      </Router>

    </div>
  );
}

export default App;
