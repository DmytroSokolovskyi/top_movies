import {axiosInstance, baseURL, byGenresURL, byPageURL, genresURL} from "./config";
import {setGenres, setMovies, setMoviesByGenres} from "../redux/actions";


const getMovies = () => (dispatch) => {
     axiosInstance
        .get(baseURL)
        .then(value => value.data)
        .then(value => dispatch(setMovies(value)))
}

const getGenres = () => (dispatch) => {
     axiosInstance
        .get(genresURL)
        .then(value => value.data.genres)
        .then(value => dispatch(setGenres(value)));
}

const getMoviesByGenre = (id) => (dispatch) => {
     axiosInstance
        .get(baseURL + byGenresURL + id)
        .then(value => value.data)
        .then(value => dispatch(setMoviesByGenres(value, id)));
}
const getMoviesByPage = (page) => (dispatch) => {
     axiosInstance
        .get(baseURL + byPageURL + page)
        .then(value => value.data)
        .then(value => dispatch(setMovies(value)));
}

const getMoviesByPageAndGenre = (page, genre) => (dispatch) => {
     axiosInstance
         .get(baseURL + byPageURL + page + byGenresURL + genre)
         .then(value => value.data)
         .then(value => dispatch(setMovies(value)));
}


export {getMovies, getGenres, getMoviesByGenre, getMoviesByPage, getMoviesByPageAndGenre};