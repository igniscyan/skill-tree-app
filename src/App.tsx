// src/App.tsx
import React, { useEffect } from 'react';
import { useSkillStore } from './stores/useSkillStore';
import { MegaTreeView } from './components/SkillTree/MegaTreeView';
import { sampleSystem } from './data/sampleSystem';

function App() {
  const { loadSkillSystem } = useSkillStore();

  // Initialize the system
  useEffect(() => {
    loadSkillSystem(sampleSystem);
  }, [loadSkillSystem]);

  return (
    <div className="min-h-screen bg-cyber-bg-dark">
      <MegaTreeView />
    </div>
  );
}

export default App;