'use client';

import React, { forwardRef } from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { AboutSection } from '../sections/AboutSection';
import { ExperienceSection } from '../sections/ExperienceSection';
import { ProjectsSection } from '../sections/ProjectsSection';

interface RightSideProps {
  className?: string;
  activeSection: string;
}

export const RightSide = forwardRef<HTMLDivElement, RightSideProps>(({ className = '' }, ref) => {
  const { currentTheme } = useTheme();
  
  return (
    <div 
      ref={ref}
      className={`${className} overflow-y-auto transition-colors duration-200`}
      style={{ 
        backgroundColor: currentTheme.colors.background,
        color: currentTheme.colors.text 
      }}
    >
      <div className="pl-16 pr-10 py-12">
        <div className="max-w-2xl mx-auto space-y-36">
          <div id="about">
            <AboutSection />
          </div>
          <div id="experience">
            <ExperienceSection />
          </div>
          <div id="projects">
            <ProjectsSection />
          </div>
        </div>
      </div>
    </div>
  );
});

RightSide.displayName = 'RightSide'; 