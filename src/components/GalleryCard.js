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
    state = { activeItem: 'Home' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state

        return (
            <Segment inverted>
                <Menu inverted pointing secondary>
                    {/* <Router> */}

                    <Menu.Item
                        name='Home'
                        active={activeItem === 'Home'}
                        onClick={this.handleItemClick}
                        as={Link}
                        to='/'
                    />

                    <Menu.Item
                        name='Gallery'
                        active={activeItem === 'Gallery'}
                        onClick={this.handleItemClick}
                        as={Link}
                        to='/gallery'
                    />
                    <Menu.Item
                        name='About'
                        active={activeItem === 'About'}
                        onClick={this.handleItemClick}
                        as={Link}
                        to='/about'
                    />

                </Menu>
            </Segment>
        )
    }
}
