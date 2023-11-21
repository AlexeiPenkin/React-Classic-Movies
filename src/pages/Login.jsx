import { useRef, useState, useEffect, useContext } from 'react';
import AuthContext from "../context/AuthProvider";
 
// import { useTheme } from "../utils/useTheme";

import Header from '../components/Header';
import Footer from '../components/Footer';

import "../styles/dark-theme.scss";

import axios from "../api/axios.js";
const LOGIN_URL = '/auth';

const Login = () => {
    const { setAuth } = useContext(AuthContext);
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd])

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(LOGIN_URL,
                JSON.stringify({ user, pwd }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );
            console.log(JSON.stringify(response?.data));
            //console.log(JSON.stringify(response));
            const accessToken = response?.data?.accessToken;
            const roles = response?.data?.roles;
            setAuth({ user, pwd, roles, accessToken });
            setUser('');
            setPwd('');
            setSuccess(true);
        } catch (err) {
            if (!err?.response) {
                setErrMsg('Нет ответа сервера');
            } else if (err.response?.status === 400) {
                setErrMsg('Не введено имя пользователя или пароль');
            } else if (err.response?.status === 401) {
                setErrMsg('Вы не авторизованы');
            } else {
                setErrMsg('Ошибка входа');
            }
            errRef.current.focus();
        }
    }
    
    return (
        <div className="login">
            <Header />
            <h1 className="login__title">Вход</h1>
            <div className="login__container">
                <p
                    ref={errRef}
                    className={errMsg ? "errmsg" : "offscreen"}
                    aria-live="assertive">
                    {errMsg}
                </p>
                <form className="login__form" onSubmit={handleSubmit}>
                    <div className="input-box">
                        <input id="username"
                            type="text"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setUser(e.target.value)}
                            value={user}
                            required
                        />
                        <label htmlFor="username">Имя пользователя:</label>
                    </div>

                    <div className="input-box">
                        <input id="password"
                            type="password"
                            onChange={(e) => setPwd(e.target.value)}
                            value={pwd}
                            required
                        />
                        <label htmlFor="password">Пароль:</label>
                    </div>

                    <button className="submit__btn">Войти</button>

                    <button className="form__bottom">
                        Ещё не зарегистрированы?<br/>
                        <a href='./signup' className="line">
                            Регистрация
                        </a>
                    </button>
                </form>
            </div>
            <Footer />
        </div>
    )
}

export default Login;