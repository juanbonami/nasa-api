import React, { Component } from 'react';
import axios from 'axios';


export default class GalleryApi extends Component {
    constructor(props) {
        super(props)

        this.state = {

            gallery: [],
            date: '',
            description: '',
            location: '',
            photographer: '',
            title: ''

        }
    }

    componentDidMount() {
        const api = 'https://images-api.nasa.gov/search?q=mars';

        axios.get(api)
            .then(response => {
                console.log(response)
                let items = response.data.collection.items;
                let imageCollection = [];
                let hi = [];
                for (let i = 0; i < items.length; i++) {
                    imageCollection.push(response.data.collection.items[i].href)
                    axios.get(imageCollection[i])
                        .then(res => {
                            hi.push(res.data[2])
                        })

                }
                console.log(items[0].data[0].title)
                console.log(hi)

                this.setState({

                    gallery: hi,
                    date: items[0].data[0].date_created,
                    description: items[0].data[0].description,
                    location: items[0].data[0].location,
                    photographer: items[0].data[0].photographer,
                    title: items[0].data[0].title

                })


            })
            .catch(error => {
                console.log(error, 'Failed to fetch data')
            })


    }

    render() {
        // const { gallery } = this.state;
        return (
            // <GalleryCard data={gallery} />
            <div>
                <img src={this.state.gallery[0]} height="200" width="200"></img>
                <img src={this.state.gallery[1]} height="200" width="200"></img>
                <img src={this.state.gallery[2]} height="200" width="200"></img>
                <img src={this.state.gallery[3]} height="200" width="200"></img>
                <img src={this.state.gallery[4]} height="200" width="200"></img>
                <img src={this.state.gallery[5]} height="200" width="200"></img>
                <img src={this.state.gallery[6]} height="200" width="200"></img>
                <img src={this.state.gallery[7]} height="200" width="200"></img>
                <img src={this.state.gallery[8]} height="200" width="200"></img>
                <img src={this.state.gallery[9]} height="200" width="200"></img>
                <img src={this.state.gallery[10]} height="200" width="200"></img>
                <img src={this.state.gallery[11]} height="200" width="200"></img>
                <img src={this.state.gallery[12]} height="200" width="200"></img>



            </div >

        )
    }
}
