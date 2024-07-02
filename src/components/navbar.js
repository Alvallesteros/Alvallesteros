import React, { useEffect, useState } from 'react';
import logo from '../imgs/logo.svg'
import styles from '../styles/navbar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from "@fortawesome/free-solid-svg-icons"

function Navbar() {
    const [isDesktop, setDesktop] = useState(window.innerWidth > 991);

    const updateMedia = () => {
        setDesktop(window.innerWidth > 991);
    };

    useEffect(() => {
        window.addEventListener("resize", updateMedia);
        return () => window.removeEventListener("resize", updateMedia);
    });

    return (
        <div className={'container ' + styles.navbarContainer}>
            <div className='row vcenter'>
                <div className='col-1 col-l-1 col-md-1 col-s-1 real-center'>
                    <img src={logo} className={styles.logo}/>
                </div>
                { isDesktop ? (
                    <div className='row offset-5 col-6 col-l-7 col-md-5 vcenter'>
                        <div className='col-2 col-l-1 col-md-1 offset-l-2 real-center'>
                            Home
                        </div>
                        <div className='col-2 col-l-1 col-md-1 real-center'>
                            Projects
                        </div>
                        <div className='col-2 col-l-1 col-md-1 real-center'>
                            About
                        </div>
                        <div className={"col-4 col-l-2 col-md-2 offset-2 offset-l-1 offset-md-1 " + styles.searchBar}>
                            Search...
                        </div>
                    </div>
                ) : (
                    <div className={'col-md-1 col-s-1 offset-md-4 offset-s-1 vcenter align-end ' + styles.burgerContainer}>
                        <FontAwesomeIcon icon={faBars} className={styles.hamburger}/>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Navbar;