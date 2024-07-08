import React, { useState, useEffect } from 'react';

const Item = ({ title, sdesc }) => {
    return (
        <div className='item-container fill-width project-item'>
            <div className='row'>
                <div className='col-12'>
                    <div className='row'>

                    </div>
                    <div className='row '>
                        <div className='fill-width p-6'></div>
                        <span className='subheader-4 fw-2 fill-width col-xs-4'>{ title }</span>
                        <div className='fill-width p-6'></div>
                        <span className='desc fw-1'>{ sdesc }</span>
                        <div className='fill-width  p-6'></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function ProjectItems({ isDesktop, isTablet, data }) {
    
    return (
        <div className='container'>
            <div className='row'>
                <div className='header-3 title-design'><span>M</span>ore <span>P</span>rojects</div>
                <div className='col-10 offset-1 row'>
                    {data && data.map((project) => (
                            <div className='col-4'>
                                <Item
                                    title={ project.title }
                                    sdesc={ project.sdesc }
                                />
                            </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ProjectItems;
