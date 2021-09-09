import {axiosInstance, movieSearchParam, moviesURL} from "./config";
import {setMovies} from "../redux/actions";

const getMoviesNew = (params, url) => (dispatch) => {
    const baseParam = url.includes("search") ? movieSearchParam : moviesURL
    const queryString = require('query-string');

    axiosInstance
        .get(baseParam + queryString.stringify(params))
        .then(value => value.data)
        .then(value => dispatch(setMovies(value)))
};
export {getMoviesNew};