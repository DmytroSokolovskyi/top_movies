import React, {memo} from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import {
    getMovies,
    getMoviesByGenre,
    getMoviesByPage,
    getMoviesByPageAndGenre,
    getSearchMoviesByPage
} from "../../../services";
import MoviesList from "../../../components/moviesList/MoviesList";
import MovieDetails from "../../movieDetails/MovieDetails";
import WrongSearch from "../../wrongSearch/WrongSearch";
import {useDispatch} from "react-redux";

export default memo(
    function MoviesPageRouting () {

        const dispatch = useDispatch();

        return (
            <Switch>
                <Route exact path={'/'} render={(props) => {
                    dispatch(getMovies());
                    return <MoviesList {...props}/>
                }}/>
                <Route exact path={'/:id'} component={MovieDetails}/>

                <Route exact path={`/page/:id`} render={(props) => {
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
        );
    }
)
