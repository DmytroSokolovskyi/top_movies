import {THEME_DARK, THEME_LIGHT} from "../actions";

let initialState = {theme: 'light'}

export const themeReducer = (state = initialState, action) => {
    switch (action.type) {
        case THEME_DARK : {
            return {...state, theme: 'dark'};
        }
        case THEME_LIGHT : {
            return {...state, theme: 'light'};
        }

        default: return state
    }
}