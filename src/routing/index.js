import MoviesList from "../components/moviesList/MoviesList";
import MovieDetails from "../pages/movieDetails/MovieDetails";
import WrongSearch from "../pages/wrongSearch/WrongSearch";

export const privaterouts = [
    {path: '/', component: MoviesList, exaxt: true},
    {path: '/movie/:id', component: MovieDetails, exaxt: true},
    {path: '/page=:page', component: MoviesList, exaxt: true},
    {path: '/genre/:with_genres', component: MoviesList, exaxt: true},
    {path: '/genre/:genre/page=:page', component: MoviesList, exaxt: true},
    {path: '/search/:query/page=:page', component: MoviesList, exaxt: false},
    {path: '/search/wrong_search/', component: WrongSearch,  exaxt: false},
    {path: '/search/:query', component: MoviesList,  exaxt: false},
];