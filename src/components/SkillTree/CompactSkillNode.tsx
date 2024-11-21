// src/components/SkillTree/CompactSkillNode.tsx
import React from 'react';
import { Tooltip } from './Tooltip';
import { useSkillStore } from '../../stores/useSkillStore';
import type { Skill } from '../../types/skillTree';

interface CompactSkillNodeProps {
  skill: Skill;
}

export const CompactSkillNode: React.FC<CompactSkillNodeProps> = ({ skill }) => {
  const {
    getKeystonePoints,
    getSkillLevel,
    canAllocatePoint,
    allocatePoint,
    deallocatePoint,
    meetsRequirements
  } = useSkillStore();

  const level = getSkillLevel(skill.id);
  const canUpgrade = meetsRequirements(skill.id) && canAllocatePoint(skill.id);

  const handleClick = () => {
    if (canUpgrade) {
      allocatePoint(skill.id);
    }
  };

  const handleRightClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (level > 0) {
      deallocatePoint(skill.id);
    }
  };

  const tooltipContent = (
    <>
      <h3 className="text-cyber-cyan font-bold mb-2">{skill.name}</h3>
      <p className="text-cyber-text/80 text-sm mb-3">{skill.description}</p>
      {skill.levels.map((levelData, index) => (
        <div key={index} className="mb-3 last:mb-0 bg-cyber-bg-dark/50 p-2 rounded">
          <div className="flex justify-between items-center mb-1">
            <div className="text-cyber-text/80 font-medium">Level {levelData.level}</div>
            <div className="text-cyber-cyan text-sm">
              Cost: <span className="font-bold">{levelData.pointsRequired}</span> points
            </div>
          </div>
          <div className="text-cyber-cyan text-sm mb-1">{levelData.description}</div>
          <ul className="mt-1">
            {levelData.rewards.map((reward, i) => (
              <li key={i} className="text-cyber-text/80 text-xs flex items-center">
                <span className="text-cyber-cyan mr-1">•</span> {reward}
              </li>
            ))}
          </ul>
          {index === level && canUpgrade && (
            <div className="text-cyber-cyan/60 text-xs mt-2">Click to unlock</div>
          )}
        </div>
      ))}
      {(skill.prerequisiteSkills && skill.prerequisiteSkills.length > 0) && (
        <div className="mt-3 text-xs text-cyber-text/60">
          Requires: {skill.prerequisiteSkills.join(', ')}
        </div>
      )}
    </>
  );

  return (
    <Tooltip content={tooltipContent}>
      <div
        className={`
          relative px-3 py-2 rounded border transition-all duration-200
          ${meetsRequirements(skill.id)
            ? 'bg-cyber-bg border-cyber-cyan cursor-pointer hover:bg-cyber-bg-dark'
            : 'bg-cyber-bg-dark border-cyber-border opacity-60 cursor-not-allowed'}
          ${level > 0 ? 'ring-1 ring-cyber-cyan ring-opacity-50' : ''}
        `}
        onClick={handleClick}
        onContextMenu={handleRightClick}
      >
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="text-cyber-text font-medium">{skill.name}</span>
            {level > 0 && (
              <span className="text-cyber-cyan text-xs">
                Lv. {level}
              </span>
            )}
          </div>

          <div className="flex items-center gap-2">
            {/* Next level cost */}
            {level < skill.levels.length && (
              <span className="text-xs text-cyber-text/60">
                Next: {skill.levels[level]?.pointsRequired}p
              </span>
            )}

            {/* Level indicators with costs */}
            <div className="flex gap-1">
              {skill.levels.map((levelData, i) => (
                <div
                  key={i}
                  className={`
                    w-2 h-2 border rounded-sm relative group
                    ${i < level ? 'bg-cyber-cyan border-cyber-cyan' : 'border-cyber-border'}
                  `}
                >
                  <div className="hidden group-hover:block absolute -top-6 left-1/2 -translate-x-1/2 
                                bg-cyber-bg-dark text-cyber-cyan text-xs px-1 py-0.5 rounded whitespace-nowrap
                                border border-cyber-border">
                    {levelData.pointsRequired}p
                  </div>
                </div>
              ))}
            </div>

            {/* Requirements */}
            <div className="flex gap-1 text-xs">
              {skill.requirements.body > 0 && (
                <span className={getKeystonePoints('body') >= skill.requirements.body
                  ? 'text-red-400'
                  : 'text-red-900'
                }>
                  B{skill.requirements.body}
                </span>
              )}
              {skill.requirements.tech > 0 && (
                <span className={getKeystonePoints('tech') >= skill.requirements.tech
                  ? 'text-purple-400'
                  : 'text-purple-900'
                }>
                  T{skill.requirements.tech}
                </span>
              )}
              {skill.requirements.hardware > 0 && (
                <span className={getKeystonePoints('hardware') >= skill.requirements.hardware
                  ? 'text-green-400'
                  : 'text-green-900'
                }>
                  H{skill.requirements.hardware}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </Tooltip>
  );
};