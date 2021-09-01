import {SET_GENRES, SET_MOVIES, SET_MOVIES_BY_GENRE} from "./actionsType";

export const setGenres = (value) => {
    return {type: SET_GENRES, payload: value}
};
export const setMoviesByGenres = (value) => {
    return {type: SET_MOVIES_BY_GENRE, payload: value}
};
export const setMovies = (value) => {
    return {type: SET_MOVIES, payload: value}
};
