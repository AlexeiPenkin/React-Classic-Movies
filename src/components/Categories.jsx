import React from 'react';

import { useTheme } from "../utils/useTheme";

const Categories = () => {
    const theme = useTheme();

    return (
        <div className={theme}>
            <div className='categories'>
                <div className="categories__wrap">
                    <div className="genres">
                        <div className="genre">Приключения</div>
                        <div className="genre">Комедия</div>
                        <div className="genre">Детектив</div>
                        <div className="genre">Мелодрама</div>
                        <div className="genre">Военный</div>
                        <div className="genre">Мультфильмы</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Categories;