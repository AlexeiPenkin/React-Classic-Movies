import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Intro from '../components/Intro';
import Categories from '../components/Categories';
import Genres from '../components/Genres';

const Home = () => {

    return (  
        <div className='home'>
            <Header />
            <div className="home__container">
                <Intro />
                <Categories />
                <Genres />
            </div>
            <Footer />
        </div> 
    )
}

export default Home;