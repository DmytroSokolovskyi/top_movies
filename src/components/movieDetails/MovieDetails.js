import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getMovieInfo} from "../../services";
import cl from "./MovieDetails.module.css"
import Movie from "../movie/Movie";
import Companies from "../companies/Companies";
import Images from "../images/Images";
import MovieInfo from "../movieInfo/MovieInfo";
import SimilarMovies from "../similarMovies/SimilarMovies";

export default function MovieDetails({match, match: {url, params: {id}}}) {
    const state = useSelector(state => state.infoReducer);
    const {movie, lastMovies} = state;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMovieInfo(url))
    }, [dispatch, url]);

    const toRenderLast = lastMovies.filter(value => value.id !== movie.id);


    return (
        <div className={cl.divDetails}>
            <div className={cl.aboutMovie}>
                <div className={cl.companies}>
                    <Companies companies={movie.production_companies}/>
                </div>
                <div className={cl.info}>
                    <MovieInfo movie={movie}/>
                </div>
                <div className={cl.intresting}>
                    <SimilarMovies id={id}/>
                </div>
            </div>
            <div className={cl.look}>
                {toRenderLast && toRenderLast.map(value => <Movie key={value.id} movie={value}/>)}
            </div>
        </div>
    );
}
