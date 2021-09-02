import StarsRating from "../starsRating/StarsRating";
import {imageURL} from "../../services/config";
import cl from './Movie.module.css'


export default function Movie ({movie, movie:{title, poster_path}}) {
    console.log(movie);
    return (
        <div className={cl.movie}>
            <div>
             <StarsRating/>
            </div>
            <div className={cl.divImg}>
                <img className={cl.img} src={imageURL + poster_path} alt=""/>
            </div>
            <div>
                {title}
            </div>
        </div>
    );
 }
