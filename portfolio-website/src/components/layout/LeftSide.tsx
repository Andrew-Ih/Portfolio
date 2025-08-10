'use client';

import React, { useState } from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { SocialIcons } from '../ui/SocialIcons';

interface LeftSideProps {
  className?: string;
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export const LeftSide: React.FC<LeftSideProps> = ({ 
  className = '', 
  activeSection, 
  onSectionChange 
}) => {
  const { currentTheme, setTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const sections = [
    { id: 'about', label: 'ABOUT' },
    { id: 'experience', label: 'EXPERIENCE' },
    { id: 'projects', label: 'PROJECTS' },
  ];

//   const toggleTheme = () => {
//     setTheme(currentTheme.name === 'Light' ? 'dark' : 'light');
//   };
  
  return (
    <div 
      // Add border-r to add line inbetween left and right side
      className={`${className} flex flex-col justify-between h-screen transition-colors duration-200`}
      style={{ 
        backgroundColor: currentTheme.colors.primary,
        borderColor: currentTheme.colors.border,
        color: currentTheme.colors.text 
      }}
    >
      {/* Mobile Menu Button */}
      <button
        className="lg:hidden absolute top-6 right-6 z-50 p-2 rounded-md"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        style={{ 
          backgroundColor: currentTheme.colors.surface,
          border: `1px solid ${currentTheme.colors.border}`,
          color: currentTheme.colors.text 
        }}
        aria-label="Toggle menu"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          {isMobileMenuOpen ? (
            <path d="M18 6L6 18M6 6l12 12" />
          ) : (
            <path d="M3 12h18M3 6h18M3 18h18" />
          )}
        </svg>
      </button>
      
      {/* Main Content */}
      <div className={`lg:block ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-16 py-12">
          <div className="max-w-xl mx-auto">
            {/* Name and Title */}
            <div className="mb-12">
              <h1 
                className="text-4xl lg:text-5xl font-bold mb-2"
                style={{ color: currentTheme.colors.text }}
              >
                Andrew Iheanacho
              </h1>
              <h2 
                className="text-xl lg:text-2xl font-medium mb-4"
                style={{ color: currentTheme.colors.textSecondary }}
              >
                Full Stack Software Engineer
              </h2>
              <p 
                className="text-base leading-relaxed"
                style={{ color: currentTheme.colors.textSecondary }}
              >
                I build scalable, cloud-native applications that bridge frontend interactivity with robust backend and database systems, specializing in AWS, Azure, and modern web technologies.
              </p>
            </div>
            
            {/* Navigation */}
            <nav className="mb-12">
              <ul className="space-y-4">
                {sections.map((section) => (
                  <li key={section.id}>
                    <button
                      onClick={() => {
                        onSectionChange(section.id);
                        setIsMobileMenuOpen(false);
                      }}
                      className="flex items-center gap-3 w-full text-left group"
                    >
                      <div 
                        className={`transition-all duration-300 ${
                          activeSection === section.id 
                            ? 'w-15 h-0.5 bg-current' 
                            : 'w-8 h-0.5 bg-gray-400'
                        }`}
                        style={{ 
                          color: activeSection === section.id 
                            ? currentTheme.colors.accent 
                            : 'inherit'
                        }}
                      />
                      <span 
                        className="text-lg font-medium transition-colors duration-200"
                        style={{ 
                          color: activeSection === section.id 
                            ? currentTheme.colors.accent 
                            : currentTheme.colors.text 
                        }}
                      >
                        {section.label}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Theme Toggle */}
            {/* <div className="mb-12">
              <button
                onClick={toggleTheme}
                className="flex items-center gap-2 px-4 py-2 rounded-md transition-colors duration-200 hover:opacity-80"
                style={{
                  backgroundColor: currentTheme.colors.surface,
                  border: `1px solid ${currentTheme.colors.border}`,
                  color: currentTheme.colors.text
                }}
              >
                {currentTheme.name === 'Light' ? (
                  <>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                    </svg>
                    Dark Mode
                  </>
                ) : (
                  <>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="5"/>
                      <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
                    </svg>
                    Light Mode
                  </>
                )}
              </button>
            </div> */}
          </div>
        </div>
      </div>

      {/* Social Icons - Positioned lower, closer to bottom */}
      <div className="px-16 pb-10">
        <div className="max-w-xl mx-auto">
          <SocialIcons />
        </div>
      </div>
      
      {/* Mobile Social Icons */}
      <div className={`lg:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <SocialIcons />
      </div>
    </div>
  );
}; 