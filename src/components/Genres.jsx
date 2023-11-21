import React from 'react';

import { useTheme } from "../utils/useTheme";

const Genres = () => {
    const theme = useTheme();

    return (
        <div className={theme}>
            <div id="content">
                <div className="card">
                    <img className="card-img" src="https://img09.rl0.ru/afisha/e352x528q65i/s1.afisha.ru/mediastorage/9f/15/dabcea42d8e4403aa4c804f7159f.jpg" alt="#" />
                    <div className="title">
                        <h2>Приключения</h2>
                    </div>
                    <div className="more">
                        <a href="/adventure" className="more-link"> 
                            <span>далее</span>
                            <img src="./img/home_arrow-right.svg" alt="#" />
                        </a>
                    </div>
                </div>
                <div className="card">
                    <img className="card-img" src="https://b1.culture.ru/c/126471.jpg" alt="#" />
                    <div className="title">
                        <h2>Комедия</h2>
                    </div>
                    <div className="more">
                        <a href="/comedy" className="more-link"> 
                            <span>далее</span>
                            <img src="./img/home_arrow-right.svg" alt="#" />
                        </a>
                    </div>
                </div>
                <div className="card">
                    <img className="card-img" src="https://cdn.fishki.net/upload/post/201512/31/1796856/ja21.jpg" alt="#" />
                    <div className="title">
                        <h2>Детектив</h2>
                    </div>
                    <div className="more">
                        <a href="/detective" className="more-link"> 
                            <span>далее</span>
                            <img src="./img/home_arrow-right.svg" alt="#" />
                        </a>
                    </div>
                </div>
                <div className="card">
                    <img className="card-img" src="https://n1s2.hsmedia.ru/64/2c/39/642c39162a43af1da32ffbaf6f663591/320x480_0_76747cdcd61c40d538b33b0856245bb2@400x600_0x0a330ca2_15587106751537869837.jpeg" alt="#" />
                    <div className="title">
                        <h2>Мелодрама</h2>
                    </div>
                    <div className="more">
                        <a href="/drama" className="more-link"> 
                            <span>далее</span>
                            <img src="./img/home_arrow-right.svg" alt="#" />
                        </a>
                    </div>
                </div>
                <div className="card">
                    <img className="card-img" src="https://muzika.fun/img/collections/319788_big.jpg" alt="#" />
                    <div className="title">
                        <h2>Военный</h2>
                    </div>
                    <div className="more">
                        <a href="/military" className="more-link"> 
                            <span>далее</span>
                            <img src="./img/home_arrow-right.svg" alt="#" />
                        </a>
                    </div>
                </div>
                <div className="card">
                    <img className="card-img" src="https://sun1-98.userapi.com/s/v1/ig2/EmCuAYjz5tkutvrNsAo-Nt4-XkLHrLrWvb36uSBCqkbogZ6uFwWQbA6p7LbiYyMenvExP0csOgKceAIvYAFxSHqk.jpg?size=400x400&quality=96&crop=197,76,606,606&ava=1" alt="#" />
                    <div className="title">
                        <h2>Мультфильмы</h2>
                    </div>
                    <div className="more">
                        <a href="/cartoons" className="more-link"> 
                            <span>далее</span>
                            <img src="./img/home_arrow-right.svg" alt="#" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Genres;