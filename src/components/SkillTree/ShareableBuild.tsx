import React from 'react';
import { useSkillStore } from '../../stores/useSkillStore';
import * as htmlToImage from 'html-to-image';
// import { Skill } from '../../types/skillTree';

interface ShareableBuildProps {
  onClose: () => void;
}

export const ShareableBuild: React.FC<ShareableBuildProps> = ({ onClose }) => {
  const { 
    keystones, 
    getKeystonePoints, 
    getFoundationPerks,
    skills,
    getSkillLevel,
    getCategories
  } = useSkillStore();
  
  const buildRef = React.useRef<HTMLDivElement>(null);
  const foundationPerks = getFoundationPerks();

  const downloadImage = async () => {
    if (!buildRef.current) return;
    
    const dataUrl = await htmlToImage.toPng(buildRef.current, {
      quality: 1.0,
      backgroundColor: '#1a1b26'
    });
    
    const link = document.createElement('a');
    link.download = 'skill-build.png';
    link.href = dataUrl;
    link.click();
  };

  const formatValue = (value: number) => {
    return value.toFixed(value < 1 ? 1 : 0) + '%';
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Shells':
        return 'text-red-400 border-red-400 bg-red-400/10';
      case 'Augments':
        return 'text-purple-400 border-purple-400 bg-purple-400/10';
      case 'Devices':
        return 'text-white border-white bg-white/10';
      case 'Attachments':
        return 'text-yellow-400 border-yellow-400 bg-yellow-400/10';
      case 'Weapons':
        return 'text-blue-400 border-blue-400 bg-blue-400/10';
      default:
        return 'text-cyber-cyan border-cyber-cyan bg-cyber-cyan/10';
    }
  };

  const renderAllocatedSkills = () => {
    const categories = getCategories();
    const allocatedSkills = skills.filter(skill => getSkillLevel(skill.id) > 0);
    
    if (allocatedSkills.length === 0) return null;

    return (
      <div className="mt-8 space-y-6">
        {categories.map(category => {
          const categorySkills = allocatedSkills.filter(skill => skill.category === category);
          if (categorySkills.length === 0) return null;

          const colorClasses = getCategoryColor(category);

          return (
            <div key={category}>
              <div className="text-cyber-cyan font-bold border-b border-cyber-border pb-1 mb-3">
                {category}
              </div>
              <div className="flex flex-wrap gap-2">
                {categorySkills.map(skill => {
                  const level = getSkillLevel(skill.id);
                  
                  return (
                    <div
                      key={skill.id}
                      className={`px-3 py-1 rounded-full border text-sm ${colorClasses} flex items-center gap-2`}
                    >
                      {category === 'Shells' ? (
                        <>{skill.name} Mk.{level}</>
                      ) : (
                        <>{skill.name} {level > 1 ? `(${level})` : ''}</>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-cyber-bg-dark rounded-lg border border-cyber-border max-w-4xl w-full">
        <div className="p-4 border-b border-cyber-border flex justify-between items-center">
          <h2 className="text-cyber-cyan text-xl font-bold">Share Build</h2>
          <button
            onClick={onClose}
            className="text-cyber-text/60 hover:text-cyber-text"
          >
            ✕
          </button>
        </div>
        
        <div className="p-6">
          <div
            ref={buildRef}
            className="bg-cyber-bg-dark p-6 rounded-lg border border-cyber-border"
          >
            <div className="text-cyber-cyan text-2xl font-bold mb-4">
              Skill Build
            </div>
            
            {/* Foundation Perks */}
            <div className="grid grid-cols-3 gap-6">
              {keystones.map(keystone => {
                const points = getKeystonePoints(keystone.id);
                const perks = foundationPerks[keystone.id as keyof typeof foundationPerks];
                
                return (
                  <div key={keystone.id} className="space-y-2">
                    <div className="text-cyber-cyan font-bold border-b border-cyber-border pb-1">
                      {keystone.name}: {points}
                    </div>
                    
                    {points >= 25 && (
                      <div className="text-cyber-text/80 text-sm">
                        {keystone.id === 'body' && '25% reduced weapon handling'}
                        {keystone.id === 'tech' && '50% increased Nano-wire range'}
                        {keystone.id === 'hardware' && '100% additional reserve ammo'}
                      </div>
                    )}
                    
                    {points >= 26 && (
                      <div className="text-cyber-text/80 text-sm space-y-1">
                        {keystone.id === 'body' && (
                          <>
                            <div>{formatValue((perks as typeof foundationPerks.body).acceleration)} acceleration</div>
                            <div>{formatValue((perks as typeof foundationPerks.body).maxVitalsDefenseReduction)} reduced reductions</div>
                            <div>{formatValue((perks as typeof foundationPerks.body).backupHeavyDamageReduction)} reduced damage</div>
                          </>
                        )}
                        {keystone.id === 'tech' && (
                          <>
                            <div>{formatValue((perks as typeof foundationPerks.tech).coreDamageReduction)} Core damage reduction</div>
                            <div>{formatValue((perks as typeof foundationPerks.tech).scanAugmentCooldown)} cooldown reduction</div>
                            <div>{formatValue((perks as typeof foundationPerks.tech).baseDefenseRegen)} defense regen</div>
                          </>
                        )}
                        {keystone.id === 'hardware' && (
                          <>
                            <div>{formatValue((perks as typeof foundationPerks.hardware).loadoutSpeedPenalty)} speed penalty reduction</div>
                            <div>{formatValue((perks as typeof foundationPerks.hardware).primaryStimCooldown)} stim cooldown</div>
                            <div>{formatValue((perks as typeof foundationPerks.hardware).explosiveDamageResistance)} explosive bonus</div>
                          </>
                        )}
                      </div>
                    )}
                    
                    {points >= 50 && (
                      <div className="text-cyber-text/80 text-sm space-y-1">
                        {keystone.id === 'body' && (
                          <>
                            <div>Additional aerial maneuver</div>
                            <div>25% reduced bleed/fire damage</div>
                          </>
                        )}
                        {keystone.id === 'tech' && (
                          <>
                            <div>5% damage per debuff</div>
                            <div>25% reduced Core cost</div>
                          </>
                        )}
                        {keystone.id === 'hardware' && (
                          <>
                            <div>Additional mod slot</div>
                            <div>25% reduced cooldowns</div>
                          </>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Allocated Skills */}
            {renderAllocatedSkills()}
          </div>
          
          <div className="mt-4 flex justify-end">
            <button
              onClick={downloadImage}
              className="px-4 py-2 bg-cyber-bg border border-cyber-cyan text-cyber-cyan rounded
                       hover:bg-cyber-cyan hover:text-cyber-bg-dark transition-colors"
            >
              Download Image
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}; 