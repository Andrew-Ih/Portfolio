'use client';

import React from 'react';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { Layout } from '@/components/layout/Layout';
import { MouseHighlight } from '@/components/ui/MouseHighlight';

export default function HomePage() {
  return (
    <ThemeProvider>
      <div className="relative">
        <Layout />
        <MouseHighlight />
      </div>
    </ThemeProvider>
  );
}
