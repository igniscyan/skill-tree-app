import { SkillSystem } from '../types/skillTree';

export const sampleSystem: SkillSystem = {
    availablePoints: 100,
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
        // Shells
        {
            id: 'bison',
            name: 'Bison',
            description: 'A defensive shell focused on explosive and crowd control resistance',
            category: 'Shells',
            sortOrder: 1,
            prerequisiteSkills: [],
            requirements: {
                body: 0,
                tech: 0,
                hardware: 0
            },
            levels: [
                {
                    level: 1,
                    pointsRequired: 1,
                    description: "Basic shell configuration",
                    rewards: [
                        "Unlocks Bison shell"
                    ]
                },
                {
                    level: 2,
                    pointsRequired: 1,
                    description: "Basic defensive shell configuration",
                    rewards: [
                        "25% increased explosive resistance",
                        "50% increased snare + stun resistance",
                        "Snare + stun immunity while Core active",
                        "25% increased Core generation"
                    ]
                },
                {
                    level: 3,
                    pointsRequired: 1,
                    description: "Advanced defensive capabilities",
                    rewards: [
                        "25% reduced aux power drain",
                        "Aux power drain immunity while below 25% defense",
                        "25% reduced loadout speed penalty",
                        "Additional aerial maneuver charge",
                        "15% increased speed + dexterity while Core active"
                    ]
                }
            ]
        },
        {
            id: 'hydra',
            name: 'Hydra',
            description: 'Regenerative shell with adaptive healing capabilities',
            category: 'Shells',
            sortOrder: 2,
            prerequisiteSkills: [],
            requirements: {
                body: 10,
                tech: 10,
                hardware: 0
            },
            levels: [
                {
                    level: 1,
                    pointsRequired: 1,
                    description: "Basic shell configuration",
                    rewards: [
                        "Unlocks Hydra shell"
                    ]
                },
                {
                    level: 2,
                    pointsRequired: 1,
                    description: "Regenerative systems",
                    rewards: [
                        "25% of damage dealt within 3m restored to vitals",
                        "5/s additional vitals regeneration",
                        "Increased max vitals up to 200"
                    ]
                },
                {
                    level: 3,
                    pointsRequired: 1,
                    description: "Enhanced regeneration",
                    rewards: [
                        "5% increased speed per kill, stacks to 25%",
                        "10/s additional defense regeneration",
                        "50 vitals restored on Core activation"
                    ]
                }
            ]
        },
        {
            id: 'ghost',
            name: 'Ghost',
            description: 'Stealth-focused shell with tactical camouflage',
            category: 'Shells',
            sortOrder: 3,
            prerequisiteSkills: [],
            requirements: {
                body: 0,
                tech: 15,
                hardware: 0
            },
            levels: [
                {
                    level: 1,
                    pointsRequired: 1,
                    description: "Basic shell configuration",
                    rewards: [
                        "Unlocks Ghost shell"
                    ]
                },
                {
                    level: 2,
                    pointsRequired: 1,
                    description: "Basic stealth systems",
                    rewards: [
                        "Tactical Camouflage system",
                        "Undetectable by proximity devices",
                        "15% increased weapon proficiency",
                        "Scrambled radar profile"
                    ]
                },
                {
                    level: 3,
                    pointsRequired: 1,
                    description: "Advanced stealth capabilities",
                    rewards: [
                        "25% reduced loadout speed penalty while cloaked",
                        "Deep Camouflage when stationary",
                        "Surge AOE on decloak",
                        "Enhanced headshot damage after decloak"
                    ]
                }
            ]
        },
        {
            id: 'dragon',
            name: 'Dragon',
            description: 'Aerial combat shell with fire capabilities',
            category: 'Shells',
            sortOrder: 4,
            prerequisiteSkills: [],
            requirements: {
                body: 0,
                tech: 10,
                hardware: 10
            },
            levels: [
                {
                    level: 1,
                    pointsRequired: 1,
                    description: "Basic shell configuration",
                    rewards: [
                        "Unlocks Dragon shell"
                    ]
                },
                {
                    level: 2,
                    pointsRequired: 1,
                    description: "Jump-pack systems",
                    rewards: [
                        "Hover capabilities",
                        "Enhanced dodge and dive",
                        "Backdraft AOE on activation",
                        "50% increased fire resistance"
                    ]
                },
                {
                    level: 3,
                    pointsRequired: 1,
                    description: "Advanced aerial combat",
                    rewards: [
                        "Air Dash maneuver",
                        "Ground Slam capability",
                        "Improved fire resistance",
                        "Enhanced defense regeneration while hovering"
                    ]
                }
            ]
        },
        {
            id: 'rhino',
            name: 'Rhino',
            description: 'Heavy assault shell with superior defense',
            category: 'Shells',
            sortOrder: 5,
            prerequisiteSkills: [],
            requirements: {
                body: 15,
                tech: 0,
                hardware: 5
            },
            levels: [
                {
                    level: 1,
                    pointsRequired: 1,
                    description: "Basic shell configuration",
                    rewards: [
                        "Unlocks Rhino shell"
                    ]
                },
                {
                    level: 2,
                    pointsRequired: 1,
                    description: "Heavy defense systems",
                    rewards: [
                        "Increased knockdown resistance",
                        "Shockwave AOE on impact",
                        "50% increased explosive resistance"
                    ]
                },
                {
                    level: 3,
                    pointsRequired: 1,
                    description: "Enhanced defensive capabilities",
                    rewards: [
                        "Reduced loadout penalties",
                        "Damage reflection",
                        "Bolster while Core active",
                        "Improved defense regeneration"
                    ]
                }
            ]
        },
        // Core Augments
        {
            id: 'combat-core',
            name: 'Combat Core',
            description: 'Enhanced combat capabilities through Core system',
            category: 'Augments',
            sortOrder: 1,
            prerequisiteSkills: [],
            requirements: {
                body: 0,
                tech: 20,
                hardware: 0
            },
            levels: [
                {
                    level: 1,
                    pointsRequired: 1,
                    description: "Core enhancement",
                    rewards: [
                        "1% of damage dealt converted to Core duration",
                        "25% increased Core generation"
                    ]
                }
            ]
        },
        {
            id: 'reactive-core',
            name: 'Reactive Core',
            description: 'Automated Core response system',
            category: 'Augments',
            sortOrder: 2,
            prerequisiteSkills: ['combat-core'],
            requirements: {
                body: 0,
                tech: 15,
                hardware: 0
            },
            levels: [
                {
                    level: 1,
                    pointsRequired: 1,
                    description: "Core automation",
                    rewards: [
                        "Core automatically activates while affected by other Cores"
                    ]
                }
            ]
        },
        // Weapon Augments
        {
            id: 'heavy-weapons',
            name: 'Heavy Weapons',
            description: 'Access to heavy weapon systems',
            category: 'Augments',
            sortOrder: 1,
            prerequisiteSkills: [],
            requirements: {
                body: 15,
                tech: 5,
                hardware: 20
            },
            levels: [
                {
                    level: 1,
                    pointsRequired: 1,
                    description: "Heavy weapons proficiency",
                    rewards: [
                        "Can equip heavy weapons",
                        "Strafe maneuver with heavy weapons",
                        "Knockdown immunity with heavy weapons"
                    ]
                }
            ]
        },
        {
            id: 'technician',
            name: 'Technician',
            description: 'Advanced ammunition systems',
            category: 'Augments',
            sortOrder: 2,
            prerequisiteSkills: ['heavy-weapons'],
            requirements: {
                body: 0,
                tech: 15,
                hardware: 25
            },
            levels: [
                {
                    level: 1,
                    pointsRequired: 1,
                    description: "Exotic ammo access",
                    rewards: [
                        "Can equip exotic ammo types",
                        "15/s max defense regeneration with Nano-wire"
                    ]
                }
            ]
        },
        {
            id: 'acrobatics',
            name: 'Acrobatics',
            description: 'Enhanced mobility and aerial maneuvers',
            category: 'Augments',
            sortOrder: 1,
            prerequisiteSkills: [],
            requirements: {
                body: 25,
                tech: 0,
                hardware: 0
            },
            levels: [
                {
                    level: 1,
                    pointsRequired: 1,
                    description: "Advanced mobility",
                    rewards: [
                        "Additional aerial maneuver charge",
                        "Somersault maneuver: Aerial roll while jumping, falling or diving",
                        "50% reduced fall damage",
                        "15% increased climb speed",
                        "1 m/s increased jump speed"
                    ]
                }
            ]
        },
        {
            id: 'addict',
            name: 'Addict',
            description: 'Enhanced stimulant usage',
            category: 'Augments',
            sortOrder: 2,
            prerequisiteSkills: [],
            requirements: {
                body: 10,
                tech: 0,
                hardware: 0
            },
            levels: [
                {
                    level: 1,
                    pointsRequired: 1,
                    description: "Stimulant mastery",
                    rewards: [
                        "50% increased Stim use speed",
                        "35% reduced direct damage to vitals while hemostasis active",
                        "50% increased Core + Aux power regeneration while hemostasis active",
                        "15% increased ground speed while hemostasis active"
                    ]
                }
            ]
        },
        // Weapons
        {
            id: 'fists',
            name: 'Fists',
            description: 'Basic melee combat',
            category: 'Weapons',
            sortOrder: 1,
            prerequisiteSkills: [],
            requirements: {
                body: 0,
                tech: 0,
                hardware: 0
            },
            levels: [
                {
                    level: 1,
                    pointsRequired: 1,
                    description: "Basic melee combat",
                    rewards: [
                        "Basic melee attacks"
                    ]
                }
            ]
        },
        {
            id: 'throwingKnives',
            name: 'Throwing Knives',
            description: 'Ranged throwing weapons',
            category: 'Weapons',
            sortOrder: 2,
            prerequisiteSkills: [],
            requirements: {
                body: 5,
                tech: 0,
                hardware: 10
            },
            levels: [
                {
                    level: 1,
                    pointsRequired: 1,
                    description: "Throwing weapon proficiency",
                    rewards: [
                        "Can use throwing knives"
                    ]
                }
            ]
        },
        {
            id: 'sword',
            name: 'Sword',
            description: 'Advanced melee weapon',
            category: 'Weapons',
            sortOrder: 3,
            prerequisiteSkills: [],
            requirements: {
                body: 10,
                tech: 10,
                hardware: 5
            },
            levels: [
                {
                    level: 1,
                    pointsRequired: 1,
                    description: "Sword proficiency",
                    rewards: [
                        "Can use swords"
                    ]
                }
            ]
        },
        {
            id: 'augmentedFists',
            name: 'Augmented Fists',
            description: 'Enhanced melee combat',
            category: 'Weapons',
            sortOrder: 4,
            prerequisiteSkills: ['fists'],
            requirements: {
                body: 10,
                tech: 5,
                hardware: 5
            },
            levels: [
                {
                    level: 1,
                    pointsRequired: 1,
                    description: "Enhanced melee",
                    rewards: [
                        "Augmented melee attacks",
                        "Increased melee damage"
                    ]
                }
            ]
        },
        // Sidearms
        {
            id: 'pistol',
            name: 'Pistol',
            description: 'Basic sidearm',
            category: 'Weapons',
            sortOrder: 5,
            prerequisiteSkills: [],
            requirements: {
                body: 0,
                tech: 0,
                hardware: 0
            },
            levels: [
                {
                    level: 1,
                    pointsRequired: 1,
                    description: "Basic firearm",
                    rewards: [
                        "Can use pistols"
                    ]
                }
            ]
        },
        {
            id: 'revolver',
            name: 'Revolver',
            description: 'High-powered sidearm',
            category: 'Weapons',
            sortOrder: 6,
            prerequisiteSkills: ['pistol'],
            requirements: {
                body: 0,
                tech: 0,
                hardware: 15
            },
            levels: [
                {
                    level: 1,
                    pointsRequired: 1,
                    description: "Advanced sidearm",
                    rewards: [
                        "Can use revolvers"
                    ]
                }
            ]
        },
        {
            id: 'pdw',
            name: 'Personal Defense Weapon',
            description: 'Compact defensive weapon',
            category: 'Weapons',
            sortOrder: 7,
            prerequisiteSkills: [],
            requirements: {
                body: 0,
                tech: 0,
                hardware: 10
            },
            levels: [
                {
                    level: 1,
                    pointsRequired: 1,
                    description: "PDW proficiency",
                    rewards: [
                        "Can use PDWs"
                    ]
                }
            ]
        },
        {
            id: 'burstPistol',
            name: 'Burst Pistol',
            description: 'Burst-fire sidearm',
            category: 'Weapons',
            sortOrder: 8,
            prerequisiteSkills: [],
            requirements: {
                body: 0,
                tech: 5,
                hardware: 5
            },
            levels: [
                {
                    level: 1,
                    pointsRequired: 1,
                    description: "Burst pistol proficiency",
                    rewards: [
                        "Can use burst pistols"
                    ]
                }
            ]
        },
        {
            id: 'machinePistol',
            name: 'Machine Pistol',
            description: 'Automatic sidearm',
            category: 'Weapons',
            sortOrder: 9,
            prerequisiteSkills: [],
            requirements: {
                body: 0,
                tech: 0,
                hardware: 5
            },
            levels: [
                {
                    level: 1,
                    pointsRequired: 1,
                    description: "Machine pistol proficiency",
                    rewards: [
                        "Can use machine pistols"
                    ]
                }
            ]
        },
        // Shotguns
        {
            id: 'sawnOff',
            name: 'Short Shotgun',
            description: 'Compact shotgun',
            category: 'Weapons',
            sortOrder: 10,
            prerequisiteSkills: [],
            requirements: {
                body: 5,
                tech: 0,
                hardware: 5
            },
            levels: [
                {
                    level: 1,
                    pointsRequired: 1,
                    description: "Short shotgun proficiency",
                    rewards: [
                        "Can use short shotguns"
                    ]
                }
            ]
        },
        {
            id: 'shotgun',
            name: 'Shotgun',
            description: 'Standard shotgun',
            category: 'Weapons',
            sortOrder: 11,
            prerequisiteSkills: [],
            requirements: {
                body: 0,
                tech: 0,
                hardware: 10
            },
            levels: [
                {
                    level: 1,
                    pointsRequired: 1,
                    description: "Shotgun proficiency",
                    rewards: [
                        "Can use shotguns"
                    ]
                }
            ]
        },
        {
            id: 'autoShotgun',
            name: 'Auto Shotgun',
            description: 'Automatic shotgun',
            category: 'Weapons',
            sortOrder: 12,
            prerequisiteSkills: [],
            requirements: {
                body: 10,
                tech: 5,
                hardware: 15
            },
            levels: [
                {
                    level: 1,
                    pointsRequired: 1,
                    description: "Auto shotgun proficiency",
                    rewards: [
                        "Can use automatic shotguns"
                    ]
                }
            ]
        },
        // SMGs and Rifles
        {
            id: 'smg',
            name: 'Submachine Gun',
            description: 'Close-range automatic weapon',
            category: 'Weapons',
            sortOrder: 13,
            prerequisiteSkills: [],
            requirements: {
                body: 0,
                tech: 0,
                hardware: 10
            },
            levels: [
                {
                    level: 1,
                    pointsRequired: 1,
                    description: "SMG proficiency",
                    rewards: [
                        "Can use submachine guns"
                    ]
                }
            ]
        },
        {
            id: 'assaultRifle',
            name: 'Assault Rifle',
            description: 'Versatile automatic rifle',
            category: 'Weapons',
            sortOrder: 14,
            prerequisiteSkills: [],
            requirements: {
                body: 0,
                tech: 0,
                hardware: 15
            },
            levels: [
                {
                    level: 1,
                    pointsRequired: 1,
                    description: "Assault rifle proficiency",
                    rewards: [
                        "Can use assault rifles"
                    ]
                }
            ]
        },
        {
            id: 'lmg',
            name: 'Light Machine Gun',
            description: 'Heavy automatic weapon',
            category: 'Weapons',
            sortOrder: 15,
            prerequisiteSkills: [],
            requirements: {
                body: 10,
                tech: 0,
                hardware: 15
            },
            levels: [
                {
                    level: 1,
                    pointsRequired: 1,
                    description: "LMG proficiency",
                    rewards: [
                        "Can use light machine guns"
                    ]
                }
            ]
        },
        // Precision Weapons
        {
            id: 'boltActionRifle',
            name: 'Bolt Action Rifle',
            description: 'High-powered precision rifle',
            category: 'Weapons',
            sortOrder: 16,
            prerequisiteSkills: [],
            requirements: {
                body: 5,
                tech: 0,
                hardware: 20
            },
            levels: [
                {
                    level: 1,
                    pointsRequired: 1,
                    description: "Bolt action rifle proficiency",
                    rewards: [
                        "Can use bolt action rifles"
                    ]
                }
            ]
        },
        {
            id: 'dmr',
            name: 'Marksman Rifle',
            description: 'Semi-automatic precision rifle',
            category: 'Weapons',
            sortOrder: 17,
            prerequisiteSkills: [],
            requirements: {
                body: 0,
                tech: 0,
                hardware: 15
            },
            levels: [
                {
                    level: 1,
                    pointsRequired: 1,
                    description: "DMR proficiency",
                    rewards: [
                        "Can use marksman rifles"
                    ]
                }
            ]
        },
        {
            id: 'burstRifle',
            name: 'Burst Rifle',
            description: 'Burst-fire rifle',
            category: 'Weapons',
            sortOrder: 18,
            prerequisiteSkills: [],
            requirements: {
                body: 0,
                tech: 5,
                hardware: 10
            },
            levels: [
                {
                    level: 1,
                    pointsRequired: 1,
                    description: "Burst rifle proficiency",
                    rewards: [
                        "Can use burst rifles"
                    ]
                }
            ]
        },
        {
            id: 'battleRifle',
            name: 'Battle Rifle',
            description: 'High-caliber combat rifle',
            category: 'Weapons',
            sortOrder: 19,
            prerequisiteSkills: [],
            requirements: {
                body: 0,
                tech: 0,
                hardware: 15
            },
            levels: [
                {
                    level: 1,
                    pointsRequired: 1,
                    description: "Battle rifle proficiency",
                    rewards: [
                        "Can use battle rifles"
                    ]
                }
            ]
        },
        // Heavy Weapons
        {
            id: 'grenadeLauncher',
            name: 'Grenade Launcher',
            description: 'Explosive projectile launcher',
            category: 'Weapons',
            sortOrder: 20,
            prerequisiteSkills: [],
            requirements: {
                body: 10,
                tech: 10,
                hardware: 20
            },
            levels: [
                {
                    level: 1,
                    pointsRequired: 1,
                    description: "Grenade launcher proficiency",
                    rewards: [
                        "Can use grenade launchers"
                    ]
                }
            ]
        },
        {
            id: 'rocketLauncher',
            name: 'Rocket Launcher',
            description: 'Heavy explosive weapon',
            category: 'Weapons',
            sortOrder: 21,
            prerequisiteSkills: ['heavyWeapons'],
            requirements: {
                body: 20,
                tech: 5,
                hardware: 20
            },
            levels: [
                {
                    level: 1,
                    pointsRequired: 1,
                    description: "Rocket launcher proficiency",
                    rewards: [
                        "Can use rocket launchers"
                    ]
                }
            ]
        },
        {
            id: 'minigun',
            name: 'Heavy Support Weapon',
            description: 'High-rate-of-fire heavy weapon',
            category: 'Weapons',
            sortOrder: 22,
            prerequisiteSkills: ['heavyWeapons'],
            requirements: {
                body: 15,
                tech: 5,
                hardware: 20
            },
            levels: [
                {
                    level: 1,
                    pointsRequired: 1,
                    description: "Minigun proficiency",
                    rewards: [
                        "Can use miniguns"
                    ]
                }
            ]
        },
        {
            id: 'amr',
            name: 'Anti-Materiel Rifle',
            description: 'Heavy sniper rifle',
            category: 'Weapons',
            sortOrder: 23,
            prerequisiteSkills: ['heavyWeapons'],
            requirements: {
                body: 15,
                tech: 10,
                hardware: 25
            },
            levels: [
                {
                    level: 1,
                    pointsRequired: 1,
                    description: "AMR proficiency",
                    rewards: [
                        "Can use anti-materiel rifles"
                    ]
                }
            ]
        },
        {
            id: 'heavyLaser',
            name: 'Heavy Laser Weapon',
            description: 'Advanced energy weapon',
            category: 'Weapons',
            sortOrder: 24,
            prerequisiteSkills: ['heavyWeapons'],
            requirements: {
                body: 15,
                tech: 25,
                hardware: 20
            },
            levels: [
                {
                    level: 1,
                    pointsRequired: 1,
                    description: "Heavy laser proficiency",
                    rewards: [
                        "Can use heavy laser weapons"
                    ]
                }
            ]
        },
        // Core Augments
        {
            id: 'adrenalineRush',
            name: 'Adrenaline Rush',
            description: 'Combat performance enhancement',
            category: 'Augments',
            sortOrder: 3,
            prerequisiteSkills: [],
            requirements: {
                body: 15,
                tech: 10,
                hardware: 0
            },
            levels: [
                {
                    level: 1,
                    pointsRequired: 1,
                    description: "Combat enhancement",
                    rewards: [
                        "25-75 vitals restored on visible kill, scaling with Core charge",
                        "0-15% increased ground speed + dexterity, scaling with Core charge"
                    ]
                }
            ]
        },
        {
            id: 'advancedRecon',
            name: 'Advanced Recon',
            description: 'Enhanced detection capabilities',
            category: 'Augments',
            sortOrder: 4,
            prerequisiteSkills: [],
            requirements: {
                body: 0,
                tech: 5,
                hardware: 10
            },
            levels: [
                {
                    level: 1,
                    pointsRequired: 1,
                    description: "Enhanced detection",
                    rewards: [
                        "25% increased radar + detection range",
                        "Stationary enemies within range are visible on radar",
                        "Detected enemies are visible on radar"
                    ]
                }
            ]
        },
        // Devices
   {
            id: 'aapTurret',
            name: 'AAP Turret',
            description: 'Automated defense turret',
            category: 'Devices',
            sortOrder: 1,
            prerequisiteSkills: ['experimental'],
            requirements: {
                body: 0,
                tech: 20,
                hardware: 20
            },
            levels: [
                {
                    level: 1,
                    pointsRequired: 1,
                    description: "Automated turret system",
                    rewards: [
                        "Engages closest visible enemy within 25m",
                        "Deals 25-15 ballistic damage, 600 rpm, 50 round capacity",
                        "Can attach to surfaces and Shells"
                    ]
                }
            ]
        },
        // Combat Devices
        {
            id: 'bolster',
            name: 'Bolster',
            description: 'Defensive enhancement device',
            category: 'Devices',
            sortOrder: 2,
            prerequisiteSkills: [],
            requirements: {
                body: 15,
                tech: 15,
                hardware: 20
            },
            levels: [
                {
                    level: 1,
                    pointsRequired: 1,
                    description: "Defense enhancement",
                    rewards: [
                        "Bleed, knockdown and defense penetration immunity",
                        "30/s improved defense regeneration",
                        "40% reduced speed and vitals restored while active"
                    ]
                }
            ]
        },
        {
            id: 'breach',
            name: 'Breach',
            description: 'System disruption device',
            category: 'Devices',
            sortOrder: 3,
            prerequisiteSkills: ['experimental'],
            requirements: {
                body: 0,
                tech: 25,
                hardware: 15
            },
            levels: [
                {
                    level: 1,
                    pointsRequired: 1,
                    description: "System breach",
                    rewards: [
                        "Deals 25 vital damage and 2s disable + snare",
                        "Executes targets below 25% vitals",
                        "Destroys visible or detected devices"
                    ]
                }
            ]
        },
        {
            id: 'deadzone',
            name: 'Deadzone',
            description: 'Area denial device',
            category: 'Devices',
            sortOrder: 4,
            prerequisiteSkills: ['experimental'],
            requirements: {
                body: 0,
                tech: 20,
                hardware: 15
            },
            levels: [
                {
                    level: 1,
                    pointsRequired: 1,
                    description: "Disruptive field",
                    rewards: [
                        "Creates 16m disruptive field",
                        "Disables and snares enemies and devices in field",
                        "Provides Shroud to allies in field"
                    ]
                }
            ]
        },
        // Explosive Devices
        {
            id: 'detonator',
            name: 'Detonator',
            description: 'Explosive device',
            category: 'Devices',
            sortOrder: 5,
            prerequisiteSkills: [],
            requirements: {
                body: 0,
                tech: 0,
                hardware: 5
            },
            levels: [
                {
                    level: 1,
                    pointsRequired: 1,
                    description: "Explosive charge",
                    rewards: [
                        "Deals 125-75 explosive damage",
                        "Knockback to targets within 2-4m"
                    ]
                }
            ]
        },
        {
            id: 'disrupter',
            name: 'Disrupter',
            description: 'Electronic warfare device',
            category: 'Devices',
            sortOrder: 6,
            prerequisiteSkills: [],
            requirements: {
                body: 0,
                tech: 5,
                hardware: 5
            },
            levels: [
                {
                    level: 1,
                    pointsRequired: 1,
                    description: "Disruption field",
                    rewards: [
                        "4s stun, disable and snare to targets within 6m",
                        "Can attach to surfaces and Shells"
                    ]
                }
            ]
        },
        {
            id: 'firecracker',
            name: 'Firecracker',
            description: 'Incendiary device',
            category: 'Devices',
            sortOrder: 7,
            prerequisiteSkills: [],
            requirements: {
                body: 0,
                tech: 0,
                hardware: 10
            },
            levels: [
                {
                    level: 1,
                    pointsRequired: 1,
                    description: "Incendiary explosive",
                    rewards: [
                        "Deals 25-15 explosive + 50-30 fire damage",
                        "Launches 10 incendiary projectiles",
                        "Projectiles ignite surfaces and deal additional damage"
                    ]
                }
            ]
        },
        {
            id: 'laserWire',
            name: 'Laser Wire',
            description: 'Energy trap device',
            category: 'Devices',
            sortOrder: 8,
            prerequisiteSkills: [],
            requirements: {
                body: 0,
                tech: 10,
                hardware: 5
            },
            levels: [
                {
                    level: 1,
                    pointsRequired: 1,
                    description: "Energy trap",
                    rewards: [
                        "Deals 75 vital damage",
                        "20/s bleed + 4s snare",
                        "2 charges, can attach to surfaces"
                    ]
                }
            ]
        },
        {
            id: 'overcharge',
            name: 'Overcharge',
            description: 'System enhancement device',
            category: 'Devices',
            sortOrder: 9,
            prerequisiteSkills: [],
            requirements: {
                body: 10,
                tech: 15,
                hardware: 10
            },
            levels: [
                {
                    level: 1,
                    pointsRequired: 1,
                    description: "System overcharge",
                    rewards: [
                        "Disable immunity while active",
                        "15% increased ground speed",
                        "Disables enemies and devices within 4m"
                    ]
                }
            ]
        },
        {
            id: 'proximityMine',
            name: 'Proximity Mine',
            description: 'Proximity explosive device',
            category: 'Devices',
            sortOrder: 10,
            prerequisiteSkills: [],
            requirements: {
                body: 0,
                tech: 5,
                hardware: 10
            },
            levels: [
                {
                    level: 1,
                    pointsRequired: 1,
                    description: "Proximity explosive",
                    rewards: [
                        "Deals 150-75 explosive damage",
                        "Knockback and knockdown within 2-5m",
                        "Can attach to surfaces and Shells"
                    ]
                }
            ]
        },
        {
            id: 'relocator',
            name: 'Relocator',
            description: 'Teleportation device',
            category: 'Devices',
            sortOrder: 11,
            prerequisiteSkills: ['experimental'],
            requirements: {
                body: 0,
                tech: 20,
                hardware: 15
            },
            levels: [
                {
                    level: 1,
                    pointsRequired: 1,
                    description: "Teleportation system",
                    rewards: [
                        "Relocate to device location",
                        "Telefrag targets within 1m",
                        "Can attach to surfaces and Shells"
                    ]
                }
            ]
        },
        {
            id: 'reserveStim',
            name: 'Reserve Stim',
            description: 'Emergency medical device',
            category: 'Devices',
            sortOrder: 12,
            prerequisiteSkills: [],
            requirements: {
                body: 15,
                tech: 0,
                hardware: 20
            },
            levels: [
                {
                    level: 1,
                    pointsRequired: 1,
                    description: "Emergency healing",
                    rewards: [
                        "25 vitals restored",
                        "Hemostasis for 2.5s"
                    ]
                }
            ]
        },
        {
            id: 'satchelCharge',
            name: 'Satchel Charge',
            description: 'Placed explosive device',
            category: 'Devices',
            sortOrder: 13,
            prerequisiteSkills: [],
            requirements: {
                body: 10,
                tech: 5,
                hardware: 10
            },
            levels: [
                {
                    level: 1,
                    pointsRequired: 1,
                    description: "Explosive charge",
                    rewards: [
                        "Deals 150-75 explosive damage",
                        "Knockback and knockdown within 2-5m",
                        "Can attach to surfaces and Shells"
                    ]
                }
            ]
        },
        {
            id: 'shroud',
            name: 'Shroud',
            description: 'Stealth device',
            category: 'Devices',
            sortOrder: 14,
            prerequisiteSkills: [],
            requirements: {
                body: 10,
                tech: 10,
                hardware: 15
            },
            levels: [
                {
                    level: 1,
                    pointsRequired: 1,
                    description: "Stealth system",
                    rewards: [
                        "Undetectable by all equipment while active"
                    ]
                }
            ]
        },
        {
            id: 'tempest',
            name: 'Tempest',
            description: 'Nano-particle cloud device',
            category: 'Devices',
            sortOrder: 15,
            prerequisiteSkills: [],
            requirements: {
                body: 0,
                tech: 10,
                hardware: 15
            },
            levels: [
                {
                    level: 1,
                    pointsRequired: 1,
                    description: "Nano-particle deployment",
                    rewards: [
                        "Creates 7m charged nano-particle cloud",
                        "Launches 6 additional 3.5m clouds",
                        "Detects and snares enemies, provides Overcharge to allies",
                        "Can be cleared with fire"
                    ]
                }
            ]
        },
        // Attachments
        {
            id: 'standardAmmo',
            name: 'Standard Ammo',
            description: 'Basic ammunition',
            category: 'Attachments',
            sortOrder: 1,
            prerequisiteSkills: [],
            requirements: {
                body: 0,
                tech: 0,
                hardware: 0
            },
            levels: [
                {
                    level: 1,
                    pointsRequired: 1,
                    description: "Standard ammunition",
                    rewards: [
                        "Basic ammunition type"
                    ]
                }
            ]
        },
        {
            id: 'piercingAmmo',
            name: 'Piercing Ammo',
            description: 'Armor-piercing ammunition',
            category: 'Attachments',
            sortOrder: 2,
            prerequisiteSkills: [],
            requirements: {
                body: 0,
                tech: 0,
                hardware: 15
            },
            levels: [
                {
                    level: 1,
                    pointsRequired: 1,
                    description: "Piercing ammunition",
                    rewards: [
                        "50% increased environment penetration",
                        "25% of damage dealt penetrates defense",
                        "25% increased velocity",
                        "25% reduced damage to penetration immune enemies"
                    ]
                }
            ]
        },
        {
            id: 'heavyAmmo',
            name: 'Heavy Ammo',
            description: 'High-impact ammunition',
            category: 'Attachments',
            sortOrder: 3,
            prerequisiteSkills: [],
            requirements: {
                body: 0,
                tech: 0,
                hardware: 10
            },
            levels: [
                {
                    level: 1,
                    pointsRequired: 1,
                    description: "Heavy ammunition",
                    rewards: [
                        "0.5-2s snare scaling with damage",
                        "100% increased near damage range",
                        "15% reduced velocity"
                    ]
                }
            ]
        },
        // Special Attachments
        {
            id: 'laserSight',
            name: 'Laser Sight',
            description: 'Precision aiming attachment',
            category: 'Attachments',
            sortOrder: 4,
            prerequisiteSkills: [],
            requirements: {
                body: 0,
                tech: 5,
                hardware: 10
            },
            levels: [
                {
                    level: 1,
                    pointsRequired: 1,
                    description: "Laser targeting",
                    rewards: [
                        "50% reduced hipfire spread",
                        "Visible laser indicator"
                    ]
                }
            ]
        },
        {
            id: 'suppressor',
            name: 'Suppressor',
            description: 'Sound suppression attachment',
            category: 'Attachments',
            sortOrder: 5,
            prerequisiteSkills: [],
            requirements: {
                body: 0,
                tech: 0,
                hardware: 5
            },
            levels: [
                {
                    level: 1,
                    pointsRequired: 1,
                    description: "Sound suppression",
                    rewards: [
                        "Removes radar profile from firing",
                        "Tracers no longer visible to enemies",
                        "50% reduced vertical recoil",
                        "25% reduced horizontal recoil",
                        "15% reduced velocity"
                    ]
                }
            ]
        },
        {
            id: 'foregrip',
            name: 'Foregrip',
            description: 'Stability enhancement',
            category: 'Attachments',
            sortOrder: 6,
            prerequisiteSkills: [],
            requirements: {
                body: 0,
                tech: 0,
                hardware: 5
            },
            levels: [
                {
                    level: 1,
                    pointsRequired: 1,
                    description: "Improved stability",
                    rewards: [
                        "50% reduced horizontal recoil",
                        "25% reduced aim time",
                        "0.15 m/s increased speed penalty"
                    ]
                }
            ]
        },
        {
            id: 'ghostfireAmmo',
            name: 'Ghostfire Ammo',
            description: 'Advanced phase ammunition',
            category: 'Attachments',
            sortOrder: 7,
            prerequisiteSkills: ['technician'],
            requirements: {
                body: 0,
                tech: 20,
                hardware: 25
            },
            levels: [
                {
                    level: 1,
                    pointsRequired: 1,
                    description: "Phase ammunition",
                    rewards: [
                        "100% defense bypass",
                        "100% increased ricochets",
                        "100% reduced damage to self + allies",
                        "50% reduced damage",
                        "25% reduced headshot multiplier"
                    ]
                }
            ]
        },
        {
            id: 'adaptiveChoke',
            name: 'Adaptive Choke',
            description: 'Advanced spread control',
            category: 'Attachments',
            sortOrder: 8,
            prerequisiteSkills: [],
            requirements: {
                body: 0,
                tech: 5,
                hardware: 10
            },
            levels: [
                {
                    level: 1,
                    pointsRequired: 1,
                    description: "Spread control",
                    rewards: [
                        "50% reduced pellet spread while ADS",
                        "25% increased aim time"
                    ]
                }
            ]
        },
        {
            id: 'shredAmmo',
            name: 'Shred Ammo',
            description: 'Enhanced bleed ammunition',
            category: 'Attachments',
            sortOrder: 9,
            prerequisiteSkills: [],
            requirements: {
                body: 0,
                tech: 0,
                hardware: 15
            },
            levels: [
                {
                    level: 1,
                    pointsRequired: 1,
                    description: "Shred ammunition",
                    rewards: [
                        "50% increased bleed damage",
                        "15% increased limb damage",
                        "25% reduced environment penetration"
                    ]
                }
            ]
        },
        {
            id: 'tdAmmo',
            name: 'TD Ammo',
            description: 'Time dilation ammunition',
            category: 'Attachments',
            sortOrder: 10,
            prerequisiteSkills: [],
            requirements: {
                body: 0,
                tech: 5,
                hardware: 10
            },
            levels: [
                {
                    level: 1,
                    pointsRequired: 1,
                    description: "Time dilation ammo",
                    rewards: [
                        "Unaffected by Core slowing effects",
                        "15% increased damage during active Core",
                        "15% increased Core generation",
                        "25% reduced far damage range"
                    ]
                }
            ]
        },
        {
            id: 'cbAmmo',
            name: 'CB Ammo',
            description: 'Cerebral ammunition',
            category: 'Attachments',
            sortOrder: 11,
            prerequisiteSkills: ['technician'],
            requirements: {
                body: 0,
                tech: 15,
                hardware: 25
            },
            levels: [
                {
                    level: 1,
                    pointsRequired: 1,
                    description: "Cerebral ammunition",
                    rewards: [
                        "50% of headshot damage dealt as additional vital damage after 1s",
                        "15% reduced velocity"
                    ]
                }
            ]
        },
        {
            id: 'chemAmmo',
            name: 'Chem Ammo',
            description: 'Chemical ammunition',
            category: 'Attachments',
            sortOrder: 12,
            prerequisiteSkills: ['technician'],
            requirements: {
                body: 0,
                tech: 15,
                hardware: 25
            },
            levels: [
                {
                    level: 1,
                    pointsRequired: 1,
                    description: "Chemical ammunition",
                    rewards: [
                        "2s corrode to enemies",
                        "15% of damage dealt penetrates defense",
                        "25% of damage dealt reduces enemy max vitals + defense",
                        "15% reduced damage to penetration immune enemies",
                        "50% reduced bleed damage"
                    ]
                }
            ]
        },
        {
            id: 'emAmmo',
            name: 'EM Ammo',
            description: 'Electromagnetic ammunition',
            category: 'Attachments',
            sortOrder: 13,
            prerequisiteSkills: ['technician'],
            requirements: {
                body: 0,
                tech: 20,
                hardware: 25
            },
            levels: [
                {
                    level: 1,
                    pointsRequired: 1,
                    description: "EM ammunition",
                    rewards: [
                        "0.25-4s disable to enemies, scaling with damage",
                        "25% increased damage to stunned enemies",
                        "15% reduced damage",
                        "50% reduced bleed damage"
                    ]
                }
            ]
        },
        {
            id: 'incendiaryAmmo',
            name: 'Incendiary Ammo',
            description: 'Fire-based ammunition',
            category: 'Attachments',
            sortOrder: 14,
            prerequisiteSkills: ['technician'],
            requirements: {
                body: 0,
                tech: 20,
                hardware: 25
            },
            levels: [
                {
                    level: 1,
                    pointsRequired: 1,
                    description: "Incendiary ammunition",
                    rewards: [
                        "25% of damage dealt as additional fire damage",
                        "25% reduced damage",
                        "100% reduced bleed damage"
                    ]
                }
            ]
        },
        {
            id: 'targetPainter',
            name: 'Target Painter',
            description: 'Target marking system',
            category: 'Attachments',
            sortOrder: 15,
            prerequisiteSkills: [],
            requirements: {
                body: 0,
                tech: 25,
                hardware: 15
            },
            levels: [
                {
                    level: 1,
                    pointsRequired: 1,
                    description: "Target painting",
                    rewards: [
                        "Paints visible enemies while aiming",
                        "Unable to ADS",
                        "25% increased aim time",
                        "25% increased spread"
                    ]
                }
            ]
        },
        {
            id: 'tLockAmmo',
            name: 'T-Lock Ammo',
            description: 'Target-locking ammunition',
            category: 'Attachments',
            sortOrder: 16,
            prerequisiteSkills: ['technician'],
            requirements: {
                body: 0,
                tech: 25,
                hardware: 25
            },
            levels: [
                {
                    level: 1,
                    pointsRequired: 1,
                    description: "Target-locking ammunition",
                    rewards: [
                        "Can lock onto + track painted enemies",
                        "100% of damage dealt as additional explosive damage after 1s of not dealing damage",
                        "25% reduced recoil",
                        "75% reduced damage",
                        "50% reduced environment penetration",
                        "90% reduced velocity with lock, 65% without"
                    ]
                }
            ]
        },
        {
            id: 'standardGrenade',
            name: 'Standard Grenade',
            description: 'Basic explosive device',
            category: 'Attachments',
            sortOrder: 17,
            prerequisiteSkills: [],
            requirements: {
                body: 0,
                tech: 0,
                hardware: 0
            },
            levels: [
                {
                    level: 1,
                    pointsRequired: 1,
                    description: "Standard grenade",
                    rewards: [
                        "Standard grenade",
                        "Can knockback"
                    ]
                }
            ]
        },
        {
            id: 'impactGrenade',
            name: 'Impact Grenade',
            description: 'Contact detonation grenade',
            category: 'Attachments',
            sortOrder: 18,
            prerequisiteSkills: [],
            requirements: {
                body: 10,
                tech: 15,
                hardware: 20
            },
            levels: [
                {
                    level: 1,
                    pointsRequired: 1,
                    description: "Impact grenade",
                    rewards: [
                        "Detonates on impact",
                        "50% reduced damage",
                        "25% reduced far damage range"
                    ]
                }
            ]
        },
        {
            id: 'incendiaryGrenade',
            name: 'Incendiary Grenade',
            description: 'Fire-based explosive',
            category: 'Attachments',
            sortOrder: 19,
            prerequisiteSkills: [],
            requirements: {
                body: 10,
                tech: 15,
                hardware: 20
            },
            levels: [
                {
                    level: 1,
                    pointsRequired: 1,
                    description: "Incendiary grenade",
                    rewards: [
                        "Detonates on impact",
                        "Ignites surfaces",
                        "100% of damage dealt as additional fire damage",
                        "75% reduced damage",
                        "25% reduced far damage range"
                    ]
                }
            ]
        },
        {
            id: 'proximityGrenade',
            name: 'Proximity Grenade',
            description: 'Proximity-triggered explosive',
            category: 'Attachments',
            sortOrder: 20,
            prerequisiteSkills: [],
            requirements: {
                body: 10,
                tech: 20,
                hardware: 20
            },
            levels: [
                {
                    level: 1,
                    pointsRequired: 1,
                    description: "Proximity grenade",
                    rewards: [
                        "Proximity detection",
                        "Can attach to surfaces + Shells",
                        "25% reduced damage",
                        "Can be disabled"
                    ]
                }
            ]
        },
        {
            id: 'secureGrip',
            name: 'Secure Grip',
            description: 'Enhanced weapon grip',
            category: 'Attachments',
            sortOrder: 21,
            prerequisiteSkills: [],
            requirements: {
                body: 0,
                tech: 0,
                hardware: 5
            },
            levels: [
                {
                    level: 1,
                    pointsRequired: 1,
                    description: "Secure grip",
                    rewards: [
                        "Disarm immunity",
                        "25% reduced spread gain",
                        "15% increased aim time"
                    ]
                }
            ]
        },
        {
            id: 'tacticalForegrip',
            name: 'Tactical Foregrip',
            description: 'Enhanced weapon handling',
            category: 'Attachments',
            sortOrder: 22,
            prerequisiteSkills: [],
            requirements: {
                body: 0,
                tech: 0,
                hardware: 10
            },
            levels: [
                {
                    level: 1,
                    pointsRequired: 1,
                    description: "Tactical grip",
                    rewards: [
                        "25% increased rechamber speed",
                        "0.15 m/s increased speed penalty"
                    ]
                }
            ]
        },
        {
            id: 'autoBolt',
            name: 'Auto-Bolt',
            description: 'Automated bolt system',
            category: 'Attachments',
            sortOrder: 23,
            prerequisiteSkills: [],
            requirements: {
                body: 0,
                tech: 10,
                hardware: 10
            },
            levels: [
                {
                    level: 1,
                    pointsRequired: 1,
                    description: "Auto bolt",
                    rewards: [
                        "25% increased rechamber speed",
                        "15% increased aim time"
                    ]
                }
            ]
        },
        {
            id: 'heavyBarrel',
            name: 'Heavy Barrel',
            description: 'Enhanced barrel stability',
            category: 'Attachments',
            sortOrder: 24,
            prerequisiteSkills: [],
            requirements: {
                body: 0,
                tech: 0,
                hardware: 5
            },
            levels: [
                {
                    level: 1,
                    pointsRequired: 1,
                    description: "Heavy barrel",
                    rewards: [
                        "25% reduced vertical recoil",
                        "50% reduced spread gain",
                        "15% increased aim time"
                    ]
                }
            ]
        },
        {
            id: 'longBarrel',
            name: 'Long Barrel',
            description: 'Extended barrel length',
            category: 'Attachments',
            sortOrder: 25,
            prerequisiteSkills: [],
            requirements: {
                body: 0,
                tech: 0,
                hardware: 10
            },
            levels: [
                {
                    level: 1,
                    pointsRequired: 1,
                    description: "Long barrel",
                    rewards: [
                        "50% increased velocity",
                        "25% reduced pellet spread",
                        "25% increased aim time",
                        "25% increased hipfire spread"
                    ]
                }
            ]
        },
        {
            id: 'highCapacity',
            name: 'High Capacity',
            description: 'Increased ammunition capacity',
            category: 'Attachments',
            sortOrder: 26,
            prerequisiteSkills: [],
            requirements: {
                body: 0,
                tech: 0,
                hardware: 10
            },
            levels: [
                {
                    level: 1,
                    pointsRequired: 1,
                    description: "High capacity",
                    rewards: [
                        "Increased ammo capacity",
                        "15% reduced reload speed"
                    ]
                }
            ]
        },
        {
            id: 'externalMag',
            name: 'External Mag',
            description: 'External magazine system',
            category: 'Attachments',
            sortOrder: 27,
            prerequisiteSkills: [],
            requirements: {
                body: 0,
                tech: 0,
                hardware: 5
            },
            levels: [
                {
                    level: 1,
                    pointsRequired: 1,
                    description: "External magazine",
                    rewards: [
                        "Converts to magazine reload",
                        "25% increased ammo capacity",
                        "15% increased aim time"
                    ]
                }
            ]
        },
        {
            id: 'speedLoader',
            name: 'Speed Loader',
            description: 'Enhanced reload speed',
            category: 'Attachments',
            sortOrder: 28,
            prerequisiteSkills: [],
            requirements: {
                body: 0,
                tech: 5,
                hardware: 5
            },
            levels: [
                {
                    level: 1,
                    pointsRequired: 1,
                    description: "Speed loader",
                    rewards: [
                        "50% increased reload speed"
                    ]
                }
            ]
        },
        {
            id: 'ironSights',
            name: 'Iron Sights',
            description: 'Basic weapon sights',
            category: 'Attachments',
            sortOrder: 29,
            prerequisiteSkills: [],
            requirements: {
                body: 0,
                tech: 0,
                hardware: 0
            },
            levels: [
                {
                    level: 1,
                    pointsRequired: 1,
                    description: "Iron sights",
                    rewards: [
                        "Iron sights"
                    ]
                }
            ]
        },
        {
            id: 'marksmanSight',
            name: 'Marksman Sight',
            description: 'Precision aiming sight',
            category: 'Attachments',
            sortOrder: 30,
            prerequisiteSkills: [],
            requirements: {
                body: 0,
                tech: 0,
                hardware: 0
            },
            levels: [
                {
                    level: 1,
                    pointsRequired: 1,
                    description: "Marksman sight",
                    rewards: [
                        "100% reduced aim spread"
                    ]
                }
            ]
        },
        {
            id: 'reflexSight',
            name: 'Reflex Sight',
            description: 'Quick target acquisition sight',
            category: 'Attachments',
            sortOrder: 31,
            prerequisiteSkills: [],
            requirements: {
                body: 0,
                tech: 5,
                hardware: 5
            },
            levels: [
                {
                    level: 1,
                    pointsRequired: 1,
                    description: "Reflex sight",
                    rewards: [
                        "15% reduced aim spread"
                    ]
                }
            ]
        },
        {
            id: '2xSight',
            name: '2x Sight',
            description: '2x magnification optic',
            category: 'Attachments',
            sortOrder: 32,
            prerequisiteSkills: [],
            requirements: {
                body: 0,
                tech: 5,
                hardware: 5
            },
            levels: [
                {
                    level: 1,
                    pointsRequired: 1,
                    description: "2x sight",
                    rewards: [
                        "25% reduced aim spread"
                    ]
                }
            ]
        },
        {
            id: '3xSight',
            name: '3x Sight',
            description: '3x magnification optic',
            category: 'Attachments',
            sortOrder: 33,
            prerequisiteSkills: [],
            requirements: {
                body: 0,
                tech: 5,
                hardware: 5
            },
            levels: [
                {
                    level: 1,
                    pointsRequired: 1,
                    description: "3x sight",
                    rewards: [
                        "50% reduced aim spread"
                    ]
                }
            ]
        },
        {
            id: '4xSight',
            name: '4x Sight',
            description: '4x magnification optic',
            category: 'Attachments',
            sortOrder: 34,
            prerequisiteSkills: [],
            requirements: {
                body: 0,
                tech: 5,
                hardware: 5
            },
            levels: [
                {
                    level: 1,
                    pointsRequired: 1,
                    description: "4x sight",
                    rewards: [
                        "75% reduced aim spread"
                    ]
                }
            ]
        },
        {
            id: '2xTRGSight',
            name: '2x TRG Sight',
            description: '2x tactical ranging sight',
            category: 'Attachments',
            sortOrder: 35,
            prerequisiteSkills: [],
            requirements: {
                body: 0,
                tech: 10,
                hardware: 10
            },
            levels: [
                {
                    level: 1,
                    pointsRequired: 1,
                    description: "2x TRG sight",
                    rewards: [
                        "25% reduced aim spread",
                        "25% increased aim time"
                    ]
                }
            ]
        },
        {
            id: '4xTRGSight',
            name: '4x TRG Sight',
            description: '4x tactical ranging sight',
            category: 'Attachments',
            sortOrder: 36,
            prerequisiteSkills: [],
            requirements: {
                body: 0,
                tech: 10,
                hardware: 10
            },
            levels: [
                {
                    level: 1,
                    pointsRequired: 1,
                    description: "4x TRG sight",
                    rewards: [
                        "75% reduced aim spread",
                        "25% increased aim time"
                    ]
                }
            ]
        },
        {
            id: 'lightTrigger',
            name: 'Light Trigger',
            description: 'Enhanced trigger mechanism',
            category: 'Attachments',
            sortOrder: 37,
            prerequisiteSkills: [],
            requirements: {
                body: 0,
                tech: 0,
                hardware: 10
            },
            levels: [
                {
                    level: 1,
                    pointsRequired: 1,
                    description: "Light trigger",
                    rewards: [
                        "25% increased RPM",
                        "50% increased recoil",
                        "50% increased spread gain"
                    ]
                }
            ]
        },
        {
            id: 'automaticTrigger',
            name: 'Automatic Trigger',
            description: 'Full-auto conversion',
            category: 'Attachments',
            sortOrder: 38,
            prerequisiteSkills: [],
            requirements: {
                body: 0,
                tech: 5,
                hardware: 15
            },
            levels: [
                {
                    level: 1,
                    pointsRequired: 1,
                    description: "Automatic trigger",
                    rewards: [
                        "Converts to automatic",
                        "25% increased RPM",
                        "15% reduced damage",
                        "50% increased recoil"
                    ]
                }
            ]
        },
        {
            id: 'rifledBarrel',
            name: 'Rifled Barrel',
            description: 'Enhanced barrel rifling',
            category: 'Attachments',
            sortOrder: 39,
            prerequisiteSkills: [],
            requirements: {
                body: 0,
                tech: 0,
                hardware: 15
            },
            levels: [
                {
                    level: 1,
                    pointsRequired: 1,
                    description: "Rifled barrel",
                    rewards: [
                        "Converts to slugs",
                        "25% increased headshot multiplier",
                        "25% increased velocity",
                        "25% increased environment penetration",
                        "100% increased damage range",
                        "25% reduced RPM"
                    ]
                }
            ]
        },
        {
            id: 'contactCharge',
            name: 'Contact Charge',
            description: 'Contact detonation system',
            category: 'Attachments',
            sortOrder: 40,
            prerequisiteSkills: [],
            requirements: {
                body: 0,
                tech: 10,
                hardware: 10
            },
            levels: [
                {
                    level: 1,
                    pointsRequired: 1,
                    description: "Contact charge",
                    rewards: [
                        "Detonates on drop or disarm",
                        "Deals 75-50 explosive to targets within 2-4m",
                        "0.25 m/s increased speed penalty"
                    ]
                }
            ]
        },
        {
            id: 'burstTrigger',
            name: 'Burst Trigger',
            description: 'Burst-fire conversion',
            category: 'Attachments',
            sortOrder: 41,
            prerequisiteSkills: [],
            requirements: {
                body: 10,
                tech: 10,
                hardware: 20
            },
            levels: [
                {
                    level: 1,
                    pointsRequired: 1,
                    description: "Burst trigger",
                    rewards: [
                        "Converts to 3 round burst",
                        "100% increased RPM",
                        "100% increased recoil",
                        "100% increased hipfire spread",
                        "100% increased spread gain"
                    ]
                }
            ]
        },
        {
            id: 'stabilizer',
            name: 'Stabilizer',
            description: 'Enhanced stability system',
            category: 'Attachments',
            sortOrder: 42,
            prerequisiteSkills: [],
            requirements: {
                body: 0,
                tech: 5,
                hardware: 10
            },
            levels: [
                {
                    level: 1,
                    pointsRequired: 1,
                    description: "Stabilizer",
                    rewards: [
                        "75% reduced recoil while ADS",
                        "15% reduced aim time",
                        "50% reduced speed while ADS"
                    ]
                }
            ]
        },
        {
            id: 'lightweightFrame',
            name: 'Lightweight Frame',
            description: 'Weight reduction system',
            category: 'Attachments',
            sortOrder: 43,
            prerequisiteSkills: [],
            requirements: {
                body: 0,
                tech: 0,
                hardware: 10
            },
            levels: [
                {
                    level: 1,
                    pointsRequired: 1,
                    description: "Lightweight frame",
                    rewards: [
                        "15% reduced aim time",
                        "50% reduced speed penalty",
                        "50% increased recoil"
                    ]
                }
            ]
        },
        {
            id: 'hvBarrel',
            name: 'HV Barrel',
            description: 'High-velocity barrel',
            category: 'Attachments',
            sortOrder: 44,
            prerequisiteSkills: [],
            requirements: {
                body: 10,
                tech: 10,
                hardware: 20
            },
            levels: [
                {
                    level: 1,
                    pointsRequired: 1,
                    description: "HV barrel",
                    rewards: [
                        "50% increased velocity",
                        "0.25 m/s increased speed penalty"
                    ]
                }
            ]
        },
        {
            id: 'wildfireTrigger',
            name: 'Wildfire Trigger',
            description: 'Advanced automatic system',
            category: 'Attachments',
            sortOrder: 45,
            prerequisiteSkills: [],
            requirements: {
                body: 0,
                tech: 15,
                hardware: 10
            },
            levels: [
                {
                    level: 1,
                    pointsRequired: 1,
                    description: "Wildfire trigger",
                    rewards: [
                        "Converts to automatic",
                        "200% increased RPM",
                        "50% reduced recoil",
                        "0.5s spin up delay",
                        "50% increased spread gain"
                    ]
                }
            ]
        },
        {
            id: 'heavyReceiver',
            name: 'Heavy Receiver',
            description: 'Enhanced damage system',
            category: 'Attachments',
            sortOrder: 46,
            prerequisiteSkills: [],
            requirements: {
                body: 0,
                tech: 0,
                hardware: 15
            },
            levels: [
                {
                    level: 1,
                    pointsRequired: 1,
                    description: "Heavy receiver",
                    rewards: [
                        "65% increased damage",
                        "35% reduced RPM",
                        "25 reduced ammo capacity",
                        "0.25 m/s increased speed penalty"
                    ]
                }
            ]
        },
        {
            id: 'havokCycler',
            name: 'Havok Cycler',
            description: 'Advanced cycling system',
            category: 'Attachments',
            sortOrder: 47,
            prerequisiteSkills: [],
            requirements: {
                body: 0,
                tech: 15,
                hardware: 10
            },
            levels: [
                {
                    level: 1,
                    pointsRequired: 1,
                    description: "Havok cycler",
                    rewards: [
                        "0-100% increased RPM, scaling with rounds fired",
                        "35% reduced RPM"
                    ]
                }
            ]
        },
        //Augments
        {
            id: 'akimbo',
            name: 'Akimbo',
            description: 'Dual wielding capabilities',
            category: 'Augments',
            sortOrder: 5,
            prerequisiteSkills: [],
            requirements: {
                body: 15,
                tech: 0,
                hardware: 20
            },
            levels: [
                {
                    level: 1,
                    pointsRequired: 1,
                    description: "Dual wielding mastery",
                    rewards: [
                        "Dual wield sidearms: Fire simultaneously while aiming, sequentially while not aiming",
                        "Alternate aim stance: Fire a single sidearm with increased accuracy",
                        "15% increased Core generation with sidearms",
                        "100% additional sidearm base reserve ammo"
                    ]
                }
            ]
        },
        {
            id: 'armadillo',
            name: 'Armadillo',
            description: 'Advanced defensive maneuvers',
            category: 'Augments',
            sortOrder: 6,
            prerequisiteSkills: [],
            requirements: {
                body: 20,
                tech: 15,
                hardware: 0
            },
            levels: [
                {
                    level: 1,
                    pointsRequired: 1,
                    description: "Defensive rolling",
                    rewards: [
                        "Retractable Nano-plating, activates on roll maneuvers",
                        "Deflect direct damage + fire immunity while active",
                        "50% increased body impact damage while active",
                        "Automatically roll on knockdown"
                    ]
                }
            ]
        },
        {
            id: 'augmentedArms',
            name: 'Augmented Arms',
            description: 'Enhanced weapon handling',
            category: 'Augments',
            sortOrder: 7,
            prerequisiteSkills: [],
            requirements: {
                body: 10,
                tech: 5,
                hardware: 0
            },
            levels: [
                {
                    level: 1,
                    pointsRequired: 1,
                    description: "Enhanced arms",
                    rewards: [
                        "25% increased backup weapon damage + throw velocity",
                        "25% reduced firearm recoil + spread gain"
                    ]
                }
            ]
        },
        {
            id: 'augmentedLegs',
            name: 'Augmented Legs',
            description: 'Enhanced mobility',
            category: 'Augments',
            sortOrder: 8,
            prerequisiteSkills: [],
            requirements: {
                body: 10,
                tech: 5,
                hardware: 0
            },
            levels: [
                {
                    level: 1,
                    pointsRequired: 1,
                    description: "Enhanced legs",
                    rewards: [
                        "25% reduced loadout + movement speed penalties",
                        "100% reduced fall damage when landing on feet, slide or roll maneuvers"
                    ]
                }
            ]
        },
        {
            id: 'augmentedNanowire',
            name: 'Augmented Nano-wire',
            description: 'Enhanced device interaction',
            category: 'Augments',
            sortOrder: 9,
            prerequisiteSkills: [],
            requirements: {
                body: 5,
                tech: 10,
                hardware: 10
            },
            levels: [
                {
                    level: 1,
                    pointsRequired: 1,
                    description: "Enhanced nano-wire",
                    rewards: [
                        "Nano-wire can pickup enemy devices, ownership transfered if held for 0.5s",
                        "Nano-wire can disarm enemy weapons while Core active",
                        "25% increased interaction speed"
                    ]
                }
            ]
        },
        {
            id: 'autoDoc',
            name: 'Auto-Doc',
            description: 'Automated medical system',
            category: 'Augments',
            sortOrder: 10,
            prerequisiteSkills: [],
            requirements: {
                body: 5,
                tech: 10,
                hardware: 0
            },
            levels: [
                {
                    level: 1,
                    pointsRequired: 1,
                    description: "Auto-healing",
                    rewards: [
                        "Automatically removes bleed, 10s cooldown",
                        "25 vitals restored + hemostasis for 2.5s on activation"
                    ]
                }
            ]
        },
        {
            id: 'auxiliaryVitals',
            name: 'Auxiliary Vitals',
            description: 'Enhanced survival systems',
            category: 'Augments',
            sortOrder: 11,
            prerequisiteSkills: [],
            requirements: {
                body: 15,
                tech: 0,
                hardware: 0
            },
            levels: [
                {
                    level: 1,
                    pointsRequired: 1,
                    description: "Enhanced vitals",
                    rewards: [
                        "50 increased vitals",
                        "50% reduced bleed damage received"
                    ]
                }
            ]
        },
        {
            id: 'bloodsport',
            name: 'Bloodsport',
            description: 'Combat blood tracking',
            category: 'Augments',
            sortOrder: 12,
            prerequisiteSkills: [],
            requirements: {
                body: 20,
                tech: 0,
                hardware: 0
            },
            levels: [
                {
                    level: 1,
                    pointsRequired: 1,
                    description: "Blood tracking",
                    rewards: [
                        "Bleeding enemies within 30m are detected",
                        "25% of vitals damage dealt with backup weapons restored to vitals",
                        "15% increased ground speed + backup weapon damage while bleeding",
                        "50% reduced bleed rate"
                    ]
                }
            ]
        },
        {
            id: 'caustic',
            name: 'Caustic',
            description: 'Chemical warfare specialist',
            category: 'Augments',
            sortOrder: 13,
            prerequisiteSkills: [],
            requirements: {
                body: 10,
                tech: 0,
                hardware: 10
            },
            levels: [
                {
                    level: 1,
                    pointsRequired: 1,
                    description: "Chemical specialist",
                    rewards: [
                        "Backup weapons deal chemical damage",
                        "50% of vitals damage received reflected as chemical damage",
                        "100% chemical resistance, chemical stat reduction immunity"
                    ]
                }
            ]
        },
        {
            id: 'chemicalWarfare',
            name: 'Chemical Warfare',
            description: 'Advanced chemical combat',
            category: 'Augments',
            sortOrder: 14,
            prerequisiteSkills: [],
            requirements: {
                body: 10,
                tech: 10,
                hardware: 15
            },
            levels: [
                {
                    level: 1,
                    pointsRequired: 1,
                    description: "Chemical warfare",
                    rewards: [
                        "Explosives deal chemical damage",
                        "50% of attempted vitals restoration by corroded enemies dealt as chemical damage"
                    ]
                }
            ]
        },
        {
            id: 'counterbalance',
            name: 'Counterbalance',
            description: 'Augment penalty negation',
            category: 'Augments',
            sortOrder: 15,
            prerequisiteSkills: [],
            requirements: {
                body: 10,
                tech: 10,
                hardware: 0
            },
            levels: [
                {
                    level: 1,
                    pointsRequired: 1,
                    description: "Penalty negation",
                    rewards: [
                        "Removes vitals, defense + speed reductions from equipped augments"
                    ]
                }
            ]
        },
        {
            id: 'counterIntelligence',
            name: 'Counter Intelligence',
            description: 'Advanced enemy detection',
            category: 'Augments',
            sortOrder: 16,
            prerequisiteSkills: [],
            requirements: {
                body: 15,
                tech: 15,
                hardware: 0
            },
            levels: [
                {
                    level: 1,
                    pointsRequired: 1,
                    description: "Counter detection",
                    rewards: [
                        "Enemies that are detecting you are detected",
                        "Enemies interacting with objectives are detected",
                        "Visible disguised enemies within 8m are revealed and detected"
                    ]
                }
            ]
        },
        {
            id: 'covert',
            name: 'Covert',
            description: 'Advanced stealth capabilities',
            category: 'Augments',
            sortOrder: 17,
            prerequisiteSkills: [],
            requirements: {
                body: 20,
                tech: 20,
                hardware: 0
            },
            levels: [
                {
                    level: 1,
                    pointsRequired: 1,
                    description: "Stealth mastery",
                    rewards: [
                        "Detection immunity while not detecting enemies"
                    ]
                }
            ]
        },
        {
            id: 'damageReport',
            name: 'Damage Report',
            description: 'Combat tracking system',
            category: 'Augments',
            sortOrder: 18,
            prerequisiteSkills: [],
            requirements: {
                body: 0,
                tech: 15,
                hardware: 10
            },
            levels: [
                {
                    level: 1,
                    pointsRequired: 1,
                    description: "Damage tracking",
                    rewards: [
                        "Detect enemies within 45m for 1.5s on dealing direct damage"
                    ]
                }
            ]
        },
        {
            id: 'disengage',
            name: 'Disengage',
            description: 'Emergency relocation system',
            category: 'Augments',
            sortOrder: 19,
            prerequisiteSkills: [],
            requirements: {
                body: 20,
                tech: 20,
                hardware: 0
            },
            levels: [
                {
                    level: 1,
                    pointsRequired: 1,
                    description: "Emergency escape",
                    rewards: [
                        "Automatically relocate to a previous location on receiving fatal damage",
                        "25% vitals + defense restored on activation",
                        "Buffs + debuffs cleared on activation"
                    ]
                }
            ]
        },
        {
            id: 'dispersal',
            name: 'Dispersal',
            description: 'Automated mine deployment',
            category: 'Augments',
            sortOrder: 20,
            prerequisiteSkills: [],
            requirements: {
                body: 10,
                tech: 10,
                hardware: 25
            },
            levels: [
                {
                    level: 1,
                    pointsRequired: 1,
                    description: "Mine deployment",
                    rewards: [
                        "Launch 4 Seeker mines on roll maneuvers if unobscured enemies within 30m",
                        "Seeker mine: Rolls toward and tracks targets, deals 25-15 explosive damage"
                    ]
                }
            ]
        },
        {
            id: 'enhancedDexterity',
            name: 'Enhanced Dexterity',
            description: 'Advanced weapon handling',
            category: 'Augments',
            sortOrder: 21,
            prerequisiteSkills: [],
            requirements: {
                body: 15,
                tech: 0,
                hardware: 0
            },
            levels: [
                {
                    level: 1,
                    pointsRequired: 1,
                    description: "Dexterity enhancement",
                    rewards: [
                        "25% increased dexterity",
                        "Complete active reloads on roll maneuvers at any stage of the reload"
                    ]
                }
            ]
        },
        {
            id: 'experimental',
            name: 'Experimental',
            description: 'Advanced device usage',
            category: 'Augments',
            sortOrder: 22,
            prerequisiteSkills: [],
            requirements: {
                body: 0,
                tech: 20,
                hardware: 15
            },
            levels: [
                {
                    level: 1,
                    pointsRequired: 1,
                    description: "Experimental tech",
                    rewards: [
                        "Can equip experimental devices",
                        "50% increased applied debuff durations"
                    ]
                }
            ]
        },
        {
            id: 'exploitWeakness',
            name: 'Exploit Weakness',
            description: 'Target vulnerability exploitation',
            category: 'Augments',
            sortOrder: 23,
            prerequisiteSkills: [],
            requirements: {
                body: 15,
                tech: 0,
                hardware: 0
            },
            levels: [
                {
                    level: 1,
                    pointsRequired: 1,
                    description: "Weakness exploitation",
                    rewards: [
                        "Enemies with defense below 35% are considered weakened",
                        "100% defense bypass with backup weapons to weakened enemies",
                        "100% reduced loadout + movement speed penalties if unobscured weakened enemies within 15m"
                    ]
                }
            ]
        },
        {
            id: 'failsafe',
            name: 'Fail-safe',
            description: 'Emergency survival system',
            category: 'Augments',
            sortOrder: 24,
            prerequisiteSkills: [],
            requirements: {
                body: 10,
                tech: 15,
                hardware: 0
            },
            levels: [
                {
                    level: 1,
                    pointsRequired: 1,
                    description: "Emergency system",
                    rewards: [
                        "When vitals drop below 25% or stunned: 20 vitals restored every 0.5s + stun immunity for 2.5s"
                    ]
                }
            ]
        },
        {
            id: 'gecko',
            name: 'Gecko',
            description: 'Enhanced climbing capabilities',
            category: 'Augments',
            sortOrder: 25,
            prerequisiteSkills: [],
            requirements: {
                body: 15,
                tech: 15,
                hardware: 0
            },
            levels: [
                {
                    level: 1,
                    pointsRequired: 1,
                    description: "Climbing enhancement",
                    rewards: [
                        "Gain Shroud while climbing",
                        "100% reduced aux power drain from climbing",
                        "25% increased climb speed"
                    ]
                }
            ]
        },
        {
            id: 'hardcase',
            name: 'Hardcase',
            description: 'Advanced head protection',
            category: 'Augments',
            sortOrder: 26,
            prerequisiteSkills: [],
            requirements: {
                body: 15,
                tech: 15,
                hardware: 15
            },
            levels: [
                {
                    level: 1,
                    pointsRequired: 1,
                    description: "Head protection",
                    rewards: [
                        "25% reduced damage multiplier on headshots received",
                        "100% reduced defense penetration + bleeding from headshots",
                        "Absorbs single fatal headshot"
                    ]
                }
            ]
        },
        {
            id: 'hardened',
            name: 'Hardened',
            description: 'Enhanced damage resistance',
            category: 'Augments',
            sortOrder: 27,
            prerequisiteSkills: [],
            requirements: {
                body: 25,
                tech: 15,
                hardware: 0
            },
            levels: [
                {
                    level: 1,
                    pointsRequired: 1,
                    description: "Damage resistance",
                    rewards: [
                        "0-65% reduced direct vitals damage received",
                        "100% of vitals damage received reduces max vitals",
                        "0-50% reduced ground speed, dexterity, aux power + defense regeneration"
                    ]
                }
            ]
        },
        {
            id: 'headhunter',
            name: 'Headhunter',
            description: 'Enhanced headshot capabilities',
            category: 'Augments',
            sortOrder: 28,
            prerequisiteSkills: [],
            requirements: {
                body: 15,
                tech: 15,
                hardware: 0
            },
            levels: [
                {
                    level: 1,
                    pointsRequired: 1,
                    description: "Headshot specialist",
                    rewards: [
                        "25% additional headshot multiplier with direct damage",
                        "Headshot kills activate or extend active Core for 2.5s"
                    ]
                }
            ]
        },
        {
            id: 'heavyOrdnance',
            name: 'Heavy Ordnance',
            description: 'Enhanced explosive capabilities',
            category: 'Augments',
            sortOrder: 29,
            prerequisiteSkills: [],
            requirements: {
                body: 0,
                tech: 15,
                hardware: 25
            },
            levels: [
                {
                    level: 1,
                    pointsRequired: 1,
                    description: "Explosive specialist",
                    rewards: [
                        "25% increased explosive damage radius",
                        "50% increased explosive bleed damage",
                        "All weapons gain Contact Charge mod"
                    ]
                }
            ]
        },
        {
            id: 'hunterOptics',
            name: 'Hunter Optics',
            description: 'Enhanced target recognition',
            category: 'Augments',
            sortOrder: 30,
            prerequisiteSkills: [],
            requirements: {
                body: 15,
                tech: 20,
                hardware: 10
            },
            levels: [
                {
                    level: 1,
                    pointsRequired: 1,
                    description: "Target recognition",
                    rewards: [
                        "Target recognition overlay, replaces scan",
                        "Highlights unobscured enemies + devices while active"
                    ]
                }
            ]
        },
        {
            id: 'kineticFocus',
            name: 'Kinetic Focus',
            description: 'Movement-based enhancements',
            category: 'Augments',
            sortOrder: 31,
            prerequisiteSkills: [],
            requirements: {
                body: 15,
                tech: 20,
                hardware: 0
            },
            levels: [
                {
                    level: 1,
                    pointsRequired: 1,
                    description: "Kinetic enhancement",
                    rewards: [
                        "0-50% reduced direct vitals damage received, scaling with speed",
                        "0-50% increased weapon accuracy, scaling with speed"
                    ]
                }
            ]
        },
        {
            id: 'kineticInjectors',
            name: 'Kinetic Injectors',
            description: 'Movement-based healing',
            category: 'Augments',
            sortOrder: 32,
            prerequisiteSkills: [],
            requirements: {
                body: 0,
                tech: 10,
                hardware: 15
            },
            levels: [
                {
                    level: 1,
                    pointsRequired: 1,
                    description: "Kinetic healing",
                    rewards: [
                        "15 vitals restored + hemostasis for 2.5s on roll maneuvers"
                    ]
                }
            ]
        },
        {
            id: 'lowProfile',
            name: 'Low Profile',
            description: 'Enhanced stealth movement',
            category: 'Augments',
            sortOrder: 33,
            prerequisiteSkills: [],
            requirements: {
                body: 15,
                tech: 15,
                hardware: 0
            },
            levels: [
                {
                    level: 1,
                    pointsRequired: 1,
                    description: "Stealth movement",
                    rewards: [
                        "65% reduced movement sound + radar profile",
                        "35% reduced loadout speed penalty"
                    ]
                }
            ]
        },
        {
            id: 'maximumEfficiency',
            name: 'Maximum Efficiency',
            description: 'Enhanced device effectiveness',
            category: 'Augments',
            sortOrder: 34,
            prerequisiteSkills: [],
            requirements: {
                body: 0,
                tech: 10,
                hardware: 15
            },
            levels: [
                {
                    level: 1,
                    pointsRequired: 1,
                    description: "Device efficiency",
                    rewards: [
                        "100% increased device effect durations",
                        "50% reduced device activation delays",
                        "Enhanced device effects"
                    ]
                }
            ]
        },
        {
            id: 'overclocked',
            name: 'Overclocked',
            description: 'Enhanced Core performance',
            category: 'Augments',
            sortOrder: 35,
            prerequisiteSkills: [],
            requirements: {
                body: 20,
                tech: 25,
                hardware: 0
            },
            levels: [
                {
                    level: 1,
                    pointsRequired: 1,
                    description: "Core enhancement",
                    rewards: [
                        "Unaffected by Core slowing effects while Core active",
                        "25% increased direct damage received while Core active",
                        "25% reduced Core generation + duration"
                    ]
                }
            ]
        },
        {
            id: 'overseer',
            name: 'Overseer',
            description: 'Drone targeting system',
            category: 'Augments',
            sortOrder: 36,
            prerequisiteSkills: [],
            requirements: {
                body: 0,
                tech: 25,
                hardware: 15
            },
            levels: [
                {
                    level: 1,
                    pointsRequired: 1,
                    description: "Drone control",
                    rewards: [
                        "Personal targeting drone, replaces scan",
                        "Provides external camera view + paints visible enemies",
                        "35% increased weapon accuracy while active"
                    ]
                }
            ]
        },
        {
            id: 'perpetualMotion',
            name: 'Perpetual Motion',
            description: 'Enhanced movement capabilities',
            category: 'Augments',
            sortOrder: 37,
            prerequisiteSkills: [],
            requirements: {
                body: 20,
                tech: 15,
                hardware: 0
            },
            levels: [
                {
                    level: 1,
                    pointsRequired: 1,
                    description: "Movement enhancement",
                    rewards: [
                        "100% reduced speed penalty from snare",
                        "40/s aux power regeneration + drain immunity while core is fully charged"
                    ]
                }
            ]
        },
        {
            id: 'potentStimulants',
            name: 'Potent Stimulants',
            description: 'Enhanced stimulant effectiveness',
            category: 'Augments',
            sortOrder: 38,
            prerequisiteSkills: [],
            requirements: {
                body: 10,
                tech: 0,
                hardware: 15
            },
            levels: [
                {
                    level: 1,
                    pointsRequired: 1,
                    description: "Stimulant enhancement",
                    rewards: [
                        "100% increased vitals restored by stims",
                        "50% of vitals restored by stims restores max vitals",
                        "40/s aux power regeneration during hemostasis from stims"
                    ]
                }
            ]
        },
        {
            id: 'professional',
            name: 'Professional',
            description: 'Enhanced sidearm capabilities',
            category: 'Augments',
            sortOrder: 39,
            prerequisiteSkills: [],
            requirements: {
                body: 15,
                tech: 5,
                hardware: 20
            },
            levels: [
                {
                    level: 1,
                    pointsRequired: 1,
                    description: "Sidearm specialist",
                    rewards: [
                        "15% increased sidearm damage while firing a single sidearm",
                        "25% reduced sidearm spread + spread gain",
                        "25% increased backup weapon damage dealt to enemies from behind",
                        "100% additional sidearm base reserve ammo"
                    ]
                }
            ]
        },
        {
            id: 'puncture',
            name: 'Puncture',
            description: 'Enhanced impact damage',
            category: 'Augments',
            sortOrder: 40,
            prerequisiteSkills: [],
            requirements: {
                body: 15,
                tech: 0,
                hardware: 0
            },
            levels: [
                {
                    level: 1,
                    pointsRequired: 1,
                    description: "Impact specialist",
                    rewards: [
                        "100% defense bypass with body impact damage",
                        "100% of body impact damage received reflected with defense bypass",
                        "20/s bleed to enemies that deal or receive body impact damage",
                        "50% increased backup weapon bleed damage"
                    ]
                }
            ]
        },
        {
            id: 'reactiveDermis',
            name: 'Reactive Dermis',
            description: 'Enhanced damage resistance',
            category: 'Augments',
            sortOrder: 41,
            prerequisiteSkills: [],
            requirements: {
                body: 15,
                tech: 10,
                hardware: 10
            },
            levels: [
                {
                    level: 1,
                    pointsRequired: 1,
                    description: "Damage resistance",
                    rewards: [
                        "50% reduced debuff durations",
                        "25% reduced explosive + backup weapon damage received"
                    ]
                }
            ]
        },
        {
            id: 'recovery',
            name: 'Recovery',
            description: 'Enhanced healing',
            category: 'Augments',
            sortOrder: 42,
            prerequisiteSkills: [],
            requirements: {
                body: 10,
                tech: 10,
                hardware: 0
            },
            levels: [
                {
                    level: 1,
                    pointsRequired: 1,
                    description: "Enhanced healing",
                    rewards: [
                        "5/s additional vitals regeneration while no damage received within 1s",
                        "25% increased vitals restored from all sources"
                    ]
                }
            ]
        },
        {
            id: 'renewal',
            name: 'Renewal',
            description: 'Enhanced relocation healing',
            category: 'Augments',
            sortOrder: 43,
            prerequisiteSkills: [],
            requirements: {
                body: 10,
                tech: 15,
                hardware: 10
            },
            levels: [
                {
                    level: 1,
                    pointsRequired: 1,
                    description: "Relocation healing",
                    rewards: [
                        "Regenerate on relocation",
                        "50 vitals, defense, max vitals + max defense restored on Transference + Relocator activation",
                        "25 vitals, defense, max vitals + max defense restored on Disengage + Shifter activation"
                    ]
                }
            ]
        },
        {
            id: 'resourceful',
            name: 'Resourceful',
            description: 'Enhanced resource management',
            category: 'Augments',
            sortOrder: 44,
            prerequisiteSkills: [],
            requirements: {
                body: 0,
                tech: 10,
                hardware: 15
            },
            levels: [
                {
                    level: 1,
                    pointsRequired: 1,
                    description: "Resource management",
                    rewards: [
                        "100% of current weapon ammo capacity restored as reserve ammo on weapon pickup",
                        "5s reduced device cooldowns on weapon pickup",
                        "100% reduced primary stim cooldown if used while bleeding"
                    ]
                }
            ]
        },
        {
            id: 'shifter',
            name: 'Shifter',
            description: 'Advanced movement system',
            category: 'Augments',
            sortOrder: 45,
            prerequisiteSkills: [],
            requirements: {
                body: 10,
                tech: 25,
                hardware: 0
            },
            levels: [
                {
                    level: 1,
                    pointsRequired: 1,
                    description: "Shift system",
                    rewards: [
                        "Shift maneuver: Relocate up to 4m in movement direction",
                        "Can bypass obstructions",
                        "100 vital damage + knockback to enemies within 1m of relocation"
                    ]
                }
            ]
        },
        {
            id: 'specialist',
            name: 'Specialist',
            description: 'Enhanced equipment capabilities',
            category: 'Augments',
            sortOrder: 46,
            prerequisiteSkills: [],
            requirements: {
                body: 15,
                tech: 0,
                hardware: 20
            },
            levels: [
                {
                    level: 1,
                    pointsRequired: 1,
                    description: "Equipment specialist",
                    rewards: [
                        "Additional weapon mod slot",
                        "Can equip 2 of the same device",
                        "100% reduced alternate aim + backtracking speed penalties"
                    ]
                }
            ]
        },
        {
            id: 'temporalSuspension',
            name: 'Temporal Suspension',
            description: 'Time manipulation capabilities',
            category: 'Augments',
            sortOrder: 47,
            prerequisiteSkills: [],
            requirements: {
                body: 15,
                tech: 25,
                hardware: 0
            },
            levels: [
                {
                    level: 1,
                    pointsRequired: 1,
                    description: "Time manipulation",
                    rewards: [
                        "Freeze momentum while in air + aiming for up to 5s",
                        "Unaffected by Core slowing effects while active",
                        "50% reduced direct damage received while active"
                    ]
                }
            ]
        },
        {
            id: 'vendetta',
            name: 'Vendetta',
            description: 'Revenge system',
            category: 'Augments',
            sortOrder: 48,
            prerequisiteSkills: [],
            requirements: {
                body: 15,
                tech: 20,
                hardware: 0
            },
            levels: [
                {
                    level: 1,
                    pointsRequired: 1,
                    description: "Vendetta system",
                    rewards: [
                        "Enemies that deal 150 or more vitals damage are detected while within 45m",
                        "25-100 vitals, max vitals + Core charge restored on killing a vendetta"
                    ]
                }
            ]
        }
        // End of skills array
    ]
};