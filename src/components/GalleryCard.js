import React from 'react'

const GalleryCard = (props) => {

    let arr = props.data;
    // console.log(props.data)




    return (
        <div>

            {/* <img src={arr[0]} alt="" height="200" width="200" ></img>
            <img src={arr[1]} alt="" height="200" width="200" ></img>
            <img src={arr[2]} alt="" height="200" width="200" ></img>
            <img src={arr[3]} alt="" height="200" width="200" ></img>
            <img src={arr[4]} alt="" height="200" width="200" ></img>
            <img src={arr[5]} alt="" height="200" width="200" ></img>
            <img src={arr[6]} alt="" height="200" width="200" ></img>
            <img src={arr[7]} alt="" height="200" width="200" ></img>
            <img src={arr[8]} alt="" height="200" width="200" ></img>
            <img src={arr[9]} alt="" height="200" width="200" ></img> */}

            <form>

                <input type="text" name="search" placeholder="search" />
                <button>Search</button>
            </form>

        </div>
    )
}

export default GalleryCard;