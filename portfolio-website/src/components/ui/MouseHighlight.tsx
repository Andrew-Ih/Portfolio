'use client';

import React, { useEffect, useState } from 'react';
import { useTheme } from '@/contexts/ThemeContext';

export const MouseHighlight: React.FC = () => {
  const { currentTheme } = useTheme();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
      
      // Hide the highlight after mouse stops moving
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => setIsVisible(false), 100);
    };
    
    const handleMouseLeave = () => {
      setIsVisible(false);
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      clearTimeout(timeoutId);
    };
  }, []);
  
  if (!isVisible) return null;
  
  return (
    <div
      className="fixed pointer-events-none z-50 w-96 h-96 rounded-full opacity-30 blur-3xl transition-opacity duration-200"
      style={{
        left: mousePosition.x - 192, // Center the highlight on mouse
        top: mousePosition.y - 192,
        background: `radial-gradient(circle, ${currentTheme.colors.glow} 0%, transparent 70%)`,
        transform: 'translate(-50%, -50%)',
      }}
    />
  );
}; 