import React from 'react';

import { useTheme } from "../utils/useTheme";

const Intro = () => {
    const theme = useTheme();

    return (
        <div className={theme}>
            <div className='intro'>
                <div className="intro__info">
                    <h1 className='intro__title'>
                        Классика<br></br>
                        Советского Кинематографа
                    </h1>
                    <p className='intro__subtitle'>Фильмы нашей молодости</p>
                </div>
            </div>
        </div>
    )
}

export default Intro;