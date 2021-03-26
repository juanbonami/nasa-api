import React from "react";
import { Grid, Image } from 'semantic-ui-react'

const AstroCard = (props) => {


  const { title, hdurl, url, media_type, explanation, date, copyright } = props.data;
  console.log(props.data)

  if (media_type === 'video') {
    return (
    <div className="astro-color">   

      <h6>{title}</h6>
      <span>{date} {copyright}</span>
      <div className="container-img-des">
        <div className="container-image">
        <iframe className="image-of-the-day" src={url} title="video of the day"> Your browser does not support the video tag.</iframe>  
      </div>
      <div className="container-description">
        <p>{explanation}</p> 
      </div>
      </div>
          
      
    </div>
    
  )
  } else {
    
    return (
      <div className="home-container">   
        <h6>{title}</h6>
        <span>{date} {copyright}</span>
        <div className="container-img-des">
          <div className="container-image">
            <img className="image-of-the-day" src={hdurl} alt={title}></img>  
          </div>
          <div className="container-description">
            <p>{explanation}</p> 
          </div>
        </div>
      </div>
    )
  }
};

export default AstroCard;
