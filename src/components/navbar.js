import React from 'react';
import logo from '../imgs/logo.svg'
import '../styles/navbar.css';

function Navbar() {
    return (
        <div id='navbar' className='container'>
            <div className='logo-container'>
                <img src={logo} className='logo'/>
            </div>
            <div className='navbar-container'>
                <div className='pages-container'>
                    <div className='page'>Home</div>
                    <div className='page'>Projects</div>
                    <div className='page'>Contact</div>
                </div>
                <div className='search-bar'>
                    <p>Search...</p>
                </div>
            </div>
        </div>
    );
}

export default Navbar;