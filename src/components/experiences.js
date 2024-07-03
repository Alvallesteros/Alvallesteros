import React, { useState, useEffect } from 'react';

const ExpDate = ({ date, isTablet, isDesktop }) => {
    return (
       <div className='row' style={{position: 'relative'}}>
            <div className='divider' style={{right: (isDesktop | isTablet) ? '0':null}}></div>
            <div className={'col-s-3 col-md-6 col-l-8 col-12 fill-yellow ' + ((isTablet | isDesktop ? null: 'real-center'))}
                 style={{paddingLeft: (isTablet | isDesktop) ? "2rem" :null}}>
                <span className='text-date'>{date}</span>
            </div>
            <div className='divider' style={{top: 'auto', bottom: '0', right: (isDesktop | isTablet) ? '0':null}}></div>
       </div>
    );
}

const OpenPosition = ({
    organization, position, responsibilities, isTablet, isDesktop
}) => {
    return (
        <div>
            <div className='row'>
                <div className='hspacer-3'></div>
                <div className='col-s-3 col-md-6 col-l-7 offset-l-1 col-11 offset-1' style={{padding: '0'}}>
                    <span className='header-4 text-bold'>{organization}</span>
                </div>
                <div className='col-s-3 col-md-6 col-l-7 offset-l-1 col-11 offset-1' style={{padding: '0'}}>
                    <span className='header-6 text-yellow'>{position}</span>
                </div>
            </div> 
            {responsibilities.map((item) => (
                <div className='row'>
                    <div className='hspacer-5'></div>
                    { isTablet | isDesktop ? (
                        <div className='col-md-1 col-l-1 col-1' style={{
                            justifyContent: 'center'
                        }}>
                            <div className='bullet-line'></div>
                        </div>
                    ) :null }
                    <div className='col-s-3 col-md-4 col-l-6 col-10' style={{padding: '0'}}>
                        <span className='text' style={{fontSize: '1rem', lineHeight: '1.5rem'}}>{item}</span>
                    </div>
                </div>
            ))}
            <div className='hspacer-3'></div>
        </div>
    );
}

const ClosePosition = ({
    organization, position
}) => {
    return (
        <div className='row'>
            <div className='hspacer-5'></div>
            <div className='col-s-3 col-md-6 col-l-7 offset-l-1 col-11 offset-1' style={{padding: '0'}}>
                <span className='header-4 text-bold'>{organization}</span>
            </div>
            <div className='col-s-3 col-md-6 col-l-7 offset-l-1 col-11 offset-1' style={{padding: '0'}}>
                <span className='header-6 text-yellow'>{position}</span>
            </div>
            <div className='hspacer-5'></div>
        </div> 
    );
}


function Experiences() {
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
        <div className={'container'} style={{
            margin: '0', 
            paddingBottom: '0',
            display: 'flex', 
            flexDirection: 'column',
            position: 'relative'
        }}>
            { isTablet | isDesktop  ? <div className='line'></div> :null }
            <div className='row'>
                <div className='col-s-3 col-md-6 col-l-8 col-12' style={{paddingLeft: '0', paddingBottom: '0', marginBottom: '-1rem'}}>
                    <div className='header-3 title-design'>
                        <span>E</span>xperiences
                    </div>
                </div>
            </div>
            <ExpDate 
                date={'June 2023 - July 2024'}
                isTablet={isTablet}
                isDesktop={isDesktop} 
            />
            <OpenPosition 
                organization={"Computer Society of the Ateneo"}
                position={"Vice President for Development and Training"}
                responsibilities={[
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel lorem auctor, malesuada risus eget, laoreet arcu. Mauris id neque in odio mollis scelerisque.",
                    "Curabitur eget velit et diam consectetur pharetra. Cras commodo purus ac sem scelerisque imperdiet."
                ]}
                isTablet={isTablet}
                isDesktop={isDesktop}
            />
            <ExpDate 
                date={'June 2024 - July 2024'}
                isTablet={isTablet}
                isDesktop={isDesktop} 
            />
            <ClosePosition
                organization={"MSCI Inc."}
                position={"DevOps Intern"}
                isTablet={isTablet}
                isDesktop={isDesktop}
            />
            <div className='divider' style={{top: 'auto', bottom: '0', right: (isDesktop | isTablet) ? '0':null}}></div>
        </div>
    );
}

export default Experiences