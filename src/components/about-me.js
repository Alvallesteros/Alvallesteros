import React from 'react';
import styles from '../styles/about-me.module.css';
import common from '../styles/common.module.css';

function AboutMe() {
    return (
      <div className={styles.container}>
        <div className={styles.titleContainer}>
            <div className={common.titleText} style={{
                textAlign: "right",
            }}>
                <span>A</span>bout Me
            </div>
        </div>
        <div className={styles.underline}></div>
        <div className={styles.textContainer}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel lorem auctor, malesuada risus eget, laoreet arcu. Mauris id neque in odio mollis scelerisque. Duis iaculis posuere vulputate. Aliquam pulvinar lectus eget dapibus posuere. Nam efficitur, nulla quis molestie laoreet, dolor elit accumsan tortor, ut vulputate lectus purus id turpis. Curabitur eget velit et diam consectetur pharetra. Cras commodo purus ac sem scelerisque imperdiet.
        </div>
        <div className={styles.background}>
            <div className={styles.gradient}></div>
            <div className={styles.gradient} style={{transform: "rotate(180deg)"}}></div>
        </div>
      </div>  
    );
}

export default AboutMe;