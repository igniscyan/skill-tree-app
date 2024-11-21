import { useEffect, useState } from 'react';

export const EasterEgg: React.FC = () => {
  const [sequence, setSequence] = useState<string>('');
  const [showEasterEgg, setShowEasterEgg] = useState(false);

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      const newSequence = sequence + event.key.toLowerCase();
      setSequence(newSequence);

      // Check if the sequence contains our trigger
      if (newSequence.includes('dokudokudoku')) {
        setShowEasterEgg(true);
        // Reset sequence after triggering
        setSequence('');
        // Hide after 5 seconds
        setTimeout(() => {
          setShowEasterEgg(false);
        }, 5000);
      }

      if (newSequence.length > 12) {
        setSequence(newSequence.slice(-12));
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [sequence]);

  if (!showEasterEgg) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/75 z-50"
         onClick={() => setShowEasterEgg(false)}>
      <div className="bg-cyber-bg p-4 rounded-lg border-2 border-cyber-cyan animate-pulse-cyan">
        <img 
          src="/doku-easter-egg.jpg" 
          alt="Easter Egg"
          className="max-w-md rounded-lg"
        />
      </div>
    </div>
  );
};