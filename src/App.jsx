import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Education from './components/Education';
import Experience from './components/Experience';
import Services from './components/Services';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css';


function App() {
  return (
    <div className="App">
      {/* Custom Cursor */}
      <div className="cursor"></div>
      
      {/* Navigation Bar */}
      <Navbar />
      
      {/* Home Section */}
      <Home />
      
      {/* About Section */}
      <About />
      
      {/* Projects Section */}
      <Projects />
      
      {/* Education Section */}
      <Education />
      
      {/* Experience Section */}
      <Experience />
      
      {/* Services Section */}
      <Services />
      
      {/* Skills Section */}
      <Skills />
      
      {/* Contact Section */}
      <Contact />
      
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;