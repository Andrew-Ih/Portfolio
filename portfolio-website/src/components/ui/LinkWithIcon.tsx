'use client';

import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';

interface LinkWithIconProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
}

export const LinkWithIcon: React.FC<LinkWithIconProps> = ({ 
  href, 
  children, 
  className = '',
  external = true 
}) => {
  const { currentTheme } = useTheme();
  
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className={`inline-flex items-center gap-2 hover:opacity-80 transition-opacity duration-200 ${className}`}
      style={{ color: currentTheme.colors.accent }}
    >
      {children}
      {external && (
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="inline-block"
        >
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
          <polyline points="15,3 21,3 21,9" />
          <line x1="10" y1="14" x2="21" y2="3" />
        </svg>
      )}
    </a>
  );
}; 