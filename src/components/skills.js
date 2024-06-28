import React from 'react';
import styles from '../styles/skills.module.css';
import common from '../styles/common.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPython, faJava, faWindows, faGitAlt, faJs, faHtml5 } from "@fortawesome/free-brands-svg-icons"

function Skills() {
    return (
        <div className={styles.container}>
            <div className={common.titleText}
                style={{
                    textAlign: "center",
                    margin: "5vh 0 2vh 0"
                }}>
                <span>S</span>kills
            </div>
            <div className={styles.skillsContainer}>
                <div className={styles.skills}>
                    <div className={styles.imgContainer}>
                        <FontAwesomeIcon icon={faPython} className={styles.img}/>
                    </div>
                    <span>Python</span>
                </div>
                <div className={styles.skills}>
                    <div className={styles.imgContainer}>
                        <FontAwesomeIcon icon={faJava} className={styles.img}/>
                    </div>
                    <span>Java</span>
                </div>
                <div className={styles.skills}>
                    <div className={styles.imgContainer}>
                        <FontAwesomeIcon icon={faWindows} className={styles.img}/>
                    </div>
                    <span>Azure</span>
                </div>
                <div className={styles.skills} style={{flexBasis: "20vw"}}>
                    <div className={styles.imgContainer}>
                        <FontAwesomeIcon icon={faGitAlt} className={styles.img}/>
                    </div>
                    <span>Git Source Control</span>
                </div>
                <div className={styles.skills} style={{flexBasis: "20vw"}}>
                    <div className={styles.imgContainer}>
                        <FontAwesomeIcon icon={faJs} className={styles.img}/>
                    </div>
                    <span>JavaScript</span>
                </div>
                <div className={styles.skills} style={{flexBasis: "20vw"}}>
                    <div className={styles.imgContainer}>
                        <FontAwesomeIcon icon={faHtml5} className={styles.img}/>
                    </div>
                    <span>HTML / CSS</span>
                </div>
            </div>
            <div className={common.lefthandContainer}>
                <div className={common.line}></div>
            </div>
        </div>
    );
}

export default Skills;