import { Class } from '../types/types';

export const CLASSES: Class[] = [
  {
    name: 'Guerrier',
    skill: {
      name: 'Frappe Puissante',
      description: 'Bonus de +1 en attaque, +2 sur un jet de 5 ou 6',
      maxUses: 3
    }
  },
  {
    name: 'Archer',
    skill: {
      name: 'Tir à Distance',
      description: 'Peut attaquer n\'importe quel joueur',
      maxUses: 2
    }
  },
  // ... Ajoutez les autres classes de la même manière
]; 