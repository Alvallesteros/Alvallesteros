import YAML from 'yaml';
import React, { useState, useEffect } from 'react';
import Navbar from '../components/navbar';

function ProjectsPage() {
    const [isTablet, setTablet] = useState(window.innerWidth > 767);
    const [isDesktop, setDesktop] = useState(window.innerWidth > 1023);

    const updateMedia = () => {
        setTablet(window.innerWidth > 767);
        setDesktop(window.innerWidth > 1023);
    };

    return (
        <div className='App'>
            <div className='web-container'>
                <Navbar />
            </div>
        </div>
    );
}

export default ProjectsPage;
