import {useSelector} from "react-redux";
import Movie from "../movie/Movie";
import cl from './MoviesList.module.css'
import MyPagination from "../UI/paginations/Paginations";
export default function MoviesList(props) {

    const {moviesReducer} = useSelector(state => state);
    const {movies} = moviesReducer;

    return (
        <div className={cl.mainList}>
            <MyPagination {...props} />
            <div className={cl.mList}>
                {movies.map(movie => <Movie key={movie.id} movie={movie} />)}
            </div>
        </div>

    );
}
