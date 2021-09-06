import {useDispatch, useSelector} from "react-redux";
import Image from "../image/Image";
import {useEffect} from "react";
import {getImageMovie} from "../../services";

export default function Images({id}) {
    const {images} = useSelector(state => state.infoReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getImageMovie(id))
    }, [id, dispatch]);

    const movieToRender = images.slice(1, 4);


    const style = [{width: '25%', height: '22%', margin: '5px 0 0 40px', float: 'left', top: '20%', left: '20%', position: 'absolute'},
        {width: '20%', height: '19%', margin: '38px 0 0 42px', float: 'left', top: '45%', left: '13%', position: 'absolute'},
        {width: '20%', height: '15%', margin: '38px 0 0 20px', float: 'left', top: '35%', left: '24%', position: 'absolute'},];

    return (
        <>
            {movieToRender.map((value, index) => <Image style={style[index]} key={index} image={value}/>)}
        </>
    );
}
