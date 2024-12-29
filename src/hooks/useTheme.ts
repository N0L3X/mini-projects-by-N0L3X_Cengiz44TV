import { useState, useEffect } from 'react';

type Theme = 'dark' | 'light';

export function useTheme() {
  const [theme] = useState<Theme>('dark');

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  }, []);

  return [theme, () => {}] as const;
}