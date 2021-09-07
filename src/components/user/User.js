import cl from './User.module.css'
import {avatarURL} from "../../services";
import React, {memo} from "react";

export default memo(function User () {
        return (
            <div className={cl.userDiv}>
                <img className={cl.imgUser} src={avatarURL} alt="manAvatar"/>
                <span>Hi Tom</span>
            </div>
        );
    }
)