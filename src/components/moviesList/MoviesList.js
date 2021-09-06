import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import Movie from "../movie/Movie";
import cl from './MoviesList.module.css'
import MyPagination from "../UI/paginations/Paginations";
import {getMovies} from "../../services";
export default function MoviesList() {

    const state = useSelector(state => state.moviesReducer);
    const {movies} = state;
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getMovies())
    }, [dispatch]);

    return (
        <div className={cl.mainList}>
            <MyPagination state={state} />
            <div className={cl.mList}>
                {movies.map(movie => <Movie key={movie.id} movie={movie} />)}
            </div>
        </div>

    );
}
