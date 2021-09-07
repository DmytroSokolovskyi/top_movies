import cl from './SiteName.module.css';
import {useHistory} from "react-router";
import React from "react";


export default React.memo(
    function SiteName () {
        const history = useHistory();
        console.log('     SiteName     ')
        return (
            <h3 className={cl.text} onClick={() => history.push('/')} >Top Movies</h3>
        );
    }
)
