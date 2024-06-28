import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faTelegram } from "@fortawesome/free-brands-svg-icons"
import profpic from '../imgs/me-alt.png'
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
            <div className={styles.profileContainer}>
                <div className={styles.image}>
                    <img src={profpic}/>
                </div>
                <div className={styles.lefthandContainer}>
                    <div className={styles.line}></div>
                    <div className={styles.socialsContainer}>
                        <FontAwesomeIcon icon={faLinkedin} className={styles.socials}/>
                        <FontAwesomeIcon icon={faGithub} className={styles.socials}/>
                        <FontAwesomeIcon icon={faTelegram} className={styles.socials}/>
                    </div>
                    <div className={styles.line}></div>
                </div>
            </div>
        </div>
    );
}

export default HeroBanner;