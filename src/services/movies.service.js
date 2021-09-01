import {allMoviesUrl, axiosInstance, byGenresURL, genresURL} from "./config";
import {setGenres, setMovies, setMoviesByGenres} from "../redux/actions";


const getMovies = () => (dispatch) => {
    return axiosInstance
        .get(allMoviesUrl)
        .then(value => value.data.results)
        .then(value => dispatch(setMovies(value)));
}

const getGenres = () => (dispatch) => {
    return axiosInstance
        .get(genresURL)
        .then(value => value.data.genres)
        .then(value => dispatch(setGenres(value)));
}

const getMoviesByGenre = (id) => (dispatch) => {
    return axiosInstance
        .get(byGenresURL + id)
        .then(value => value.data.results)
        .then(value => dispatch(setMoviesByGenres(value)));
}


export {getMovies, getGenres, getMoviesByGenre};