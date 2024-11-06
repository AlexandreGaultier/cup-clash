import { useState } from 'react';
import { PlayerList } from './components/PlayerList'
import { RulesModal } from './components/RulesModal'
import styles from './App.module.css'

function App() {
  const [isRulesOpen, setIsRulesOpen] = useState(false);

  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <h1>Cup Clash</h1>
        <p>Le jeu de soirée qui va vous faire trinquer ! 🍻</p>
        <button 
          className={styles.rulesButton}
          onClick={() => setIsRulesOpen(true)}
        >
          Lire les règles
        </button>
      </header>
      <main>
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
