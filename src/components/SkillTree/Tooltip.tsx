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
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const tooltipRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
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

  // Update tooltip position
  const updatePosition = () => {
    if (!tooltipRef.current || !contentRef.current) return;
    
    const rect = tooltipRef.current.getBoundingClientRect();
    const contentRect = contentRef.current.getBoundingClientRect();
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    let x = rect.left;
    let y = rect.bottom + 8; // 8px offset from the trigger element

    // Adjust horizontal position if tooltip would overflow viewport
    if (x + contentRect.width > viewportWidth) {
      x = viewportWidth - contentRect.width - 16; // 16px margin from viewport edge
    }

    // If tooltip would overflow bottom of viewport, show it above the trigger element
    if (y + contentRect.height > viewportHeight) {
      y = rect.top - contentRect.height - 8;
    }

    setPosition({ x, y });
  };

  useEffect(() => {
    if (isVisible && !isMobile) {
      updatePosition();
      window.addEventListener('scroll', updatePosition, true);
      window.addEventListener('resize', updatePosition);
      
      return () => {
        window.removeEventListener('scroll', updatePosition, true);
        window.removeEventListener('resize', updatePosition);
      };
    }
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
      className="relative inline-block"
      onMouseEnter={() => {
        if (!isMobile) {
          setIsVisible(true);
        }
      }}
      onMouseLeave={() => {
        if (!isMobile) {
          setIsVisible(false);
        }
      }}
      onClick={handleClick}
    >
      {children}

      {isVisible && (
        <>
          {isMobile ? (
            // Mobile Modal
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
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
            <div
              ref={contentRef}
              style={{
                position: 'fixed',
                left: `${position.x}px`,
                top: `${position.y}px`,
                maxHeight: '80vh'
              }}
              className="z-[100] w-96 p-4 overflow-y-auto bg-cyber-bg-dark border border-cyber-border rounded shadow-lg"
            >
              {content}
            </div>
          )}
        </>
      )}
    </div>
  );
};