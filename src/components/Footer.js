import React, { Component } from 'react'
import { Icon } from 'semantic-ui-react'

export default class Footer extends Component {
    render() {
        return (
            <div className="main-footer">
                <div className="container-footer">
                    <div className="row">
                        <div className="col-md-3 col-sm-6">
                            <h4>Contact</h4>
                            <ul className="list-unstyled">
                                <br/>
                                <li> <Icon circular inverted name='mail' /> juanbonami@gmail.com</li>                              
                                <li> <Icon circular inverted name='github' /> <a href="https://github.com/juanbonami"> Github </a></li>
                                <li> <Icon circular inverted name='linkedin' /> <a href="https://www.linkedin.com/in/juan-bonami-261909128/">LinkedIn</a></li>
                            </ul>
                        </div>

                        <div className="col-md-3 col-sm-6">
                            <h4>Services</h4>
                            <ul className="list-unstyled">
                                <br/>
                                <li><a href="https://api.nasa.gov/">NASA Astronomy Picture of The Day</a></li>
                                <li><a href="http://open-notify.org/Open-Notify-API/ISS-Location-Now/">ISS Tracker</a></li>
                            </ul>
                        </div>

                        <div className="col-md-3 col-sm-6">
                            <h4>Lorem ipsum</h4>
                            <ul className="list-unstyled">
                                <li>Lorem ipsum</li>
                                <li>Lorem ipsum</li>
                                <li>Lorem ipsum</li>
                                <li>Lorem ipsum</li>
                            </ul>
                        </div>

                        <div className="col-md-3 col-sm-6">
                            <h4>Lorem ipsum</h4>
                            <ul className="list-unstyled">
                                <li>Lorem ipsum</li>
                                <li>Lorem ipsum</li>
                                <li>Lorem ipsum</li>
                                <li>Lorem ipsum</li>
                            </ul>
                        </div>
                    </div>
                    <br />

                        <br />
                        <br />
                        <div className="footer-bottom">
                            <p className="text-xs-center">
                                &copy;{new Date().getFullYear()} NASA-API Project App - All Rights Reserved
                            </p>   
                        </div>
                </div>
            </div>
        )
    }
}
