'use client';

import React from 'react';
import Image from 'next/image';
import { useTheme } from '@/contexts/ThemeContext';

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
        {/* First paragraph with image */}
        <div className="flex flex-col lg:flex-row gap-6 items-start">
          {/* Profile Image */}
          <div className="lg:flex-shrink-0">
            <div className="w-64 h-48 rounded-lg overflow-hidden border" style={{ borderColor: currentTheme.colors.border }}>
              <Image 
                src="/images/Andrew_Iheanacho_BW2-min.jpg" 
                alt="Andrew Iheanacho"
                width={192}
                height={192}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* First paragraph only */}
          <div className="flex-1 min-w-0">
            <p 
              className="leading-relaxed"
              style={{ color: currentTheme.colors.textSecondary }}
            >
              I am a Fourth-Year Computer Science Honours (Co-op) student at the University of Manitoba, graduating in Fall 2026. Currently, I am working as a Full Stack Software Engineer Intern at Value Partners Investments, where I design and implement scalable, cloud-native applications that bridge frontend interactivity with robust backend and database systems.
            </p>
          </div>
        </div>
        
        {/* Second paragraph - full width */}
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

        {/* Resume Button */}
        <div className="mt-8">
          <a 
            href="/AndrewIheanacho-Resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 text-lg font-semibold rounded-lg transition-all duration-200 hover:scale-105 bg-gray-800 hover:bg-gray-700 text-white shadow-lg"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
              <polyline points="14,2 14,8 20,8"/>
              <line x1="16" y1="13" x2="8" y2="13"/>
              <line x1="16" y1="17" x2="8" y2="17"/>
              <polyline points="10,9 9,9 8,9"/>
            </svg>
            View Resume
          </a>
        </div>

        {/* <div>
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
        </div> */}
      </div>
    </section>
  );
}; 