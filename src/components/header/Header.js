import cl from './Header.module.css'
import Genre from "../genre/Genre";
import SwitchTheme from "../UI/switchTheme/SwitchTheme";
import SiteName from "../UI/siteName/SiteName";
import User from "../user/User";
import Search from "../search/Search";

export default function Header() {
    return (
        <div className={cl.header}>
            <SiteName/>
            <Genre/>
            <Search/>
            <SwitchTheme/>
            <User/>
        </div>
    );
}
