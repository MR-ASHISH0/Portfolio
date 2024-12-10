import React, { useState, useContext, useEffect } from 'react';
import "./ThemeProvider.css"

// Creating a context for the theme
const ThemeContext = React.createContext();

// Custom hook to use the theme context
export const useTheme = () => useContext(ThemeContext);

// Component for providing the theme
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
   
    document.documentElement.style.setProperty('--body-color', theme === 'light' ? 'hsl(var(--hue-color), 60%, 99%)' : 'hsl(var(--hue-color), 28%, 12%)');
    document.documentElement.style.setProperty('--body-color-dark', 'hsl(var(--hue-color), 28%, 12%)');
     // Set font color based on theme
     document.documentElement.style.setProperty('--font-color', theme === 'light' ? 'hsl(var(--hue-color), 8%, 20%)' : 'hsl(var(--hue-color), 92%, 95%)');
    
  
  }, [theme]);
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};