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
                    info: Response.data
                })
            })
            .catch(error => {
                console.log(error)
            })

    }




    render() {
        return (
            <div>

            </div>
        )
    }
}
