import cl from './Search.module.css';
import {useState} from "react";
import {useDispatch} from "react-redux";
import {searchMovie} from "../../services";
import {useHistory} from "react-router";

export default function Search() {

    let [searchValue, setSearchValue] = useState('');
    const history = useHistory();
    const dispatch = useDispatch();

    const wrongSearch = () => {
    console.log("Beda")
    };

    const goSearch = (e) => {
        e.preventDefault()
        dispatch(searchMovie(searchValue, wrongSearch))
        setSearchValue('')
        history.push(`/search/${searchValue}/`)
    };


    const changeInput = (e) => {
        setSearchValue(e.target.value)
    };

    return (
        <div className={cl.inputDiv}>
            <form onSubmit={goSearch}>
                <input className={cl.myInput} name={'search'} value={searchValue} placeholder={'search'}
                       onInput={changeInput} type="search"/>
            </form>

        </div>

    );
}
