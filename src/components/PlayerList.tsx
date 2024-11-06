import { useState, KeyboardEvent } from 'react';
import { Player } from '../types/types';
import { PlayerCard } from './PlayerCard';
import { Dice } from './Dice';
import { CLASSES } from '../data/classes';
import styles from './PlayerList.module.css';

const DEFAULT_PLAYERS = ['Alexandre', 'Adeline', 'Eline', 'Maxime', 'Tom'];

export const PlayerList = () => {
  const [players, setPlayers] = useState<Player[]>([]);
  const [newPlayerName, setNewPlayerName] = useState('');

  const addPlayer = () => {
    if (newPlayerName.trim()) {
      const newPlayer: Player = {
        id: crypto.randomUUID(),
        name: newPlayerName.trim(),
        hp: 5,
        maxHp: 5,
        class: CLASSES[Math.floor(Math.random() * CLASSES.length)],
        isRevealed: false,
        skillUsesLeft: 0
      };
      
      setPlayers([...players, newPlayer]);
      setNewPlayerName('');
    }
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      addPlayer();
    }
  };

  const addDefaultPlayers = () => {
    const defaultPlayersList = DEFAULT_PLAYERS.map(name => ({
      id: crypto.randomUUID(),
      name,
      hp: 5,
      maxHp: 5,
      class: CLASSES[Math.floor(Math.random() * CLASSES.length)],
      isRevealed: false,
      skillUsesLeft: 0
    }));
    
    setPlayers(defaultPlayersList);
  };

  const handleReveal = (playerId: string) => {
    setPlayers(players.map(player => {
      if (player.id === playerId) {
        return {
          ...player,
          isRevealed: true,
          skillUsesLeft: player.class?.skill.maxUses || 0
        };
      }
      return player;
    }));
  };

  const handleUseSkill = (playerId: string) => {
    setPlayers(players.map(player => {
      if (player.id === playerId && player.skillUsesLeft > 0) {
        return { ...player, skillUsesLeft: player.skillUsesLeft - 1 };
      }
      return player;
    }));
  };

  const handleUpdateHp = (playerId: string, change: number) => {
    setPlayers(players.map(player => {
      if (player.id === playerId) {
        const newHp = Math.max(0, Math.min(player.maxHp, player.hp + change));
        return { ...player, hp: newHp };
      }
      return player;
    }));
  };

  const handleDeletePlayer = (playerId: string) => {
    setPlayers(players.filter(player => player.id !== playerId));
  };

  return (
    <div className={styles.container}>
      <div className={styles.controlsWrapper}>
        <div className={styles.controls}>
          <div className={styles.addPlayer}>
            <input
              type="text"
              value={newPlayerName}
              onChange={(e) => setNewPlayerName(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Nom du joueur"
            />
            <button onClick={addPlayer}>Ajouter</button>
            {players.length === 0 && (
              <button 
                onClick={addDefaultPlayers}
                className={styles.defaultPlayersButton}
              >
                Joueurs par défaut
              </button>
            )}
          </div>
        </div>
        <Dice />
      </div>

      <div className={styles.playerGrid}>
        {players.map(player => (
          <PlayerCard
            key={player.id}
            player={player}
            onReveal={handleReveal}
            onUseSkill={handleUseSkill}
            onUpdateHp={handleUpdateHp}
            onDelete={handleDeletePlayer}
          />
        ))}
      </div>
    </div>
  );
}; 