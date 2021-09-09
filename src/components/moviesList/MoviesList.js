import React, {memo} from "react";
import {useDispatch, useSelector} from "react-redux";
import Movie from "../movie/Movie";
import cl from './MoviesList.module.css'
import MyPagination from "../UI/paginations/Paginations";
import {useEffect} from "react";
import {getMoviesNew} from "../../services";
import Loading from "../../pages/loading/Loading";

export default memo(function MoviesList(props) {

        const {moviesReducer} = useSelector(state => state);
        const {movies} = moviesReducer;
        const dispatch = useDispatch();
        const {params, url} = props.match;

        useEffect(() => {
            dispatch(getMoviesNew(params, url));
        }, [url]);

        return (
            <div className={cl.mainList}>
                <MyPagination/>
                <div className={cl.mList}>
                    {!movies ? <Loading/> : movies.map(movie => <Movie key={movie.id} movie={movie}/>)}
                </div>
            </div>

        );
    }
);