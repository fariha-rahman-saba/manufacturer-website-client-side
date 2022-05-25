import React, { useEffect, useState } from 'react';
import SingleReview from './SingleReview';
import './styles/reviews.css';


const Reviews = () => {
    // load reviews

    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/review')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, []);
    console.log(reviews);
    return (
        <div>
            <h1>Reviews</h1>
            <div className='items-center reviews'>
                {
                    reviews.map(review => <SingleReview key={review.id} review={review}></SingleReview>)
                }
            </div>
        </div>
    );
};

export default Reviews;