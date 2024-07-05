import React, { useEffect, useState } from 'react';
import logo from '../imgs/logo.svg'
import { Divide as Hamburger } from 'hamburger-react'

const BurgerMenu = () => {
    return (
        <div className='row fill-width fsi-6 burger'>
            <div className='col-12 col-lg-12 col-md-8 col-s-4 col-xs-4 burger-page p-5'>
                Home
            </div>
            <div className='col-12 col-lg-12 col-md-8 col-s-4 col-xs-4 burger-page p-5'>
                Projects
            </div>
            <div className='col-12 col-lg-12 col-md-8 col-s-4 col-xs-4 burger-page p-5'>
                About
            </div>
        </div>
    );
}


function Navbar() {
    const [isOpen, setOpen] = useState(false)
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
                        {/*<div className={"col-4 offset-2 col-lg-5 offset-lg-1 search-bar"}>
                            <input type='text' placeholder='Search...'/>
                        </div>*/}
                    </div>
                ) : (
                    <div className={'col-md-1 offset-md-6 col-s-1 offset-s-2 col-xs-1 offset-xs-2 justify-end burger-container'}>
                        <Hamburger color='#FFD540' toggled={isOpen} toggle={setOpen}/>
                    </div>
                )}
            </div>
            <div className={'row fold-content ' + (isOpen ? 'open': null)}>
                <BurgerMenu />
                <div className='p-3'></div>
            </div>
        </div>
    );
}

export default Navbar;