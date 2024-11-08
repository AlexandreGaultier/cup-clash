import { Player } from '../types/types';
import { CLASSES } from '../data/classes';
import styles from './PlayerCard.module.css';

interface PlayerCardProps {
  player: Player;
  onReveal: (playerId: string) => void;
  onUseSkill: (playerId: string) => void;
  onUpdateHp: (playerId: string, change: number) => void;
  onDelete: (playerId: string) => void;
  onUpdateSkillUses: (playerId: string, change: number) => void;
  onStealClass: (playerId: string, className: string) => void;
}

export const PlayerCard = ({ player, onReveal, onUseSkill, onUpdateHp, onDelete, onUpdateSkillUses, onStealClass }: PlayerCardProps) => {
  const hpPercentage = (player.hp / player.maxHp) * 100;

  const renderSkillInfo = () => {
    if (!player.class) return null;

    const { skill } = player.class;
    const usesDisplay = skill.maxUses === Infinity 
      ? '∞' 
      : `${player.skillUsesLeft}/${skill.maxUses}`;

    if (player.class.name === 'Voleur' && player.stolenClass) {
      return (
        <div className={styles.classInfo}>
          <div className={styles.classHeader}>
            <h4>
              {player.stolenClass.emoji} {player.stolenClass.name} (Volé)
            </h4>
            <button 
              onClick={() => onReveal(player.id)}
              className={styles.hideButton}
              title="Cacher la classe"
            >
              ×
            </button>
          </div>

          <div className={styles.skillDetails}>
            <p className={styles.skillName}>{player.stolenClass.skill.name}</p>
            <p className={styles.skillDescription}>{player.stolenClass.skill.description}</p>
            <div className={styles.skillUses}>
              <span>Utilisations:</span> {usesDisplay}
            </div>
          </div>

          <button 
            onClick={() => onUseSkill(player.id)}
            disabled={player.skillUsesLeft === 0}
            className={styles.skillButton}
          >
            Utiliser le pouvoir volé
          </button>
        </div>
      );
    }

    if (player.class.name === 'Voleur' && !player.stolenClass) {
      return (
        <div className={styles.classInfo}>
          <div className={styles.classHeader}>
            <h4>{player.class.emoji} {player.class.name}</h4>
            <button 
              onClick={() => onReveal(player.id)}
              className={styles.hideButton}
              title="Cacher la classe"
            >
              ×
            </button>
          </div>

          <div className={styles.stealClassSelector}>
            <select 
              onChange={(e) => onStealClass(player.id, e.target.value)}
              className={styles.classSelect}
            >
              <option value="">Sélectionner une classe à voler</option>
              {CLASSES.filter(c => c.name !== 'Voleur').map(c => (
                <option key={c.name} value={c.name}>
                  {c.emoji} {c.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      );
    }

    return (
      <div className={styles.classInfo}>
        <div className={styles.classHeader}>
          <h4>
            {player.class.emoji} {player.class.name}
          </h4>
          <button 
            onClick={() => onReveal(player.id)}
            className={styles.hideButton}
            title="Cacher la classe"
          >
            x
          </button>
          {player.hp <= 2 && player.class.name === 'Berserker' && (
            <span className={styles.passiveIndicator}>Rage Active!</span>
          )}
        </div>

        <div className={styles.skillDetails}>
          <p className={styles.skillName}>{skill.name}</p>
          <p className={styles.skillDescription}>{skill.description}</p>
          
          {skill.passiveEffect && (
            <p className={styles.passiveEffect}>
              <span>Passif:</span> {skill.passiveEffect}
            </p>
          )}

          <div className={styles.skillUses}>
            <span>Utilisations:</span> {usesDisplay}
            {player.class.name === 'Assassin' && (
              <div className={styles.skillUsesControls}>
                <button 
                  onClick={() => onUpdateSkillUses(player.id, -1)}
                  className={styles.skillUsesButton}
                  disabled={player.skillUsesLeft <= 0}
                >
                  -
                </button>
                <button 
                  onClick={() => onUpdateSkillUses(player.id, 1)}
                  className={styles.skillUsesButton}
                  disabled={player.skillUsesLeft >= skill.maxUses}
                >
                  +
                </button>
              </div>
            )}
          </div>
        </div>

        <button 
          onClick={() => onUseSkill(player.id)}
          disabled={player.skillUsesLeft === 0}
          className={styles.skillButton}
        >
          Utiliser le pouvoir
        </button>

        {player.stolenSkill && (
          <div className={styles.stolenSkill}>
            <p>Pouvoir volé: {player.stolenSkill.name}</p>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className={`${styles.card} ${player.hp <= 2 ? styles.lowHp : ''}`}>
      <div className={styles.cardActions}>
        <div className={styles.cardHeader}>
          <h3>{player.name}</h3>
          <button 
            onClick={() => onDelete(player.id)}
            className={styles.deleteButton}
          >
            X
          </button>
        </div>
        <div className={styles.cupContainer}>
          <div 
            className={styles.cupFill} 
            style={{ height: `${hpPercentage}%` }}
          />
          <span className={styles.hpText}>{player.hp}/{player.maxHp}</span>
        </div>
        
        {player.isRevealed ? (
          renderSkillInfo()
        ) : (
          <button 
            onClick={() => onReveal(player.id)}
            className={styles.revealButton}
          >
            Révéler
          </button>
        )}
        
        <div className={styles.hpControls}>
          <button onClick={() => onUpdateHp(player.id, -1)}>-1 PV</button>
          <button onClick={() => onUpdateHp(player.id, 1)}>+1 PV</button>
        </div>
      </div>
    </div>
  );
}; 