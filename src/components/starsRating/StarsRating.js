import ReactStars from "react-rating-stars-component/dist/react-stars";
import React, {memo} from "react";

export default memo( function StarsRating ({starsMovie}) {
    const stars = {
        count: 10,
        size: 18,
        value: starsMovie,
        edit: false,
        color: "blue",
        activeColor: "red",
    };

    return (
        <ReactStars {...stars}/>
    );
 }
)