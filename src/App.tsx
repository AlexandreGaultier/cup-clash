import { PlayerList } from './components/PlayerList'
import styles from './App.module.css'

function App() {
  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <h1>Cup Clash</h1>
        <p>Le jeu de soirée qui va vous faire trinquer ! 🍻</p>
      </header>
      <main>
        <PlayerList />
      </main>
    </div>
  )
}

export default App
