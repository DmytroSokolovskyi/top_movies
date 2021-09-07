import {axiosInstance, baseURL, byGenresURL, byPageURL, detailsURL, genresURL, movieSearch} from "./config";
import {setGenres, setImages, setMovie, setMovies, setMoviesByGenres, setSimilar} from "../redux/actions";


const getMovies = () => (dispatch) => {
    axiosInstance
        .get(baseURL)
        .then(value => value.data)
        .then(value => dispatch(setMovies(value)))
};

const getGenres = () => (dispatch) => {
    axiosInstance
        .get(genresURL)
        .then(value => value.data.genres)
        .then(value => dispatch(setGenres(value)));
};

const searchMovie = (value, wrongSearch) => async (dispatch) => {
    const searchData = await (await axiosInstance.get(movieSearch + value)).data;
    searchData.results.length >= 1 ? dispatch(setMovies(searchData)) : wrongSearch();
};

const getSearchMoviesByPage = (params) => async (dispatch) => {
    const searchData = await (await axiosInstance.get(movieSearch + params.key + byPageURL + params.id)).data;
    dispatch(setMovies(searchData));
};

const getMoviesByGenre = (id) => (dispatch) => {
    axiosInstance
        .get(baseURL + byGenresURL + id)
        .then(value => value.data)
        .then(value => dispatch(setMoviesByGenres(value, id)));
};

const getMoviesByPage = (page) => (dispatch) => {
    axiosInstance
        .get(baseURL + byPageURL + page)
        .then(value => value.data)
        .then(value => dispatch(setMovies(value)));
};

const getMoviesByPageAndGenre = (params) => (dispatch) => {
    axiosInstance
        .get(baseURL + byPageURL + params.id + byGenresURL + params.genre)
        .then(value => value.data)
        .then(value => dispatch(setMovies(value)));
};

const getMovieInfo = (id) => (dispatch) => {
    axiosInstance
        .get(detailsURL + id)
        .then(value => value.data)
        .then(value => dispatch(setMovie(value)));
};

const getImageMovie = (id) => (dispatch) => {
    axiosInstance
        .get(detailsURL + id + '/images')
        .then(value => value.data.backdrops)
        .then(value => dispatch(setImages(value)));
};

const getSimilarMovie = (id) => (dispatch) => {
    axiosInstance
        .get(detailsURL + id + '/similar')
        .then(value => value.data.results)
        .then(value => dispatch(setSimilar(value)));
};

export {
    getMovies,
    getGenres,
    getMoviesByGenre,
    getMoviesByPage,
    getMoviesByPageAndGenre,
    getMovieInfo,
    getImageMovie,
    getSimilarMovie,
    searchMovie,
    getSearchMoviesByPage
};