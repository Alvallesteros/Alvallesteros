import React from 'react';
import styles from '../styles/experiences.module.css';
import common from '../styles/common.module.css';

const ExpDate = ({ date }) => {
    return (
       <div className='row' style={{position: 'relative'}}>
            <div className='divider'></div>
            <div className='col-s-3 real-center fill-yellow'>
                <span className='text-date'>{date}</span>
            </div>
            <div className='divider' style={{top: 'auto', bottom: '0'}}></div>
       </div>
    );
}

const OpenPosition = ({
    organization, position, responsibilities
}) => {
    return (
        <div>
            <div className='row'>
                <div className='hspacer-3'></div>
                <div className='col-s-3' style={{padding: '0'}}>
                    <span className='header-4 text-bold'>{organization}</span>
                </div>
                <div className='col-s-3' style={{padding: '0'}}>
                    <span className='header-6 text-yellow'>{position}</span>
                </div>
            </div> 
            {responsibilities.map((item, index) => (
                <div className='row'>
                    <div className='hspacer-5'></div>
                    <div className='col-s-3' style={{padding: '0'}}>
                        <span>{item}</span>
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
            <div className='col-s-3' style={{padding: '0'}}>
                <span className='header-4 text-bold'>{organization}</span>
            </div>
            <div className='col-s-3' style={{padding: '0'}}>
                <span className='header-6 text-yellow'>{position}</span>
            </div>
            <div className='hspacer-5'></div>
        </div> 
    );
}


function Experiences() {
    return (
        <div className={'container ' + styles.container} style={{margin: '0', paddingBottom: '0'}}>
            <div className='row'>
                <div className='col-s-3 col-md-6 col-l-8 col-12' style={{paddingLeft: '0', paddingBottom: '0', marginBottom: '-1rem'}}>
                    <div className='header-3 title-design'>
                        <span>E</span>xperiences
                    </div>
                </div>
            </div>
            <ExpDate date={'June 2023 - July 2024'} />
            <OpenPosition 
                organization={"Computer Society of the Ateneo"}
                position={"Vice President for Development and Training"}
                responsibilities={[
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel lorem auctor, malesuada risus eget, laoreet arcu. Mauris id neque in odio mollis scelerisque.",
                    "Curabitur eget velit et diam consectetur pharetra. Cras commodo purus ac sem scelerisque imperdiet."
                ]}
            />
            <ExpDate date={'June 2024 - July 2024'} />
            <ClosePosition
                organization={"MSCI Inc."}
                position={"DevOps Intern"}
            />
            <div className='divider' style={{top: 'auto', bottom: '0'}}></div>
        </div>
    );
}

export default Experiences