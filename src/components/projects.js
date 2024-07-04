import React, { useEffect, useState } from 'react';

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
                <div className='hspacer-5'></div>
                <div className={'col-s-3 col-md-2 col-l-2 offset-l-1 col-3 offset-1 ' + ((isTablet | isDesktop) ? null: 'center')} style={{padding: '0'}}>
                    <span className='header-3 title-design '>
                        <span>P</span>rojects
                    </span>
                </div>
                <div className='col-s-3 col-md-2 offset-md-2 col-l-2 offset-l-2 col-3 offset-4 button-yellow center'>
                    Go To Projects
                </div>
                <div className='hspacer-5'></div>
            </div>
            <div className='background'>
                <div className='gradient'></div>
                <div className='gradient' style={{transform: "rotate(180deg)"}}></div>
            </div>
        </div>
    );
}

export default Projects