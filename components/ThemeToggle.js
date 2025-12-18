'use client';

import { useTheme } from './ThemeProvider';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
  const { theme, toggleTheme, mounted } = useTheme();

  if (!mounted) {
    return (
      <div className="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-700 animate-pulse"></div>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-gray-100 to-white dark:from-gray-800 dark:to-gray-900 shadow-lg hover:shadow-xl dark:shadow-gray-900/50 border border-gray-200 dark:border-gray-700 flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 group"
      aria-label={`Alternar para modo ${theme === 'light' ? 'escuro' : 'claro'}`}
    >
      <div className="relative w-8 h-8">
        {/* Sol */}
        <Sun 
          className={`absolute inset-0 transition-all duration-300 transform ${
            theme === 'light' 
              ? 'opacity-100 rotate-0 text-yellow-500' 
              : 'opacity-0 rotate-90 text-gray-400'
          }`}
          size={32}
        />
        
        {/* Lua */}
        <Moon 
          className={`absolute inset-0 transition-all duration-300 transform ${
            theme === 'dark' 
              ? 'opacity-100 rotate-0 text-blue-400' 
              : 'opacity-0 -rotate-90 text-gray-400'
          }`}
          size={32}
        />
      </div>
      
      {/* Efeito de brilho */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-transparent via-transparent to-transparent group-hover:from-white/10 group-hover:via-white/5 group-hover:to-transparent dark:group-hover:from-gray-700/10 dark:group-hover:via-gray-700/5 transition-all duration-300"></div>
      
      {/* Tooltip */}
      <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 px-3 py-2 bg-gray-900 dark:bg-gray-700 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
        {theme === 'light' ? 'Modo escuro' : 'Modo claro'}
      </div>
    </button>
  );
}