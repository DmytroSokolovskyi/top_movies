import cl from './Search.module.css';
import {useState} from "react";
import {useDispatch} from "react-redux";
import {searchMovie} from "../../services";

export default function Search() {

    let [searchValue, setSearchValue] = useState('');
    const dispatch = useDispatch();

    const goSearch = (e) => {
        e.preventDefault()
        dispatch(searchMovie(searchValue))
        setSearchValue('')
    };


    const changeInput = (e) => {
        setSearchValue(e.target.value)
    };

    console.log(searchValue);
    return (
        <div className={cl.inputDiv}>
            <form onSubmit={goSearch}>
                <input className={cl.myInput} name={'search'} value={searchValue} placeholder={'search'}
                       onInput={changeInput} type="search"/>
            </form>

        </div>

    );
}
