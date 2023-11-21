import React, { useEffect, useState } from 'react';
import axios from 'axios';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import required modules
import { Navigation } from 'swiper/modules';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Card from '../components/Card';

const Adventure = () => {
    const [adventure, setAdventure] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:5000/adventure")
            .then(response => {
                setAdventure(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    return (
        <div className="adventure">
            <Header />
            <div className="adventure__wrap">
                <h1>Приключения</h1>
                <Swiper
                    className="mySwiper"
                    slidesPerView={5}
                    // slidesPerGroup={5}
                    spaceBetween={42}
                    navigation={{
                        nextEl: "#nav-next",
                        prevEl: "#nav-prev"
                    }}
                    modules={[Navigation]}
                >
                    {adventure.map((item) => {
                        console.log(item.image)
                        return (
                            <SwiperSlide key={item.id} className="swiper-slide">
                                <Card 
                                    key={item.id}
                                    id={item.id}
                                    image={item.image}
                                    name={item.name}
                                    year={item.year}
                                    genre={item.genre}
                                    director={item.director}
                                    studio={item.studio}
                                    studioLogo={item.studioLogo}
                                    duration={item.duration}
                                    description={item.description}
                                    trailerLink={item.trailerLink}
                                    onlineLink={item.onlineLink}
                                />
                            </SwiperSlide>
                        )
                    })}
                    
                    <div className="swiper-custom-nav">
                        <svg id="nav-prev" width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M32 2.79753e-06C14.3269 4.34256e-06 -4.34256e-06 14.3269 -2.79753e-06 32C-1.2525e-06 49.6731 14.3269 64 32 64C49.6731 64 64 49.6731 64 32C64 14.3269 49.6731 1.2525e-06 32 2.79753e-06ZM28.9334 24.3999C28.6667 24.1333 28.4 23.9999 28 23.9999C27.6 23.9999 27.3334 24.1333 27.0667 24.3999L20.4 31.0666L20.4 31.0667C20.2 31.2667 20.075 31.5041 20.025 31.751C19.9417 32.1624 20.0666 32.6 20.4 32.9333L27.0667 39.6C27.6 40.1333 28.4 40.1333 28.9333 39.6C29.4667 39.0667 29.4667 38.2667 28.9333 37.7333L24.5334 33.3334L42.7222 33.3334C43.4889 33.3334 44 32.8 44 32C44 31.2 43.4889 30.6667 42.7222 30.6667L24.5333 30.6667L28.9334 26.2666C29.4667 25.7333 29.4667 24.9333 28.9334 24.3999Z" fill="dimgray" />
                        </svg>
                        <svg id="nav-next" width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M32 64C49.6731 64 64 49.6731 64 32C64 14.3269 49.6731 0 32 0C14.3269 0 0 14.3269 0 32C0 49.6731 14.3269 64 32 64ZM35.0666 39.6001C35.3333 39.8667 35.6 40.0001 36 40.0001C36.4 40.0001 36.6666 39.8667 36.9333 39.6001L43.6 32.9334L43.6 32.9333C43.8 32.7333 43.925 32.4959 43.975 32.249C44.0583 31.8376 43.9334 31.4 43.6 31.0667L36.9333 24.4C36.4 23.8667 35.6 23.8667 35.0667 24.4C34.5333 24.9333 34.5333 25.7333 35.0667 26.2667L39.4666 30.6666H21.2778C20.5111 30.6666 20 31.2 20 32C20 32.8 20.5111 33.3333 21.2778 33.3333H39.4667L35.0666 37.7334C34.5333 38.2667 34.5333 39.0667 35.0666 39.6001Z" fill="dimgray" />
                        </svg>
                    </div>
                </Swiper>
            </div>
            <Footer />
        </div>
    )
}

export default Adventure;