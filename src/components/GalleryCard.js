import React, { Component } from 'react'

const GalleryCard = (props) => {

    const { arr } = props.data;


    return (
        <div>
            <img src={arr} />
        </div>
    )
}

export default GalleryCard;