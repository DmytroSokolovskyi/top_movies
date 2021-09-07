import React, {memo} from "react";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {getSimilarMovie} from "../../services";
import SmallMovie from "../smallmovie/SmallMovie";

export default memo(
    function SimilarMovies({id, similar}) {


        const dispatch = useDispatch();
        useEffect(() => {
            dispatch(getSimilarMovie(id))
        }, [dispatch, id]);

        return (
            <>
                {similar && similar.map(value => <SmallMovie key={value.id} movie={value}/>)}
            </>
        );
    }
);
