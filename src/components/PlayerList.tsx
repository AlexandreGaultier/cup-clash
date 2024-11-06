import { useState, KeyboardEvent } from 'react';
import { Player } from '../types/types';
import { PlayerCard } from './PlayerCard';
import { Dice } from './Dice';
import { CLASSES } from '../data/classes';
import styles from './PlayerList.module.css';

export const PlayerList = () => {
  const [players, setPlayers] = useState<Player[]>([
    {
      id: '1',
      name: 'Alexandre',
      hp: 5,
      maxHp: 5,
      isRevealed: false,
      class: CLASSES[Math.floor(Math.random() * CLASSES.length)],
      skillUsesLeft: 2
    },
    {
      id: '2',
      name: 'Adeline',
      hp: 5,
      maxHp: 5,
      isRevealed: false,
      class: CLASSES[Math.floor(Math.random() * CLASSES.length)],
      skillUsesLeft: 2
    },
    {
      id: '3',
      name: 'Eline',
      hp: 5,
      maxHp: 5,
      isRevealed: false,
      class: CLASSES[Math.floor(Math.random() * CLASSES.length)],
      skillUsesLeft: 2
    },
    {
      id: '4',
      name: 'Maxime',
      hp: 5,
      maxHp: 5,
      isRevealed: false,
      class: CLASSES[Math.floor(Math.random() * CLASSES.length)],
      skillUsesLeft: 2
    }
  ]);

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

  const handleReveal = (playerId: string) => {
    setPlayers(players.map(player => 
      player.id === playerId 
        ? { ...player, isRevealed: !player.isRevealed }
        : player
    ));
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Ne garde que les lettres (incluant les accents)
    const lettersOnly = value.replace(/[^a-zA-ZÀ-ÿ]/g, '');
    // Limite à 11 caractères
    const truncated = lettersOnly.slice(0, 11);
    setNewPlayerName(truncated);
  };

  return (
    <div className={styles.container}>
      <div className={styles.controlsWrapper}>
        <div className={styles.controls}>
          <div className={styles.addPlayer}>
            <input
              type="text"
              value={newPlayerName}
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
              placeholder="Nom du joueur"
              maxLength={11} // Sécurité supplémentaire côté HTML
              pattern="[a-zA-ZÀ-ÿ]+" // Pattern HTML pour les lettres uniquement
              title="Lettres uniquement (11 caractères max)" // Message d'aide
            />
            <button onClick={addPlayer}>Ajouter</button>
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