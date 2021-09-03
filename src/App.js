import {
    BrowserRouter as Router,
    Route,
} from "react-router-dom";

import MoviesList from "./components/moviesList/MoviesList";
import MovieDetails from "./components/movieDetails/MovieDetails";
import Header from "./components/header/Header";
import styled, {ThemeProvider} from "styled-components";
import {darkTheme, GlobalStyles, lightTheme} from "./components/UI/switchTheme/themes";
import {useSelector} from "react-redux";

const StyledApp = styled.div`
  color: ${(props) => props.theme.fontColor};
`;

export default function App() {
    const {theme} = useSelector(state => state.themeReducer);

    return (
        <Router>
            <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
                <GlobalStyles/>
                <StyledApp>
                    <div>
                        <div>
                            <Header/>
                        </div>
                        <div>
                            <Route exact path={'/'} component={MoviesList}/>
                            <Route path={"/:id"} component={MovieDetails}/>
                        </div>
                    </div>
                </StyledApp>
            </ThemeProvider>
        </Router>
    );
}
