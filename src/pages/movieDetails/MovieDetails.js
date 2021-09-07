import React, {memo} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getMovieInfo} from "../../services";
import cl from "./MovieDetails.module.css";
import Movie from "../../components/movie/Movie";
import Companies from "../../components/companies/Companies";
import MovieInfo from "../../components/movieInfo/MovieInfo";
import SimilarMovies from "../../components/similarMovies/SimilarMovies";

export default memo(
    function MovieDetails({match: {url, params: {id}}}) {
        const {infoReducer} = useSelector(state => state);
        const {movie, lastMovies, similar} = infoReducer;
        const dispatch = useDispatch();

        useEffect(() => {
            dispatch(getMovieInfo(url));
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
                        <SimilarMovies id={id} similar={similar}/>
                    </div>
                </div>
                <div className={cl.look}>
                    {toRenderLast && toRenderLast.map(value => <Movie key={value.id} movie={value}/>)}
                </div>
            </div>
        );
    }
)
