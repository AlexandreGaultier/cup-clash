import { useState, useEffect, useRef } from 'react';
import styles from './RulesModal.module.css';
import { CLASSES } from '../data/classes';

interface RulesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RulesModal = ({ isOpen, onClose }: RulesModalProps) => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (modalRef.current) {
      const scrollTop = modalRef.current.scrollTop;
      setShowScrollTop(scrollTop > 200); // Afficher après 200px de scroll
    }
  };

  const scrollToTop = () => {
    modalRef.current?.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div 
        ref={modalRef}
        className={styles.modal}
        onScroll={handleScroll}
      >
        <button className={styles.closeButton} onClick={onClose}>×</button>
        <h2>Règles du Cup Clash</h2>
        
        <section>
          <h3>Règles de base</h3>
          
          <div className={styles.ruleSection}>
            <h4>Objectif</h4>
            <p>Être le dernier joueur en vie en utilisant des compétences uniques et en jouant de façon stratégique.</p>
          </div>

          <div className={styles.ruleSection}>
            <h4>Mise en place</h4>
            <ul>
              <li>Chaque joueur commence avec <strong>5 points de vie</strong></li>
              <li>Les classes sont distribuées <strong>aléatoirement</strong> et gardées <strong>secrètes</strong></li>
              <li>Le joueur le plus "loyal" (vote collectif) commence la partie</li>
            </ul>
          </div>

          <div className={styles.ruleSection}>
            <h4>Choix du premier joueur</h4>
            <p>Le joueur le plus "loyal" (vote collectif) commence la partie</p>
          </div>
          <div className={styles.ruleSection}>
            <h4>Tour de jeu</h4>
            <p>À son tour, un joueur peut attaquer un adversaire <strong>adjacent</strong> (gauche ou droite)*</p>
            <p>Les dégâts sont déterminés par un lancé de dé :</p>
            <ul className={styles.diceResults}>
              <li><span className={styles.dice}>1</span> Échec critique ! Dites quelque chose de gentil et sincère sur le joueur que vous attaquez ou perdez 1 PV</li>
              <li><span className={styles.dice}>2</span> L'attaque échoue</li>
              <li><span className={styles.dice}>3-4</span> 1 point de dégâts</li>
              <li><span className={styles.dice}>5-6</span> 2 points de dégâts</li>
            </ul>
            <p className={styles.note}>* Certaines classes peuvent avoir des exceptions à cette règle</p>
          </div>

          <div className={styles.ruleSection}>
            <h4>Pouvoirs spéciaux</h4>
            <ul>
              <li>Un joueur révèle sa classe uniquement lorsqu'il utilise son pouvoir</li>
              <li>Les pouvoirs ont un nombre limité d'utilisations</li>
              <li>Certaines classes ont des effets passifs permanents</li>
            </ul>
          </div>

          <div className={styles.ruleSection}>
            <h4>Fin de partie</h4>
            <ul>
              <li>Le dernier joueur en vie remporte la partie</li>
              <li>Si un Nécromancien a un sbire en vie, il gagne aussi</li>
            </ul>
          </div>
        </section>

        <section>
          <h3>Classes et leurs pouvoirs</h3>
          <div className={styles.classesList}>
            {CLASSES.map(classInfo => (
              <div key={classInfo.name} className={styles.classItem}>
                <div className={styles.classHeader}>
                  <h2>{classInfo.emoji} {classInfo.name}</h2>
                </div>
                <hr />
                <div className={styles.skillInfo}>
                  <h4>{classInfo.skill.name}</h4>
                  <p className={styles.skillDescription}>
                    <span className={styles.uses}>({classInfo.skill.maxUses} utilisations)</span>
                    {classInfo.skill.description}
                  </p>
                  {classInfo.skill.passiveEffect && (
                    <p className={styles.passiveEffect}>
                      <span>Passif:</span> {classInfo.skill.passiveEffect}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
        
        {showScrollTop && (
          <button 
            className={styles.scrollTopButton}
            onClick={scrollToTop}
            aria-label="Retour en haut"
          >
            <span className={styles.arrow}>↑</span>
          </button>
        )}
      </div>
    </div>
  );
}; 