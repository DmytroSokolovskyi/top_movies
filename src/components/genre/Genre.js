import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getGenres, getMoviesByGenre} from "../../services/movies.service";
import SelectedGenre from "./selectedGenre/SelectedGenre";



export default function Genre() {

    const {genres} = useSelector(state => state.moviesReducer);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getGenres());
    }, []);

    const selectedGenre = (e) => {
        dispatch(getMoviesByGenre(e.target.value))
    };


    return (
        <div>
            <select name="selectMovie" onChange={selectedGenre}>
                {
                  genres &&  genres.map(value => <SelectedGenre selectedGenre={selectedGenre} key={value.id} item={value}/>)
                }
            </select>
        </div>
    );
}
