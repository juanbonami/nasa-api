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
import Footer from "./components/Footer";
import ImageBody from "./components/ImageBody";
import ImageBodyTwo from "./components/ImageBodyTwo";

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}

      
      <Router>
        
        <Navbar />
        <IssTracker />
        <ImageBody/>
        <Route exact path="/gallery" component={GalleryApi} />
        <Route exact path="/about" component={About} />
        <Route exact path="/" component={AstroApi} />
      </Router>
      <ImageBodyTwo/>
      <Footer />

    </div>
  );
}

export default App;
