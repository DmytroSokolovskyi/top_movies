import {
    BrowserRouter as Router,
    Route,
} from "react-router-dom";

import MoviesList from "./components/moviesList/MoviesList";
import MovieDetails from "./components/movieDetails/MovieDetails";
import {ThemeProvider} from "styled-components";
import {darkTheme, GlobalStyles, lightTheme} from "./components/UI/switchTheme/themes";
import {useSelector} from "react-redux";
import MoviesPage from "./pages/moviesPage/MoviesPage";


export default function App() {
    const {theme} = useSelector(state => state.themeReducer);

    return (


        <Router>
            <MoviesPage>
                <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
                    <GlobalStyles/>
                    <Route exact path={'/'} component={MoviesList}/>
                    <Route path={"/:id"} component={MovieDetails}/>
                </ThemeProvider>
            </MoviesPage>
        </Router>


    );
}
