import React, { Component } from 'react';
import axios from 'axios';
import { Segment, Input } from 'semantic-ui-react'
import { Button } from 'semantic-ui-react'
import { Grid, Image } from 'semantic-ui-react'
import logo from '../giphy/giphy.gif'


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
            <div className="gallery-color">
              
                <form onSubmit={this.submitHandler} >

                    <h1> Search the NASA Image Library </h1>
                    <Input type="text" name="name" value={this.userInput} onChange={this.changeHandler} inverted placeholder='Search...' />
                    <Button type="submit" primary>Search</Button>
                    
                </form>


                {this.state.gallery.map((iterate) => {

                    return (
                        <div>
                            {/* <img src={iterate.links[0].href} height="300" width="300"></img>
                            <h1> {iterate.data[0].description} </h1> */}
                            <Grid celled>
                                <Grid.Row style={{ paddingLeft: 100 }}>
                                    <Grid.Column width={5}>
                                        <Image src={iterate.links[0].href} />
                                    </Grid.Column>
                                    <Grid.Column width={10}>
                                        <p> {iterate.data[0].description} </p>
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                        </div>
                    )
                })}

             
            </div>
            

        )
    }
}
