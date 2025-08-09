'use client';

import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { Tag } from './ui/Tag';
import { LinkWithIcon } from './ui/LinkWithIcon';

export interface Project {
  id: string;
  title: string;
  description: string;
  link?: string;
  thumbnail?: string;
  stats?: {
    type: 'stars' | 'downloads' | 'forks';
    value: string;
  };
  technologies: string[];
}

interface ProjectItemProps {
  project: Project;
}

export const ProjectItem: React.FC<ProjectItemProps> = ({ project }) => {
  const { currentTheme } = useTheme();
  
  const getStatIcon = (type: string) => {
    switch (type) {
      case 'stars':
        return (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
        );
      case 'downloads':
        return (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
            <polyline points="7,10 12,15 17,10"/>
            <line x1="12" y1="15" x2="12" y2="3"/>
          </svg>
        );
      case 'forks':
        return (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/>
            <path d="M6 20H4.5a2.5 2.5 0 0 1 0-5H6"/>
            <path d="M6 9v6"/>
            <path d="M6 20v-6"/>
            <path d="M12 9h1.5a2.5 2.5 0 0 1 0 5H12"/>
            <path d="M12 20h1.5a2.5 2.5 0 0 1 0-5H12"/>
            <path d="M12 9v6"/>
            <path d="M12 20v-6"/>
          </svg>
        );
      default:
        return null;
    }
  };
  
  return (
    <div className="mb-16 last:mb-0">
      <div className="flex flex-col lg:flex-row gap-8 items-start">
        {/* Left side - Project content */}
        <div className="flex-1 min-w-0">
          {/* Title and Link */}
          <div className="mb-3">
            {project.link ? (
              <LinkWithIcon href={project.link} className="text-xl font-bold">
                {project.title}
              </LinkWithIcon>
            ) : (
              <h3 
                className="text-xl font-bold"
                style={{ color: currentTheme.colors.text }}
              >
                {project.title}
              </h3>
            )}
          </div>
          
          {/* Description */}
          <p 
            className="mb-4 leading-relaxed"
            style={{ color: currentTheme.colors.textSecondary }}
          >
            {project.description}
          </p>
          
          {/* Stats and Technologies */}
          <div className="flex flex-wrap items-center gap-4">
            {project.stats && (
              <div className="flex items-center gap-2">
                <span style={{ color: currentTheme.colors.textSecondary }}>
                  {getStatIcon(project.stats.type)}
                </span>
                <span 
                  className="text-sm font-medium"
                  style={{ color: currentTheme.colors.textSecondary }}
                >
                  {project.stats.value}
                </span>
              </div>
            )}
            
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Tag key={tech}>{tech}</Tag>
              ))}
            </div>
          </div>
        </div>
        
        {/* Right side - Thumbnail */}
        {project.thumbnail && (
          <div className="lg:w-48 lg:flex-shrink-0">
            <div className="rounded-lg overflow-hidden border" style={{ borderColor: currentTheme.colors.border }}>
              <img 
                src={project.thumbnail} 
                alt={project.title}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}; 