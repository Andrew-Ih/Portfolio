'use client';

import React, { useState, useRef, useEffect } from 'react';
import { LeftSide } from './LeftSide';
import { RightSide } from './RightSide';

export const Layout: React.FC = () => {
  const [activeSection, setActiveSection] = useState('about');
  const rightSideRef = useRef<HTMLDivElement>(null);
  
  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    
    if (rightSideRef.current) {
      const sectionElement = rightSideRef.current.querySelector(`#${sectionId}`);
      if (sectionElement) {
        const containerRect = rightSideRef.current.getBoundingClientRect();
        const elementRect = sectionElement.getBoundingClientRect();
        const offset = 88; // Accounts for the py-12 padding (48px)
        
        const scrollTop = rightSideRef.current.scrollTop + (elementRect.top - containerRect.top) - offset;
        
        rightSideRef.current.scrollTo({
          top: scrollTop,
          behavior: 'smooth'
        });
      }
    }
  };

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (!rightSideRef.current) return;
      
      const sections = ['about', 'experience', 'projects'];
      // const scrollTop = rightSideRef.current.scrollTop;
      const containerHeight = rightSideRef.current.clientHeight;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionId = sections[i];
        const sectionElement = rightSideRef.current.querySelector(`#${sectionId}`);
        if (sectionElement) {
          const rect = sectionElement.getBoundingClientRect();
          const containerRect = rightSideRef.current.getBoundingClientRect();
          const sectionTop = rect.top - containerRect.top;
          
          if (sectionTop <= containerHeight / 2) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    const rightSide = rightSideRef.current;
    if (rightSide) {
      rightSide.addEventListener('scroll', handleScroll);
      return () => rightSide.removeEventListener('scroll', handleScroll);
    }
  }, []);
  
  return (
    <div className="flex flex-col lg:flex-row h-screen">
      <LeftSide 
        className="lg:w-2/5 py-10 pl-14"
        activeSection={activeSection}
        onSectionChange={scrollToSection}
      />
      <RightSide 
        ref={rightSideRef}
        className="lg:w-3/5 py-10 pr-14"
        activeSection={activeSection}
      />
    </div>
  );
}; 