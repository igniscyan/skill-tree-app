// src/App.tsx
import { useEffect } from 'react';
import { useSkillStore } from './stores/useSkillStore';
import { MegaTreeView } from './components/SkillTree/MegaTreeView';
import { sampleSystem } from './data/sampleSystem';
import { EasterEgg } from './components/EasterEgg';

function App() {
  const { loadSkillSystem } = useSkillStore();

  useEffect(() => {
    loadSkillSystem(sampleSystem);
  }, [loadSkillSystem]);

  return (
    <div className="min-h-screen bg-cyber-bg-dark">
      <MegaTreeView />
      <EasterEgg />
    </div>
  );
}

export default App;