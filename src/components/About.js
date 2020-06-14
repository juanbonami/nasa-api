import React, { Component } from 'react'
import { Divider, Segment } from 'semantic-ui-react'

export default class About extends Component {
    render() {
        return (
            <div className="about-color">
               
                    <p>This site uses a couple of APIs (Application Programming Interface). This site makes a connection to the NASA Astronomy picture of the day API and the ISS Tracker both which you can find under Services in the footer of this website.</p>

                    <p>The connection is made with a GET request using Axios. Axios gets data from NASAs servers and by using Axios, it automatically returns the information in a JSON format. </p>
                    <Divider horizontal inverted>
                        ABOUT THIS SITE
                    </Divider>
                    <p>The Home section of this webpage will automatically update daily with a new image or video along with it's description and title etc. The Gallery section will provide the user with the option to search the NASA image library.</p>

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                 
            </div>
                
           
        )
    }
}
