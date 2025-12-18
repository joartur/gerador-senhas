'use client';

import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

export function useTheme() {
  return useContext(ThemeContext);
}

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');
  const [mounted, setMounted] = useState(false);

  // Sempre iniciar com light
  useEffect(() => {
    setMounted(true);
    setTheme('light'); // Forçar light sempre
    
    // Remover qualquer tema salvo anterior
    localStorage.removeItem('theme');
  }, []);

  // Aplicar tema ao documento
  useEffect(() => {
    if (!mounted) return;
    
    const root = document.documentElement;
    root.classList.remove('dark'); // Sempre remover dark
    root.classList.add('light');   // Sempre adicionar light
    
    localStorage.setItem('theme', 'light'); // Sempre salvar como light
  }, [mounted]);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    
    const root = document.documentElement;
    if (newTheme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
    }
    
    localStorage.setItem('theme', newTheme);
  };

  const value = {
    theme,
    toggleTheme,
    mounted
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}