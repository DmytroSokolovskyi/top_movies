import cl from './Companie.module.css';
import {imageURL} from "../../services";

export default function Companie({companie: {name, logo_path}}) {
    console.log("    Companie    ")
    return (
        <div className={cl.mainCompanie}>
            {
                logo_path && <img className={cl.imgCompanie} src= {imageURL + logo_path} alt="name"/>
            }

            <div className={cl.text}>{name}</div>
        </div>
    );
}
