import React, { Component } from "react";
import AstroCard from "./AstroCard.js";
import axios from "axios";

export default class AstroApi extends Component {
  constructor(props) {
    super(props);

    this.state = {
      astronomy: [],
    };
  }

  componentDidMount() {
    const myKey = "xp8SpsC40TLKmrKrAMuuiSBvVaaWTQh0ulMwA6g9";
    const endPoint = "https://api.nasa.gov/planetary/apod?api_key=";

    axios
      .get(endPoint + myKey)
      .then((response) => {

        this.setState({

          astronomy: response.data

        })
        console.log(this.state.astronomy);
      })
      .catch((error) => {
        console.log(error, "Failed to fetch data");
      });
  }

  render() {
    const { astronomy } = this.state;
    return (
      <AstroCard data={astronomy} />
    )
  }
}
