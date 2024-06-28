import React from 'react';
import styles from '../styles/skills.module.css';
import common from '../styles/common.module.css';
import github from '../imgs/github.svg';

function Skills() {
    return (
        <div className={styles.container}>
            <div className={common.titleText}
                style={{
                    textAlign: "center",
                    margin: "2vh 0 0 0"
                }}>
                <span>S</span>kills
            </div>
            <div className={styles.skillsContainer}>
                <div className={styles.skills}>
                    <div className={styles.imgContainer}>
                        <img src={github} className={styles.img}/>
                    </div>
                    <span>Github</span>
                </div>
                <div className={styles.skills}>
                    <div className={styles.imgContainer}>
                        <img src={github} className={styles.img}/>
                    </div>
                    <span>Github</span>
                </div>
                <div className={styles.skills} style={{flexBasis: "27vw"}}>
                    <div className={styles.imgContainer}>
                        <img src={github} className={styles.img}/>
                    </div>
                    <span>Git Source Control</span>
                </div>
                <div className={styles.skills}>
                    <div className={styles.imgContainer}>
                        <img src={github} className={styles.img}/>
                    </div>
                    <span>Github</span>
                </div>
                <div className={styles.skills}>
                    <div className={styles.imgContainer}>
                        <img src={github} className={styles.img}/>
                    </div>
                    <span>Github</span>
                </div>
                <div className={styles.skills}>
                    <div className={styles.imgContainer}>
                        <img src={github} className={styles.img}/>
                    </div>
                    <span>Github</span>
                </div>
            </div>
        </div>
    );
}

export default Skills;