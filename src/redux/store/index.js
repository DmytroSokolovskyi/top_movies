import {createStore, applyMiddleware} from "redux"
import ReduxThunk from "redux-thunk";
import {moviesReduser} from "../reducers";


export const store = createStore(moviesReduser, applyMiddleware(ReduxThunk));