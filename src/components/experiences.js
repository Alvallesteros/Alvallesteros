import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"

const ExpDate = ({ date, isTablet, isDesktop }) => {
    return (
       <div className='col-12 col-lg-12 col-md-8 col-s-4 col-xs-4 row' style={{position: 'relative', padding: '0'}}>
            <div className='divider' style={{right: (isDesktop | isTablet) ? '0':null}}></div>
            <div className={'col-s-4 col-xs-4 col-md-4 col-lg-6 col-6 fill-yellow ' + ((isTablet | isDesktop ? null: 'center'))}
                 style={{paddingLeft: (isTablet | isDesktop) ? "2rem" :null}}>
                <span className='text-date'>{date}</span>
            </div>
            <div className='divider' style={{top: 'auto', bottom: '0', right: (isDesktop | isTablet) ? '0':null}}></div>
       </div>
    );
}

const Accordion = ({
    organization, position, responsibilities, isTablet, isDesktop
}) => {
    const [isHover, setHover] = useState(false);
    const [isOpen, setOpen] = useState(false);

    return (
        <div className='row ycenter'>
            <div 
                className={'row ycenter ' + ('titleCard')}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                onClick={() => setOpen(!isOpen)}
            >
                <div className='p-4 col-12 col-lg-12 col-md-8 col-s-4 col-xs-4'></div>
                <div className='row col-9 col-lg-10 col-md-6 col-s-3 col-xs-4 offset-1 offset-lg-1 offset-md-1'>
                    <div className='col-12 col-lg-12 col-md-8 col-s-4 col-xs-4' style={{padding: '0'}}>
                        <span className='header-6 text-bold org'>{organization}</span>
                    </div>
                    <div className='col-12 col-lg-12 col-md-8 col-s-4 col-xs-4' style={{padding: '0'}}>
                        <span className='subheader-5 text-yellow position'>{position}</span>
                    </div>
                </div>
                <div className={'row col-1 offset-1 col-lg-2 offset-lg-1 col-md-1 offset-md-1 col-s-1 col-xs-4 cycenter ' + (isTablet | isDesktop ? null: 'xcenter')}>
                    <FontAwesomeIcon icon={faChevronDown} className={'icon ' + (isOpen ? 'up' :null)}/>
                </div>
                <div className={'col-12 row fold-content ' + (isOpen ? 'open' :null )}>
                    {responsibilities.map((item) => (
                            <div className={'col-12 col-lg-12 col-md-8 col-s-4 col-xs-4 row'}>
                                <div className='col-12 col-lg-12 col-md-8 col-s-4 col-xs-4 p-6'></div>
                                { isTablet | isDesktop ? (
                                    <div className='col-1 col-lg-1 col-md-1 xcenter'>
                                        <div className='bullet-line'></div>
                                    </div>
                                ) :null }
                                <div className='col-10 col-lg-10 col-md-6 col-s-4 col-xs-4' style={{padding: '0'}}>
                                    <span className='text' style={{fontSize: '1rem', lineHeight: '1.5rem'}}>{item}</span>
                                </div>
                            </div>
                        ))}
                </div>
                <div className='p-4 col-12'></div>
            </div>
        </div>
    )
}


function Experiences({ exp }) {
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
                    <div className='header-4 title-design pb-4'>
                        <span>E</span>xperiences
                    </div>
                </div>
            </div>
            {exp && exp.map((item) => (
                <div className='col-12 col-lg-12 col-md-8 col-s-4 col-xs-4 row' style={{padding: '0'}}>
                    <ExpDate 
                        date={item.date}
                        isTablet={isTablet}
                        isDesktop={isDesktop} 
                    />
                    <Accordion 
                        organization={item.organization}
                        position={item.position}
                        responsibilities={item.responsibilities}
                        isTablet={isTablet}
                        isDesktop={isDesktop}
                    />
                </div>
            ))}
        </div>
    );
}

export default Experiences