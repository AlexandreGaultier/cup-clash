import { useState, useEffect, useRef } from 'react';
import styles from './AudioPlayer.module.css';

export const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [volume, setVolume] = useState(0.5);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio('/src/assets/music/main-theme.mp3');
    audioRef.current.loop = true;
    audioRef.current.volume = volume;
    
    const playAudio = () => {
      if (audioRef.current) {
        audioRef.current.play()
          .catch(error => console.error('Erreur de lecture audio:', error));
      }
    };

    playAudio();

    const handleInteraction = () => {
      if (audioRef.current && !audioRef.current.playing) {
        playAudio();
      }
      document.removeEventListener('click', handleInteraction);
      document.removeEventListener('touchstart', handleInteraction);
    };

    document.addEventListener('click', handleInteraction);
    document.addEventListener('touchstart', handleInteraction);

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
      document.removeEventListener('click', handleInteraction);
      document.removeEventListener('touchstart', handleInteraction);
    };
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
  };

  return (
    <div className={styles.audioControls}>
      <button 
        onClick={toggleAudio}
        className={styles.audioButton}
        aria-label={isPlaying ? 'Couper le son' : 'Activer le son'}
      >
        {isPlaying ? '🔊' : '🔇'}
      </button>
      <input
        type="range"
        min="0"
        max="1"
        step="0.1"
        value={volume}
        onChange={handleVolumeChange}
        className={styles.volumeSlider}
        aria-label="Volume"
      />
    </div>
  );
}; 