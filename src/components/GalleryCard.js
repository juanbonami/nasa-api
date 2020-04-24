import React from 'react'

const GalleryCard = (props) => {

    let { arr } = props.data;
    console.log(props.data)


    return (
        <div>
            <img src={arr} alt="" />
            <p>{arr}</p>
        </div>
    )
}

export default GalleryCard;