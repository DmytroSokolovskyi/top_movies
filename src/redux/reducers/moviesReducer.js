import {SET_GENRES, SET_MOVIES, SET_MOVIES_BY_GENRE} from "../actions";

let initialState = {movies: [], genres: [], chosenGenre: null, total_results: null, totalPages: null}

export const moviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_GENRES: {
            return {...state, genres: [...action.payload]}
        }
        case SET_MOVIES_BY_GENRE: {
            console.log(action.payload);
            return {
                ...state,
                movies: [...action.payload.value.results],
                totalPages: action.payload.value.total_pages,
                total_results: action.payload.value.total_results,
                chosenGenre: action.payload.id
            }
        }
        case SET_MOVIES: {
            console.log(action.payload);
            return {
                ...state,
                movies: [...action.payload.results],
                totalPages: action.payload.total_pages,
                total_results: action.payload.total_results
            }
        }


        default:
            return state
    }
}