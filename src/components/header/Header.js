import React, {memo} from "react";
import cl from './Header.module.css';
import Genre from "../genre/Genre";
import SwitchTheme from "../UI/switchTheme/SwitchTheme";
import SiteName from "../UI/siteName/SiteName";
import User from "../user/User";
import Search from "../search/Search";

export default memo(
    function Header({genres, theme}) {
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
