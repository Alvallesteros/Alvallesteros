import React, { useEffect, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faTelegram } from "@fortawesome/free-brands-svg-icons"
import profpic from '../imgs/me-alt.png'
import styles from '../styles/hero-banner.module.css';

function HeroBanner() {
    const [isTablet, setTablet] = useState(window.innerWidth > 768);
    const [isDesktop, setDesktop] = useState(window.innerWidth > 1199);

    const updateMedia = () => {
        setTablet(window.innerWidth > 768);
        setDesktop(window.innerWidth > 1199);
    };

    useEffect(() => {
        window.addEventListener("resize", updateMedia);
        return () => window.removeEventListener("resize", updateMedia);
    });

    return (
        <div className={'container ' + styles.container}>
            { isTablet | isDesktop ? ( 
                <div className={'offset-11 col-1 offset-l-7 col-l-1 offset-md-5 col-md-1 ' + styles.lineContainer}>
                    <div className={styles.hbline}></div>
                    <div className={styles.contactContainer}>
                        <FontAwesomeIcon icon={faLinkedin} className={styles.socialsDesktop}/>
                        <FontAwesomeIcon icon={faGithub} className={styles.socialsDesktop}/>
                        <FontAwesomeIcon icon={faTelegram} className={styles.socialsDesktop}/>
                    </div>
                    <div className={styles.hbline}></div>
                </div>
            ) :null }
            <div className='row' style={{position: 'relative'}}>
                { isTablet | isDesktop  ? null: <div className='line'></div>}
                <div className='col-6 col-l-4 col-s-3 col-md-3 vcenter unselectable'>
                    <div className={styles.textContainer}>
                        <span className={'header-4 ' + styles.welcome}>What's up? I'm</span>
                        <span className={'header-1 ' + styles.fname}>Angelo</span>
                        <span className={'header-1 ' + styles.lname}><span>Alva</span>rez</span>
                        <span className={'header-5 ' + styles.position}>Junior Developer</span>
                    </div>
                </div>
                { isDesktop ? (
                    <div className={'col-6 col-l-4 unselectable ' + styles.profileContainer}>
                        <div className={styles.imgContainer}>
                            <img src={profpic}/>
                        </div>
                    </div>
                ) :null }
            </div>
            { !isDesktop ? (
                <div className='row' style={{position: 'relative'}}>
                { isTablet | isDesktop  ? null: <div className='line'></div>}
                <div className={'offset-l-4 col-l-4 col-s-3 col-md-6 ' + styles.profileContainer}>
                    <div className={styles.imgContainer}>
                        <img src={profpic} />
                    </div>
                </div>
            </div>
            ) :null }
            { isTablet | isDesktop  ? null: (
                <div className='row' style={{position: 'relative', pointerEvents: 'auto'}}>
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
            )}
        </div>
    );
}

export default HeroBanner;