import React from 'react';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Reviews from './Reviews';
import SingleTool from './SingleTool';
import Tools from './Tools';

const Home = () => {
    return (
        <div>
            <Banner />
            <Tools />
            <Reviews />
            <BusinessSummary />
        </div>
    );
};

export default Home;