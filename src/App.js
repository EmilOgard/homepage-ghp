import './App.css';
import Home from './components/Home'
import NavBar from './components/Navbar';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import React, { useState } from 'react';

function App() {

  const [isDarkMode, setIsDarkMode] = useState(false);

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
