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

            </div >

        )
    }
}
