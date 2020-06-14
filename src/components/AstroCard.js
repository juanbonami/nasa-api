import React from "react";
import { Grid, Image, Segment } from 'semantic-ui-react'

const AstroCard = (props) => {


  const { title, hdurl, url, media_type, explanation, date, copyright } = props.data;
  console.log(props.data)

  if (media_type === 'video') {
    return (
    <div className="astro-color">   

      <h3>Astronomy Photo of The Day</h3>
      <h6 style={{paddingTop: 20}}>{title}</h6>  

      <Grid style={{
        paddingLeft: 130
      }}>
        <Grid.Column width={5}>
          
          {/* <Image src={hdurl} alt={title} /> */}
          {title}
          <iframe src={url} style={{border: 'none'}} height="300" width="500"> Your browser does not support the video tag.</iframe>
          <br/>
          <span>{date} {copyright}</span>
        </Grid.Column>
        <Grid.Column width={9} style={{paddingTop: 70}}>
          <p>{explanation}</p>
        </Grid.Column>
      </Grid>
    </div>
    
  )
  } else {
    
    return (
      <div className="astro-color">   
  
        <h3>Astronomy Photo of The Day</h3>
        <h6 style={{paddingTop: 20}}>{title}</h6>  
  
        <Grid style={{
          paddingLeft: 130
        }}>
          <Grid.Column width={5}>
            
            <Image src={hdurl} alt={title} />
            <span>{date} {copyright}</span>
          </Grid.Column>
          <Grid.Column width={9} style={{paddingTop: 70}}>
            <p>{explanation}</p>
          </Grid.Column>
        </Grid>
      </div>
      
    )
  }
  
};

export default AstroCard;
