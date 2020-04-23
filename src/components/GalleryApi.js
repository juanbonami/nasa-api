import React, { Component } from 'react';
import axios from 'axios';


export default class GalleryApi extends Component {
    constructor(props) {
        super(props)

        this.state = {

            gallery: []

        }
    }

    componentDidMount() {
        const api = 'https://images-api.nasa.gov/search?q=mars';

        axios.get(api)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error, 'Failed to fetch data')
            })
    }




    render() {
        return (
            <div>

            </div>
        )
    }
}
