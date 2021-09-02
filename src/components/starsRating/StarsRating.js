import ReactStars from "react-rating-stars-component/dist/react-stars";

export default function StarsRating () {


    return (
        <div>

            <ReactStars
                count={5}
                // onChange={ratingChanged}
                size={24}
                isHalf={true}
                emptyIcon={<i className="far fa-star"></i>}
                halfIcon={<i className="fa fa-star-half-alt"></i>}
                fullIcon={<i className="fa fa-star"></i>}
                activeColor="#ffd700"
            />
            {/*<ReactStars*/}
            {/*    count={5}*/}
            {/*    onChange={ratingChanged}*/}
            {/*    size={24}*/}
            {/*    activeColor="#ffd700"*/}
            {/*/>*/}
        </div>
    );
 }
