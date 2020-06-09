import React, { Component } from 'react';
import axios from 'axios';
import { Segment, Input } from 'semantic-ui-react'


export default class GalleryApi extends Component {
    constructor(props) {
        super(props)

        this.state = {

            gallery: [],
            userInput: ''

        }
    }


    changeHandler = (e) => {

        this.setState({
            userInput: e.target.value
        })

    }



    submitHandler = (e) => {

        e.preventDefault()

        axios.get(`https://images-api.nasa.gov/search?q=${this.state.userInput}`)
            .then(Response => {

                this.setState({
                    gallery: Response.data.collection.items
                })
            })
            .catch(error => {
                console.log(error)
            })
    }




    render() {
        // const { gallery } = this.state;
        return (
            // <GalleryCard data={gallery} />
            <div>
                <form onSubmit={this.submitHandler} >
                    <div>
                        <p>Search</p>
                        <input type="text" name="name" placeholder="ex: earth, rover, jupiter" value={this.userInput} onChange={this.changeHandler} />
                    </div>
                    <button type="submit">Submit</button>
                </form>

                <Segment inverted>
                    <Input type="text" name="name" value={this.userInput} onChange={this.changeHandler} inverted placeholder='Search...' />
                </Segment>

                {this.state.gallery.map((iterate) => {

                    return (
                        <div>
                            <img src={iterate.links[0].href} height="300" width="300"></img>
                            <h1> {iterate.data[0].description} </h1>
                        </div>
                    )
                })}

            </div >

        )
    }
}
