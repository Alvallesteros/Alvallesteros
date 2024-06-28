import React from 'react';
import styles from '../styles/about-me.module.css';

function AboutMe() {
    return (
      <div className={styles.container}>
        <div className={styles.background}>
            <div className={styles.gradient}></div>
            <div className={styles.gradient} style={{transform: "rotate(180deg)"}}></div>
        </div>
      </div>  
    );
}

export default AboutMe;