import React, { useEffect, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faTelegram } from "@fortawesome/free-brands-svg-icons"
import profpic from '../imgs/me-alt.png'

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
        <div className={'container hb-container'}>
            { isTablet | isDesktop ? ( 
                <div className={'col-1 offset-11'} style={{position: 'absolute', height: '100%', zIndex: '150'}}>
                    <div className='line-container'>
                        <div className='hbline'></div>
                        <div className='contact-container'>
                            <FontAwesomeIcon icon={faLinkedin} className='socials-desktop'/>
                            <FontAwesomeIcon icon={faGithub} className='socials-desktop'/>
                            <FontAwesomeIcon icon={faTelegram} className='socials-desktop'/>
                        </div>
                        <div className='hbline'></div>
                    </div>
                </div>
            ) :null }
            <div className='row' style={{position: 'relative'}}>
                { isTablet | isDesktop  ? null: <div className='line'></div>}
                <div className='col-6 ycenter unselectable'>
                    <div className='text-container'>
                        <span className={'header-6 text-bold'}>What's up? I'm</span>
                        <span className={'header-1 title-design text-italic'}>Angelo</span>
                        <span className={'header-1 title-design'}><span>Alva</span>rez</span>
                        <span className={'header-6'}>Junior Developer</span>
                    </div>
                </div>
                { isDesktop ? (
                    <div className={'col-6 unselectable profile-container'}>
                        <div className={'img-container'}>
                            <img src={profpic}/>
                        </div>
                    </div>
                ) :null }
            </div>
            { !isDesktop ? (
                <div className='row' style={{position: 'relative'}}>
                { isTablet | isDesktop  ? null: <div className='line'></div>}
                <div className={'offset-l-4 col-l-4 col-s-3 col-md-6 profile-container'}>
                    <div className={'img-container'}>
                        <img src={profpic} />
                    </div>
                </div>
            </div>
            ) :null }
            { isTablet | isDesktop  ? null: (
                <div className='row center' style={{position: 'relative', pointerEvents: 'auto'}}>
                    <div className='divider'></div>
                    <div className='col-s-1 center'>
                        <FontAwesomeIcon icon={faLinkedin} className={'socials'}/>
                    </div>
                    <div className='col-s-1 center'>
                        <FontAwesomeIcon icon={faGithub} className={'socials'}/>
                    </div>
                    <div className='col-s-1 center'>
                        <FontAwesomeIcon icon={faTelegram} className={'socials'}/>
                    </div>
                    <div className='divider' style={{top:'auto', bottom: '0'}}></div>
                </div>
            )}
        </div>
    );
}

export default HeroBanner;