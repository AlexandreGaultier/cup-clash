import { useState } from 'react';
import { PlayerList } from './components/PlayerList'
import { RulesModal } from './components/RulesModal'
import { AudioPlayer } from './components/AudioPlayer';

import styles from './App.module.css'
import wallpaper from '/src/assets/img/wallpaper.webp';

function App() {
  const [isRulesOpen, setIsRulesOpen] = useState(false);

  return (
    <div className={styles.container}>
      <AudioPlayer />
      
      <div 
        className={styles.backgroundImage} 
        style={{ backgroundImage: `url(${wallpaper})` }}
      />
      <header className={styles.header}>
        <h1>🥤 Cup Clash ⚔️</h1>
        <p>Le jeu de soirée qui va vous faire trinquer et lancer des dés ! 🍻🎲</p>
        <button 
          className={styles.rulesButton}
          onClick={() => setIsRulesOpen(true)}
        >
          Lire les règles
        </button>
      </header>
      <main className={styles.content}>
        <PlayerList />
      </main>
      <RulesModal 
        isOpen={isRulesOpen}
        onClose={() => setIsRulesOpen(false)}
      />
    </div>
  )
}

export default App
