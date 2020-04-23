import React, { Component } from 'react';
import axios from 'axios';
import GalleryCard from './GalleryCard';


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
                const imageCollection = response.data.collection.items[0].href



                console.log(imageCollection)
            })

            .get(imageCollection)
            .then(resp => {
                const imageReturn = resp[2]
                this.setState({
                    gallery: imageReturn
                })
            })
            .catch(error => {
                console.log(error, 'Failed to fetch data')
            })
    }


    render() {
        const { gallery } = this.state;
        return (
            <div>
                <GalleryCard data={gallery} />
            </div>
        )
    }
}
