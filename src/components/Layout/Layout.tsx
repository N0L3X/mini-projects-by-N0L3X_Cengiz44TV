import React from 'react';
import { Navbar } from './Navbar';
import { MatrixBanner } from './MatrixBanner';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gray-900">
      <div className="h-64 relative overflow-hidden bg-black">
        <MatrixBanner />
        <div className="absolute inset-0 z-10">
          <Navbar />
        </div>
      </div>
      <main className="container mx-auto p-4">
        {children}
      </main>
    </div>
  );
}