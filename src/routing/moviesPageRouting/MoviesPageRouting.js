import React, {memo} from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import MoviesList from "../../components/moviesList/MoviesList";
import MovieDetails from "../../pages/movieDetails/MovieDetails";
import WrongSearch from "../../pages/wrongSearch/WrongSearch";


export default memo(
    function MoviesPageRouting() {
        return (
            <Switch>
                {/*{privaterouts.map(route => <Route*/}
                {/*    path={route.path}*/}
                {/*    component={route.component}*/}
                {/*    exact={route.exaxt}*/}
                {/*/>)}*/}

                <Route exact path={'/'} component={MoviesList}/>

                <Route exact path={'/movie/:id'} component={MovieDetails}/>

                <Route exact path={`/page=:page`} render={(props) => {
                    return <MoviesList {...props}/>;
                }}/>

                <Route exact path={"/genre/:with_genres"} render={(props) => {
                    return <MoviesList {...props}/>;
                }}/>
                <Route path={"/genre/:genre/page=:page"} render={(props) => {
                    return <MoviesList {...props}/>;
                }}/>
                <Route path={"/search/:query/page=:page"} render={(props) => {
                    return <MoviesList {...props}/>;
                }}/>

                <Route path={"/search/wrong_search/"} component={WrongSearch}/>

                <Route path={"/search/:query"} component={MoviesList}/>

                <Redirect to={'/'}/>

            </Switch>
        );
    }
);
