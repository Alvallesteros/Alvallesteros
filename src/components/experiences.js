import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"

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
                <div className='p-4 col-12'></div>
                <div className='row col-9 offset-1 '>
                    <div className='col-s-3 col-md-6 col-l-7 offset-l-1 col-12' style={{padding: '0'}}>
                        <span className='header-5 text-bold org'>{organization}</span>
                    </div>
                    <div className='col-s-3 col-md-6 col-l-7 offset-l-1 col-12' style={{padding: '0'}}>
                        <span className='subheader-3 text-yellow position'>{position}</span>
                    </div>
                </div>
                <div className='row col-2 xcenter ycenter'>
                    {isHover ? <FontAwesomeIcon icon={faChevronDown} className={'icon ' + (isOpen ? 'up' :null)}/> :null}
                </div>
                <div className={'col-12 row fold-content ' + (isOpen ? 'open' :null )}>
                    {responsibilities.map((item) => (
                            <div className={'col-12 row'}>
                                <div className='col-12 p-6'></div>
                                { isTablet | isDesktop ? (
                                    <div className='col-1 xcenter'>
                                        <div className='bullet-line'></div>
                                    </div>
                                ) :null }
                                <div className='col-10' style={{padding: '0'}}>
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
                    <div className='header-4 title-design'>
                        <span>E</span>xperiences
                    </div>
                </div>
            </div>
            <ExpDate 
                date={'June 2023 - July 2024'}
                isTablet={isTablet}
                isDesktop={isDesktop} 
            />
            <Accordion 
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
            <Accordion 
                organization={"MSCI Inc."}
                position={"DevOps Intern"}
                responsibilities={[
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel lorem auctor, malesuada risus eget, laoreet arcu. Mauris id neque in odio mollis scelerisque.",
                    "Curabitur eget velit et diam consectetur pharetra. Cras commodo purus ac sem scelerisque imperdiet."
                ]}
                isTablet={isTablet}
                isDesktop={isDesktop}
            />
        </div>
    );
}

export default Experiences