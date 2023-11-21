import React, { useState } from 'react';
import CardModalCartoons from './CardModalCartoon';

const CardCartoon = (props) => {
    const [showModal, setShowModal] = useState(false);
    const [btnState, setBtnState] = useState(false);

    const handleClose = () => {
        setShowModal(false)
    }

    const handleFavBtn = () => {
        setBtnState(btnState => !btnState);
    }

    let togleClassCheck = btnState ? " card__favourite_active" : "";

    return (
        <>
            <div className="card-cartoon">
                <div className="card-cartoon__container">
                    <div className="card-cartoon__poster" onClick={() => setShowModal(true)}>
                        <img
                            key={props.id}
                            id={props.id}
                            src={props.image}
                            alt={props.name}
                            className="card-cartoon__poster-img" />
                    </div>
                    <hr></hr>
                    <div className="card-cartoon__footer">
                        <div className="card-cartoon__info">
                            <div className="card-cartoon__name">
                                <p className="card-cartoon-name">{props.name}</p>
                            </div>
                            <div className="card-cartoon__text">{props.year},&nbsp;{props.genre}</div>
                        </div>
                        {/* <button className="card__favourite">
                            <svg className="card__icon" width="16" height="16" viewBox="0 0 16 16" role="img">
                                <use className="card__icon card__icon_red" href="./img/sprite.svg#heart-red"></use>
                                <use className="card__icon card__icon_white" href="./img/sprite.svg#heart-white"></use>
                            </svg>
                        </button> */}
                        <div className={`card__favourite${togleClassCheck}`} onClick={handleFavBtn}></div>
                    </div>
                </div>
            </div>
            {showModal && 
                <CardModalCartoons
                    key={props.id}
                    id={props.id}
                    image={props.image}
                    name={props.name}
                    year={props.year}
                    genre={props.genre}
                    duration={props.duration}
                    director={props.director}
                    studio={props.studio}
                    studioLogo={props.studioLogo}
                    description={props.description}
                    trailerLink={props.trailerLink}
                    onlineLink={props.onlineLink}
                    handleClose={handleClose} 
                />
            }
        </>
    )
}

export default CardCartoon;
