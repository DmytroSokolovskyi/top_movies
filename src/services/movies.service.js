
import {allMoviesUrl, axiosInstance} from "./config";


const getMovies = () => {
    return axiosInstance
        .get(allMoviesUrl)
        .then(value => value.data.results)
        .then(value => console.log(value));
}

export {getMovies};