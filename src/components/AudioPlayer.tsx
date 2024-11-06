import { useState, useEffect, useRef } from 'react';
import styles from './AudioPlayer.module.css';

export const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [isInitialized, setIsInitialized] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio('/music/main-theme.mp3');
    audioRef.current.loop = true;
    audioRef.current.volume = volume;
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const initializeAudio = () => {
    if (audioRef.current) {
      audioRef.current.play()
        .then(() => {
          setIsPlaying(true);
          setIsInitialized(true);
        })
        .catch(error => console.error('Erreur de lecture audio:', error));
    }
  };

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

  if (!isInitialized) {
    return (
      <button 
        onClick={initializeAudio}
        className={styles.startButton}
      >
        Jouer la musique
      </button>
    );
  }

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