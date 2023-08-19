import { Rating, AirbnbRating } from 'react-native-ratings';
// const WATER_IMAGE = require('./water.png');


const StarRating=({rating,size,showText})=>
{

  console.log(rating,size,showText)
  function ratingCompleted(rating) {
  console.log("Rating is: " + rating)
}

  return(
    <Rating
    type='custom'
    ratingCount={5}
    imageSize={size}
    startingValue={rating}
    readonly={true}
    showRating
    showReadOnlyText={showText}
    onFinishRating={ratingCompleted}
    fractions={5}
  />
  )
}

export default StarRating;








