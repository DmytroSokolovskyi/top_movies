import cl from './SiteName.module.css';
import {useHistory} from "react-router";
import React, {memo} from "react";


export default memo(
    function SiteName () {
        const history = useHistory();
        return (
            <h3 className={cl.text} onClick={() => history.push('/')} >Top Movies</h3>
        );
    }
)
