import React from 'react';
import { useTheme } from '../../hooks/useTheme';

export function ThemeToggle() {
  const [theme, setTheme] = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="matrix-button"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? '☀️' : '🌙'}
    </button>
  );
}