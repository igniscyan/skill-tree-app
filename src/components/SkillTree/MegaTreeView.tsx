// src/components/SkillTree/MegaTreeView.tsx
import React from 'react';
import { useSkillStore } from '../../stores/useSkillStore';
import { CompactSkillNode } from './CompactSkillNode';
import { JsonImport } from './JsonImport';
import { Keystone } from '../../types/skillTree';

export const MegaTreeView: React.FC = () => {
  const { 
    skills, 
    keystones,
    setKeystonePoints,
    getKeystonePoints,
    availablePoints,
    activeCategory,
    setActiveCategory,
    getCategories,
    clearAllPoints,
    getTotalSpentPoints
  } = useSkillStore();

  const categories = getCategories();
  
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
        return 'text-green-400 border-green-400 hover:bg-green-400/10';
      default:
        return 'text-cyber-cyan border-cyber-cyan hover:bg-cyber-cyan/10';
    }
  };

  return (
    <div className="min-h-screen bg-cyber-bg-dark p-2 sm:p-4">
      <div className="container mx-auto max-w-7xl">
        {/* Import Section */}
        <JsonImport />

        {/* Points Display and Clear Button */}
        <div className="mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="text-cyber-text text-lg sm:text-xl">
            <span>Available Points: </span>
            <span className="text-cyber-cyan font-bold">{availablePoints}</span>
            <span className="text-cyber-text/60 text-sm ml-4">
              Total Spent: {getTotalSpentPoints()}
            </span>
          </div>
          <button
            onClick={clearAllPoints}
            className="w-full sm:w-auto px-4 py-2 bg-cyber-bg border border-cyber-red text-cyber-red rounded
                     hover:bg-cyber-red hover:text-cyber-bg-dark transition-colors"
          >
            Clear All Points
          </button>
        </div>

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
                
                <div className="flex gap-2">
                  <button
                    onClick={() => setKeystonePoints(keystone.id, getKeystonePoints(keystone.id) + 1)}
                    disabled={availablePoints <= 0}
                    className={`flex-1 px-3 py-1 bg-cyber-bg border rounded transition-colors
                      ${getKeystoneColor(keystone)}
                      disabled:opacity-50 disabled:cursor-not-allowed`}
                  >
                    +
                  </button>
                  <button
                    onClick={() => setKeystonePoints(keystone.id, getKeystonePoints(keystone.id) - 1)}
                    disabled={getKeystonePoints(keystone.id) <= 0}
                    className="flex-1 px-3 py-1 bg-cyber-bg border border-cyber-red text-cyber-red rounded
                             hover:bg-cyber-red hover:text-cyber-bg-dark transition-colors
                             disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    -
                  </button>
                </div>
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