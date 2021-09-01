import {SET_GENRES, SET_MOVIES, SET_MOVIES_BY_GENRE} from "../actions";

let initialState = {movies: [], genres: [], moviesByGenre: []}

export const moviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_GENRES: {
            return {...state, genres: [...action.payload]}
        }
        case SET_MOVIES_BY_GENRE: {
            return {...state, moviesByGenre: [...action.payload]}
        }
        case SET_MOVIES: {
            return {...state, movies: [...action.payload]}
        }


        default:
            return state
    }
}