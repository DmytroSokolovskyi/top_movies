import cl from './Header.module.css'
import Genre from "../genre/Genre";
import SwitchTheme from "../UI/switchTheme/SwitchTheme";

export default function Header() {
    return (
        <div className={cl.header}>
            <div>
                Top Movies
            </div>
            <div>
                <Genre/>
            </div>
            <div>
                <SwitchTheme/>
            </div>
        </div>
    );
}
