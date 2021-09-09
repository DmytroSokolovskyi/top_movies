import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {useHistory} from "react-router";
import {setNewUser} from "../../redux/actions";
import cl from './Login.css'

export default function Login() {
    const [user, setUser] = useState({login: 'user', password: 'user'});

    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        const loginUser = JSON.parse(localStorage.getItem('user'));
        if(loginUser) {
            dispatch(setNewUser(loginUser))
            history.push('/')
        }
    }, []);

    const formWrite = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    };

    const saveUser = (e) => {
        e.preventDefault()
        localStorage.setItem('user', JSON.stringify(user))
        history.push('/')
        dispatch(setNewUser(user))
    };

    return (
        <div className={cl.logDiv}>
            <form onSubmit={saveUser}>
                <input type="text" name={'login'} placeholder={'user'} value={user.login} onChange={formWrite}/>
                <input type="text" name={'password'} placeholder={'user'} value={user.password} onChange={formWrite}/>
                <input type="submit"/>
            </form>
        </div>
    );
}
