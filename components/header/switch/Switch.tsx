'use client';

import { useEffect, useState } from 'react';
import styles from './Switch.module.css';

export const Switch = () => {
  const [isDarkMode, setIsDarkMode] = useState<Boolean>(false);
  
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
    console.log(isDarkMode);
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