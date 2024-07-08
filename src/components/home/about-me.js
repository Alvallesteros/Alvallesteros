import React, { useEffect, useState } from 'react';

function AboutMe({ about }) {
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
      <div className='container'>
        <div className='row'>
            <div className='col-12 col-lg-12 col-md-8 col-s-4 col-xs-4 p-5'></div>
            <div className={'col-4 col-lg-5 col-md-4 col-s-4 col-xs-4 unselectable ' + ((isTablet | isDesktop) ? null: 'center' )}>
                <span className={'header-3 title-design pb-5'} style={{position: 'relative', maxHeight: '6rem'}}>
                    <span>A</span>bout Me
                    <div className='hline'></div>
                </span>
            </div>
            <div className='col-lg-7 col-8 col-md-8 col-s-4 col-xs-4'>
                <span className={'text fsi-6 lhi-4 highlight'}>
                    <div dangerouslySetInnerHTML={{__html: about }}></div>
                </span>
            </div>
            <div className='col-12 col-lg-12 col-md-8 col-s-4 col-xs-4 p-5'></div>
        </div>
        <div className='background'>
            <div className='gradient'></div>
            <div className='gradient' style={{transform: "rotate(180deg)"}}></div>
        </div>
      </div>
    );
}

export default AboutMe;