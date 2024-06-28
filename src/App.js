import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar.js';
import HeroBanner from './components/hero-banner.js';
import Grid from './components/gridOverlay.js';

function App() {
  return (
    <div className="App">
      <Grid />
      <Navbar />
      <HeroBanner />
    </div>
  );
}

export default App;
