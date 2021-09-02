import {useEffect} from "react";
import {getMovies} from "../../services/movies.service";
import {useDispatch, useSelector} from "react-redux";
import Movie from "../movie/Movie";
import cl from './MoviesList.module.css'

export default function MoviesList() {

    const {movies, genres, moviesByGenre} = useSelector(state => state);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getMovies())
    }, []);

    return (
        <div className={cl.mList}>
            {
                movies.map(movie => <Movie key={movie.id} movie={movie} />)
            }
        </div>
    );
}
