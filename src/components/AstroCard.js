import React from "react";
import { Grid, Image } from 'semantic-ui-react'

const AstroCard = (props) => {


  const { title, url, hdurl, explanation, date, copyright } = props.data;
  console.log(props.data)

  return (
    <div>

      <h3>Astronomy Photo of The Day</h3>

      <h6>{title}</h6>

      <Grid style={{
        paddingLeft: 130
      }}>
        <Grid.Column width={5}>
          <Image src={hdurl} alt={title} />
          <span>{date}, {copyright}</span>
        </Grid.Column>
        <Grid.Column width={9}>
          <p>{explanation}</p>
        </Grid.Column>
      </Grid>



    </div>
  )
};

export default AstroCard;
