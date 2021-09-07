import React, {memo} from "react";
import Companie from "../companie/Companie";

export default memo(
    function Companies({companies}) {

        return (
            <>
                {companies && companies.map(value => <Companie key={value.id} companie={value}/>)}
            </>

        );
    }
);
