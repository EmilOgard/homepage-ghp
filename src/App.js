import './App.css';
import Home from './components/Home'
import NavBar from './components/Navbar';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <NavBar />
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
