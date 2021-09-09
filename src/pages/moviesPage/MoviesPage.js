import React, {memo} from "react";
import cl from './MoviesPage.module.css';
import Header from "../../components/header/Header";
import MoviesPageRouting from "../../routing/moviesPageRouting/MoviesPageRouting";


export default memo(
    function MoviesPage() {

        return (
            <div className={cl.mainDivPage}>
                <header>
                    <Header/>
                </header>
                <main>
                    <MoviesPageRouting/>
                </main>
            </div>
        );
    }
);