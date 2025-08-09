'use client';

import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';

interface TagProps {
  children: React.ReactNode;
  className?: string;
}

export const Tag: React.FC<TagProps> = ({ children, className = '' }) => {
  const { currentTheme } = useTheme();
  
  return (
    <span
      className={`inline-block px-3 py-1 text-sm font-medium rounded-full transition-colors duration-200 ${className}`}
      style={{
        backgroundColor: currentTheme.colors.surface,
        color: currentTheme.colors.text,
        border: `1px solid ${currentTheme.colors.border}`,
      }}
    >
      {children}
    </span>
  );
}; 