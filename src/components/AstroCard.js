import React from "react";

const AstroCard = (props) => {


  const { title, url, hdurl, explanation, date, copyright } = props.data;

  return (
    <div>

      <h6>{title}</h6>

      <a href={hdurl}>
        <img src={url} alt={title} />
      </a>



    </div>
  )
};

export default AstroCard;
