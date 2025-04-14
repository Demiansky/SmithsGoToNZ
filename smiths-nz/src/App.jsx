import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './index.css';

// Import images
import plane from './assets/plane.png';
import family from './assets/family.png';
import robot from './assets/robot.png';
import checklist from './assets/checklist.png';
import planesprite from './assets/planesprite.png';

function App() {
  return (
    <div className="page">
      {/* Header Section */}
      <header className="header">
        <img src={plane} alt="Plane flying to New Zealand" className="banner" />
        <div className="plane-sprite"></div>
      </header>

      {/* Image Grid Section */}
      <section className="image-grid">
        <div className="image-card">
          <img src={family} alt="Family in New Zealand" />
          <p>Meet the Smiths</p>
        </div>
        <div className="image-card">
          <img src={robot} alt="Robot waving in New Zealand" />
          <p>Talk to Smithbot</p>
        </div>
        <div className="image-card">
          <img src={checklist} alt="Checklist and stress meter" />
          <p>To Do</p>
        </div>
      </section>
    </div>
  );
}

export default App;