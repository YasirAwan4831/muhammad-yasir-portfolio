import React from 'react';
import '../styles/Home.css';

const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="container">
        <div className="home-content">
          <div className="home-text">
            <h3 className="greeting">Hello, I'm</h3>
            <h1 className="title">Full Stack Developer</h1>
            <p className="description">
              Building fantastic web experiences with clean code and modern design.
              <br />
              Creating modern, responsive and user-friendly applications.
            </p>
            <div className="buttons">
              <a href="#projects" className="btn btn-primary">View Work</a>
              <a href="#contact" className="btn btn-secondary">Contact Me</a>
            </div>
          </div>
          <div className="home-image">
            <div className="image-frame">
              <div className="image-placeholder">
                <img src="/assets/all-photo/about-pic.jpeg" alt="Muhammad Yasir - Full Stack Developer" className="profile-img" />
              </div>
              <div className="frame-border"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;