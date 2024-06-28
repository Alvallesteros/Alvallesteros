import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar.js';
import HeroBanner from './components/hero-banner.js';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroBanner />
    </div>
  );
}

export default App;
