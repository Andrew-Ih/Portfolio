'use client';

import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { ProjectItem, Project } from '../ProjectItem';
import { LinkWithIcon } from '../ui/LinkWithIcon';

interface ProjectsSectionProps {
  className?: string;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ className = '' }) => {
  const { currentTheme } = useTheme();
  
  // Sample project data - you can replace this with your own
  const projects: Project[] = [
    {
      id: '1',
      title: 'AI-Powered Expense Tracker',
      description: 'Built a full-stack SaaS web app with 20+ active users that allows users to track expenses, manage budgets and query an AI chatbot for personalized financial insights. Integrated OpenAI GPT API with custom prompt engineering for financial analysis and budget recommendations.',
      link: 'https://github.com/Andrew-Ih/ExpenseTracker',
      thumbnail: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop&crop=center',
      stats: { type: 'stars', value: '1' },
      technologies: ['Node.js', 'TypeScript', 'Express.js', 'AWS', 'Next.js', 'OpenAI', 'REST API'],
    },
    {
      id: '2',
      title: 'StockTracker',
      description: 'Built and deployed a .NET Azure Function App (C#) serving RESTful APIs for stock data, top gainers, and losers. Created responsive frontend with Next.js and Tailwind CSS, implemented CI/CD pipelines with Azure DevOps for automated deployment.',
      link: 'https://github.com/Andrew-Ih/StockTrackerBackend',
      thumbnail: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=300&fit=crop&crop=center',
      stats: { type: 'stars', value: '1' },
      technologies: ['C#', 'Azure', 'Next.js', 'DevOps', 'CI/CD Pipelines', 'REST API'],
    },
    {
      id: '3',
      title: 'BingeBuddy - Movie Discovery App',
      description: 'Developed a responsive movie search platform using React and Vite to deliver real-time movie metadata via the TMDB API. Integrated AppWrite as the backend service to track and display the top 5 most searched movies based on user activity.',
      link: 'https://github.com/Andrew-Ih/BingeBuddy',
      thumbnail: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400&h=300&fit=crop&crop=center',
      stats: { type: 'stars', value: '1' },
      technologies: ['React', 'Vite', 'Tailwind CSS', 'AppWrite', 'TMDB API', 'REST API'],
    },
    {
      id: '4',
      title: 'Weather App',
      description: 'A responsive weather application built with React.js and Tailwind CSS. Users can search for any city or country to instantly view the current weather and a 5-day forecast. The app fetches real-time weather data and provides an intuitive user interface.',
      link: 'https://github.com/Andrew-Ih/weather-app',
      thumbnail: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=400&h=300&fit=crop&crop=center',
      stats: { type: 'stars', value: '1' },
      technologies: ['React.js', 'Tailwind CSS', 'Weather API', 'Responsive Design'],
    },
  ];
  
  return (
    <section className={className}>
      <h2 
        className="text-2xl font-bold mb-6"
        style={{ color: currentTheme.colors.text }}
      >
        PROJECTS
      </h2>
      
      <div className="space-y-6">
        {projects.map((project) => (
          <ProjectItem key={project.id} project={project} />
        ))}
      </div>
      
      {/* View Full Project Archive Link */}
      <div className="mt-8 pt-6 border-t" style={{ borderColor: currentTheme.colors.border }}>
        <LinkWithIcon 
          href="/projects" 
          className="text-base font-medium hover:underline"
          external={false}
        >
          View Full Project Archive →
        </LinkWithIcon>
      </div>
    </section>
  );
}; 