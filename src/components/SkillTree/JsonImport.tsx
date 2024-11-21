// src/components/SkillTree/JsonImport.tsx
import React, { useState } from 'react';
import { useSkillStore } from '../../stores/useSkillStore';
import type { SkillSystem } from '../../types/skillTree';
import { sampleSystem } from '../../data/sampleSystem';  // We'll create this

export const JsonImport: React.FC = () => {
  const [error, setError] = useState<string | null>(null);
  const [jsonInput, setJsonInput] = useState('');
  const { loadSkillSystem } = useSkillStore();

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const jsonText = e.target?.result as string;
        setJsonInput(jsonText);
        setError(null);
      } catch (err) {
        setError('Could not read file');
      }
    };
    reader.readAsText(file);
  };

  const validateAndLoadJson = (jsonText: string) => {
    try {
      const json = JSON.parse(jsonText);

      // Basic validation of the JSON structure
      if (!json.keystones || !json.skills || typeof json.availablePoints !== 'number') {
        throw new Error('JSON must contain keystones, skills arrays, and availablePoints');
      }

      // Validate keystones
      if (!json.keystones.every((k: any) => 
        k.id && (k.id === 'body' || k.id === 'tech' || k.id === 'hardware') &&
        k.name && 
        typeof k.description === 'string'
      )) {
        throw new Error('Invalid keystone format');
      }

      // Validate skills
      if (!json.skills.every((s: any) => 
        s.id && 
        s.name && 
        s.description &&
        s.category &&
        s.requirements &&
        typeof s.requirements.body === 'number' &&
        typeof s.requirements.tech === 'number' &&
        typeof s.requirements.hardware === 'number' &&
        Array.isArray(s.levels)
      )) {
        throw new Error('Invalid skill format');
      }

      const validatedSystem = json as SkillSystem;
      loadSkillSystem(validatedSystem);
      setError(null);
      setJsonInput(''); // Clear input after successful load
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Invalid JSON structure');
    }
  };

  const handleImport = () => {
    if (!jsonInput.trim()) {
      setError('Please provide JSON data');
      return;
    }
    validateAndLoadJson(jsonInput);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setJsonInput(event.target.value);
    setError(null);
  };

  const handleDownloadSample = () => {
    const blob = new Blob([JSON.stringify(sampleSystem, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'sample-skill-system.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="bg-cyber-bg rounded border-2 border-cyber-border p-4 mb-6">
      <h2 className="text-cyber-cyan text-xl font-bold mb-4">Import Skill Configuration</h2>
      
      <div className="flex gap-4 mb-4">
        <div className="flex-1">
          <label className="block text-cyber-text mb-2">Upload JSON File</label>
          <div className="space-y-2">
            <input
              type="file"
              accept=".json"
              onChange={handleFileUpload}
              className="w-full text-cyber-text p-2 bg-cyber-bg-dark rounded border border-cyber-border
                       focus:border-cyber-cyan focus:outline-none"
            />
            <button
              onClick={handleDownloadSample}
              className="w-full px-4 py-2 bg-cyber-bg border border-cyber-cyan text-cyber-cyan rounded
                       hover:bg-cyber-cyan hover:text-cyber-bg-dark transition-colors"
            >
              Download Sample Config
            </button>
          </div>
        </div>
        
        <div className="flex-1">
          <label className="block text-cyber-text mb-2">Or Paste JSON</label>
          <textarea
            value={jsonInput}
            onChange={handleInputChange}
            className="w-full h-24 bg-cyber-bg-dark text-cyber-text p-2 rounded border border-cyber-border
                     focus:border-cyber-cyan focus:outline-none"
            placeholder="Paste your JSON here..."
          />
        </div>
      </div>

      <div className="flex justify-between items-center">
        {error && (
          <div className="text-cyber-red bg-cyber-red/10 p-2 rounded border border-cyber-red">
            {error}
          </div>
        )}
        
        <button
          onClick={handleImport}
          className="px-4 py-2 bg-cyber-bg border-2 border-cyber-cyan text-cyber-cyan rounded
                   hover:bg-cyber-cyan hover:text-cyber-bg-dark transition-colors ml-auto"
        >
          Import Configuration
        </button>
      </div>
    </div>
  );
};