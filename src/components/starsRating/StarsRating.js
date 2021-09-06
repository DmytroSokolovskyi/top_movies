import ReactStars from "react-rating-stars-component/dist/react-stars";

export default function StarsRating ({starsMovie}) {

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
