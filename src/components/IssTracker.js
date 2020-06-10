import React, { Component } from 'react'
import axios from 'axios';

export default class IssTracker extends Component {
    constructor(props) {
        super(props)

        this.state = {
            latitude: '',
            longitude: ''
        }
    }


    componentDidMount() {

        axios.get('http://api.open-notify.org/iss-now.json')
            .then(Response => {
                console.log(Response.data.iss_position.latitude)
                this.setState({

                    latitude: Response.data.iss_position.latitude,
                    longitude: Response.data.iss_position.longitude

                })
            })
            .catch(error => {
                console.log(error)
            })

    }




    render() {
        return (
            <div>
                <p> The ISS is currently over {this.state.latitude}° N, {this.state.longitude}°E </p>
            </div>
        )
    }
}
