/**
 * Theme utility functions for handling dark/light mode
 */

export type Theme = 'light' | 'dark';

// Get the current theme from local storage or system preference
export const getInitialTheme = (): Theme => {
  // Check if theme is stored in localStorage
  const savedTheme = localStorage.getItem('theme') as Theme | null;
  
  if (savedTheme) {
    return savedTheme;
  }
  
  // Check system preference
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  return prefersDark ? 'dark' : 'light';
};

// Set the theme in localStorage and update document class
export const setTheme = (theme: Theme): void => {
  localStorage.setItem('theme', theme);
  
  // Update the document class for Tailwind dark mode
  if (theme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
};

// Toggle between light and dark themes
export const toggleTheme = (currentTheme: Theme): Theme => {
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  setTheme(newTheme);
  return newTheme;
};
