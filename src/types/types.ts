export type Class = {
  name: string;
  emoji: string;
  skill: {
    name: string;
    description: string;
    maxUses: number;
    passiveEffect?: string;
  };
};

export type Player = {
  id: string;
  name: string;
  hp: number;
  maxHp: number;
  class?: Class;
  isRevealed: boolean;
  skillUsesLeft: number;
  stolenSkill?: Class['skill'];
  stolenClass?: Class;
}; 