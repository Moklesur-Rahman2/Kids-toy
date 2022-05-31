import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'
import notFoundImage from '../../images/404.png'

const NotFound = () => {
    return (
        <div className='not-found'>
            <h2>The page you are looking for doesn’t exist.</h2>
            <img src={notFoundImage} alt="404" />
            <Link to='/' className='error-btn'>Go Back To Home Page</Link>
        </div>
    );
};

export default NotFound;