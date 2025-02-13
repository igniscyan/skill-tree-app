// src/components/SkillTree/MegaTreeView.tsx
import React from 'react';
import { useSkillStore } from '../../stores/useSkillStore';
import { CompactSkillNode } from './CompactSkillNode';
import { Keystone } from '../../types/skillTree';
import { ShareableBuild } from './ShareableBuild';

export const MegaTreeView: React.FC = () => {
  const { 
    skills, 
    keystones,
    setKeystonePoints,
    getKeystonePoints,
    getFoundationPerks,
    availablePoints,
    activeCategory,
    setActiveCategory,
    getCategories,
    clearAllPoints,
    getTotalSpentPoints,
    matrixLevel,
    setMatrixLevel
  } = useSkillStore();

  const [showShareModal, setShowShareModal] = React.useState(false);
  const [showMatrixInfo, setShowMatrixInfo] = React.useState(false);
  const [activeInterval, setActiveInterval] = React.useState<NodeJS.Timeout | null>(null);
  const [currentDelay, setCurrentDelay] = React.useState<number>(250); // 0.25s initial delay

  const categories = getCategories();
  const foundationPerks = getFoundationPerks();
  
  React.useEffect(() => {
    if (categories.length > 0 && !activeCategory) {
      setActiveCategory(categories[0]);
    }
  }, [categories, activeCategory, setActiveCategory]);

  const filteredSkills = skills
    .filter(skill => skill.category === activeCategory)
    .sort((a, b) => {
      const aReqPoints = a.requirements.body + a.requirements.tech + a.requirements.hardware;
      const bReqPoints = b.requirements.body + b.requirements.tech + b.requirements.hardware;
      if (aReqPoints !== bReqPoints) return aReqPoints - bReqPoints;
      return a.sortOrder - b.sortOrder;
    });

  const getKeystoneColor = (keystone: Keystone) => {
    switch (keystone.id) {
      case 'body':
        return 'text-red-400 border-red-400 hover:bg-red-400/10';
      case 'tech':
        return 'text-purple-400 border-purple-400 hover:bg-purple-400/10';
      case 'hardware':
        return 'text-white border-white hover:bg-white/10';
      default:
        return 'text-cyber-cyan border-cyber-cyan hover:bg-cyber-cyan/10';
    }
  };

  const startAddingPoints = (keystoneId: string, amount: number) => {
    if (activeInterval) {
      clearInterval(activeInterval);
      setCurrentDelay(250); // Reset delay when starting new interval
    }
    
    const addPoints = () => {
      const currentPoints = getKeystonePoints(keystoneId);
      setKeystonePoints(keystoneId, currentPoints + amount);
      
      // Accelerate the interval
      setCurrentDelay(prev => {
        const newDelay = Math.max(100, prev - 50); // Decrease by 0.05s, min 0.1s
        
        if (newDelay !== prev && activeInterval) {
          // Restart interval with new delay
          clearInterval(activeInterval);
          const newInterval = setInterval(addPoints, newDelay);
          setActiveInterval(newInterval);
        }
        
        return newDelay;
      });
    };

    // Initial click
    addPoints();

    // Start interval with initial delay
    const interval = setInterval(addPoints, currentDelay);
    setActiveInterval(interval);
  };

  const stopAddingPoints = () => {
    if (activeInterval) {
      clearInterval(activeInterval);
      setActiveInterval(null);
      setCurrentDelay(250); // Reset delay when stopping
    }
  };

  React.useEffect(() => {
    return () => {
      if (activeInterval) {
        clearInterval(activeInterval);
        setCurrentDelay(250);
      }
    };
  }, [activeInterval]);

  const renderFoundationPerks = (keystoneId: string) => {
    const perks = foundationPerks[keystoneId as keyof typeof foundationPerks];
    const points = getKeystonePoints(keystoneId);
    // const showEnhanced = points >= 26;
    // const showAdvanced = points >= 50;

    const formatValue = (value: number) => {
      return value.toFixed(value < 1 ? 1 : 0) + '%';
    };

    const getBodyPerks = () => {
      const bodyPerks = perks as typeof foundationPerks.body;
      return (
        <>
          <div className="text-cyber-text/80">{'>'} {formatValue(bodyPerks.acceleration)} increased acceleration</div>
          <div className="text-cyber-text/80">{'>'} {formatValue(bodyPerks.maxVitalsDefenseReduction)} reduced max vitals and defense reductions</div>
          <div className="text-cyber-text/80">{'>'} {formatValue(bodyPerks.backupHeavyDamageReduction)} reduced direct vitals damage received while using backup + heavy weapons</div>
        </>
      );
    };

    const getTechPerks = () => {
      const techPerks = perks as typeof foundationPerks.tech;
      return (
        <>
          <div className="text-cyber-text/80">{'>'} {formatValue(techPerks.coreDamageReduction)} reduced direct damage received during Core</div>
          <div className="text-cyber-text/80">{'>'} {formatValue(techPerks.scanAugmentCooldown)} reduced scan and augment cooldowns</div>
          <div className="text-cyber-text/80">{'>'} {formatValue(techPerks.baseDefenseRegen)} increased base defense regeneration</div>
        </>
      );
    };

    const getHardwarePerks = () => {
      const hardwarePerks = perks as typeof foundationPerks.hardware;
      return (
        <>
          <div className="text-cyber-text/80">{'>'} {formatValue(hardwarePerks.loadoutSpeedPenalty)} reduced loadout speed penalty</div>
          <div className="text-cyber-text/80">{'>'} {formatValue(hardwarePerks.primaryStimCooldown)} reduced primary stim cooldown</div>
          <div className="text-cyber-text/80">{'>'} {formatValue(hardwarePerks.explosiveDamageResistance)} increased explosive damage + resistance</div>
        </>
      );
    };

    const getBodyAdvanced = () => {
      return (
        <>
          <div className="text-cyber-text/80">{'>'} Additional aerial maneuver charge</div>
          <div className="text-cyber-text/80">{'>'} 25% reduced bleed + fire damage received</div>
        </>
      );
    };

    const getTechAdvanced = () => {
      return (
        <>
          <div className="text-cyber-text/80">{'>'} 5% increased direct defense damage dealt for each debuff on enemy</div>
          <div className="text-cyber-text/80">{'>'} 25% reduced Core activation charge cost</div>
        </>
      );
    };

    const getHardwareAdvanced = () => {
      return (
        <>
          <div className="text-cyber-text/80">{'>'} Additional weapon mod slot</div>
          <div className="text-cyber-text/80">{'>'} 25% reduced device cooldowns</div>
        </>
      );
    };

    const getFoundationName = () => {
      switch (keystoneId) {
        case 'body':
          return 'BODY';
        case 'tech':
          return 'TECH';
        case 'hardware':
          return 'HARDWARE';
        default:
          return '';
      }
    };

    return (
      <div className="text-left text-sm space-y-4 mt-4">
        {/* Foundation Name */}
        <div className="text-cyber-cyan text-lg">:: FOUNDATION: {getFoundationName()}</div>

        {/* Threshold Section (25) */}
        <div className={points >= 25 ? '' : 'opacity-40'}>
          <div className="text-cyber-cyan mb-2">:: Threshold: 25</div>
          {keystoneId === 'body' && (
            <div className="text-cyber-text/80">
              {'>'} 25% reduced weapon handling speed penalties
            </div>
          )}
          {keystoneId === 'tech' && (
            <div className="text-cyber-text/80">
              {'>'} 50% increased Nano-wire range
            </div>
          )}
          {keystoneId === 'hardware' && (
            <div className="text-cyber-text/80">
              {'>'} 100% additional reserve ammo
            </div>
          )}
        </div>

        {/* Enhancement Section (26-50) */}
        <div className={points >= 26 ? '' : 'opacity-40'}>
          <div className="text-cyber-cyan mb-2">
            :: Enhancement: 26+
            {points >= 26 && points < 50 && (
              <span className="text-cyber-text/60 text-xs ml-2">
                ({Math.floor(((points - 25) / 24) * 100)}% of max bonus)
              </span>
            )}
          </div>
          {keystoneId === 'body' && getBodyPerks()}
          {keystoneId === 'tech' && getTechPerks()}
          {keystoneId === 'hardware' && getHardwarePerks()}
        </div>

        {/* Advanced Section (50) */}
        <div className={points >= 50 ? '' : 'opacity-40'}>
          <div className="text-cyber-cyan mb-2">:: Advanced: 50</div>
          {keystoneId === 'body' && getBodyAdvanced()}
          {keystoneId === 'tech' && getTechAdvanced()}
          {keystoneId === 'hardware' && getHardwareAdvanced()}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-cyber-bg-dark p-2 sm:p-4">
      <div className="container mx-auto max-w-7xl">
        {/* Points Display and Clear Button */}
        <div className="mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="text-cyber-text text-lg sm:text-xl">
            <div className="flex items-center gap-2">
              <span>Available Points: </span>
              <span className="text-cyber-cyan font-bold">{availablePoints}</span>
              <span className="text-cyber-text/60 text-sm">
                Total Spent: {getTotalSpentPoints()}
              </span>
              
              <div className="relative ml-4 flex items-center gap-2">
                <span className="text-cyber-text/80">Matrix Level:</span>
                <div className="flex gap-1">
                  {[...Array(6)].map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setMatrixLevel(i)}
                      className={`w-6 h-6 rounded flex items-center justify-center border transition-colors
                        ${i <= matrixLevel 
                          ? 'bg-cyber-cyan/20 border-cyber-cyan text-cyber-cyan' 
                          : 'bg-cyber-bg border-cyber-text/20 text-cyber-text/20'}`}
                    >
                      {i}
                    </button>
                  ))}
                </div>
                
                <div className="relative">
                  <button
                    onMouseEnter={() => setShowMatrixInfo(true)}
                    onMouseLeave={() => setShowMatrixInfo(false)}
                    className="w-5 h-5 rounded-full border border-cyber-text/40 text-cyber-text/40 
                             flex items-center justify-center text-sm hover:border-cyber-cyan hover:text-cyber-cyan"
                  >
                    ?
                  </button>
                  
                  {showMatrixInfo && (
                    <div className="absolute left-full top-1/2 -translate-y-1/2 ml-2 w-64 p-3 
                                  bg-cyber-bg-dark border border-cyber-border rounded-lg z-10
                                  text-sm text-cyber-text/80">
                      <p className="mb-2">Matrix Upgrade System:</p>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Base Matrix starts at Level 0 with 125 points</li>
                        <li>You can upgrade the Matrix up to Level 5</li>
                        <li>Each upgrade grants +5 additional points</li>
                        <li>Maximum points at Level 5: 150</li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex gap-2 w-full sm:w-auto">
            <button
              onClick={() => setShowShareModal(true)}
              className="flex-1 sm:flex-none px-4 py-2 bg-cyber-bg border border-cyber-cyan text-cyber-cyan rounded
                       hover:bg-cyber-cyan hover:text-cyber-bg-dark transition-colors"
            >
              Share Build
            </button>
            <button
              onClick={clearAllPoints}
              className="flex-1 sm:flex-none px-4 py-2 bg-cyber-bg border border-cyber-red text-cyber-red rounded
                       hover:bg-cyber-red hover:text-cyber-bg-dark transition-colors"
            >
              Clear All Points
            </button>
          </div>
        </div>

        {showShareModal && (
          <ShareableBuild onClose={() => setShowShareModal(false)} />
        )}

        {/* Keystones Section */}
        <div className="mb-8">
          <h2 className="text-cyber-cyan text-xl font-bold mb-4">Core Attributes</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {keystones.map(keystone => (
              <div 
                key={keystone.id}
                className="bg-cyber-bg rounded-lg border-2 border-opacity-50 p-4"
                style={{ borderColor: `rgb(var(--${keystone.id}-color), 0.5)` }}
              >
                <div className="text-center mb-4">
                  <h2 className={`text-xl sm:text-2xl font-bold mb-1 ${getKeystoneColor(keystone)}`}>
                    {keystone.name}
                  </h2>
                  <div className="text-cyber-text/60 text-sm h-12">
                    {keystone.description}
                  </div>
                  <div className={`text-2xl sm:text-3xl font-bold mt-2 ${getKeystoneColor(keystone)}`}>
                    {getKeystonePoints(keystone.id)}
                  </div>
                </div>
                
                <div className="flex gap-2 mb-4">
                  <button
                    onMouseDown={() => startAddingPoints(keystone.id, 1)}
                    onMouseUp={stopAddingPoints}
                    onMouseLeave={stopAddingPoints}
                    disabled={availablePoints <= 0}
                    className={`flex-1 px-3 py-1 bg-cyber-bg border rounded transition-colors
                      ${getKeystoneColor(keystone)}
                      disabled:opacity-50 disabled:cursor-not-allowed`}
                  >
                    +
                  </button>
                  <button
                    onMouseDown={() => startAddingPoints(keystone.id, -1)}
                    onMouseUp={stopAddingPoints}
                    onMouseLeave={stopAddingPoints}
                    disabled={getKeystonePoints(keystone.id) <= 0}
                    className="flex-1 px-3 py-1 bg-cyber-bg border border-cyber-red text-cyber-red rounded
                             hover:bg-cyber-red hover:text-cyber-bg-dark transition-colors
                             disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    -
                  </button>
                </div>
                <div className="flex gap-2 mb-4">
                  <button
                    onMouseDown={() => startAddingPoints(keystone.id, 5)}
                    onMouseUp={stopAddingPoints}
                    onMouseLeave={stopAddingPoints}
                    disabled={availablePoints < 5}
                    className={`flex-1 px-3 py-1 bg-cyber-bg border rounded transition-colors
                      ${getKeystoneColor(keystone)}
                      disabled:opacity-50 disabled:cursor-not-allowed`}
                  >
                    +5
                  </button>
                  <button
                    onMouseDown={() => startAddingPoints(keystone.id, -5)}
                    onMouseUp={stopAddingPoints}
                    onMouseLeave={stopAddingPoints}
                    disabled={getKeystonePoints(keystone.id) < 5}
                    className="flex-1 px-3 py-1 bg-cyber-bg border border-cyber-red text-cyber-red rounded
                             hover:bg-cyber-red hover:text-cyber-bg-dark transition-colors
                             disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    -5
                  </button>
                  <button
                    onClick={() => setKeystonePoints(keystone.id, 50)}
                    disabled={availablePoints < (50 - getKeystonePoints(keystone.id))}
                    className={`flex-1 px-3 py-1 bg-cyber-bg border rounded transition-colors
                      ${getKeystoneColor(keystone)}
                      disabled:opacity-50 disabled:cursor-not-allowed`}
                  >
                    Max
                  </button>
                </div>

                {renderFoundationPerks(keystone.id)}
              </div>
            ))}
          </div>
        </div>

        {/* Category Tabs */}
        <div className="mb-6 overflow-x-auto">
          <div className="flex flex-nowrap gap-2 border-b border-cyber-border min-w-min">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-t text-base sm:text-lg font-medium transition-colors whitespace-nowrap
                  ${activeCategory === category
                    ? 'bg-cyber-bg border-t border-x border-cyber-cyan text-cyber-cyan'
                    : 'bg-cyber-bg-dark border-t border-x border-cyber-border text-cyber-text/60 hover:text-cyber-text'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Skills List */}
        <div className="bg-cyber-bg p-4 sm:p-6 rounded-lg border border-cyber-border">
          <div className="grid grid-cols-1 gap-2">
            {filteredSkills.length > 0 ? (
              filteredSkills.map(skill => (
                <CompactSkillNode key={skill.id} skill={skill} />
              ))
            ) : (
              <div className="text-cyber-text/60 text-center py-8">
                No skills available in this category
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};