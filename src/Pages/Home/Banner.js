import React from 'react';
import banner from '../../assets/images/banner.jpg';

const Banner = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={banner} alt="" className=" w-100" height="600px" width="1270px" />

            </div>
        </div>
    );
};

export default Banner;