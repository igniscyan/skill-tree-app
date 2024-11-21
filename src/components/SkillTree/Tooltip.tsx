// src/components/SkillTree/Tooltip.tsx
import React, { useState, useRef, useEffect } from 'react';

interface TooltipProps {
  children: React.ReactNode;
  content: React.ReactNode;
  onAction?: () => void;
  actionText?: string;
  canAct?: boolean;
}

export const Tooltip: React.FC<TooltipProps> = ({ 
  children, 
  content, 
  onAction, 
  actionText = "Add Point", 
  canAct = false 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Detect if device is mobile
  useEffect(() => {
    const mediaQuery = window.matchMedia('(hover: none) and (pointer: coarse)');
    setIsMobile(mediaQuery.matches);

    const updateDeviceType = (e: MediaQueryListEvent) => {
      setIsMobile(e.matches);
    };

    mediaQuery.addListener(updateDeviceType);
    return () => mediaQuery.removeListener(updateDeviceType);
  }, []);

  // Handle clicks outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (tooltipRef.current && !tooltipRef.current.contains(event.target as Node)) {
        setIsVisible(false);
      }
    };

    if (isVisible && isMobile) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isVisible, isMobile]);

  const handleClick = (e: React.MouseEvent) => {
    if (isMobile) {
      e.stopPropagation();
      setIsVisible(!isVisible);
    } else if (onAction && canAct) {
      e.stopPropagation();
      onAction();
    }
  };

  return (
    <div 
      ref={tooltipRef}
      className="relative"
      onMouseEnter={() => !isMobile && setIsVisible(true)}
      onMouseLeave={() => !isMobile && setIsVisible(false)}
      onClick={handleClick}
    >
      {children}

      {isVisible && (
        <>
          {isMobile ? (
            // Mobile Modal
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
              <div 
                className="w-full max-w-lg max-h-[80vh] overflow-auto p-4 bg-cyber-bg-dark border border-cyber-border rounded shadow-lg"
                onClick={e => e.stopPropagation()}
              >
                <button
                  className="absolute top-2 right-2 w-8 h-8 flex items-center justify-center
                           text-cyber-text/60 hover:text-cyber-text bg-cyber-bg/30 rounded-full"
                  onClick={() => setIsVisible(false)}
                >
                  ✕
                </button>
                <div className="pr-8">
                  {content}
                  {onAction && (
                    <div className="mt-4 flex justify-end">
                      <button
                        onClick={() => {
                          if (canAct && onAction) {
                            onAction();
                            setIsVisible(false);
                          }
                        }}
                        disabled={!canAct}
                        className={`px-4 py-2 rounded border ${
                          canAct
                            ? 'bg-cyber-bg border-cyber-cyan text-cyber-cyan hover:bg-cyber-cyan hover:text-cyber-bg-dark'
                            : 'bg-cyber-bg-dark border-cyber-border text-cyber-text/40 cursor-not-allowed'
                        } transition-colors`}
                      >
                        {actionText}
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ) : (
            // Desktop Tooltip
            <div className="absolute z-50 w-96 p-4 mt-2 bg-cyber-bg-dark border border-cyber-border rounded shadow-lg">
              {content}
            </div>
          )}
        </>
      )}
    </div>
  );
};