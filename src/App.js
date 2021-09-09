import {
    BrowserRouter as Router, Redirect, Route, Switch,
} from "react-router-dom";

import {ThemeProvider} from "styled-components";
import {darkTheme, GlobalStyles, lightTheme} from "./components/UI/switchTheme/themes";
import {useSelector} from "react-redux";
import MoviesPage from "./pages/moviesPage/MoviesPage";
import React from "react";
import Login from "./pages/login/Login";


export default function App() {
    const {themeReducer} = useSelector(state => state);
    const {moviesReducer} = useSelector(state => state);
    const {auth} = moviesReducer;
    return (
        <Router>
            <ThemeProvider theme={themeReducer.theme ? darkTheme : lightTheme }>
                <GlobalStyles/>
                {
                    !auth ? <Redirect to={'/login'}/> :  <Redirect to={'/'}/>
                }
                <Switch>
                    <Route path={'/login'} component={Login}/>
                    <Route path={'/'} component={MoviesPage}/>
                </Switch>

            </ThemeProvider>
        </Router>
    );
};
