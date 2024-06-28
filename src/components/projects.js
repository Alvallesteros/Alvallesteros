import React from 'react';
import styles from '../styles/projects.module.css'
import common from '../styles/common.module.css'

function Projects() {
    return (
        <div className={styles.container}>
            <div className={styles.titleContainer}>
                <div className={common.titleText}
                    style={{
                        fontSize: '6em'
                }}>
                    <span>P</span>rojects
                </div>
            </div>
            <div className={styles.button}>
                <span>Go to Projects</span>
            </div>
            <div className={common.background}>
                <div className={common.gradient}></div>
                <div className={common.gradient} style={{transform: "rotate(180deg)"}}></div>
            </div>
        </div>
    );
}

export default Projects