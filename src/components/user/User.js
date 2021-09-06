import cl from './User.module.css'
import {avatarURL} from "../../services/config";

export default function User () {
    return (
        <div className={cl.userDiv}>
            <img className={cl.imgUser} src={avatarURL} alt="manAvatar"/>
           <span>Hi Tom</span>
        </div>
    );
 }
