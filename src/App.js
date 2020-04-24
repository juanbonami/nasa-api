import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import "./App.css";
import AstroApi from "./components/AstroApi";
import About from "./components/About";
import GalleryApi from "./components/GalleryApi";
import GalleryCard from "./components/GalleryCard";

function App() {
  return (
    <div className="App">

      <Router>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/about">About</Link>
        </nav>

        <Switch>
          <Route path="/gallery" component={GalleryApi} />
          <Route path="/about" component={About} />
          <Route path="/" component={AstroApi} />
        </Switch>
      </Router>
      {/* <GalleryApi /> */}
    </div>
  );
}

export default App;
