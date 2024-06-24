import React from 'react';
import logo from '../imgs/logo.svg'
import '../styles/navbar.css';

function Navbar() {
    return (
        <div id='navbar' className='container'>
            <div className='logo-container'>
                <img src={logo} className='logo'/>
            </div>
        </div>
    );
}

export default Navbar;