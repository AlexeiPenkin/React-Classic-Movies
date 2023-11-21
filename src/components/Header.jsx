import React from 'react';

import ThemeBtn from "./ThemeBtn";

const Header = () => {

    return (
        <>
            <div className='header'>
                <div className="header__wrap">
                    <div className="header__logo">
                        <img src="./img/header-logo.webp" alt="Camera" className="header__logo-img" />
                    </div>
                    <nav className="header__nav">
                        <ul>
                            <li>
                                <a href="/">
                                    <span className="link-text">
                                        Главная
                                    </span>
                                    <svg style={{color: "white"}} xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-house-fill" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z" fill="#999"></path>
                                        <path fillRule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z" fill="#999"></path>
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href="/adventure">Приключения</a>
                            </li>
                            <li>
                                <a href="/comedy">Комедия</a>
                            </li>
                            <li>
                                <a href="/detective">Детектив</a>
                            </li>
                            <li>
                                <a href="/drama">Мелодрама</a>
                            </li>
                            <li>
                                <a href="/military">Военный</a>
                            </li>
                            <li>
                                <a href="/cartoons">Мультфильмы</a>
                            </li>
                            <li>
                                <a href="/favourite">Избранное</a>
                            </li>
                            <div className="header__auth">
                                <a className="header__user_register"
                                    href="/signup">
                                    <span className="link-text__register">
                                        Регистрация
                                    </span>
                                    <svg id="user-icon-register"
                                        xmlns="http://www.w3.org/2000/svg"
                                        // width="16"
                                        // height="16"
                                        viewBox="0 0 256 256"
                                        // enable-background="new 0 0 256 256"
                                    >
                                        <path fill="#999" d="M165.8,27.2c-2.2-0.6-4.4,0.6-5.1,2.8c-0.6,2.2,0.7,4.4,2.8,5.1c44.1,12.7,74.7,54.9,74.3,102.6c-0.3,28.3-11,54.8-30.4,74.6c-19.2,19.6-52.6,30.4-79.4,30.4h-0.8c-56,0-109.4-48.3-108.9-106.6c0.4-47.7,31.6-89.5,76-101.5c2.2-0.6,3.5-2.8,2.9-5c-0.6-2.2-2.8-3.5-5-2.9c-47.9,12.9-81.6,58-82,109.3c-0.5,62.7,56.5,114.8,117.1,114.8h0.9c29,0,64.6-11.7,85.3-32.9c20.9-21.3,32.5-49.8,32.8-80.2C246.4,86.5,213.4,41,165.8,27.2z M128.2,144.4L128.2,144.4c2.3,0,4.1-2.6,4.1-4.9l1.1-129c0-2.3-1.8-5.4-4.1-5.4h0c-2.3,0-4.1,2.7-4.1,4.9l-1,129C124.1,141.3,125.9,144.4,128.2,144.4z"/>
                                    </svg>
                                </a>

                                <a className="header__user_login"
                                    href="/login">
                                    <span className="link-text__login">
                                        Вход
                                    </span>
                                    <svg id="user-icon-login"
                                        xmlns="http://www.w3.org/2000/svg"
                                        // width="16"
                                        // height="16"
                                        // fill="currentColor"
                                        // class="bi bi-person-circle"
                                        viewBox="0 0 16 16"
                                    >
                                        <path fill="#999" d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"></path>
                                        <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" fill="#999"></path>
                                    </svg>
                                </a>
                            </div>
                        </ul>
                    </nav>
                    <ThemeBtn />
                </div>
            </div>
        </>
    )
}

export default Header;