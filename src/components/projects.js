import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

function Projects() {
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
        <div className='container' style={{marginTop: '0', marginBottom: '0', position: 'relative'}}>
            <div className='row ycenter'>
                <div className='col-12 col-lg-12 col-md-8 col-s-4 col-xs-4 p-4'></div>
                <div className={'offset-1 col-3 col-lg-4 offset-lg-1 col-md-2 offset-md-1 col-s-4 col-xs-4 ' + ((isTablet | isDesktop) ? null: 'center')} style={{padding: '0'}}>
                    <span className='header-3 title-design '>
                        <span>P</span>rojects
                    </span>
                </div>
                { isTablet | isDesktop ? null: (<div className='col-12 col-lg-12 col-md-8 col-s-4 col-xs-4 p-6'></div>)}
                <Link to='/projects' className='col-3 offset-5 col-lg-4 offset-lg-2 col-md-2 offset-md-2 col-s-2 offset-s-1 col-xs-4 button-yellow center'>
                    Go To Projects
                </Link>
                <div className='col-12 col-lg-12 col-md-8 col-s-4 col-xs-4 p-4'></div>
            </div>
            <div className='background'>
                <div className='gradient'></div>
                <div className='gradient' style={{transform: "rotate(180deg)"}}></div>
            </div>
        </div>
    );
}

export default Projects