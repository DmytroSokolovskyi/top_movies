import React, {memo} from "react";
import cl from './MoviesPage.module.css';
import Header from "../../components/header/Header";
import {useSelector} from "react-redux";
import MoviesPageRouting from "./moviesPageRouting/MoviesPageRouting";


export default memo(
    function MoviesPage() {

        const {moviesReducer} = useSelector(state => state);
        const {themeReducer} = useSelector(state => state);
        const {genres} = moviesReducer;
        const {theme} = themeReducer;


        return (
            <div className={cl.mainDivPage}>
                <header>
                    <Header genres={genres} theme={theme}/>
                </header>
                <main>
                    <MoviesPageRouting/>
                </main>
            </div>
        );
    }
);
