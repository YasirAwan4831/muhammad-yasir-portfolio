import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import './styles/css/App.css';

function App() {
  return (
    <div className="App">
      {/* Custom Cursor */}
      <div className="cursor"></div>
      
      {/* Navbar */}
      <Navbar />
      
      {/* Home Section */}
      <Home />
      
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;