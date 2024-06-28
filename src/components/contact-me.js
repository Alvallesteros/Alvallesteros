import React from 'react';
import styles from '../styles/contact.module.css';
import common from '../styles/common.module.css';
import github from '../imgs/github.svg'

function ContactMe() {
    return (
        <div className={styles.container}>
            <div className={common.titleText}>
                <span>C</span>ontact Me
            </div>
            <div className={styles.detailsContainer}>
                <div className={styles.detail}>
                    <div className={styles.imgContainer}>
                        <img src={github} className={styles.img}/>
                    </div>
                    <span>(+63) 943 316 4313</span>
                </div>
                <div className={styles.detail} style={{width:'27vw'}}>
                    <div className={styles.imgContainer}>
                        <img src={github} className={styles.img}/>
                    </div>
                    <span>aj.alvallesteros@gmail.com</span>
                </div>
            </div>
        </div>
    );
}

export default ContactMe