import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">About Us</h2>
        <div className="about-content">
          <div className="about-image">
            <div className="about-image-container">
              <img src="/assets/all-photo/about-pic.jpeg" alt="About Image - Muhammad Yasir - Full Stack Developer" className="about-photo" />
            </div>
            <div className="contact-info">
              <div className="contact-item">
                <i className="fas fa-user-tie"></i>
                <div>
                  <h4>Full Stack Developer</h4>
                  <p>2+ Years Experience</p>
                </div>
              </div>
              <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <div>
                  <h4>Email</h4>
                  <p>myasirtech4831@gmail.com</p>
                </div>
              </div>
              <div className="contact-item">
                <i className="fas fa-map-marker-alt"></i>
                <div>
                  <h4>Location</h4>
                  <p>Islamabad, Pakistan</p>
                </div>
              </div>
            </div>
          </div>
          <div className="about-text">
            <div className="about-description">
              <p>I am a passionate <span className="highlight">Full Stack Developer</span> with a knack for creating interactive digital experiences. With a strong foundation in modern web technologies and a keen eye for design, I bridge the gap between functional code and aesthetic excellence.</p>
              <p>I thrive on solving complex problems and turning innovative ideas into reality. <span className="highlight">I enjoy building clean and fast digital experiences.</span></p>
            </div>
            <div className="about-stats">
              <div className="stat-item">
                <span className="stat-number">25+</span>
                <span className="stat-label">Projects Completed</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">100%</span>
                <span className="stat-label">Client Satisfaction</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">24/7</span>
                <span className="stat-label">Available</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;