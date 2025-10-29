import './App.css';
import Home from './components/Home'
import NavBar from './components/Navbar';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import { useState, useEffect } from 'react';

function App() {

  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('theme');
    if (savedMode) {
      return savedMode === 'dark';

    } else {
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
  });

  useEffect(() => {
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  return (
    <div className={isDarkMode ? 'dark-theme' : 'light-theme'}>
      <NavBar toggleDarkMode={() => setIsDarkMode(prev => !prev)} isDarkMode={isDarkMode} />
      <Home />
      <Contact />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
