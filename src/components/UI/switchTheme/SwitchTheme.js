import {useDispatch} from "react-redux";
import {darkTheme, lightTheme} from "../../../redux/actions";
import React, {memo} from "react";
import './SwitchTheme.css'

export default memo(
    function SwitchTheme({theme}) {

        const dispatch = useDispatch();
        const themeToggler = () => {
            theme === "light" ? dispatch(darkTheme()) : dispatch(lightTheme());
        };


        return (
            <div className= "divTheme">
                <label htmlFor="toggle" className= "label"> light </label>
                <span className="toggle-control">
    <input
        className="toggle"
        type="checkbox"
        onChange={themeToggler}
        id="toggle"
    />
    <label className= "toggle-push-theme" htmlFor="toggle"/>
  </span>
                <label htmlFor="toggle" className= "label"> dark </label>
            </div>
        );
    }
)
