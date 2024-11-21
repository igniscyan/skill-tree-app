// src/types/skillTree.ts
export interface SkillLevel {
  level: number;
  pointsRequired: number;
  description: string;
  rewards: string[];
}

export interface Skill {
  id: string;
  name: string;
  description: string;
  category: string;
  requirements: {
    body: number;
    tech: number;
    hardware: number;
  };
  prerequisiteSkills: string[];
  levels: SkillLevel[];
  sortOrder: number;
}

export interface Keystone {
  id: 'body' | 'tech' | 'hardware';
  name: string;
  description: string;
}

export interface SkillSystem {
  availablePoints: number;  // Added this field
  keystones: Keystone[];
  skills: Skill[];
}