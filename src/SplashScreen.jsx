import React from 'react';
import './SplashScreen.css';
import textBanner from './assets/splash-screen.png'; // Your combined title+map image

function SplashScreen({ onEnter }) {
    return (
      <div className="splash-screen" onClick={onEnter}>
        <img src={textBanner} alt="The Smiths Move To New Zealand! Click or Tap Anywhere to Enter" className="splash-banner" />
      </div>
    );
  }
  
  export default SplashScreen;