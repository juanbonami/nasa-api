import React from "react";
import { Grid, Image } from 'semantic-ui-react'

const AstroCard = (props) => {


  const { title, url, hdurl, explanation, date, copyright } = props.data;
  console.log(props.data)

  return (
    <div>

      <h3>Astronomy Photo of The Day</h3>

      <h6>{title}</h6>

      {/* <a href={hdurl}> */}

      {/* Here the the api displays a different image daily, and here's where the componentDidMount() method really shines bcs it updates any new information into the DOM. */}
      {/* <img src={url} alt={title} /> */}
      {/* <iframe width="420" height="315"
          src={url} alt={title}>
        </iframe> */}
      {/* </a> */}

      <Grid>
        <Grid.Column width={5}>
          <Image src={hdurl} alt={title} />
        </Grid.Column>
        <Grid.Column width={9}>
          <p>{explanation}</p>
        </Grid.Column>
      </Grid>



      <span>{date}, {copyright}</span>

    </div>
  )
};

export default AstroCard;
