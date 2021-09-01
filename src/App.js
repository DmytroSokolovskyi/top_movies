import {
    BrowserRouter as Router,
    Route,
} from "react-router-dom";

import MoviesList from "./components/moviesList/MoviesList";
import MovieDetails from "./components/movieDetails/MovieDetails";
import Header from "./components/header/Header";

export default function App() {

    return (
        <Router>
            <div>
                <div>
                    <Header/>
                </div>
                <div>
                    <Route exact path={'/'} component={MoviesList}/>
                    <Route path={"/:id"} component={MovieDetails}/>
                </div>
            </div>
        </Router>
    );
}
