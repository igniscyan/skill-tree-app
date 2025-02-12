// src/App.tsx
import { useEffect } from 'react';
import { useSkillStore } from './stores/useSkillStore';
import { MegaTreeView } from './components/SkillTree/MegaTreeView';
import { sampleSystem } from './data/sampleSystem';
import { EasterEgg } from './components/EasterEgg';

function App() {
  const { loadSkillSystem, setAvailablePoints } = useSkillStore();

  useEffect(() => {
    // Force a clean initialization
    loadSkillSystem({
      ...sampleSystem,
      availablePoints: 150
    });

    // Additional safety check
    setAvailablePoints(150);

    return () => {
      loadSkillSystem({
        ...sampleSystem,
        availablePoints: 0,
        skills: [],
        keystones: []
      });
    };
  }, [loadSkillSystem, setAvailablePoints]);

  return (
    <div className="min-h-screen bg-cyber-bg-dark">
      <MegaTreeView />
      <EasterEgg />
    </div>
  );
}

export default App;