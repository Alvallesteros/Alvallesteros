import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar.js';
import HeroBanner from './components/hero-banner.js';
import Grid from './components/gridOverlay.js';
import AboutMe from './components/about-me.js';
import Skills from './components/skills.js';
import Experiences from './components/experiences.js';
import Projects from './components/projects.js';

function App() {
  return (
    <div className="App">
      <div className='web-container'>
        <Grid />
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
