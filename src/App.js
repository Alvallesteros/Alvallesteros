import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar.js';
import HeroBanner from './components/hero-banner.js';
import AboutMe from './components/about-me.js';
import Skills from './components/skills.js';
import Experiences from './components/experiences.js';
import Projects from './components/projects.js';
import ContactMe from './components/contact-me.js';

function App() {
  return (
    <div className="App">
      <div className='web-container'>
        <Navbar />
        <HeroBanner />
        <AboutMe />
        <Skills />
        <Experiences />
        <Projects />
      </div>
    </div>
  );
}

export default App;
