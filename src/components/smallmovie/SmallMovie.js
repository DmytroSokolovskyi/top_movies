import cl from './SmallMovie.module.css';
import StarsRating from "../starsRating/StarsRating";
import {imageURL} from "../../services";
import {useHistory} from "react-router";

export default function SmallMovie ({movie, movie: {title ,poster_path, vote_average, release_date}}) {
    const history = useHistory();
    const goToInfo = () => {
        history.push(`/movie/${movie.id}`);
    };

    return (
        <div onClick={goToInfo} className={cl.mainSmall}>
            <img className={cl.smallImg} src={imageURL + poster_path} alt={title}/>
            <div className={cl.textSmall} >
                {release_date}
                <StarsRating starsMovie={vote_average}/>
                {title}
            </div>
            
        </div>
    );
 }
