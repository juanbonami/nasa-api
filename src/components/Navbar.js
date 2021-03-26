import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from "react-router-dom";

export default class Navbar extends Component {
    state = { activeItem: 'Home' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state

        return (
            <div className="nav-color">
              
                <Menu inverted pointing secondary>

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
                    {/* <Menu.Item
                        name='About'
                        active={activeItem === 'About'}
                        onClick={this.handleItemClick}
                        as={Link}
                        to='/about'
                    /> */}

                </Menu>
             
            </div>
            
        )
    }
}
