import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { FaMoon, FaSun } from 'react-icons/fa';

function ThemeToggle() {
  // Detect system preference
  const getSystemTheme = () =>
    window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

  // Load saved theme from localStorage or use system default
  const [theme, setTheme] = useState(localStorage.getItem('theme') || getSystemTheme());

  // Apply theme to root and save override
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);

    // Listen for system theme changes if user hasn't manually overridden
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e) => {
      if (!localStorage.getItem('theme')) {
        setTheme(e.matches ? 'dark' : 'light');
      }
    };
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
    localStorage.setItem('theme', theme === 'light' ? 'dark' : 'light'); // save override
  };

  return (
    <Button variant={theme === 'light' ? 'dark' : 'light'} onClick={toggleTheme}>
      {theme === 'light' ? <FaMoon /> : <FaSun />}
    </Button>
  );
}

export default ThemeToggle;