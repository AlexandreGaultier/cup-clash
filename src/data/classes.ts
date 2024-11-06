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
      description: 'Ignore la restriction de proximité pour cibler n\'importe qui.',
      maxUses: Infinity,
      passiveEffect: 'Peut attaquer n\'importe quel joueur autour de la table'
    }
  },
  {
    name: 'Mage',
    emoji: '🔮',
    skill: {
      name: 'Contre-Sort',
      description: 'Si attaqué, lance un dé. Sur un 6, renvoie les dégâts à l\'attaquant.',
      maxUses: 3,
      passiveEffect: 'Peut se défendre contre une attaque'
    }
  },
  {
    name: 'Prêtresse',
    emoji: '✨',
    skill: {
      name: 'Soin Divin',
      description: 'Restaure un point de vie à un joueur au choix (sauf soi-même).',
      maxUses: 2
    }
  },
  {
    name: 'Assassin',
    emoji: '🔪',
    skill: {
      name: 'Coup Fatal',
      description: 'Inflige automatiquement 2 dégâts lors d\'une attaque.',
      maxUses: 1,
      passiveEffect: 'Si tue un joueur, récupère sa capacité spéciale'
    }
  },
  {
    name: 'Berserker',
    emoji: '🔥',
    skill: {
      name: 'Rage Sanguinaire',
      description: 'Inflige +1 dégât lors de sa prochaine attaque.',
      maxUses: 2,
      passiveEffect: 'Bonus de +1 en attaque si PV ≤ 2'
    }
  },
  {
    name: 'Nécromancien',
    emoji: '💀',
    skill: {
      name: 'Résurrection',
      description: 'Fait revenir un joueur mort avec 2 PV, qui doit obéir au Nécromancien.',
      maxUses: 1,
      passiveEffect: 'Si son sbire gagne, le Nécromancien remporte aussi la partie'
    }
  },
  {
    name: 'Alchimiste',
    emoji: '🧪',
    skill: {
      name: 'Potion Explosive',
      description: 'Ajoute +1 dégât à une attaque, puis inflige 1 dégât à un joueur aléatoire.',
      maxUses: 2
    }
  },
  {
    name: 'Voleur',
    emoji: '💰',
    skill: {
      name: 'Larcin',
      description: 'Vole le pouvoir spécial non utilisé d\'un autre joueur.',
      maxUses: 1,
      passiveEffect: 'Le pouvoir volé conserve son nombre d\'utilisations d\'origine'
    }
  },
  {
    name: 'Paladin',
    emoji: '🛡️',
    skill: {
      name: 'Protection Divine',
      description: 'Réduit de moitié les dégâts reçus.',
      maxUses: 2,
      passiveEffect: 'Regagne 1 PV chaque fois qu\'il protège un autre joueur'
    }
  }
]; 