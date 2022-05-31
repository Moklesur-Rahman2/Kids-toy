import React from 'react';
import hero_photo from '../../images/hero-photo.jpeg'
import './Hero.css'

const Hero = () => {
    return (
        <div className='hero-section'>
            <div className="text-area">
                <h1>Bird's Nest Cafe Toy Set</h1>
                <p>Your little one will love creating their own tricky course with this mini golf set. Its incrase your kids brain ability. Its helps your kids more active and its really a enjoy able game for your kid</p>
                <button className='shop-btn'>Shop Now</button>
            </div>
            <div className="photo-area">
                <img src={hero_photo} alt="hero section" />
            </div>
        </div>
    );
};

export default Hero;