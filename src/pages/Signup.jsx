import { useRef, useState, useEffect } from "react";
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "../api/axios.js";

// import { useTheme } from "../utils/useTheme";

import Header from "../components/Header";
import Footer from "../components/Footer";

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const REGISTER_URL = "/register";

const Signup = () => { 
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState("");
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    const [pwd, setPwd] = useState("");
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState("");
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [errMsg, setErrMsg] = useState("");
    const [success, setSuccess] = useState(false);

    useEffect((e) => {
        userRef.current.focus();
    }, [])

    useEffect((e) => {
        const result = USER_REGEX.test(user);
        console.log(result);
        console.log(user);
        setValidName(result);
    }, [user])

    useEffect((e) => {
        const result = PWD_REGEX.test(pwd);
        console.log(result);
        console.log(pwd);
        setValidPwd(result);
        const match = pwd === matchPwd;
        setValidMatch(match);
    }, [pwd, matchPwd])

    useEffect((e) => {
        setErrMsg("");
    }, [user, pwd, matchPwd])

    const handleSubmit = async (e) => {
        e.preventDefault();
        // if button enabled with JS hack
        const v1 = USER_REGEX.test(user);
        const v2 = PWD_REGEX.test(pwd);
        if (!v1 || !v2) {
            setErrMsg("Введены некорректные данные");
            return;
        }
        try {
            const response = await axios.post(REGISTER_URL,
                JSON.stringify({ user, pwd }),
                {
                    headers: { "Content-Type": "application/json" },
                    withCredentials: true
                }
            );
            console.log(response?.data);
            console.log(response?.accessToken);
            console.log(JSON.stringify(response))
            setSuccess(true);
            //clear state and controlled inputs
            //need value attrib on inputs for this
            setUser("");
            setPwd("");
            setMatchPwd("");
        } catch (err) {
            if (!err?.response) {
                setErrMsg("Нет ответа сервера");
            } else if (err.response?.status === 409) {
                setErrMsg("Имя пользователя уже используется");
            } else {
                setErrMsg("Ошибка регистрации")
            }
            errRef.current.focus();
        }
    }

    return (
        <div className="signup">
            <Header />
            <h1 className="signup__title">Регистрация</h1>
            <div className="signup__container">
                <p
                    ref={errRef}
                    className={errMsg ? "errmsg" : "offscreen"}
                    aria-live="assertive">
                    {errMsg}
                </p>
                <form className="signup__form" onSubmit={handleSubmit}>
                    <div className="input-box">
                        <input id="username"
                            type="text"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setUser(e.target.value)}
                            value={user}
                            required
                            aria-invalid={validName ? "false" : "true"}
                            aria-describedby="uidnote"
                            onFocus={() => setUserFocus(true)}
                            onBlur={() => setUserFocus(false)}
                        />
                        <label htmlFor="username">
                            Имя пользователя:
                            <FontAwesomeIcon icon={faCheck} className={validName ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={validName || !user ? "hide" : "invalid"} />
                        </label>
                        <p id="uidnote"
                            className={userFocus && user && !validName ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            Имя должно состоять от 4 до 24 символов.<br />
                            Имя должно начинаться должно с буквы.<br />
                            Разрешено использовать буквы, цифры, нижнее подчеркивание и тире.
                        </p>
                    </div>

                    <div className="input-box">
                        <input id="password"
                            type="password"
                            onChange={(e) => setPwd(e.target.value)}
                            // value={pwd}
                            required
                            aria-invalid={validPwd ? "false" : "true"}
                            aria-describedby="pwdnote"
                            onFocus={() => setPwdFocus(true)}
                            onBlur={() => setPwdFocus(false)}
                        />
                        <label htmlFor="password">
                            Пароль:
                            <FontAwesomeIcon icon={faCheck} className={validPwd ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={validPwd || !pwd ? "hide" : "invalid"} />
                        </label>
                        <p id="pwdnote"
                            className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            Пароль должен состоять от 8 до 24 символов.<br />
                            Пароль должен должен содержать заглавные и строчные буквы, цифру и специальный символ.<br />
                            Разрешено использовать специальные символы: 
                                <span aria-label="exclamation mark">!</span>
                                <span aria-label="at symbol">@</span>
                                <span aria-label="hashtag">#</span>
                                <span aria-label="dollar sign">$</span>
                                <span aria-label="percent">%</span>
                        </p>
                    </div>

                    <div className="input-box">
                        <input type="password"
                            id="confirm_pwd"
                            onChange={(e) => setMatchPwd(e.target.value)}
                            // value={matchPwd}
                            required
                            aria-invalid={validMatch ? "false" : "true"}
                            aria-describedby="confirmnote"
                            onFocus={() => setMatchFocus(true)}
                            onBlur={() => setMatchFocus(false)}
                        />
                        <label htmlFor="confirm_pwd">
                            Подтвердить пароль:
                            <FontAwesomeIcon icon={faCheck} className={validMatch && matchPwd ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={validMatch || !matchPwd ? "hide" : "invalid"} />
                        </label>
                        <p id="confirmnote"
                            className={matchFocus && !validMatch ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            Пароль должен совпадать с паролем в верхнем поле.
                        </p>
                    </div>

                    <button className="submit__btn"
                        disabled={!validName || !validPwd || !validMatch ? true : false}>
                        Зарегистрироваться
                    </button>

                    <button className="form__bottom">
                        Уже зарегистрированы?<br/>
                        <a href="/login" className="line">
                            Войти
                        </a>
                    </button>
                </form>
            </div>
            <Footer />
        </div>
    )
}

export default Signup