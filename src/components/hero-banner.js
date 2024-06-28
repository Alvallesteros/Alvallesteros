import React from 'react';
import styles from '../styles/hero-banner.module.css';

function HeroBanner() {
    return (
        <div className={styles.container}>
            <div className={styles.welcomeContainer}>
                <span className={styles.welcomeText}>What's Up? I'm</span>
                <div className={styles.nameContainer}>
                    <div className={styles.firstName}>Angelo</div>
                    <div className={styles.lastName}><span>Alva</span>rez</div>
                </div>
                <span className={styles.position}>Junior Developer</span>
            </div>
        </div>
    );
}

export default HeroBanner;