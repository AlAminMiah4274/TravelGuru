import React from 'react';
import logo from '../../img/logo/logo.png';
import './Header.css';

const Header = () => {
    return (
        <div>
            <div>
                <img className='logo' src={logo} alt="" />
                <input className='search-field' type="search" name="search" id="" placeholder='Search your Destination' />
                <p className='news'>News</p>
                <p className='destination'>Destination</p>
                <p className='blog'>Blog</p>
                <p className='contact'>Contact</p>
            </div>
            <div>
                <button className='btn-login'>Login</button>
            </div>
        </div>
    );
};

export default Header;