import React, { useEffect, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPython, faJava, faWindows, faGitAlt, faJs, faHtml5 } from "@fortawesome/free-brands-svg-icons"

function Skills() {
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
        <div className='container' style={{padding: '2rem 0', position: 'relative', margin: '0rem'}}>
            <div className='row ycenter'>
                { isTablet | isDesktop  ? <div className='line'></div> :null }
                <div className='col-s-3 col-md-6 col-l-8 col-12 center unselectable'>
                    <div className='header-3 title-design'>
                        <span>S</span>kills
                    </div>
                </div>
            </div>
            <div className='col-10 col-l-6 offset-1 offset-l-1'>
            <div className='row' style={{gap: "1rem", justifyContent: 'center'}}>
                    <div className='col-s-3  center item-container'>
                        <div className='image-container'>
                            <FontAwesomeIcon icon={faPython} className='icon'/>
                        </div>
                        <div className='text-container'>
                            <span>Python</span>
                        </div>
                    </div>
                    <div className='col-s-3 center item-container'>
                        <div className='image-container'>
                            <FontAwesomeIcon icon={faJava} className='icon'/>
                        </div>
                        <div className='text-container'>
                            <span>Java</span>
                        </div>
                    </div>
                    <div className='col-s-3 center item-container'>
                        <div className='image-container'>
                            <FontAwesomeIcon icon={faWindows} className='icon'/>
                        </div>
                        <div className='text-container'>
                            <span>Azure</span>
                        </div>
                    </div>
                    <div className='col-s-3 center item-container'>
                        <div className='image-container'>
                            <FontAwesomeIcon icon={faGitAlt} className='icon'/>
                        </div>
                        <div className='text-container'>
                            <span>Git Source Control</span>
                        </div>
                    </div>
                    <div className='col-s-3 center item-container'>
                        <div className='image-container'>
                            <FontAwesomeIcon icon={faJs} className='icon'/>
                        </div>
                        <div className='text-container'>
                            <span>JavaScript</span>
                        </div>
                    </div>
                    <div className='col-s-3 center item-container'>
                        <div className='image-container'>
                            <FontAwesomeIcon icon={faHtml5} className='icon'/>
                        </div>
                        <div className='text-container'>
                            <span>HTML / CSS</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;