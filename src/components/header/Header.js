import cl from './Header.module.css'
import Genre from "../genre/Genre";

export default function Header () {
    return (
        <div className={cl.header}>
            <div>
                Top Movies
            </div>
            <div>
                <Genre/>
            </div>
            <div>
                switch
            </div>
        </div>
    );
 }
