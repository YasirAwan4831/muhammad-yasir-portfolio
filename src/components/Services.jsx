import React from 'react';
import '../styles/Services.css';

const Services = () => {
  const servicesData = [
    {
      id: 1,
      icon: 'fa-code',
      title: 'Full-Stack Web Development',
      description: 'I build complete, scalable, and high-performance web applications from front-end to back-end.',
      features: [
        'Modern Frontend Development (React / Next.js / Vue)',
        'Secure Backend Development (Node.js / Express / APIs)',
        'Database Integration (MySQL / MongoDB)',
        'Responsive & Mobile-Friendly UI',
        'End-to-End Deployment'
      ]
    },
    {
      id: 2,
      icon: 'fa-paint-brush',
      title: 'Graphic Designing',
      description: 'Professional and creative Graphic design solutions for brands, Marketing and Digital presence.',
      features: [
        'Logo Designing (Brand Logos, Minimal Logos)',
        'Social Media Posts (Facebook, Instagram Content)',
        'Banners & Posters (Panaflex, Advertising Designs)',
        'UI/UX Mockups (Mobile & Web Interface Drafts)',
        'Branding Kits'
      ]
    },
    {
      id: 3,
      icon: 'fa-wordpress',
      iconType: 'fab',
      title: 'WordPress Web Development',
      description: 'Fast, secure and fully Customizable WordPress Websites tailored for brands and businesses.',
      features: [
        'Complete Website Setup (Domain, Hosting, Configuration)',
        'Theme Customization (Premium & Free Themes)',
        'Elementor / Divi Designing',
        'E-Commerce Stores (WooCommerce Setup)',
        'Speed & Security Optimization'
      ]
    }
  ];

  return (
    <section id="service" className="services-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title">My Services</h2>
          <p className="section-subtitle">
            I deliver modern, clean and results-driven digital services designed to strengthen your online presence. 
            Here are the professional solutions I offer:
          </p>
        </div>

        {/* Services Grid */}
        <div className="services-grid">
          {servicesData.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-icon">
                <i className={`${service.iconType || 'fas'} ${service.icon}`}></i>
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <div className="service-features">
                <h4>What I offer:</h4>
                <ul className="features-list">
                  {service.features.map((feature, index) => (
                    <li key={index}>
                      <i className="fas fa-check"></i> {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <a href="#contact" className="service-btn">
                <i className="fas fa-envelope"></i> Get Quote
              </a>
            </div>
          ))}
        </div>

        {/* Service Note */}
        <div className="service-note">
          <p>
            <i className="fas fa-info-circle"></i> 
            Have a unique idea or need something specific? 
            <a href="#contact"> Contact me</a> to discuss a custom solution tailored to your project.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;