import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'default' | 'emerald' | 'purple' | 'orange' | 'dark';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('default');

  useEffect(() => {
    const savedTheme = localStorage.getItem('anoud-theme') as Theme;
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('anoud-theme', theme);
    
    // Remove all theme classes
    document.documentElement.classList.remove('default', 'emerald', 'purple', 'orange', 'dark');
    
    // Add current theme class
    document.documentElement.classList.add(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};