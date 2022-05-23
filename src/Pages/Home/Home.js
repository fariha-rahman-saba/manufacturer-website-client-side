import React from 'react';
import Banner from './Banner';
import Reviews from './Reviews';
import SingleTool from './SingleTool';
import Tools from './Tools';

const Home = () => {
    return (
        <div>
            <Banner />
            <Tools />
            <Reviews />
        </div>
    );
};

export default Home;