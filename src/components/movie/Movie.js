import StarsRating from "../starsRating/StarsRating";
import cl from './Movie.module.css'
import {useHistory} from "react-router";
import {useState} from "react";
import {imageURL} from "../../services";


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
                <StarsRating starsMovie={movie.vote_average}/>
            </div>
            <div className={cl.switch}>
                { moreInfo ? <div className={cl.info}>{overview}</div>  :
                    <img className={cl.imgPoster} src={imageURL + poster_path} alt=""/>
                }
            </div>

            <div className={cl.title}>
                <p>{title}</p>
            </div>
        </div>
    );
}
