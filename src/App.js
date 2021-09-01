import {
    BrowserRouter as Router,
    Route,
} from "react-router-dom";

import MoviesList from "./components/moviesList/MoviesList";
import MovieDetails from "./components/movieDetails/MovieDetails";

export default function App() {

    return (
        <Router>
            <div>
                <div>
                    <Route exact path={'/'} component={MoviesList}/>
                    <Route path={"/:id"} component={MovieDetails}/>
                </div>
            </div>
        </Router>
    );
}
