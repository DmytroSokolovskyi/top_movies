import {useDispatch, useSelector} from "react-redux";
import {changeTheme} from "../../../redux/actions";
import React, {memo, useEffect} from "react";
import './SwitchTheme.css'

export default memo(
    function SwitchTheme() {
        const {themeReducer} = useSelector(state => state);
        const {theme} = themeReducer;
        const dispatch = useDispatch();

        useEffect(() => {
            const local = localStorage.getItem('theme')
            if (local) {
                JSON.parse(local).theme !== theme ? console.log("theme good") : dispatch(changeTheme())
            } else {
                localStorage.setItem('theme', JSON.stringify({theme}))
            }
        }, []);

        const themeToggler = () => {
            dispatch(changeTheme());
            localStorage.setItem('theme', JSON.stringify({theme}))
        };

        return (
            <div className="divTheme">
                <label htmlFor="toggle" className="label"> light </label>
                <span className="toggle-control">
    <input
        className="toggle"
        type="checkbox"
        onChange={themeToggler}
        id="toggle"
    />
    <label className="toggle-push-theme" htmlFor="toggle"/>
  </span>
                <label htmlFor="toggle" className="label"> dark </label>
            </div>
        );
    }
)
