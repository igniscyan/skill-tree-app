import React, { useState } from 'react';

interface TooltipProps {
  children: React.ReactNode;
  content: React.ReactNode;
}

export const Tooltip: React.FC<TooltipProps> = ({ children, content }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      {isVisible && (
        <div className="absolute z-50 w-64 p-4 mt-2 bg-cyber-bg-dark border border-cyber-border rounded shadow-lg">
          {content}
        </div>
      )}
    </div>
  );
};