import {
    Switch,
    Route,
} from "react-router-dom";
import cl from './MoviesPage.module.css'
import Header from "../../components/header/Header";
import MoviesList from "../../components/moviesList/MoviesList";
import MovieDetails from "../../components/movieDetails/MovieDetails";
import Login from "../Login";
import Genre from "../../components/genre/Genre";
import {
    getMovies,
    getMoviesByGenre,
    getMoviesByPage,
    getMoviesByPageAndGenre,
    getSearchMoviesByPage
} from "../../services";
import {useDispatch} from "react-redux";
import * as path from "path";


export default function MoviesPage(props) {
    const {match} = props;
    const dispatch = useDispatch();

    return (
        <div className={cl.mainDivPage}>
            <header>
                <Header/>
            </header>
            <main>
                <Switch>
                    <Route exact path={'/'} render={(props) => {
                        dispatch(getMovies())
                        return <MoviesList {...props}/>
                    }}/>
                    <Route exact path={'/:id'} component={MovieDetails}/>

                    <Route exact path={`${match.path}page/:id`} render={(props) => {
                        dispatch(getMoviesByPage(props.match.params.id))
                        return <MoviesList {...props}/>
                    }}/>

                    <Route exact path={"/genre/:genre"} render={(props) => {
                        return <MoviesList {...props}/>
                    }}/>
                    <Route path={"/genre/:genre/page/:id"} render={(props) => {
                        dispatch(getMoviesByPageAndGenre(props.match.params))
                        return <MoviesList {...props}/>
                    }}/>
                    <Route path={"/search/:key/page/:id"} render={(props) => {
                        dispatch(getSearchMoviesByPage(props.match.params))
                        return <MoviesList {...props}/>
                    }}/>

                    <Route path={"/search/:key"} component={MoviesList}/>
                </Switch>
            </main>
        </div>
    );
}
