import React from 'react';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import NewsLetter from './NewsLetter';
import Achivements from './Achievements';
import Reviews from './Reviews';
import Tools from './Tools';

const Home = () => {
    return (
        <div>
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