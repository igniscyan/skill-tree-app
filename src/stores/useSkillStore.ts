// src/stores/useSkillStore.ts
import { create } from 'zustand';
import type { SkillSystem, Skill, Keystone } from '../types/skillTree';

interface SkillState {
  // State
  availablePoints: number;
  keystonePoints: Record<string, number>;
  allocatedPoints: Record<string, number>;
  skills: Skill[];
  keystones: Keystone[];
  activeCategory: string;
  
  // Actions
  setActiveCategory: (category: string) => void;
  setAvailablePoints: (points: number) => void;
  setKeystonePoints: (keystoneId: string, points: number) => void;
  allocatePoint: (skillId: string) => boolean;
  deallocatePoint: (skillId: string) => boolean;
  clearAllPoints: () => void;
  loadSkillSystem: (system: SkillSystem) => void;
  getCategories: () => string[];
  
  // Getters
  canAllocatePoint: (skillId: string) => boolean;
  canDeallocatePoint: (skillId: string) => boolean;
  getSkillLevel: (skillId: string) => number;
  getKeystonePoints: (keystoneId: string) => number;
  meetsRequirements: (skillId: string) => boolean;
  getTotalSpentPoints: () => number;
}

export const useSkillStore = create<SkillState>((set, get) => {
  // Helper function to check keystone requirements
  const meetsKeystoneRequirements = (skillId: string, keystonePoints: Record<string, number>): boolean => {
    const skill = get().skills.find(s => s.id === skillId);
    if (!skill) return false;

    return (
      keystonePoints.body >= skill.requirements.body &&
      keystonePoints.tech >= skill.requirements.tech &&
      keystonePoints.hardware >= skill.requirements.hardware
    );
  };

  // Helper function to check prerequisite skills
  const meetsPrerequisiteRequirements = (skillId: string): boolean => {
    const state = get();
    const skill = state.skills.find(s => s.id === skillId);
    if (!skill) return false;

    return skill.prerequisiteSkills.every(prereqId => {
      const prereqLevel = state.allocatedPoints[prereqId] || 0;
      return prereqLevel > 0;
    });
  };

  return {
    // Initial state
    availablePoints: 0,
    keystonePoints: {
      body: 0,
      tech: 0,
      hardware: 0
    },
    allocatedPoints: {},
    skills: [],
    keystones: [],
    activeCategory: '',

    getCategories: () => {
      const state = get();
      const categories = Array.from(new Set(state.skills.map(skill => skill.category)));
      return categories.sort();
    },

    setActiveCategory: (category) => set({ activeCategory: category }),

    setAvailablePoints: (points) => set({ availablePoints: points }),

    setKeystonePoints: (keystoneId, points) => {
      const state = get();
      const currentPoints = state.keystonePoints[keystoneId];
      const diff = points - currentPoints;
      
      if (points < 0) return;
      
      if (diff > 0 && state.availablePoints < diff) return;
      
      if (diff < 0) {
        const wouldInvalidate = state.skills.some(skill => {
          const hasPoints = (state.allocatedPoints[skill.id] || 0) > 0;
          if (!hasPoints) return false;

          const newKeystonePoints = { ...state.keystonePoints };
          newKeystonePoints[keystoneId] = points;

          return hasPoints && !meetsKeystoneRequirements(skill.id, newKeystonePoints);
        });

        if (wouldInvalidate) {
          console.log('Cannot reduce points - would invalidate active skills');
          return;
        }
      }

      set(state => ({
        availablePoints: state.availablePoints - diff,
        keystonePoints: {
          ...state.keystonePoints,
          [keystoneId]: points
        }
      }));
    },

    allocatePoint: (skillId) => {
      const state = get();
      if (!state.canAllocatePoint(skillId)) return false;

      const skill = state.skills.find(s => s.id === skillId);
      if (!skill) return false;

      const currentLevel = state.allocatedPoints[skillId] || 0;
      const nextLevel = skill.levels[currentLevel];
      
      if (!nextLevel) return false;

      const pointCost = nextLevel.pointsRequired;
      
      if (state.availablePoints < pointCost) return false;

      set(state => ({
        availablePoints: state.availablePoints - pointCost,
        allocatedPoints: {
          ...state.allocatedPoints,
          [skillId]: currentLevel + 1
        }
      }));

      return true;
    },

    deallocatePoint: (skillId) => {
      const state = get();
      if (!state.canDeallocatePoint(skillId)) return false;

      const currentLevel = state.allocatedPoints[skillId] || 0;
      if (currentLevel <= 0) return false;

      const skill = state.skills.find(s => s.id === skillId);
      if (!skill) return false;

      const currentLevelData = skill.levels[currentLevel - 1];
      const pointRefund = currentLevelData.pointsRequired;

      set(state => ({
        availablePoints: state.availablePoints + pointRefund,
        allocatedPoints: {
          ...state.allocatedPoints,
          [skillId]: currentLevel - 1
        }
      }));

      return true;
    },

    clearAllPoints: () => {
      const state = get();
      const totalSpentPoints = state.getTotalSpentPoints();
      
      set(state => ({
        availablePoints: state.availablePoints + totalSpentPoints,
        keystonePoints: {
          body: 0,
          tech: 0,
          hardware: 0
        },
        allocatedPoints: {}
      }));
    },

    loadSkillSystem: (system) => {
      set({
        skills: system.skills,
        keystones: system.keystones,
        allocatedPoints: {},
        keystonePoints: {
          body: 0,
          tech: 0,
          hardware: 0
        },
        activeCategory: system.skills[0]?.category || '',
        availablePoints: system.availablePoints  
      });
    },

    canAllocatePoint: (skillId) => {
      const state = get();
      const skill = state.skills.find(s => s.id === skillId);
      if (!skill) return false;

      // Check keystone requirements
      if (!state.meetsRequirements(skillId)) return false;

      // Check prerequisite skills
      if (!meetsPrerequisiteRequirements(skillId)) return false;

      const currentLevel = state.allocatedPoints[skillId] || 0;
      const nextLevel = skill.levels[currentLevel];

      if (!nextLevel) return false;

      return state.availablePoints >= nextLevel.pointsRequired;
    },

    canDeallocatePoint: (skillId) => {
      const state = get();
      const currentLevel = state.allocatedPoints[skillId] || 0;
      
      if (currentLevel <= 0) return false;

      // Check if any allocated skills depend on this one
      const dependentSkills = state.skills.filter(skill => 
        skill.prerequisiteSkills.includes(skillId) &&
        (state.allocatedPoints[skill.id] || 0) > 0
      );

      return dependentSkills.length === 0;
    },

    getSkillLevel: (skillId) => {
      const state = get();
      return state.allocatedPoints[skillId] || 0;
    },

    getKeystonePoints: (keystoneId) => {
      const state = get();
      return state.keystonePoints[keystoneId] || 0;
    },

    meetsRequirements: (skillId) => {
      const state = get();
      const skill = state.skills.find(s => s.id === skillId);
      if (!skill) return false;

      return meetsKeystoneRequirements(skillId, state.keystonePoints);
    },

    getTotalSpentPoints: () => {
      const state = get();
      const keystonePointsSpent = Object.values(state.keystonePoints).reduce((a, b) => a + b, 0);
      const skillPointsSpent = Object.entries(state.allocatedPoints).reduce((total, [skillId, level]) => {
        const skill = state.skills.find(s => s.id === skillId);
        if (!skill) return total;
        return total + skill.levels.slice(0, level).reduce((sum, l) => sum + l.pointsRequired, 0);
      }, 0);
      
      return keystonePointsSpent + skillPointsSpent;
    }
  };
});