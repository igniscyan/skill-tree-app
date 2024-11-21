import { SkillSystem } from '../types/skillTree';
export const sampleSystem: SkillSystem = {
    availablePoints: 50,
    keystones: [
        {
            id: 'body',
            name: 'BODY',
            description: 'Physical augmentations and shell durability'
        },
        {
            id: 'tech',
            name: 'TECH',
            description: 'Advanced systems and electronic warfare'
        },
        {
            id: 'hardware',
            name: 'HARDWARE',
            description: 'Weapons proficiency and gear mastery'
        }
    ],
    skills: [
        // SHELLS Category
        {
            id: 'basic-shell',
            name: 'Basic Shell Systems',
            description: 'Foundational shell modifications',
            category: 'Shells',
            sortOrder: 1,
            prerequisiteSkills: [],
            requirements: {
                body: 1,
                tech: 0,
                hardware: 0
            },
            levels: [
                {
                    level: 1,
                    pointsRequired: 1,
                    description: "Basic shell enhancements",
                    rewards: ["+10% Health", "+5% Damage resistance"]
                },
                {
                    level: 2,
                    pointsRequired: 2,
                    description: "Improved shell durability",
                    rewards: ["+20% Health", "+10% Damage resistance", "Basic regeneration"]
                }
            ]
        },
        {
            id: 'enhanced-mobility',
            name: 'Enhanced Mobility',
            description: 'Advanced movement capabilities',
            category: 'Shells',
            sortOrder: 2,
            prerequisiteSkills: ['basic-shell'],
            requirements: {
                body: 2,
                tech: 1,
                hardware: 0
            },
            levels: [
                {
                    level: 1,
                    pointsRequired: 2,
                    description: "Improved movement systems",
                    rewards: ["+15% Movement Speed", "Double Jump"]
                },
                {
                    level: 2,
                    pointsRequired: 3,
                    description: "Advanced mobility suite",
                    rewards: ["Air Dash", "Wall Running", "+30% Movement Speed"]
                }
            ]
        },
        {
            id: 'combat-shell',
            name: 'Combat Shell',
            description: 'Military-grade shell enhancements',
            category: 'Shells',
            sortOrder: 3,
            prerequisiteSkills: ['enhanced-mobility'],
            requirements: {
                body: 3,
                tech: 2,
                hardware: 0
            },
            levels: [
                {
                    level: 1,
                    pointsRequired: 3,
                    description: "Combat optimization",
                    rewards: ["+25% Damage resistance", "Combat Time Dilation"]
                }
            ]
        },

        // WEAPONS Category
        {
            id: 'basic-weapons',
            name: 'Basic Weapon Systems',
            description: 'Fundamental weapon handling',
            category: 'Weapons',
            sortOrder: 1,
            prerequisiteSkills: [],
            requirements: {
                body: 0,
                tech: 0,
                hardware: 1
            },
            levels: [
                {
                    level: 1,
                    pointsRequired: 1,
                    description: "Basic weapon proficiency",
                    rewards: ["+10% Weapon damage", "-5% Recoil"]
                },
                {
                    level: 2,
                    pointsRequired: 2,
                    description: "Improved handling",
                    rewards: ["+20% Weapon damage", "-15% Recoil", "Faster reload"]
                }
            ]
        },
        {
            id: 'precision-targeting',
            name: 'Precision Targeting',
            description: 'Advanced targeting systems',
            category: 'Weapons',
            sortOrder: 2,
            prerequisiteSkills: ['basic-weapons'],
            requirements: {
                body: 0,
                tech: 2,
                hardware: 2
            },
            levels: [
                {
                    level: 1,
                    pointsRequired: 2,
                    description: "Enhanced accuracy",
                    rewards: ["+25% Headshot damage", "Reduced spread"]
                },
                {
                    level: 2,
                    pointsRequired: 3,
                    description: "Master marksman",
                    rewards: ["+50% Headshot damage", "Time slows while aiming"]
                }
            ]
        },
        {
            id: 'heavy-weapons',
            name: 'Heavy Weapons',
            description: 'Heavy weapons specialization',
            category: 'Weapons',
            sortOrder: 3,
            prerequisiteSkills: ['basic-weapons'],
            requirements: {
                body: 2,
                tech: 0,
                hardware: 3
            },
            levels: [
                {
                    level: 1,
                    pointsRequired: 3,
                    description: "Heavy weapons training",
                    rewards: ["+30% Heavy weapon damage", "Reduced movement penalty"]
                }
            ]
        },

        // PERKS Category
        {
            id: 'basic-hacking',
            name: 'Basic Hacking',
            description: 'Fundamental hacking capabilities',
            category: 'Perks',
            sortOrder: 1,
            prerequisiteSkills: [],
            requirements: {
                body: 0,
                tech: 1,
                hardware: 0
            },
            levels: [
                {
                    level: 1,
                    pointsRequired: 1,
                    description: "Basic hacking protocols",
                    rewards: ["Hack basic systems", "+20% Hack speed"]
                },
                {
                    level: 2,
                    pointsRequired: 2,
                    description: "Improved hacking",
                    rewards: ["Hack security systems", "+50% Hack speed"]
                }
            ]
        },
        {
            id: 'stealth-systems',
            name: 'Stealth Systems',
            description: 'Advanced stealth capabilities',
            category: 'Perks',
            sortOrder: 2,
            prerequisiteSkills: ['basic-hacking'],
            requirements: {
                body: 0,
                tech: 2,
                hardware: 1
            },
            levels: [
                {
                    level: 1,
                    pointsRequired: 2,
                    description: "Basic stealth enhancements",
                    rewards: ["Active Camouflage", "-30% Sound generation"]
                },
                {
                    level: 2,
                    pointsRequired: 3,
                    description: "Advanced stealth",
                    rewards: ["Improved Camouflage", "Thermal masking"]
                }
            ]
        },
        {
            id: 'combat-algorithms',
            name: 'Combat Algorithms',
            description: 'Enhanced combat processing',
            category: 'Perks',
            sortOrder: 3,
            prerequisiteSkills: ['basic-hacking'],
            requirements: {
                body: 1,
                tech: 3,
                hardware: 1
            },
            levels: [
                {
                    level: 1,
                    pointsRequired: 3,
                    description: "Combat optimization",
                    rewards: ["Auto-target weak points", "+25% Combat efficiency"]
                }
            ]
        }
    ]
};