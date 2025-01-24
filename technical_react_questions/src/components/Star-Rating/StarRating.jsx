import React, { useState } from 'react'
import "./StarRating.css";

const StarRating = ({ maxStars = 5, initialRating = 0 }) => {
    const [currentRating, setCurrantRating] = useState(initialRating);
    const [hoverRating, setHoverRating] = useState(0);

    const handleClick = (rating) =>{
        setCurrantRating(rating);
    };

    const handleMouseEnter = (rating) => {
        setHoverRating(rating);
    };

    const handleMouseLeave = () =>{
        setHoverRating(0);
    };
  return (
    <div className='star-rating'>
        {Array.from({ length: maxStars }, (_, index) => {
            const starNumber = index + 1;
            const isFilled = hoverRating >= starNumber || (!hoverRating && currentRating >= starNumber);

            return(
                <span 
                  key={starNumber}
                  className={`star ${isFilled ? "filled" : "empty"}`}
                  onClick={() => handleClick(starNumber)}
                  onMouseEnter={() => handleMouseEnter(starNumber)}
                  onMouseLeave={handleMouseLeave}
                >
                    {isFilled ? "\u2605" : "\u2606"} {/* Unicode for filled and empty stars */}
                </span>
            );
        })}
    </div>
  )
}

export default StarRating