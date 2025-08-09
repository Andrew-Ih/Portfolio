'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface ThemeColors {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  surface: string;
  text: string;
  textSecondary: string;
  border: string;
  hover: string;
  glow: string;
}

export interface Theme {
  name: string;
  colors: ThemeColors;
}

export const themes: Record<string, Theme> = {
  light: {
    name: 'Light',
    colors: {
      primary: '#ffffff',
      secondary: '#f8fafc',
      accent: '#3b82f6',
      background: '#ffffff',
      surface: '#f1f5f9',
      text: '#1e293b',
      textSecondary: '#64748b',
      border: '#e2e8f0',
      hover: '#f8fafc',
      glow: 'rgba(59, 130, 246, 0.1)',
    },
  },
  dark: {
    name: 'Dark',
    colors: {
      primary: '#000000',
      secondary: '#111111',
      accent: '#3b82f6',
      background: '#000000',
      surface: '#0a0a0a',
      text: '#ffffff',
      textSecondary: '#9ca3af',
      border: '#1f2937',
      hover: '#1a1a1a',
      glow: 'rgba(59, 130, 246, 0.1)',
    },
  },
  // You can easily add more themes here
  // custom: { ... },
};

interface ThemeContextType {
  currentTheme: Theme;
  setTheme: (themeName: string) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState<Theme>(themes.light);

  const setTheme = (themeName: string) => {
    if (themes[themeName]) {
      setCurrentTheme(themes[themeName]);
    }
  };

  return (
    <ThemeContext.Provider value={{ currentTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}; 