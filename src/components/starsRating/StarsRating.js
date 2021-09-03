import ReactStars from "react-rating-stars-component/dist/react-stars";

export default function StarsRating ({movie: {vote_average}}) {

    const stars = {
        count: 10,
        size: 18,
        value: vote_average,
        edit: false,
        color: "blue",
        activeColor: "red",
    };

    return (
        <ReactStars {...stars}/>
    );
 }
