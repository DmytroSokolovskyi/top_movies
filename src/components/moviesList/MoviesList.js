import {useEffect} from "react";
import {getMovies} from "../../services/movies.service";
import {useDispatch, useSelector} from "react-redux";
import Movie from "../movie/Movie";
import cl from './MoviesList.module.css'
import MyPagination from "../UI/paginations/Paginations";
export default function MoviesList() {

    const state = useSelector(state => state);
    const {movies} = state;
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getMovies())
    }, [dispatch]);

    return (
        <div>
            <MyPagination state={state} />
            <div className={cl.mList}>
                {
                    movies.map(movie => <Movie key={movie.id} movie={movie} />)
                }
            </div>

        </div>

    );
}
