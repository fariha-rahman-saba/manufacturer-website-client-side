import React from 'react';


const SingleReview = ({ review }) => {
    console.log(review);
    const { email, desc, rating } = review;
    return (

        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body items-center text-center">
                <h2 className="card-title">{email}</h2>
                <p>{desc}</p>
                <h5>Rating: {rating}</h5>
            </div>
        </div>

    );
};

export default SingleReview;