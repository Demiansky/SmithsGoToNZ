import React, { useEffect, useRef } from 'react';
import './TrumpEndorsement.css';
import trumpImage from './assets/trump-endorses.png';
import endorsementAudio from './assets/TrumpEndorsement.mp3';

function TrumpEndorsement() {
  const audioRef = useRef(null);

  useEffect(() => {
    // Play audio when component mounts
    if (audioRef.current) {
      audioRef.current.play().catch(error => {
        console.error("Audio play failed:", error);
      });
    }

    // Cleanup: stop audio when component unmounts
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    };
  }, []);

  return (
    <div className="trump-endorsement">
      <audio 
        ref={audioRef}
        src={endorsementAudio}
        preload="auto"
        style={{ display: 'none' }}
      />
      
      <div className="header-box">
        <h1>Very, Very Real Presidential Endorsement</h1>
      </div>
      
      <div className="endorsement-content">
        <img src={trumpImage} alt="Presidential Endorsement" className="trump-image" />
      </div>
    </div>
  );
}

export default TrumpEndorsement;