import axios from "axios";

export const apiKey = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNGRiZGJhNDgxMzk5OTE2MDVmZmIwMGU5MzE0ODU1NyIsInN1YiI6IjYxMmI0YjIzMTIxOTdlMDA4Yjc2ZDdmOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KxUR9aiVZuwqyqtOHkz23wIrWufDiPCmhCgw03nl01Q';
export const baseURL = 'https://api.themoviedb.org/3/discover/movie?';
export const genresURL = 'https://api.themoviedb.org/3/genre/movie/list';
export const byGenresURL = '&with_genres=';
export const movieSearch = 'https://api.themoviedb.org/3/search/movie?&query=';
export const imageURL = 'https://image.tmdb.org/t/p/w300/';
export const byPageURL = '&page=';
export const detailsURL = 'https://api.themoviedb.org/3/movie/';
export const avatarURL = 'https://st4.depositphotos.com/12837522/40798/v/950/depositphotos_407981184-stock-illustration-black-flat-man-avatar-sun.jpg';




export const config = {
    baseURL: baseURL,
    headers: {
        Authorization: "Bearer " + apiKey
    }
}
export const axiosInstance = axios.create(config);