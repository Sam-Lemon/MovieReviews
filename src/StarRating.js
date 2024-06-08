import React, { useState } from "react";
import { FaStar } from 'react-icons/fa';

 
/** Creating a 1-5 star rating scale for the reviews. 
 * At the top here I set the states for the rating stars, and the mouse
 * hover effect on the stars I am using. I used setters, setRating and
 * setHover to set the state to null to begin with, because no rating
 * had been made yet.*/
const StarRating = () => {
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);

/** Created an array with the 5 stars, mapped over them and returned 
 * the react icon star. The parameter i, and the const ratingValue
 * give each star of the array an index number, starting at one and
 * going up to five. When somebody clicks on the star, the rating will
 * be set to the then current value.
 * 
 ** I imported a star icon from react-icons and made the color change when 
 * the user's mouse hovers over it. And I also hide some radio buttons
 * behind the stars for all of this functionality. */
    return (
        <div className="star-ratings">
            {[ ...Array(5)].map((star, i) => {
                const ratingValue = i + 1;

                return (
                    <div key={i}>
                        <input 
                            className="radio-star-btn" 
                            type="radio" 
                            name="rating" 
                            value={ratingValue} 
                            onClick={() => setRating(ratingValue)} 
                        />
                        <FaStar 
                            className="star" 
                            color={ratingValue <= (hover || rating) ? "#F3D511" : "E7DFDF"} 
                            size="30" 
                            onMouseEnter={() => setHover(ratingValue)}
                            onMouseLeave={() => setHover (null)}
                            />
                    </div>
                );
            })}
        </div>
    )
}
export default StarRating;


/** If I have the opportunity in the future, I'd like to make each star it's own color
 * instead of them all being yellow.*/


