import React, { useState } from "react";
import CardModal from "./CardModal";

const Card = (props) => {
    // console.log(props.image)
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
            <div className="card">
                <div className="card__container">
                    <div className="card__poster"
                        onClick={() => setShowModal(true)}>
                        <img
                            key={props.id}
                            id={props.id}
                            src={props.image}
                            alt={props.name}
                            className="card__poster-img" 
                        />
                    </div>
                    <hr></hr>
                    <div className="card__footer">
                        <div className="card__info">
                            <div className="card__name">
                                <p className="card-name">{props.name}</p>
                            </div>
                            <div className="card__text">{props.year},&nbsp;{props.genre}</div>
                        </div>
                        <div className={`card__favourite${togleClassCheck}`} onClick={handleFavBtn}></div>
                    </div>
                </div>
            </div>
            {showModal &&
                <CardModal
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

export default Card;
