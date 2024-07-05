import React, { useEffect, useState } from 'react';
import logo from '../imgs/logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from "@fortawesome/free-solid-svg-icons"

function Navbar() {
    const [isDesktop, setDesktop] = useState(window.innerWidth > 1023);

    const updateMedia = () => {
        setDesktop(window.innerWidth > 1023);
    };

    useEffect(() => {
        window.addEventListener("resize", updateMedia);
        return () => window.removeEventListener("resize", updateMedia);
    });

    return (
        <div className={'container navbar-container'}>
            <div className='row ycenter'>
                <div className='col-1 col-lg-1 col-md-1 col-s-1 col-xs-1 center'>
                    <img src={logo} className='logo'/>
                </div>
                { isDesktop ? (
                    <div className='row col-6 offset-5 col-lg-9 offset-lg-2 ycenter'>
                        <div className={'col-2 col-lg-2 center navpage'}>
                            Home
                        </div>
                        <div className={'col-2 col-lg-2 center navpage'}>
                            Projects
                        </div>
                        <div className={'col-2 col-lg-2 center navpage'}>
                            About
                        </div>
                        <div className={"col-4 offset-2 col-lg-5 offset-lg-1 search-bar"}>
                            <input type='text' placeholder='Search...'/>
                        </div>
                    </div>
                ) : (
                    <div className={'col-md-1 offset-md-6 col-s-1 offset-s-2 col-xs-1 offset-xs-2 justify-end burger-container'}>
                        <FontAwesomeIcon icon={faBars} className={'hamburger'}/>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Navbar;