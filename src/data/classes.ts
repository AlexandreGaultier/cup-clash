import { Class } from '../types/types';

export const CLASSES: Class[] = [
  {
    name: 'Guerrier',
    emoji: '⚔️',
    skill: {
      name: 'Frappe Héroïque',
      description: 'Relance le dé lors d\'une attaque. Si le résultat est 5 ou plus, le bonus passe de +1 à +2.',
      maxUses: 2,
      passiveEffect: 'Bonus de base de +1 en attaque'
    }
  },
  {
    name: 'Archer',
    emoji: '🏹',
    skill: {
      name: 'Tir à Distance',
      description: 'Pas de capacité spéciale. Ignore la restriction de proximité pour cibler n\'importe qui.',
      maxUses: Infinity,
      passiveEffect: 'Peut attaquer n\'importe quel joueur autour de la table'
    }
  },
  {
    name: 'Mage',
    emoji: '🔮',
    skill: {
      name: 'Contre-Sort',
      description: 'Si attaqué, annule l\'attaque et lance un dé. Sur un 6, renvoie les dégâts à l\'attaquant.',
      maxUses: 3,
    }
  },
  {
    name: 'Prêtresse',
    emoji: '✨',
    skill: {
      name: 'Soin Divin',
      description: 'Restaure un point de vie à un joueur au choix (sauf soi-même).',
      maxUses: 2,
      passiveEffect: 'Au début de son tour, récupère 1 PV si le joueur dit quelque chose de gentil et sincère à un autre joueur'
    }
  },
  {
    name: 'Assassin',
    emoji: '🔪',
    skill: {
      name: 'Coup Fatal',
      description: 'Inflige automatiquement 2 dégâts lors d\'une attaque. Si l\'Assassin tue un joueur avec sa capacité spéciale, il récupère l\'utilisation de sa capacité spéciale.',
      maxUses: 1,
    }
  },
  {
    name: 'Berserker',
    emoji: '🔥',
    skill: {
      name: 'Rage Sanguinaire',
      description: 'Le Berserker n\'a pas de capacité spéciale. Il frappe plus fort s\'il a 2 PV ou moins.',
      maxUses: 0,
      passiveEffect: 'S\'il a 2 PV ou moins, le Berserker inflige +1 dégât lors de sa prochaine attaque.'
    }
  },
  {
    name: 'Nécromancien',
    emoji: '💀',
    skill: {
      name: 'Résurrection',
      description: 'Fait revenir un joueur mort avec 2 PV, qui doit obéir au Nécromancien.',
      maxUses: 1,
      passiveEffect: 'Si le Nécromancien meurt mais que son sbire gagne, le Nécromancien remporte également la partie.'
    }
  },
  {
    name: 'Alchimiste',
    emoji: '🧪',
    skill: {
      name: 'Potion Explosive',
      description: 'Ajoute +1 dégât à une attaque, puis sélectionne un autre joueur pour lui infliger un dégât.',
      maxUses: 2,
    }
  },
  {
    name: 'Voleur',
    emoji: '💰',
    skill: {
      name: 'Larcin',
      description: 'Une fois par partie, vole le pouvoir spécial d\'un autre joueur. Le nombre d\'utilisations du pouvoir volé est le nombre maximal.',
      maxUses: 1,
    }
  },
  {
    name: 'Paladin',
    emoji: '🛡️',
    skill: {
      name: 'Protection Divine',
      description: 'Réduit de moitié les dégâts reçus (minimum 1 dégât).',
      maxUses: 3,
      passiveEffect: 'Regagne 1 PV chaque fois qu\'il protège un autre joueur'
    }
  }
]; 