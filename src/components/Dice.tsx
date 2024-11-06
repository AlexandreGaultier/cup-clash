import { useState } from 'react';
import styles from './Dice.module.css';

export const Dice = () => {
  const [value, setValue] = useState<number>(1);
  const [isRolling, setIsRolling] = useState(false);

  const rollDice = () => {
    if (!isRolling) {
      setIsRolling(true);
      
      // Animation de roulement rapide
      const rolls = 10;
      let count = 0;
      
      const rollInterval = setInterval(() => {
        setValue(Math.floor(Math.random() * 6) + 1);
        count++;
        
        if (count >= rolls) {
          clearInterval(rollInterval);
          setIsRolling(false);
        }
      }, 100);
    }
  };

  return (
    <div className={styles.diceContainer}>
      <button 
        className={`${styles.dice} ${isRolling ? styles.rolling : ''}`}
        onClick={rollDice}
        disabled={isRolling}
      >
        {value}
      </button>
    </div>
  );
}; 