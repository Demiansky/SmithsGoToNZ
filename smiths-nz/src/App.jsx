import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './index.css';

// Import images
import plane from './assets/plane.png';
import family from './assets/family.png';
import robot from './assets/robot.png';
import checklist from './assets/checklist.png';
import planeFlyingGif from './assets/plane-flying.gif';

// Import pages
import MeetTheSmiths from './MeetTheSmiths';
import TalkToSmithbot from './TalkToSmithbot';
import ToDo from './ToDo';

function App() {
  return (
    <Router>
      <div className="page">
        {/* Header Section */}
        <header className="header">
          <Link to="/">
            <img src={plane} alt="Plane flying to New Zealand" className="banner" />
          </Link>
          <img src={planeFlyingGif} alt="Flying plane" className="plane-flying-gif" />
        </header>

        {/* Routes */}
        <Routes>
          <Route
            path="/"
            element={
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