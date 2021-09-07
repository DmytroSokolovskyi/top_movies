import {
    SET_GENRES,
    SET_IMAGES,
    SET_MOVIE,
    SET_MOVIES,
    SET_MOVIES_BY_GENRE, SET_SIMILAR,
    THEME_DARK,
    THEME_LIGHT
} from "./actionsType";

export const setGenres = (value) => {
    return {type: SET_GENRES, payload: value};
};
export const setMoviesByGenres = (value, id) => {
    return {type: SET_MOVIES_BY_GENRE, payload: {value: value, id: id}};
};
export const setMovies = (value) => {
    return {type: SET_MOVIES, payload: value};
};
export const lightTheme = () => {
    return {type: THEME_LIGHT};
};
export const darkTheme = () => {
    return {type: THEME_DARK};
};
export const setMovie = (value) => {
    return {type: SET_MOVIE, payload: value};
};

export const setImages = (value) => {
    return {type: SET_IMAGES, payload: value};
};
export const setSimilar = (value) => {
    return {type: SET_SIMILAR, payload: value};
};

