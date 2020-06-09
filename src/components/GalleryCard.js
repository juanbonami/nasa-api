import React, { Component } from 'react'
import { Menu, Segment } from 'semantic-ui-react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import AstroApi from './AstroApi';
import About from './About';
import GalleryApi from './GalleryApi';

export default class GalleryCard extends Component {
    state = { activeItem: 'home' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state

        return (
            <Segment inverted>
                <Menu inverted pointing secondary>
                    <Menu.Item
                        name='Home'
                        active={activeItem === 'Home'}
                        onClick={this.handleItemClick}

                    />
                    <Menu.Item
                        name='Gallery'
                        active={activeItem === 'Gallery'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item
                        name='About'
                        active={activeItem === 'About'}
                        onClick={this.handleItemClick}
                    />

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
                </Menu>
            </Segment>
        )
    }
}
