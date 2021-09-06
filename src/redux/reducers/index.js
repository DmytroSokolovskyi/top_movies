import { combineReducers } from 'redux';
import {moviesReducer} from "./moviesReducer";
import {themeReducer} from "./themeReducer";
import {infoReducer} from "./infoReducer";

export const  reducer = combineReducers({moviesReducer, themeReducer, infoReducer})