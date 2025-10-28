import './App.css';
import Home from './components/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/Navbar';
import Projects from './components/Projects';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
