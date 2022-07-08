import React, { useState } from "react";
import {IoStarOutline, IoStar} from 'react-icons/io5'


function Rating(props) {

    const [rating, setRating] = useState(props.rating)
    const styles = {
        starStyle: {
            color: 'orange'
        }
    }

    return(
        <div style={styles.starStyle}>
            <h1>Rating: {rating}</h1>
(
            {rating >= 1 ? (<IoStar onClick={() => setRating(1)} />) : (<IoStarOutline onClick={() => setRating(1)} />)}

            {rating >= 2 ? (<IoStar onClick={() => setRating(2)} />) : (<IoStarOutline onClick={() => setRating(2)} />)}

            {rating >= 3 ? (<IoStar onClick={() => setRating(3)} />) : (<IoStarOutline onClick={() => setRating(3)} />)}

            {rating >= 4 ? (<IoStar onClick={() => setRating(4)} />) : (<IoStarOutline onClick={() => setRating(4)} />)}

            {rating >= 5 ? (<IoStar onClick={() => setRating(5)} />) : (<IoStarOutline onClick={() => setRating(5)} />)}
        </div>
    );
}

export default Rating;