import cl from './Search.module.css';
import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {searchMovie} from "../../services";
import {useHistory} from "react-router";
import React from "react";

export default React.memo ( function Search() {

    let [searchValue, setSearchValue] = useState('');

    console.log("          Search           ")

    const history = useHistory();
    const dispatch = useDispatch();

        useEffect(() => {

            }, []);

    const wrongSearch = () => {
        history.push(`/search/wrong_search/`)
    };

    const goSearch = (e) => {
        e.preventDefault()
        dispatch(searchMovie(searchValue, wrongSearch))
        setSearchValue('')
        history.push(`/search/${searchValue}/`)
    };


    return (
        <div className={cl.inputDiv}>
            <form onSubmit={goSearch}>
                <input className={cl.myInput} name={'search'} value={searchValue} placeholder={'search'}
                       onInput={(e) => setSearchValue(e.target.value)} type="search"/>
            </form>

        </div>

    );
}
)