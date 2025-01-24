import React from 'react'
import StarRating from './StarRating';

const StarRatingMain = () => {
  return (
    <div>
        <h1>Star rating widget</h1>
        <StarRating maxStars={5} initialRating={3}/>
        <StarRating maxStars={10} initialRating={7}/>
    </div>
  )
}

export default StarRatingMain