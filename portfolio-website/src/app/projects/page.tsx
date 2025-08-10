'use client';

import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { Tag } from '@/components/ui/Tag';
import { LinkWithIcon } from '@/components/ui/LinkWithIcon';

interface Project {
  id: string;
  title: string;
  description: string;
  link: string;
  stats?: {
    type: 'stars' | 'downloads' | 'forks';
    value: string;
  };
  technologies: string[];
  category: string;
}

export default function ProjectsPage() {
  const { currentTheme } = useTheme();

  const allProjects: Project[] = [
    {
      id: '1',
      title: 'AI-Powered Expense Tracker',
      description: 'Full-stack SaaS web app with 20+ active users for expense tracking, budget management, and AI-powered financial insights using OpenAI GPT API.',
      link: 'https://github.com/Andrew-Ih/ExpenseTracker',
      stats: { type: 'stars', value: '1' },
      technologies: ['Node.js', 'TypeScript', 'Express.js', 'AWS', 'Next.js', 'OpenAI', 'REST API'],
      category: 'Full Stack'
    },
    {
      id: '2',
      title: 'StockTracker Backend',
      description: '.NET Azure Function App (C#) serving RESTful APIs for stock data, top gainers, and losers with Azure DevOps CI/CD pipelines.',
      link: 'https://github.com/Andrew-Ih/StockTrackerBackend',
      technologies: ['C#', 'Azure', 'Azure Functions', 'REST API', 'CI/CD'],
      category: 'Backend'
    },
    {
      id: '3',
      title: 'StockTracker Frontend',
      description: 'Responsive stock market dashboard built using Next.js, TypeScript, and Tailwind CSS, integrated with Azure Functions API.',
      link: 'https://github.com/Andrew-Ih/StockTrackerFrontend',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Azure Static Web Apps'],
      category: 'Frontend'
    },
    {
      id: '4',
      title: 'BingeBuddy',
      description: 'Movie discovery platform using React and Vite with TMDB API integration and AppWrite backend for tracking popular searches.',
      link: 'https://github.com/Andrew-Ih/BingeBuddy',
      stats: { type: 'stars', value: '1' },
      technologies: ['React', 'Vite', 'Tailwind CSS', 'AppWrite', 'TMDB API'],
      category: 'Frontend'
    },
    {
      id: '5',
      title: 'Weather App',
      description: 'Responsive weather application with React.js and Tailwind CSS for current weather and 5-day forecasts.',
      link: 'https://github.com/Andrew-Ih/weather-app',
      stats: { type: 'stars', value: '1' },
      technologies: ['React.js', 'Tailwind CSS', 'Weather API'],
      category: 'Frontend'
    },
    {
      id: '6',
      title: 'COMP-3020-M3',
      description: 'Luxury Electric Vehicle - Vertical Prototype for university coursework.',
      link: 'https://github.com/Andrew-Ih/COMP-3020-M3',
      technologies: ['HTML'],
      category: 'Academic'
    }
  ];

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
    <div 
      className="min-h-screen transition-colors duration-200"
      style={{
        backgroundColor: currentTheme.colors.background,
        color: currentTheme.colors.text
      }}
    >
      <div className="max-w-7xl mx-auto px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <LinkWithIcon 
              href="/" 
              external={false}
              className="flex items-center gap-2 text-lg font-medium hover:opacity-80"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M19 12H5M12 19l-7-7 7-7"/>
              </svg>
              Back to Home
            </LinkWithIcon>
          </div>
          
          <h1 
            className="text-4xl font-bold mb-4"
            style={{ color: currentTheme.colors.text }}
          >
            Project Archive
          </h1>
          <p 
            className="text-xl"
            style={{ color: currentTheme.colors.textSecondary }}
          >
            A comprehensive collection of my projects, experiments, and contributions
          </p>
        </div>

        {/* Projects Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr 
                className="border-b"
                style={{ borderColor: currentTheme.colors.border }}
              >
                <th 
                  className="text-left py-4 px-6 font-semibold"
                  style={{ color: currentTheme.colors.text }}
                >
                  Project
                </th>
                <th 
                  className="text-left py-4 px-6 font-semibold"
                  style={{ color: currentTheme.colors.text }}
                >
                  Description
                </th>
                <th 
                  className="text-left py-4 px-6 font-semibold"
                  style={{ color: currentTheme.colors.text }}
                >
                  Technologies
                </th>
                <th 
                  className="text-left py-4 px-6 font-semibold"
                  style={{ color: currentTheme.colors.text }}
                >
                  Category
                </th>
                <th 
                  className="text-left py-4 px-6 font-semibold"
                  style={{ color: currentTheme.colors.text }}
                >
                  Stats
                </th>
              </tr>
            </thead>
            <tbody>
              {allProjects.map((project) => (
                <tr 
                  key={project.id}
                  className="border-b hover:opacity-80 transition-opacity"
                  style={{ borderColor: currentTheme.colors.border }}
                >
                  <td className="py-6 px-6">
                    <LinkWithIcon 
                      href={project.link}
                      className="text-lg font-semibold hover:opacity-80"
                      // style={{ color: currentTheme.colors.accent }}
                    >
                      {project.title}
                    </LinkWithIcon>
                  </td>
                  <td className="py-6 px-6 max-w-md">
                    <p 
                      className="leading-relaxed"
                      style={{ color: currentTheme.colors.textSecondary }}
                    >
                      {project.description}
                    </p>
                  </td>
                  <td className="py-6 px-6">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Tag key={tech}>{tech}</Tag>
                      ))}
                    </div>
                  </td>
                  <td className="py-6 px-6">
                    <span 
                      className="px-3 py-1 rounded-full text-sm font-medium"
                      style={{
                        backgroundColor: currentTheme.colors.surface,
                        color: currentTheme.colors.textSecondary,
                        border: `1px solid ${currentTheme.colors.border}`
                      }}
                    >
                      {project.category}
                    </span>
                  </td>
                  <td className="py-6 px-6">
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
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
} 