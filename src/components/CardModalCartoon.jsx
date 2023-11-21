import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const CardModalCartoon = (props) => {
    console.log(props)
    const [showModal, setShowModal] = useState(false);

    const time = Math.floor(props.duration / 60) + 'ч ' + props.duration % 60 + 'мин';

    const handleClose = () => {
        setShowModal(false)
    }

    

    return ReactDOM.createPortal (
        <>
            <div className='overlay'>
                <div className="modal" style={{background: "var(--bgModalTheme)"}}>
                    <div className="container">
                        <button className='closeModal'
                            onClick={()=> props.handleClose()}>
                            &#10006;
                        </button>
                        {showModal &&
                            <CardModalCartoon
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
                        <iframe title={props.name} className="modal__video" src={props.trailerLink} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share">
                            <source src={props.trailerLink} controls muted autoPlay></source>
                        </iframe>
                        <div key={props.id} className="content">
                            <div className="content__wrap">
                                <div className="content__wrap-info">
                                    <div className="content__title">
                                        <p className="title">{props.name}</p>
                                    </div>
                                    <p className="content__director">Режиссер: &nbsp;{props.director}</p>
                                    <p className="content__studio">Киностудия: &nbsp;{props.studio}</p>
                                    <div className="content__text">{props.year}, &nbsp;{props.genre}, &nbsp;{time}</div>
                                </div>
                                <div className="content__logo">
                                    <img className="content__logo-img" src={props.studioLogo} alt="Mosfilm" />
                                </div>
                            </div>
                            <p className="content__description">{props.description}</p>
                            <button className="content__btn">
                                <a href={props.onlineLink} className="content__btn-span" target="blank">Смотреть онлайн</a>
                                {/* <span className="btn-span">&#8921;</span> 
                                */}
                                <div class="btn-arrows">
                                    <i class="zmdi zmdi-chevron-right"></i>
                                    <i class="zmdi zmdi-chevron-right"></i>
                                    <i class="zmdi zmdi-chevron-right"></i>
                                    <i class="zmdi zmdi-chevron-right"></i>
                                    <i class="zmdi zmdi-chevron-right"></i>
                                    <i class="zmdi zmdi-chevron-right"></i>
                                    <i class="zmdi zmdi-chevron-right"></i>
                                    <i class="zmdi zmdi-chevron-right"></i>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>,
        document.getElementById('modal')
    )
}

export default CardModalCartoon;
 