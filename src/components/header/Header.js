import cl from './Header.module.css'
import Genre from "../genre/Genre";
import MyButton from "../UI/myButton/MyButton";

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
                <MyButton>
                    switch
                </MyButton>
            </div>
        </div>
    );
 }
