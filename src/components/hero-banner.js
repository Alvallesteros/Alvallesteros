import React from 'react';
import styles from '../styles/hero-banner.module.css';
import linkedin from '../imgs/linked-in.svg';
import telegram from '../imgs/telegram.svg';
import github from '../imgs/github.svg';

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
            <div className={styles.profileContainer}>
                <div className={styles.image}></div>
                <div className={styles.lefthandContainer}>
                    <div className={styles.line}></div>
                    <div className={styles.socialsContainer}>
                        <img src={linkedin} className={styles.socials}/>
                        <img src={github} className={styles.socials}/>
                        <img src={telegram} className={styles.socials}/>
                    </div>
                    <div className={styles.line}></div>
                </div>
            </div>
        </div>
    );
}

export default HeroBanner;