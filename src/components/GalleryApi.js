import React, { Component } from 'react';
import axios from 'axios';
import { Segment, Input } from 'semantic-ui-react'
import { Button } from 'semantic-ui-react'
import { Grid, Image, Divider } from 'semantic-ui-react'
import { Icon } from 'semantic-ui-react'



export default class GalleryApi extends Component {
    constructor(props) {
        super(props)

        this.state = {

            gallery: [],
            userInput: ''

        }
        this.changeHandler = this.changeHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
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
                console.log(Response);
                this.setState({
                    gallery: Response.data.collection.items,
                    status: Response.status
                })
                console.log(this.state.status)
            })
            .catch(error => {
                console.log(error)
            })
    }




    render() {
        
            return (
            // <GalleryCard data={gallery} />
            <div className="gallery-color">
              
                <form onSubmit={this.submitHandler} >

                <Segment placeholder inverted>
                    <Grid columns={1} relaxed='very' stackable>
                        <Grid.Column>
                            <h1> Search the NASA Image Library </h1>
                            <h5> <u> <Icon circular inverted name='arrow alternate circle down outline' /> search below </u></h5>
                            <p> ex: spacex </p>
                            <Input type="text" name="name" value={this.userInput} onChange={this.changeHandler} inverted placeholder='Search...' />                          
                        </Grid.Column>

                        <Grid.Column verticalAlign='middle'>
                            <Button type="submit" primary>Search</Button>
                        </Grid.Column>
                    </Grid>
                    <Icon circular inverted name='search' />
                </Segment>

                </form>
                
                <div className="image-layout">
                    {this.state.gallery.map((iterate, index) => {
                        if (iterate.data[0].media_type === 'image') {
                            return (
                                <React.Fragment key={index}>
                                <div className="image-container">
                                    <img className="searched-image" src={iterate.links[0].href} alt="nasa" />
                                    <h2 className="searched-description">{iterate.data[0].description}</h2>
                                </div>
                                </React.Fragment>
                            );
                        }
                    })}
                </div>
                 
            </div>
        )
        
    }
}
