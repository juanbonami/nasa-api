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
                console.log(response)
                let items = response.data.collection.items;
                let imageCollection = [];
                for (let i = 0; i < items.length; i++) {
                    imageCollection.push(response.data.collection.items[i].href)
                    // console.log(i)

                }
                console.log(imageCollection)
                // return axios.get(imageCollection)
                this.setState({
                    gallery: imageCollection
                })
                console.log(imageCollection)


            })
            // .then(resp => {
            //     console.log(resp)
            //     this.setState({
            //         gallery: resp.data[2]
            //     })
            // })
            .catch(error => {
                console.log(error, 'Failed to fetch data')
            })
    }

    render() {
        const { gallery } = this.state;
        return (
            <GalleryCard data={gallery} />

        )
    }
}
