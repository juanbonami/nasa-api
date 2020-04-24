import React from 'react'

const GalleryCard = (props) => {

    let arr = props.data;
    console.log(props.data)


    return (
        <div>

            <img src={arr} alt="" height="300" width="300" />

        </div>
    )
}

export default GalleryCard;