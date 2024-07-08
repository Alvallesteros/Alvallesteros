import homepageYAML from "./data/homepage.yaml"
import YAML from 'yaml';
import React, { useState, useEffect } from 'react';

import Navbar from './components/navbar.js';
import HeroBanner from './components/hero-banner.js';
import AboutMe from './components/about-me.js';
import Skills from './components/skills.js';
import Experiences from './components/experiences.js';
import Projects from './components/projects.js';
import ContactMe from './components/contact-me.js';

function HomePage() {
  const [welcome, setWelcome] = useState();
  const [position, setPosition] = useState();
  const [aboutMe, setAboutMe] = useState();
  const [skills, setSkills] = useState();
  const [exps, setExp] = useState();

    useEffect(() => {
        fetch(homepageYAML)
            .then(r => r.text())
            .then(text => {
                const parsedText = YAML.parse(text);
                setWelcome(parsedText.welcome);
                setPosition(parsedText.position);
                setAboutMe(parsedText.aboutMe);
                setSkills(parsedText.skills);
                setExp(parsedText.experience);
            })
    });

  return (
    <div className="App">
      <div className='web-container'>
        <Navbar />
        <HeroBanner 
          welcome={welcome} 
          position={position} 
        />
        <AboutMe about={aboutMe}/>
        <Skills skills={skills}/>
        <Experiences exp={exps}/>
        <Projects />
        <ContactMe />
      </div>
    </div>
  );
}

export default HomePage;
