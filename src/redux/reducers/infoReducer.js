import {SET_IMAGES, SET_MOVIE, SET_SIMILAR} from "../actions";

let initialState = {movie: {}, lastMovies: [], similar: [], images: []};

export const infoReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_MOVIE: {
            if (state.lastMovies.some(value => value.id === action.payload.id)) {
                return {
                    ...state, movie: {...action.payload},
                    lastMovies: [...state.lastMovies]
                };
            }
            return {
                ...state, movie: {...action.payload},
                lastMovies: [...state.lastMovies, action.payload]
            };
        }

        case SET_IMAGES : {
            return {...state, images: action.payload};
        }
        case SET_SIMILAR : {
            return {...state, similar: [...action.payload]};
        }

        default:
            return state;
    }
};