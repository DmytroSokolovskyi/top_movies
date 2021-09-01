import {useEffect} from "react";
import {getMovies} from "../../services/movies.service";
import {useDispatch, useSelector} from "react-redux";
import Movie from "../movie/Movie";

export default function MoviesList() {

    const {movies, genres, moviesByGenre} = useSelector(state => state);
    const dispatch = useDispatch();

    console.log(movies);
    console.log(genres);
    console.log(moviesByGenre);


    useEffect(() => {
        dispatch(getMovies())
    }, []);

    return (
        <div>
            {
                movies.map(movie => <Movie key={movie.id} movie={movie} />)
            }
        </div>
    );
}
