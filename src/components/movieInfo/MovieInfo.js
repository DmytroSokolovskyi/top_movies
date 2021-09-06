import {getMoviesByGenre, imageURL} from "../../services";
import cl from './MovieInfo.module.css'
import MyBadge from "../UI/myBadge/MyBadge";
import StarsRating from "../starsRating/StarsRating";
import Images from "../images/Images";


export default function MovieInfo({
                                      movie,
                                      movie: {
                                          id,
                                          title,
                                          poster_path,
                                          genres,
                                          release_date,
                                          tagline,
                                          vote_average,
                                          spoken_languages,
                                          production_countries,
                                          runtime,
                                          overview
                                      }
                                  }) {

    // const history = useHistory();
    //
    // const dispatch = useDispatch();
    // const gotoGenre = (id) => {
    //
    //     history.push(`/`);
    //     dispatch(getMoviesByGenre(id));
    // };

    return (
        <>
            {movie &&
            <div className={cl.mainMovieInfo}>
                <div className={cl.imgPosterDiv}>
                    <img className={cl.imgPoster} src={imageURL + poster_path} alt={title}/>
                    <div className={cl.genreList}>
                        {genres && genres.map(value => <MyBadge key={value.id}>{value.name}</MyBadge>)}
                    </div>
                </div>
                <div className={cl.allImg}>
                    <Images id={id}/>
                </div>
                <div className={cl.textInfo}>
                    <ul>
                        <h2>{title}</h2>
                        <h4> {tagline} </h4>

                        <li> Release date : <p>{release_date}</p></li>
                        <li> Vote average : <StarsRating starsMovie={vote_average}/></li>
                        <li> Production countries : {production_countries && production_countries.map(c => <p
                            key={c.name}>{c.name}</p>)} </li>
                        <li> Languages : <p>{production_countries && spoken_languages.map(l => <span
                            key={l.name}> {l.name} </span>)} </p></li>
                        <li> Runtime : <p> {runtime} </p></li>
                        <li> Overview : {overview} </li>

                    </ul>
                </div>
            </div>
            }
        </>
    );
}