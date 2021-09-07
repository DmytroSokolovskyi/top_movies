import {
    BrowserRouter as Router,
    Route,
} from "react-router-dom";

import {ThemeProvider} from "styled-components";
import {darkTheme, GlobalStyles, lightTheme} from "./components/UI/switchTheme/themes";
import {useSelector} from "react-redux";
import MoviesPage from "./pages/moviesPage/MoviesPage";
import Login from "./pages/Login";


export default function App() {
    const {themeReducer} = useSelector(state => state);

    return (
        <Router>
            <ThemeProvider theme={themeReducer.theme === "light" ? lightTheme : darkTheme}>
                <GlobalStyles/>
                <Route path={'/'} component={MoviesPage}/>
                <Route path={'/login'} component={Login}/>
            </ThemeProvider>
        </Router>
    );
};
