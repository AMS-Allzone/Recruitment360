'use client'
import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';

const ThemeToggle = () => {
  // Initialize state with a default value
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    // Ensure this code runs only on the client side
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        setTheme(savedTheme);
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      document.body.setAttribute('data-theme', theme);
      localStorage.setItem('theme', theme); // Save theme to localStorage
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <Button onClick={toggleTheme}>
      {theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
    </Button>
  );
};

export default ThemeToggle;
