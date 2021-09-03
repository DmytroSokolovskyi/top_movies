import {SET_GENRES, SET_MOVIES, SET_MOVIES_BY_GENRE, THEME_DARK, THEME_LIGHT} from "./actionsType";

export const setGenres = (value) => {
    return {type: SET_GENRES, payload: value}
};
export const setMoviesByGenres = (value, id) => {
    return {type: SET_MOVIES_BY_GENRE, payload: {value: value, id: id}}
};
export const setMovies = (value) => {
    return {type: SET_MOVIES, payload: value}
};
export const lightTheme = () => {
    return {type: THEME_LIGHT}
};
export const darkTheme = () => {
    return {type: THEME_DARK}
};


