import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faTelegram } from "@fortawesome/free-brands-svg-icons"
import profpic from '../imgs/me-alt.png'
import styles from '../styles/hero-banner.module.css';
import common from '../styles/common.module.css';

function HeroBanner() {
    return (
        <div className={'container ' + styles.container}>
            <div className='row vcenter'>
                <div className='line'></div>
                <div className='col-s-3 vcenter'>
                    <div className={styles.textContainer}>
                        <span className={'header-4 ' + styles.welcome}>What's up? I'm</span>
                        <span className={'header-1 ' + styles.fname}>Angelo</span>
                        <span className={'header-1 ' + styles.lname}><span>Alva</span>rez</span>
                        <span className={'header-5 ' + styles.position}>Junior Developer</span>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='line'></div>
                <div className='col-s-3' style={{position:'relative', height:'45vh'}}>
                    <div className={styles.imgContainer}>
                        <img src={profpic} />
                    </div>
                </div>
            </div>
            <div className='row vcenter'>
                <div className='divider'></div>
                <div className='col-s-1 real-center'>
                    <FontAwesomeIcon icon={faLinkedin} className={styles.socials}/>
                </div>
                <div className='col-s-1 real-center'>
                    <FontAwesomeIcon icon={faGithub} className={styles.socials}/>
                </div>
                <div className='col-s-1 real-center'>
                    <FontAwesomeIcon icon={faTelegram} className={styles.socials}/>
                </div>
                <div className='divider' style={{top:'auto', bottom: '0'}}></div>
            </div>
        </div>
    );
}

export default HeroBanner;