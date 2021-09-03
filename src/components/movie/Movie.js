import StarsRating from "../starsRating/StarsRating";
import {imageURL} from "../../services/config";
import cl from './Movie.module.css'
import {useHistory} from "react-router";
import {useState} from "react";


export default function Movie({movie, movie: {title, poster_path, overview}}) {
    const history = useHistory();

        let [moreInfo, setMoreInfo] = useState(false);
    // console.log(movie);

    const goToInfo = () => {
        history.push(`/${movie.id}`)
    };

    return (
        <div className={cl.movie}
             onMouseEnter={() => {setMoreInfo(true)}}
             onMouseLeave={() => {setMoreInfo(false)}}
             onClick={goToInfo}>
            <div className={cl.stars}>
                <StarsRating movie={movie}/>
            </div>
            { moreInfo ? <div className={cl.info}>{overview}</div>  :
                <img className={cl.img} src={imageURL + poster_path} alt=""/>
            }
            <div className={cl.title}>
                {title}
            </div>
        </div>
    );
}
