import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage'
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/Navbar';

function App() {
  return (
    <Router>
      <NavBar />
      <div className='container mt-4'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
