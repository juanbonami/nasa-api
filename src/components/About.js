import React, { Component } from 'react'
import { Divider } from 'semantic-ui-react'

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

                    <p>The ISS tracker makes a get request using a diffrent API and we use the longitude and latitude from the response we get after we make the request. Then we use that information and set an interval of 1 second. The data gets updated every second for the user.</p>
                 
            </div>
                
           
        )
    }
}
