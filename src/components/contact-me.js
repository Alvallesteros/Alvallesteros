import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons"

function ContactMe() {
    const [isTablet, setTablet] = useState(window.innerWidth > 767);
    const [isDesktop, setDesktop] = useState(window.innerWidth > 1023);

    const updateMedia = () => {
        setTablet(window.innerWidth > 767);
        setDesktop(window.innerWidth > 1023);
    };

    useEffect(() => {
        window.addEventListener("resize", updateMedia);
        return () => window.removeEventListener("resize", updateMedia);
    });

    return (
        <div className='container' style={{position: 'relative'}}>
            <div className='row'>
                <div className='col-s-3 col-md-6 col-l-8 col-12 center'>
                    <div className='header-3 title-design'>
                        <span>C</span>ontact Me
                    </div>
                </div>
            </div>
            <div className='row' style={{gap: '1rem', justifyContent: 'center'}}>
                <div className='col-s-1 center item-container'>
                    <div className='image-container'>
                        <FontAwesomeIcon icon={faPhone} className='icon'/>
                    </div>
                    { isTablet | isDesktop ? (
                        <div className='text-container'>
                            <span>(+63) 943 316 4313</span>
                        </div>
                    ) :null }
                </div>
                <div className='col-s-1 center item-container'>
                    <div className='image-container'>
                        <FontAwesomeIcon icon={faEnvelope} className='icon'/>
                    </div>
                    { isTablet | isDesktop ? (
                        <div className='text-container'>
                            <span>aj.alvallesteros@gmail.com</span>
                        </div>
                    ) :null }
                </div>
                <div className='hspacer-5'></div>
            </div>
        </div>
    );
}

export default ContactMe