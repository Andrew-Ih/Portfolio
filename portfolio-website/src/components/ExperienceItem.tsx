'use client';

import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { Tag } from './ui/Tag';

export interface Experience {
  id: string;
  company: string;
  position: string;
  location: string;
  period: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

interface ExperienceItemProps {
  experience: Experience;
}

export const ExperienceItem: React.FC<ExperienceItemProps> = ({ experience }) => {
  const { currentTheme } = useTheme();

  return (
    <div className="mb-8 last:mb-0">
      {/* Header */}
      <div className="mb-4">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-2 mb-2">
          <h3 
            className="text-xl font-bold"
            style={{ color: currentTheme.colors.text }}
          >
            {experience.position}
          </h3>
          <span 
            className="text-sm font-medium"
            style={{ color: currentTheme.colors.textSecondary }}
          >
            {experience.period}
          </span>
        </div>
        
        <div className="flex flex-col lg:flex-row lg:items-center gap-2 mb-3">
          <h4 
            className="text-lg font-semibold"
            style={{ color: currentTheme.colors.accent }}
          >
            {experience.company}
          </h4>
          <span 
            className="text-sm"
            style={{ color: currentTheme.colors.textSecondary }}
          >
            {experience.location}
          </span>
        </div>
      </div>
      
      {/* Description */}
      <p 
        className="mb-4 leading-relaxed"
        style={{ color: currentTheme.colors.textSecondary }}
      >
        {experience.description}
      </p>
      
      {/* Achievements */}
      {experience.achievements && experience.achievements.length > 0 && (
        <div className="mb-4">
          <ul className="space-y-2">
            {experience.achievements.map((achievement, index) => (
              <li 
                key={index}
                className="flex items-start gap-2"
                style={{ color: currentTheme.colors.textSecondary }}
              >
                <span className="text-blue-500 mt-1">•</span>
                <span className="leading-relaxed">{achievement}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
      
      {/* Technologies */}
      <div className="flex flex-wrap gap-2">
        {experience.technologies.map((tech) => (
          <Tag key={tech}>{tech}</Tag>
        ))}
      </div>
    </div>
  );
}; 