import React from 'react';
import logo from '../imgs/logo.svg'
import styles from '../styles/navbar.module.css';

function Navbar() {
    return (
        <div className={styles.container}>
            <div className={styles.logoContainer}>
                <img src={logo} className={styles.logo}/>
            </div>
            <div className={styles.navbarContainer}>
                <div className={styles.pagesContainer}>
                    <div className={styles.page}>Home</div>
                    <div className={styles.page}>Projects</div>
                    <div className={styles.page}>Contact</div>
                </div>
                <div className={styles.searchBar}>
                    <p>Search...</p>
                </div>
            </div>
        </div>
    );
}

export default Navbar;