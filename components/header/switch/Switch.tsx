'use client';

import { useEffect, useState } from 'react';
import styles from './Switch.module.css';

export const Switch = () => {
  const [isDarkMode, setIsDarkMode] = useState<Boolean | undefined>();
  
  useEffect(() => {
    const isDarkTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDarkMode(isDarkTheme);
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => {
      setIsDarkMode(mediaQuery.matches);
    }
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    const setTheme = () => {
      const bodyElement = document.querySelector('body');
      
      if (isDarkMode) {
        bodyElement?.classList.add('dark-theme');
        bodyElement?.classList.remove('light-theme');
      } else {
        bodyElement?.classList.add('light-theme');
        bodyElement?.classList.remove('dark-theme');
      }
    };

    if (isDarkMode !== undefined) {
      setTheme();
    }
  }, [isDarkMode]);

  return (
    <label className={styles.switch}>
      <input 
        type="checkbox" 
        checked={isDarkMode ? true : false}
        onChange={() => setIsDarkMode(!isDarkMode)}
      />
      <span className={styles.slider}></span>
    </label>
  )
}