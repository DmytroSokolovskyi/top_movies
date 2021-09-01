import axios from "axios";

export const apiKey = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNGRiZGJhNDgxMzk5OTE2MDVmZmIwMGU5MzE0ODU1NyIsInN1YiI6IjYxMmI0YjIzMTIxOTdlMDA4Yjc2ZDdmOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KxUR9aiVZuwqyqtOHkz23wIrWufDiPCmhCgw03nl01Q';
export const baseURL = 'https://api.themoviedb.org/3/';
export const allMoviesUrl = 'discover/movie';


export const config = {
    baseURL: baseURL,
    headers: {
        Authorization: "Bearer " + apiKey
    }
}
export const axiosInstance = axios.create(config);