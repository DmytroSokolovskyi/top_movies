import {useEffect} from "react";
import {getMovies} from "../../services/movies.service";

export default function MoviesList () {
        useEffect(() => {
            getMovies()
            }, []);

    return (
        <div>
            MoviesList
        </div>
    );
 }
