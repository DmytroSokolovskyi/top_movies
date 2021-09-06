import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import SelectedGenre from "./selectedGenre/SelectedGenre";
import cl from "./Genre.module.css"
import {getGenres, getMoviesByGenre} from "../../services";

export default function Genre() {

    const {genres} = useSelector(state => state.moviesReducer);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getGenres());
    }, [dispatch]);

    const selectedGenre = (e) => {
        dispatch(getMoviesByGenre(e.target.value))
    };


    return (
        <div className={cl.mainGenre}>
            <select className={cl.selectGenre} name="selectMovie" onChange={selectedGenre}>
                {
                    genres && genres.map(value => <SelectedGenre id={value.id} selectedGenre={selectedGenre} key={value.id}
                                                                 item={value}/>)
                }
            </select>
        </div>
    );
}
