import React from 'react';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import NewsLetter from './NewsLetter';
import Achivements from './Achievements';
import Reviews from './Reviews';
import Tools from './Tools';
import './styles/home.css';

const Home = () => {
    return (
        <div className='home'>
            <Banner />
            <Tools />
            <Reviews />
            <BusinessSummary />
            <Achivements />
            <NewsLetter />
        </div>
    );
};

export default Home;