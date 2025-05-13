import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';

import './index.css';
import SplashScreen from './SplashScreen';
// Import images
import plane from './assets/smith-banner.png';
import family from './assets/family.png';
import robot from './assets/robot.png';
import checklist from './assets/checklist.png';
import everythingellie from './assets/everything-ellie.png';
import siteskillstack from './assets/site-skillstack.png';
import grandparents from './assets/grandparents.png';
import planeFlyingGif from './assets/plane-flying.gif';
import BackgroundMusicComponent from './assets/background-music.mp3';

// Import pages
import MeetTheSmiths from './MeetTheSmiths';
import TalkToSmithbot from './TalkToSmithbot';
import ToDo from './ToDo';
import HallGrandparents from './HallGrandparents';
import EverythingEllie from './EverythingEllie';
import SiteSkillstack from './SiteSkillstack';

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const audioRef = useRef(null);

  const handleEnterSite = () => {
    setShowSplash(false);
    // Start playing music
    if (audioRef.current) {
      audioRef.current.play().catch(error => {
        console.error("Audio play failed:", error);
      });
      setIsMusicPlaying(true); // Update state when music starts playing
    }
    
    // Optional: Update URL without reload to show we're now on the main page
    window.history.pushState({}, '', '/');
  };
  
  const toggleMusic = () => {
    if (audioRef.current) {
      if (isMusicPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(error => {
          console.error("Audio play failed:", error);
        });
      }
      setIsMusicPlaying(!isMusicPlaying);
    }
  };

  return (
    <Router>
      {/* Audio element for background music */}
      <audio 
        ref={audioRef}
        src={BackgroundMusicComponent} 
        loop 
        preload="auto"
        style={{ display: 'none' }} 
      />
      
      {/* Music toggle button - always visible */}
      <button 
        className="music-toggle-btn"
        onClick={toggleMusic}
        aria-label={isMusicPlaying ? "Mute music" : "Play music"}
      >
        {isMusicPlaying ? "🔊 Music" : "🔇 Music"}
      </button>

      {showSplash ? (
        <SplashScreen onEnter={handleEnterSite} />
      ) : (
        <>
          <div className="fixed-plane-container">
            <img src={planeFlyingGif} alt="Flying plane" className="plane-flying-gif" />
          </div>
          
          <div className="page">

            <header className="header">
              <div className="banner-container">
                <Link to="/">
                  <img src={plane} alt="Plane flying to New Zealand" className="banner" />
                </Link>
              </div>
              <nav className="nav-bar">
                <Link to="/meet-the-smiths" className="nav-link">Meet the Smiths</Link>
                <Link to="/talk-to-smithbot" className="nav-link">Talk to Smithbot</Link>
                <Link to="/to-do" className="nav-link">To Do</Link>
                <Link to="/EverythingEllie" className="nav-link">Ellie Blog</Link>
                <Link to="/SiteSkillstack" className="nav-link">Site Skills</Link>
                <Link to="/HallGrandparents" className="nav-link">Sad Grandparents</Link>
              </nav>
            </header>

            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <div className="homepage-info-box">
                      <p>Kia ora, we're the Smith family! It's been a long time dream of ours to move to New Zealand to start a new life, and now we're finally making it a reality. Would you like to make this a reality with us? Click "Meet the Smiths" to get to know us, or talk to AI versions of the Smiths with our embedded Smith Bot web app!</p>
                    </div>
                
                    <section className="image-grid">
                      {/* First Row */}
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

                      {/* Second Row */}
                      <div className="image-card">
                        <Link to="/EverythingEllie">
                          <img src={everythingellie} alt="Ellie's travel blog" />
                          <p>Ellie's Travel Blog</p>
                        </Link>
                      </div>
                      <div className="image-card">
                        <Link to="/SiteSkillstack">
                          <img src={siteskillstack} alt="How I built the website" />
                          <p>Site Skillstack (How I made it!)</p>
                        </Link>
                      </div>
                      <div className="image-card">
                        <Link to="/HallGrandparents">
                          <img src={grandparents} alt="Sad Grandparents" />
                          <p>Hall of Sad Grandparents</p>
                        </Link>
                      </div>
                    </section>
                  </>
                }
              />
              <Route path="/meet-the-smiths" element={<MeetTheSmiths />} />
              <Route path="/talk-to-smithbot" element={<TalkToSmithbot />} />
              <Route path="/to-do" element={<ToDo />} />
              <Route path="/HallGrandparents" element={<HallGrandparents />} />
              <Route path="/EverythingEllie" element={<EverythingEllie />} />
              <Route path="/SiteSkillstack" element={<SiteSkillstack />} />
            </Routes>
          </div>
        </>
      )}              
    </Router>
  );
}

export default App;