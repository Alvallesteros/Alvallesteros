import React, { useEffect, useState} from 'react';
import styles from '../styles/about-me.module.css';

function AboutMe() {
    const [isTablet, setTablet] = useState(window.innerWidth > 768);
    const [isDesktop, setDesktop] = useState(window.innerWidth > 1023);

    const updateMedia = () => {
        setTablet(window.innerWidth > 768);
        setDesktop(window.innerWidth > 1023);
    };

    useEffect(() => {
        window.addEventListener("resize", updateMedia);
        return () => window.removeEventListener("resize", updateMedia);
    });

    return (
      <div className={'container ' + styles.container}>
        <div className='row vcenter'>
            <div className={'col-s-3 col-md-3 col-l-3 col-4 unselectable ' + ((isTablet | isDesktop) ? null: 'real-center' )} style={{paddingTop: isDesktop ? '0r': '2rem', paddingBottom: isDesktop ? '6rem': '0'}}>
                <span className={'header-3 title-design ' + styles.title}>
                    <span>A</span>bout Me
                    <div className={styles.hline}></div>
                </span>
            </div>
            { isDesktop ? (
                <div className='col-s-3 col-md-6 col-l-5 col-8 real-center ' style={{paddingBottom: '3rem', paddingTop: isDesktop ? '3rem' : '0'}}>
                    <span className={'text ' + styles.text}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel lorem auctor, malesuada risus eget, laoreet arcu. Mauris id neque in odio mollis scelerisque. Duis iaculis posuere vulputate. Aliquam pulvinar lectus eget dapibus posuere. Nam efficitur, nulla quis molestie laoreet, dolor elit accumsan tortor, ut vulputate lectus purus id turpis. Curabitur eget velit et diam consectetur pharetra. Cras commodo purus ac sem scelerisque imperdiet.
                    </span>
                </div>
            ) :null }
        </div>
        { isDesktop ? null: (
            <div className='row'>
                <div className='col-s-3 col-md-6 real-center' style={{paddingBottom: '3rem'}}>
                    <span className={'text ' + styles.text}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel lorem auctor, malesuada risus eget, laoreet arcu. Mauris id neque in odio mollis scelerisque. Duis iaculis posuere vulputate. Aliquam pulvinar lectus eget dapibus posuere. Nam efficitur, nulla quis molestie laoreet, dolor elit accumsan tortor, ut vulputate lectus purus id turpis. Curabitur eget velit et diam consectetur pharetra. Cras commodo purus ac sem scelerisque imperdiet.
                    </span>
                </div>
            </div>
        )}
        <div className='background'>
            <div className='gradient'></div>
            <div className='gradient' style={{transform: "rotate(180deg)"}}></div>
        </div>
      </div>
    );
}

export default AboutMe;