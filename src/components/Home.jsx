import React from 'react';
import '../styles/Home.css';

const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="container">
        <div className="home-content">
          <h1 style={{color: 'white'}}>Home Component Loaded </h1>
          <p style={{color: '#ccc'}}>Full Stack Developer</p>
        </div>
      </div>
    </section>
  );
};

export default Home;