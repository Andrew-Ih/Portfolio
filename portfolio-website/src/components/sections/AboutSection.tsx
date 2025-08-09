'use client';

import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';

// interface AboutSectionProps {
//   className?: string;
// }


export const AboutSection: React.FC = () => {
  const { currentTheme } = useTheme();

  return (
    <section>
      <h2 
        className="text-3xl font-bold mb-8"
        style={{ color: currentTheme.colors.text }}
      >
        About
      </h2>
      
      <div className="space-y-6">
        <p 
          className="leading-relaxed"
          style={{ color: currentTheme.colors.textSecondary }}
        >
          I am a Fourth-Year Computer Science Honours (Co-op) student at the University of Manitoba, graduating in Fall 2026. Currently, I am working as a Full Stack Software Engineer Intern at Value Partners Investments, where I design and implement scalable, cloud-native applications that bridge frontend interactivity with robust backend and database systems.
        </p>
        
        <p 
          className="leading-relaxed"
          style={{ color: currentTheme.colors.textSecondary }}
        >
          My passion lies in building high-performance, user-centric software that combines clean design with technical excellence. I specialize in backend and cloud development, with a strong foundation in full stack engineering and DevOps practices.
        </p>

        <div>
          <h3 
            className="text-xl font-semibold mb-4"
            style={{ color: currentTheme.colors.text }}
          >
            Education & Certifications
          </h3>
          <div className="space-y-3">
            <div>
              <h4 
                className="font-medium"
                style={{ color: currentTheme.colors.text }}
              >
                Bachelor of Computer Science – Honours (Co-op)
              </h4>
              <p 
                className="text-sm"
                style={{ color: currentTheme.colors.textSecondary }}
              >
                University of Manitoba • Expected Graduation: Dec 2026
              </p>
            </div>
            <div>
              <h4 
                className="font-medium"
                style={{ color: currentTheme.colors.text }}
              >
                AWS Certified Cloud Practitioner
              </h4>
              <p 
                className="text-sm"
                style={{ color: currentTheme.colors.textSecondary }}
              >
                Issued by AWS Training and Certification
              </p>
            </div>
          </div>
        </div>

        <div>
          <h3 
            className="text-xl font-semibold mb-4"
            style={{ color: currentTheme.colors.text }}
          >
            Current Focus
          </h3>
          <ul className="space-y-2">
            <li 
              className="flex items-start gap-2"
              style={{ color: currentTheme.colors.textSecondary }}
            >
              <span className="text-blue-500 mt-1">•</span>
              <span>Cloud Architecture & Deployment: Designing and deploying secure, scalable solutions on AWS and Azure</span>
            </li>
            <li 
              className="flex items-start gap-2"
              style={{ color: currentTheme.colors.textSecondary }}
            >
              <span className="text-blue-500 mt-1">•</span>
              <span>Backend Engineering: Building RESTful APIs and microservices using .NET and Node.js</span>
            </li>
            <li 
              className="flex items-start gap-2"
              style={{ color: currentTheme.colors.textSecondary }}
            >
              <span className="text-blue-500 mt-1">•</span>
              <span>Frontend Development: Creating responsive, accessible UIs with React, Next.js, and Tailwind CSS</span>
            </li>
            <li 
              className="flex items-start gap-2"
              style={{ color: currentTheme.colors.textSecondary }}
            >
              <span className="text-blue-500 mt-1">•</span>
              <span>DevOps & CI/CD: Automating workflows and infrastructure using GitHub Actions, Azure Pipelines, and IaC tools</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}; 