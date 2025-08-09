'use client';

import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { ExperienceItem } from '../ExperienceItem';

export const ExperienceSection: React.FC = () => {
  const { currentTheme } = useTheme();

  const experiences = [
    {
      id: '1',
      company: 'Value Partners Investments',
      position: 'Software Engineer Intern',
      location: 'Winnipeg, MB',
      period: 'May 2025 – Present',
      description: 'Developing and maintaining scalable RESTful APIs in C#/.NET, applying Clean Architecture and SOLID principles to ensure maintainable, high-performance backend systems.',
      achievements: [
        'Designing and optimizing CI/CD pipelines in Azure DevOps, leveraging deployment slots for staging, validation, and production releases, reducing manual deployment time and increasing release reliability',
        'Refactoring frontend, backend and API endpoints for improved performance, writing unit tests with XUnit to achieve high code coverage, and using Postman extensively for testing and debugging',
        'Deploying cloud services with Azure Function Apps and App Services, delivering event-driven, scalable architectures',
        'Building responsive web apps using React, Next.js, TypeScript, JavaScript, Tailwind CSS, and MUI, ensuring UI consistency, accessibility, and user-centric design',
        'Participating in code reviews to enforce best practices, reduce technical debt, and maintain long-term scalability'
      ],
      technologies: ['C#', '.NET', 'Azure', 'React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'MUI', 'XUnit', 'Postman']
    },
    {
      id: '2',
      company: 'University of Manitoba - IST Technology Services',
      position: 'IT Support Analyst',
      location: 'Winnipeg, MB',
      period: 'Sep. 2024 – Apr. 2025',
      description: 'Managed user accounts and permissions through Azure AD, Entra, and Exchange Admin Center.',
      achievements: [
        'Automated tasks using PowerShell to streamline account creation, management, troubleshooting and issue resolution',
        'Resolved 30+ daily tickets using Cherwell and IT service management tools, improving issue resolution time by 20%',
        'Created detailed documentation and training materials to improve resource utilization and reduce recurring technical issues'
      ],
      technologies: ['PowerShell', 'Azure AD', 'Entra', 'Exchange Admin Center', 'Cherwell']
    }
  ];

  return (
    <section>
      <h2 
        className="text-3xl font-bold mb-8"
        style={{ color: currentTheme.colors.text }}
      >
        Experience
      </h2>
      
      <div className="space-y-8">
        {experiences.map((experience) => (
          <ExperienceItem key={experience.id} experience={experience} />
        ))}
      </div>
    </section>
  );
}; 