import React, { Component } from 'react'
import axios from 'axios';
import { Icon } from 'semantic-ui-react'

export default class IssTracker extends Component {
    constructor(props) {
        super(props)

        this.state = {
            latitude: '',
            longitude: ''
        }
    }


    componentDidMount() {

        setInterval(() => {
            axios.get('https://api.open-notify.org/iss-now.json')
                .then(Response => {
            
                    this.setState({

                        latitude: Response.data.iss_position.latitude,
                        longitude: Response.data.iss_position.longitude

                    })
                })
                .catch(error => {
                    console.log(error)
                })
        }, 1000)


    }




    render() {
        return (
            <div className="iss-color">              
                  <p> <Icon circular inverted name='map marker alternate' /> <b>The ISS is currently:</b> <b>{this.state.latitude}° N,</b> <b>{this.state.longitude}°E</b>  </p>  
            </div>
        )
    }
}
