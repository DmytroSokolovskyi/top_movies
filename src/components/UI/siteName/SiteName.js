import cl from './SiteName.module.css'
import {useHistory} from "react-router";

export default function SiteName () {
    const history = useHistory();
    const toHome = () => {
    history.push('/')
    };

    return (
        <h3 className={cl.text} onClick={toHome} >Top Movies</h3>
    );
 }
