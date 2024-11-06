export type Class = {
  name: string;
  skill: {
    name: string;
    description: string;
    maxUses: number;
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
}; 