import { combineReducers } from 'redux';
import {moviesReducer} from "./moviesReducer";
import {themeReducer} from "./themeReducer";

export const  reducer = combineReducers({moviesReducer, themeReducer})