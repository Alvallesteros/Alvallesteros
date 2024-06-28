import React from 'react';
import styles from '../styles/about-me.module.css';
import common from '../styles/common.module.css';

function AboutMe() {
    return (
      <div className={styles.container}>
        <div className={styles.titleContainer}>
            <div className={common.titleText} style={{
                textAlign: "right",
            }}><span>A</span>bout Me</div>
        </div>
        <div className={styles.underline}></div>
        <div className={styles.background}>
            <div className={styles.gradient}></div>
            <div className={styles.gradient} style={{transform: "rotate(180deg)"}}></div>
        </div>
      </div>  
    );
}

export default AboutMe;