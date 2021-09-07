import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getSimilarMovie} from "../../services";
import SmallMovie from "../smallmovie/SmallMovie";

export default function SimilarMovies({id}) {

    const {infoReducer} = useSelector(state => state);
    const {similar} = infoReducer;

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getSimilarMovie(id))
    }, [dispatch ,id]);

    return (
        <>
            {similar && similar.map(value => <SmallMovie key={value.id} movie={value}/>)}
        </>
    );
}
