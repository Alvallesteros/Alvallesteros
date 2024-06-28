import React from 'react';
import styles from '../styles/experiences.module.css';
import common from '../styles/common.module.css';

const ExpDate = ({ date }) => {
    return (
        <div className={styles.dateContainer}>
            <div className={styles.hlines}></div>
            <div className={styles.date}>
                <span>{ date }</span>
            </div>
            <div className={styles.hlines}></div>
        </div>
    );
}


function Experiences() {
    return (
        <div className={styles.container}>
            <div className={common.titleText}>
                <span>E</span>xperiences
            </div>
            <ExpDate date={'June 2023 - May 2024'} />
            <ExpDate date={'June 2024 - July 2024'} />
            <div className={common.lefthandContainer}>
                <div className={common.line}></div>
            </div>
        </div>
    );
}

export default Experiences