import './App.css';
import Home from './components/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
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
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
