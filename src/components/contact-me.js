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
                <div className='col-12 col-lg-12 col-md-8 col-s-4 col-xs-4 p-5'></div>
                <div className='col-12 col-lg-12 col-md-8 col-s-4 col-xs-4 center'>
                    <div className='header-4 title-design'>
                        <span>C</span>ontact Me
                    </div>
                </div>
            </div>
            <div className='row' style={{gap: '1rem', justifyContent: 'center'}}>
                <div className='col-xs-1 center item-container'>
                    <div className='image-container'>
                        <FontAwesomeIcon icon={faPhone} className='icon'/>
                    </div>
                    { isTablet | isDesktop ? (
                        <div className='text-container' style={{fontSize: '1rem'}}>
                            <span>(+63) 943 316 4313</span>
                        </div>
                    ) :null }
                </div>
                <div className='col-xs-1 center item-container'>
                    <div className='image-container'>
                        <FontAwesomeIcon icon={faEnvelope} className='icon'/>
                    </div>
                    { isTablet | isDesktop ? (
                        <div className='text-container' style={{fontSize: '1rem'}}>
                            <span>aj.alvallesteros@gmail.com</span>
                        </div>
                    ) :null }
                </div>
                <div className='col-12 col-lg-12 col-md-8 col-s-4 col-xs-4 p-5'></div>
            </div>
        </div>
    );
}

export default ContactMe