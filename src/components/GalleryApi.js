import React, { Component } from 'react';
import axios from 'axios';
import { Segment, Input } from 'semantic-ui-react'
import { Button } from 'semantic-ui-react'
import { Grid, Image, Divider } from 'semantic-ui-react'
import { Icon } from 'semantic-ui-react'
import logo from '../giphy/giphy.gif'
import ImageBodyTwo from './ImageBodyTwo';


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

                <Segment placeholder inverted>
                    <Grid columns={2} relaxed='very' stackable>
                        <Grid.Column>
                            <h1> Search the NASA Image Library </h1>
                            <h5> <u> <Icon circular inverted name='arrow alternate circle down outline' /> search below </u></h5>
                            <p> ex: spacex </p>
                            <Input type="text" name="name" value={this.userInput} onChange={this.changeHandler} inverted placeholder='Search...' />                          
                        </Grid.Column>

                        <Grid.Column verticalAlign='middle'>
                            <Button style={{paddingLeft: 80, paddingRight: 80}} type="submit" primary>Search</Button>
                        </Grid.Column>
                    </Grid>
                    <Divider vertical inverted> <Icon circular inverted name='search' /> </Divider>
                </Segment>

                    
                    
                </form>


                {this.state.gallery.map((iterate) => {

                    return (
                        <div style={{paddingTop: 80}}>
                            {/* <img src={iterate.links[0].href} height="300" width="300"></img>
                            <h1> {iterate.data[0].description} </h1> */}
                            <Grid celled>
                                <Grid.Row style={{ paddingLeft: 100 }}>
                                    <Grid.Column width={5}>
                                        <Image src={iterate.links[0].href} />
                                    </Grid.Column>
                                    <Grid.Column width={10}>
                                        <h2> {iterate.data[0].description} </h2>
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
