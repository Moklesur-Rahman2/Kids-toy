import React from 'react';
import { Link } from 'react-router-dom';
import useReviews from '../../hooks/useReviews';
import Hero from '../Hero/Hero';
import Review from '../Review/Review';
import './Home.css'

const Home = () => {
    const [reviews, setReviews] = useReviews()
    const featureReviews = reviews.slice(0, 3)
    return (
        <main>
            <Hero></Hero>
            <section className='container reviews'>
                <h2>Customer Reviews</h2>
                <div className="reviews-wrap">
                    {
                        featureReviews.map(review => <Review review={review} key={review.id}></Review>)
                    }
                </div>
                <Link to='/reviews' className='review-btn'>See all reviews</Link>
            </section>
        </main>
    );
};

export default Home;