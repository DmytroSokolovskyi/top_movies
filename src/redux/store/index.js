import {createStore, applyMiddleware} from "redux"
import ReduxThunk from "redux-thunk";
import {moviesReducer} from "../reducers";


export const store = createStore(moviesReducer, applyMiddleware(ReduxThunk));