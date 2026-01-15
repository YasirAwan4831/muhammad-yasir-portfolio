import '../styles/Contact.css';
import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus('error');
      return;
    }

    // Simulate form submission
    setFormStatus('success');
    setFormData({ name: '', email: '', message: '' });
    
    setTimeout(() => {
      setFormStatus('');
    }, 5000);
  };

  const socialLinks = [
    { id: 4, name: 'All Links', icon: 'fa-websites', url: 'https://yasirawan4831.github.io/futuristic-links-dashboard/' },
    { id: 1, name: 'LinkedIn', icon: 'fa-linkedin', url: 'https://www.linkedin.com/in/yasirawan4831/' },
    { id: 2, name: 'Email', icon: 'fa-envelope', url: 'mailto:myasirtech4831@gmail.com' },
    { id: 3, name: 'GitHub', icon: 'fa-github', url: 'https://github.com/yasirawan4831' },
    { id: 5, name: 'Instagram', icon: 'fa-instagram', url: 'https://www.instagram.com/yasirawan4831/' },
    { id: 6, name: 'Facebook', icon: 'fa-facebook', url: 'https://www.facebook.com/profile.php?id=61575935942197' },
    { id: 7, name: 'Medium', icon: 'fa-medium', url: 'https://medium.com/@YasirAwan4831' },
    { id: 8, name: 'Twitter', icon: 'fa-x-twitter', url: 'https://x.com/YasirAwan4831' },
    { id: 9, name: 'Youtube', icon: 'fa-youtube', url: 'https://www.youtube.com/@YasirTech-t1d' }
  ];

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="contact-header">
          <h2 className="section-title">Let's Connect</h2>
          <p className="section-subtitle">Get in touch and let's create something amazing together!</p>
        </div>
        
        <div className="contact-content">
          {/* Left Side: Contact Info + Social Media */}
          <div className="contact-left">
            <div className="contact-info">
              <h3 className="contact-subtitle">Get in touch</h3>
              <p className="contact-description">
                Have a brilliant idea? Let's turn it into reality swiftly. I'm always open to new collaborations and exciting projects.
              </p>
              
              <div className="contact-items">
                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div className="contact-text">
                    <h4>Email</h4>
                    <p>myasirtech4831@gmail.com</p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="fas fa-phone"></i>
                  </div>
                  <div className="contact-text">
                    <h4>Website</h4>
                    <p>https://github.com/yasirawan4831</p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div className="contact-text">
                    <h4>Location</h4>
                    <p>Islamabad, Pakistan</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Social Media Section */}
            <div className="social-media">
              <h2 className="social-title">Connect With Me</h2>
              <p className="social-subtitle">Find me on these platforms</p>
              
              <div className="social-grid">
                {socialLinks.map((social) => (
                  <a key={social.id} href={social.url} className="social-link" target="_blank" rel="noopener noreferrer">
                    <div className="social-icon">
                      <i className={`fab ${social.icon}`}></i>
                    </div>
                    <span>{social.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          {/* Right Side: Contact Form */}
          <div className="contact-form-container">
            <div className="form-header">
              <h3 className="form-title">Send me a message</h3>
              <p className="form-subtitle">Fill out the form below and I'll get back to you as soon as possible.</p>
            </div>
            
            <form id="contactForm" className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">
                  <i className="fas fa-user"></i> Name
                </label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  placeholder="Enter your name" 
                  value={formData.name}
                  onChange={handleChange}
                  required 
                />
                <div className="input-line"></div>
              </div>
              
              <div className="form-group">
                <label htmlFor="email">
                  <i className="fas fa-envelope"></i> Email
                </label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  placeholder="Enter your email" 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                />
                <div className="input-line"></div>
              </div>
              
              <div className="form-group">
                <label htmlFor="message">
                  <i className="fas fa-comment"></i> Message
                </label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="5" 
                  placeholder="Enter your message" 
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
                <div className="input-line"></div>
              </div>
              
              <button type="submit" className="btn btn-primary submit-btn">
                <span>Send Message</span>
                <i className="fas fa-paper-plane"></i>
              </button>
              
              {formStatus && (
                <div className={`form-status ${formStatus}`}>
                  {formStatus === 'success' 
                    ? 'Message sent successfully! I will get back to you soon.' 
                    : 'Please fill in all fields.'}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;