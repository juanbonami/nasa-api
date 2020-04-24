import React from 'react'

const GalleryCard = (props) => {

    let arr = props.data;
    console.log(props.data)


    return (
        <div>

            <a>
                <img src={arr} alt="" />
            </a>



        </div>
    )
}

export default GalleryCard;