import cl from './User.module.css'
import {avatarURL} from "../../services";
import React, {memo} from "react";
import {useSelector} from "react-redux";

export default memo(function User() {
    const {moviesReducer} = useSelector(state => state);
    const {userLogin} = moviesReducer;

        return (
            <div className={cl.userDiv} >
                <img className={cl.imgUser} src={avatarURL} alt="manAvatar"/>
                {userLogin && <span>Hi {userLogin.login}</span>}
            </div>
        );
    }
)