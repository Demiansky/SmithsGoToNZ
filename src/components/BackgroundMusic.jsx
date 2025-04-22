import { useState, useEffect, useRef } from 'react';
import backgroundMusicFile from '../assets/BackgroundMusic.mp3';

const BackgroundMusic = () => {
  // Modified to default to FALSE instead of true
  const getSavedPreference = () => {
    const saved = localStorage.getItem('musicPreference');
    return saved !== null ? saved === 'true' : false; // Default to FALSE
  };
  
  const [isPlaying, setIsPlaying] = useState(getSavedPreference());
  const audioRef = useRef(null);
  
  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play().catch(e => {
        console.error("Audio playback error:", e);
        // If playback fails, update the UI to show that music is off
        setIsPlaying(false);
      });
    } else {
      audioRef.current.pause();
    }
    
    localStorage.setItem('musicPreference', isPlaying);
  }, [isPlaying]);

  const toggleMusic = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <audio ref={audioRef} src={backgroundMusicFile} loop preload="auto" />
      <button 
        onClick={toggleMusic} 
        className="music-toggle"
        aria-label={isPlaying ? "Pause music" : "Play music"}
      >
        {isPlaying ? "🔊 Music" : "🔇 Music"}
      </button>
    </>
  );
};

export default BackgroundMusic;