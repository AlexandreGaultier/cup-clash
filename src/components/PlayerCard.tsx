import { Player } from '../types/types';
import styles from './PlayerCard.module.css';

interface PlayerCardProps {
  player: Player;
  onReveal: (playerId: string) => void;
  onUseSkill: (playerId: string) => void;
  onUpdateHp: (playerId: string, change: number) => void;
}

export const PlayerCard = ({ player, onReveal, onUseSkill, onUpdateHp }: PlayerCardProps) => {
  const hpPercentage = (player.hp / player.maxHp) * 100;

  return (
    <div className={styles.card}>
      <h3>{player.name}</h3>
      <div className={styles.cupContainer}>
        <div 
          className={styles.cupFill} 
          style={{ height: `${hpPercentage}%` }}
        />
        <span className={styles.hpText}>{player.hp}/{player.maxHp}</span>
      </div>
      
      {player.isRevealed ? (
        <div className={styles.classInfo}>
          <p>Classe: {player.class?.name}</p>
          <p>Compétence: {player.class?.skill.name}</p>
          <p>Utilisations: {player.skillUsesLeft}/{player.class?.skill.maxUses}</p>
          <button 
            onClick={() => onUseSkill(player.id)}
            disabled={player.skillUsesLeft === 0}
          >
            Utiliser
          </button>
        </div>
      ) : (
        <button onClick={() => onReveal(player.id)}>Révéler</button>
      )}
      
      <div className={styles.hpControls}>
        <button onClick={() => onUpdateHp(player.id, -1)}>-1 PV</button>
        <button onClick={() => onUpdateHp(player.id, 1)}>+1 PV</button>
      </div>
    </div>
  );
}; 