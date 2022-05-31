import React from 'react';
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';
import './Reviews.css'

const Reviews = () => {
    const [reviews, setReviews] = useReviews()
    return (
        <div>
            <div className="inner-hero">
                <h1>Happy customer Reviews</h1>
            </div>
            <div className='container reviews'>
                <div className="reviews-wrap">
                    {
                        reviews.map(review => <Review review={review} key={review.id}></Review>)
                    }
                </div>

            </div>
        </div>
    );
};

export default Reviews;