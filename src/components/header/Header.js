import React from "react";
import cl from './Header.module.css'
import Genre from "../genre/Genre";
import SwitchTheme from "../UI/switchTheme/SwitchTheme";
import SiteName from "../UI/siteName/SiteName";
import User from "../user/User";
import Search from "../search/Search";
// import {useSelector} from "react-redux";


export default React.memo(
    function Header({themeReducer, moviesReducer}) {


        const {theme} = themeReducer;
        const {genres} = moviesReducer;

        console.log("    Header    ")
        return (
            <div className={cl.header}>
                <SiteName/>
                <Genre genres={genres}/>
                <Search/>
                <SwitchTheme theme={theme}/>
                <User/>
            </div>
        );
    }
)
