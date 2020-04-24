import React from "react";

const AstroCard = (props) => {


  const { title, url, hdurl, explanation, date, copyright } = props.data;
  console.log(props.data)

  return (
    <div>

      <h3>Astronomy Photo of The Day</h3>

      <h6>{title}</h6>

      <a href={hdurl}>
        {/* <img src={url} alt={title} /> */}
        <iframe width="420" height="315"
          src={url} alt={title}>
        </iframe>
      </a>

      <p>{explanation}</p>

      <span>{date}, {copyright}</span>

    </div>
  )
};

export default AstroCard;
