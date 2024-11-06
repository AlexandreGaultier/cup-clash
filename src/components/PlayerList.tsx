import { useState } from 'react';
import { Player } from '../types/types';
import { PlayerCard } from './PlayerCard';
import { Dice } from './Dice';
import { CLASSES } from '../data/classes';
import styles from './PlayerList.module.css';

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

  return (
    <div className={styles.container}>
      <div className={styles.controls}>
        <div className={styles.addPlayer}>
          <input
            type="text"
            value={newPlayerName}
            onChange={(e) => setNewPlayerName(e.target.value)}
            placeholder="Nom du joueur"
          />
          <button onClick={addPlayer}>Ajouter</button>
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
          />
        ))}
      </div>
    </div>
  );
}; 