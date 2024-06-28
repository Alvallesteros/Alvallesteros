import React from 'react';
import styles from '../styles/hero-banner.module.css';

function HeroBanner() {
    return (
        <div className={styles.container}>
            <div className={styles.welcomeContainer}>
                Hi!
            </div>
        </div>
    );
}

export default HeroBanner;