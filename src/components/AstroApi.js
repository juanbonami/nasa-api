import React, { Component } from "react";
import AstroCard from "./components/AstroCard";
import axios from "axios";

export default class AstroApi extends Component {
  constructor(propr) {
    super(props);

    this.state = {
      astronomy: [],
    };
  }

  componentDidMount() {
    const myKey = "xp8SpsC40TLKmrKrAMuuiSBvVaaWTQh0ulMwA6g9";
    const endPoint = "https://api.nasa.gov/planetary/apod?api_key=";

    axios
      .get(myKey + endPoint)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error, "Failed to fetch data");
      });
  }

  render() {
    return <div></div>;
  }
}
