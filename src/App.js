import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import "./App.css";
import AstroApi from "./components/AstroApi";
import Home from "./components/Home";
import Gallery from "./components/Gallery";
import About from "./components/About";

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

          <Route path="/gallery" component={Gallery} />
          <Route path="/about" component={About} />
          <Route path="/" component={AstroApi} />
        </Switch>
      </Router>
      {/* <AstroApi /> */}
    </div>
  );
}

export default App;
