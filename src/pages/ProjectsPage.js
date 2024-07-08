import YAML from 'yaml';
import projectsYAML from '../data/projects.yaml'
import React, { useState, useEffect } from 'react';
import Navbar from '../components/navbar';
import ProjectItems from '../components/projects/project-items';

function ProjectsPage() {
    const [isTablet, setTablet] = useState(window.innerWidth > 767);
    const [isDesktop, setDesktop] = useState(window.innerWidth > 1023);
    const [parsedProjectData, setProjectData] = useState();

    const updateMedia = () => {
        setTablet(window.innerWidth > 767);
        setDesktop(window.innerWidth > 1023);
    };

    useEffect(() => {
        fetch(projectsYAML)
            .then(r => r.text())
            .then(text => {
                const parsedText = YAML.parse(text);
                setProjectData(parsedText.projects)
            })
    });

    return (
        <div className='App'>
            <div className='web-container'>
                <Navbar />
                <ProjectItems
                    isDesktop={isDesktop}
                    isTablet={isTablet}
                    data={parsedProjectData}
                />
            </div>
        </div>
    );
}

export default ProjectsPage;
