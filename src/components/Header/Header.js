import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <header className='header container'>
            <div className="logo-area"><h2>Kids Toy</h2></div>
            <div className="nav-bar">
                <Link to='/home'>Home</Link>
                <Link to='/reviews'>Reviews</Link>
                <Link to='/dashboard'>Dashboard</Link>
                <Link to='/blog'>Blog</Link>
            </div>
        </header>
    );
};

export default Header;