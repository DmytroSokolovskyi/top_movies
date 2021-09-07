import {
    BrowserRouter as Router,
} from "react-router-dom";

import {ThemeProvider} from "styled-components";
import {darkTheme, GlobalStyles, lightTheme} from "./components/UI/switchTheme/themes";
import {useSelector} from "react-redux";
import MoviesPage from "./pages/moviesPage/MoviesPage";


export default function App() {
    const {themeReducer} = useSelector(state => state);

    return (
        <Router>
            <ThemeProvider theme={themeReducer.theme === "light" ? lightTheme : darkTheme}>
                <GlobalStyles/>
                <MoviesPage/>
            </ThemeProvider>
        </Router>
    );
};
