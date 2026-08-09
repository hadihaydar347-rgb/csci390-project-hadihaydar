import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Guests from './pages/Guests';
import './App.css';

const App=()=> {
  return (
    <Router>
      <div className="app-container">
        <NavBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Guests" element={<Guests/>}/>
        </Routes>

        <footer>
          <p>&copy; 2026 Nabatieh Village Project. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}
export default App;