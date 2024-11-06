import styles from './RulesModal.module.css';
import { CLASSES } from '../data/classes';

interface RulesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RulesModal = ({ isOpen, onClose }: RulesModalProps) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <button className={styles.closeButton} onClick={onClose}>×</button>
        <h2>Règles du Cup Clash</h2>
        
        <section>
          <h3>Règles de base</h3>
          <p>
            Les dégâts de base sont déterminés par un lancé de dé :
          </p>
          <ul>
            <li>1 - 2 : 0 point de dégâts</li>
            <li>3 - 4 : 1 point de dégâts</li>
            <li>5 - 6 : 2 points de dégâts</li>
          </ul>
        </section>

        <section>
          <h3>Classes et leurs pouvoirs</h3>
          <div className={styles.classesList}>
            {CLASSES.map(classInfo => (
              <div key={classInfo.name} className={styles.classItem}>
                <h2>{classInfo.name}</h2>
                <hr />
                <p>{classInfo.skill.description}</p>
                {classInfo.skill.passiveEffect && (
                  <p className={styles.passiveEffect}>
                    <span>Passif:</span> {classInfo.skill.passiveEffect}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}; 