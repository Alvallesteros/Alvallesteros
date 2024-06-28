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

const OpenPosition = ({
    organization, position, responsibilities
}) => {
    return (
        <div className={styles.expContainer}>
            <div className={styles.titleContainer} style={{marginTop: "5vh"}}>
                <span className={styles.org}>{ organization }</span>
                <span className={styles.pos}>{ position }</span>
            </div>
            <div className={styles.respContainer}>
                {responsibilities.map((item, index) => (
                    <div key={index} className={styles.respItem}>
                        <div className={styles.bulletContainer}>
                            <div className={styles.line}></div> 
                        </div>
                        <span>{item}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

const ClosePosition = ({
    organization, position
}) => {
    return (
        <div className={styles.expContainer}>
            <div className={styles.titleContainer} style={{marginBottom: "0"}}>
                <span className={styles.org}>{ organization }</span>
                <span className={styles.pos}>{ position }</span>
            </div>
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
            <OpenPosition 
                organization={"Computer Society of the Ateneo"}
                position={"Vice President for Development and Training"}
                responsibilities={[
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel lorem auctor, malesuada risus eget, laoreet arcu. Mauris id neque in odio mollis scelerisque.",
                    "Curabitur eget velit et diam consectetur pharetra. Cras commodo purus ac sem scelerisque imperdiet."
                ]}
            />
            <ExpDate date={'June 2024 - July 2024'} />
            <ClosePosition
                organization={"MSCI Inc."}
                position={"DevOps Intern"}
            />
            <div className={styles.hlines} style={{width: "80vw"}}></div>
            <div className={common.lefthandContainer}>
                <div className={common.line}></div>
            </div>
        </div>
    );
}

export default Experiences