import {axiosInstance, baseURL, byGenresURL, byPageURL, detailsURL, genresURL, movieSearch} from "./config";
import {setGenres, setImages, setMovie, setMovies, setMoviesByGenres, setSimilar} from "../redux/actions";


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

const searchMovie = (value) => (dispatch) => {
    axiosInstance
        .get(movieSearch + value)
        .then(value => value.data)
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
const getMovieInfo = (id) => (dispatch) => {
    axiosInstance
        .get(detailsURL + id)
        .then(value => value.data)
        .then(value => dispatch(setMovie(value)));
}

const getImageMovie = (id) => (dispatch) => {
    axiosInstance
        .get(detailsURL + id + '/images')
        .then(value => value.data.backdrops)
        .then(value => dispatch(setImages(value)));
}
const getSimilarMovie = (id) => (dispatch) => {
    axiosInstance
        .get(detailsURL + id + '/similar')
        .then(value => value.data.results)
        .then(value => dispatch(setSimilar(value)));
}

export {
    getMovies,
    getGenres,
    getMoviesByGenre,
    getMoviesByPage,
    getMoviesByPageAndGenre,
    getMovieInfo,
    getImageMovie,
    getSimilarMovie,
    searchMovie
};