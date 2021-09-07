import React, {memo} from "react";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import SelectedGenre from "../selectedGenre/SelectedGenre";
import cl from "./Genre.module.css";
import {getGenres} from "../../services";
import {useHistory} from "react-router";



export default memo(function Genre({genres}) {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getGenres());
    }, [dispatch]);

        const history = useHistory();

        return (
            <div className={cl.mainGenre}>
                <select className={cl.selectGenre} name="selectMovie" onChange={(e) => {
                    history.push(`/genre/${e.target.value}/`)
                }}>
                    {
                        genres && genres.map(value => <SelectedGenre id={value.id} selectedGenre={(e) => {
                            history.push(`/genre/${e.target.value}/`)
                        }}
                                                                     key={value.id}
                                                                     item={value}/>)
                    }
                </select>
            </div>
        );
    }
);