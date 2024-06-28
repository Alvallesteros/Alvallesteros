import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar.js';
import HeroBanner from './components/hero-banner.js';
import Grid from './components/gridOverlay.js';
import AboutMe from './components/about-me.js';
import Skills from './components/skills.js';

function App() {
  return (
    <div className="App">
      <div className='web-container'>
        <Grid />
        <Navbar />
        <HeroBanner />
        <AboutMe />
        <Skills />
      </div>
    </div>
  );
}

export default App;
