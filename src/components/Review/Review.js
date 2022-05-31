import React from 'react';
import './Review.css'

const Review = (props) => {
    const { name, photo, ratting, text } = props.review
    return (
        <div className='review'>
            <img src={photo} alt={name} />
            <h3>{name}</h3>
            <p>{text}</p>
            <p className='ratting'>Ratting: {ratting}</p>

        </div>
    );
};

export default Review;