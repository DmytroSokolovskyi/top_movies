import {
    Switch,
    Route, Redirect,
} from "react-router-dom";
import cl from './MoviesPage.module.css';
import Header from "../../components/header/Header";
import MoviesList from "../../components/moviesList/MoviesList";
import MovieDetails from "../movieDetails/MovieDetails";
import {
    getMovies,
    getMoviesByGenre,
    getMoviesByPage,
    getMoviesByPageAndGenre,
    getSearchMoviesByPage
} from "../../services";
import {useDispatch, useSelector} from "react-redux";
import WrongSearch from "../wrongSearch/WrongSearch";


export default function MoviesPage(props) {
    const {match} = props;
    const dispatch = useDispatch();
    console.log(match)
    const state = useSelector(state => state);
    const {moviesReducer} = useSelector(state => state);
    const {themeReducer} = useSelector(state => state);

    return (
        <div className={cl.mainDivPage}>
            <header>
                <Header {...state} />
            </header>
            <main>
                <Switch>
                    <Route exact path={'/'} render={(props) => {
                        dispatch(getMovies());
                        return <MoviesList {...props}/>
                    }}/>
                    <Route exact path={'/:id'} component={MovieDetails}/>

                    <Route exact path={`${match.path}page/:id`} render={(props) => {
                        dispatch(getMoviesByPage(props.match.params.id));
                        return <MoviesList {...props}/>;
                    }}/>

                    <Route exact path={"/genre/:genre"} render={(props) => {
                        dispatch(getMoviesByGenre(props.match.params.genre));
                        return <MoviesList {...props}/>;
                    }}/>
                    <Route path={"/genre/:genre/page/:id"} render={(props) => {
                        dispatch(getMoviesByPageAndGenre(props.match.params));
                        return <MoviesList {...props}/>;
                    }}/>
                    <Route path={"/search/:key/page/:id"} render={(props) => {
                        dispatch(getSearchMoviesByPage(props.match.params));
                        return <MoviesList {...props}/>;
                    }}/>

                    <Route path={"/search/wrong_search/"} component={WrongSearch}/>

                    <Route path={"/search/:key"} component={MoviesList}/>

                    <Redirect to={'/'}/>

                </Switch>
            </main>
        </div>
    );
}
