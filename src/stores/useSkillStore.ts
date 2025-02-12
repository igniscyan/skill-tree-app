// src/stores/useSkillStore.ts
import { create } from 'zustand';
import type { SkillSystem, Skill, Keystone } from '../types/skillTree';

interface FoundationPerks {
  body: {
    weaponHandlingPenalty: number;
    acceleration: number;
    maxVitalsDefenseReduction: number;
    backupHeavyDamageReduction: number;
    aerialManeuver: boolean;
    bleedFireDamageReduction: number;
  };
  tech: {
    nanoWireRange: number;
    coreDamageReduction: number;
    scanAugmentCooldown: number;
    baseDefenseRegen: number;
    debuffDefenseDamage: number;
    coreActivationCost: number;
  };
  hardware: {
    reserveAmmo: number;
    loadoutSpeedPenalty: number;
    primaryStimCooldown: number;
    explosiveDamageResistance: number;
    extraWeaponModSlot: boolean;
    deviceCooldowns: number;
  };
}

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
  getFoundationPerks: () => FoundationPerks;
}

const DEFAULT_POINTS = 150;

const hasZeroRequirements = (skill: Skill): boolean => {
  return skill.requirements.body === 0 && 
         skill.requirements.tech === 0 && 
         skill.requirements.hardware === 0;
};

export const useSkillStore = create<SkillState>((set, get) => {
  const initialState = {
    availablePoints: DEFAULT_POINTS,
    keystonePoints: {
      body: 0,
      tech: 0,
      hardware: 0
    },
    allocatedPoints: {},
    skills: [],
    keystones: [],
    activeCategory: ''
  };

  const meetsKeystoneRequirements = (skillId: string, keystonePoints: Record<string, number>): boolean => {
    const skill = get().skills.find(s => s.id === skillId);
    if (!skill) return false;

    return (
      keystonePoints.body >= skill.requirements.body &&
      keystonePoints.tech >= skill.requirements.tech &&
      keystonePoints.hardware >= skill.requirements.hardware
    );
  };

  const meetsPrerequisiteRequirements = (skillId: string): boolean => {
    const state = get();
    const skill = state.skills.find(s => s.id === skillId);
    if (!skill) return false;
    
    if (!skill.prerequisiteSkills || skill.prerequisiteSkills.length === 0) {
      return true;
    }
  
    return skill.prerequisiteSkills.every(prereqId => {
      // Check if the prerequisite skill exists in our loaded skills
      const prerequisiteExists = state.skills.some(s => s.id === prereqId);
      if (!prerequisiteExists) {
        return true; // If prerequisite doesn't exist in loaded skills, consider it met
      }
      const prereqLevel = state.allocatedPoints[prereqId] || 0;
      return prereqLevel > 0;
    });
  };

  // Helper function to calculate scaled perk value
  const calculatePerkValue = (points: number, maxValue: number): number => {
    if (points < 26) return 0;
    if (points >= 50) return maxValue; // Return full value at 50
    
    // Calculate scaling for points between 26-49
    const scale = (points - 25) / 24; // Changed from 25 to 24 to scale between 26-49
    return maxValue * scale;
  };

  // Helper function to calculate threshold perk value
  const calculateThresholdValue = (points: number, maxValue: number): number => {
    return points >= 25 ? maxValue : 0;
  };

  // Helper function to calculate boolean perk
  const calculateBooleanPerk = (points: number): boolean => {
    return points >= 50;
  };

  return {
    ...initialState,

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
      
      // Prevent going over 15 points
      if (points < 0 || points > 50) return;
      
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

      // If it's a zero-requirement skill and at level 0, don't consume points
      if (hasZeroRequirements(skill) && currentLevel === 0) {
        set(state => ({
          allocatedPoints: {
            ...state.allocatedPoints,
            [skillId]: currentLevel + 1
          }
        }));
        return true;
      }

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

      const skill = state.skills.find(s => s.id === skillId);
      if (!skill) return false;

      const currentLevel = state.allocatedPoints[skillId] || 0;
      if (currentLevel <= 0) return false;

      // Don't allow deallocation of level 1 for zero-requirement skills
      if (hasZeroRequirements(skill) && currentLevel === 1) return false;

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
      
      // Keep level 1 for zero-requirement skills when clearing
      const baseAllocations: Record<string, number> = {};
      state.skills.forEach(skill => {
        if (hasZeroRequirements(skill)) {
          baseAllocations[skill.id] = 1;
        }
      });
      
      set(state => ({
        availablePoints: state.availablePoints + totalSpentPoints,
        keystonePoints: {
          body: 0,
          tech: 0,
          hardware: 0
        },
        allocatedPoints: baseAllocations
      }));
    },

    loadSkillSystem: (system) => {
      // Force the available points to be 150
      const points = DEFAULT_POINTS;
      
      // Initialize allocatedPoints with level 1 for all zero-requirement skills
      const initialAllocations: Record<string, number> = {};
      system.skills.forEach(skill => {
        if (hasZeroRequirements(skill)) {
          initialAllocations[skill.id] = 1;
        }
      });
      
      set({
        skills: system.skills || [],
        keystones: system.keystones || [],
        allocatedPoints: initialAllocations,
        keystonePoints: {
          body: 0,
          tech: 0,
          hardware: 0
        },
        activeCategory: system.skills?.[0]?.category || '',
        availablePoints: points
      });
    },

    canAllocatePoint: (skillId) => {
      const state = get();
      const skill = state.skills.find(s => s.id === skillId);
      if (!skill) return false;

      if (!state.meetsRequirements(skillId)) return false;

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
        skill.prerequisiteSkills?.includes(skillId) && // Add optional chaining here
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
    },

    getFoundationPerks: () => {
      const state = get();
      const bodyPoints = state.keystonePoints.body || 0;
      const techPoints = state.keystonePoints.tech || 0;
      const hardwarePoints = state.keystonePoints.hardware || 0;

      return {
        body: {
          weaponHandlingPenalty: calculateThresholdValue(bodyPoints, 25),
          acceleration: calculatePerkValue(bodyPoints, 10),
          maxVitalsDefenseReduction: calculatePerkValue(bodyPoints, 10),
          backupHeavyDamageReduction: calculatePerkValue(bodyPoints, 5),
          aerialManeuver: calculateBooleanPerk(bodyPoints),
          bleedFireDamageReduction: calculatePerkValue(bodyPoints, 25)
        },
        tech: {
          nanoWireRange: calculateThresholdValue(techPoints, 50),
          coreDamageReduction: calculatePerkValue(techPoints, 20),
          scanAugmentCooldown: calculatePerkValue(techPoints, 20),
          baseDefenseRegen: calculatePerkValue(techPoints, 20),
          debuffDefenseDamage: calculatePerkValue(techPoints, 5),
          coreActivationCost: calculatePerkValue(techPoints, 25)
        },
        hardware: {
          reserveAmmo: calculateThresholdValue(hardwarePoints, 100),
          loadoutSpeedPenalty: calculatePerkValue(hardwarePoints, 25),
          primaryStimCooldown: calculatePerkValue(hardwarePoints, 50),
          explosiveDamageResistance: calculatePerkValue(hardwarePoints, 25),
          extraWeaponModSlot: calculateBooleanPerk(hardwarePoints),
          deviceCooldowns: calculatePerkValue(hardwarePoints, 25)
        }
      };
    }
  };
});