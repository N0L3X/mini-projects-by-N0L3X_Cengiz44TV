import React from 'react';
import { Link } from 'react-router-dom';
import { ThemeToggle } from './ThemeToggle';

export function Navbar() {
  return (
    <nav className="bg-black/80 border-b border-matrix-green">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <h1 className="text-2xl font-mono text-matrix-green matrix-glow">
            Matrix Portfolio
          </h1>
          <div className="flex items-center space-x-6">
            <NavLink to="/todo">Todo</NavLink>
            <NavLink to="/weather">Weather</NavLink>
            <NavLink to="/calculator">Calculator</NavLink>
            <NavLink to="/taskmanager">Tasks</NavLink>
            <NavLink to="/analytics">Analytics</NavLink>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link to={to} className="matrix-text hover:matrix-glow transition-all duration-300">
      {children}
    </Link>
  );
}