import React from 'react';

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer__wrap">
                <div className="footer__logo">
                    <img src="./img/footer-logo.webp" alt="Camera" className="footer__logo-img" />
                </div>
                <nav className="footer__nav">
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
                    </ul>
                </nav>
            </div>
            <div className='disclaimer'>
                Icons made from &nbsp;
                <a href="https://www.onlinewebfonts.com/icon" target="blank">
                    SVG ICONS
                </a>
                &nbsp; is licensed by &nbsp;
                <a href="https://creativecommons.org/licenses/by/4.0/" target="blank">
                    CC BY 4.0
                </a>
            </div>
        </div>
    )
}

export default Footer;