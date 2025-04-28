import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './index.css';

// Import images
import plane from './assets/smith-banner.png';
import family from './assets/family.png';
import robot from './assets/robot.png';
import checklist from './assets/checklist.png';
import planeFlyingGif from './assets/plane-flying.gif';
import BackgroundMusicComponent from './components/BackgroundMusic';

// Import pages
import MeetTheSmiths from './MeetTheSmiths';
import TalkToSmithbot from './TalkToSmithbot';
import ToDo from './ToDo';

function App() {
  return (
    <Router>
      {/* Flying Plane */}
      <div className="fixed-plane-container">
        <img src={planeFlyingGif} alt="Flying plane" className="plane-flying-gif" />
      </div>
      <div className="page">
        {/* Fixed Music Button - Move it outside the navbar */}
        <BackgroundMusicComponent />
        
        {/* Header Section */}
        <header className="header">
          <div className="banner-container">
            <Link to="/">
              <img src={plane} alt="Plane flying to New Zealand" className="banner" />
            </Link>
          </div>
          {/* Navigation Bar - Music button removed */}
          <nav className="nav-bar">
            <Link to="/meet-the-smiths" className="nav-link">Meet the Smiths</Link>
            <Link to="/talk-to-smithbot" className="nav-link">Talk to Smithbot</Link>
            <Link to="/to-do" className="nav-link">To Do</Link>
          </nav>
        </header>

        {/* Routes */}
        <Routes>
          <Route
            path="/"
            element={
              <>
                {/* Add this info box above your image grid */}
                <div className="homepage-info-box">
                  <p>Kia ora, we're the Smith family! It's been a long time dream of ours to move to New Zealand, and now we're finally making it a reality. Would you like to make this a reality with us? Click "Meet the Smiths" to get to know us, or talk to AI versions of the Smiths with our embedded Smith Bot web app! Chur!</p>
                </div>
        
                <section className="image-grid">
                  <div className="image-card">
                    <Link to="/meet-the-smiths">
                      <img src={family} alt="Family in New Zealand" />
                      <p>Meet the Smiths</p>
                    </Link>
                  </div>
                  <div className="image-card">
                    <Link to="/talk-to-smithbot">
                      <img src={robot} alt="Robot waving in New Zealand" />
                      <p>Talk to Smithbot</p>
                    </Link>
                  </div>
                  <div className="image-card">
                    <Link to="/to-do">
                      <img src={checklist} alt="Checklist and stress meter" />
                      <p>To Do</p>
                    </Link>
                  </div>
                </section>
              </>
            }
          />
          <Route path="/meet-the-smiths" element={<MeetTheSmiths />} />
          <Route path="/talk-to-smithbot" element={<TalkToSmithbot />} />
          <Route path="/to-do" element={<ToDo />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;