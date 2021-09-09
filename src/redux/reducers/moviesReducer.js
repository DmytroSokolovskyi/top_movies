import {SET_GENRES, SET_MOVIES, SET_MOVIES_BY_GENRE, SET_USER} from "../actions";

let initialState = {movies: [], genres: [], auth: false, total_results: null, totalPages: null};

export const moviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_GENRES: {
            return {...state, genres: [...action.payload]};
        }
        case SET_MOVIES_BY_GENRE: {
            return {
                ...state,
                movies: [...action.payload.value.results],
                totalPages: action.payload.value.total_pages,
                total_results: action.payload.value.total_results,
            };
        }
        case SET_MOVIES: {
            return {
                ...state,
                movies: [...action.payload.results],
                totalPages: action.payload.total_pages,
                total_results: action.payload.total_results
            };
        }

        case SET_USER: {
            return {
                ...state,
                userLogin: {...action.payload},
                auth: true
            };
        }

        default:
            return state;
    }
};