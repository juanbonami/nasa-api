import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import AstroApi from './AstroApi';
import About from './About';
import GalleryApi from './GalleryApi';

export default class Navbar extends Component {
    render() {
        return (
            <div>
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
            </div>
        )
    }
}
