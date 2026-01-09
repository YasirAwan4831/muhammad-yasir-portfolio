import React, { useState } from 'react';

const Projects = () => {
  const [showMore, setShowMore] = useState(false);

  const mainProjects = [
    {
      id: 1,
      title: 'Portfolio Website',
      description: 'A fully responsive and modern portfolio website built with clean UI/UX principles. It highlights my professional skills, completed projects and technical expertise. The design is minimal, fast and optimized for all devices, featuring interactive animations and smooth navigation.',
      image: '/assets/project/portfolio-website.jpeg',
      tools: ['HTML', 'CSS', 'JavaScript', 'React', 'TypeScript'],
      liveLink: 'https://muhammadyaser-portfolio.netlify.app',
      githubLink: 'https://github.com/YasirAwan4831/ApexcifyTechnologys-FrontendInternship'
    },
    {
      id: 2,
      title: 'Tourism Travel Website',
      description: 'A modern and responsive tourism website providing destination details, travel guides and popular attractions. Designed with a clean layout and user-friendly experience to explore places easily.',
      image: '/assets/project/tourism-travel-website.jpeg',
      tools: ['HTML', 'CSS', 'JavaScript', 'React', 'TypeScript', 'JSON', 'UI'],
      liveLink: 'https://finedine-restaurant.netlify.app',
      githubLink: 'https://github.com/YasirAwan4831'
    },
    {
      id: 3,
      title: 'E-commerce Store',
      description: 'A fully functional e-commerce website with product listings, dynamic pages, cart handling and a complete user-end shopping experience. Designed with a clean UI and smooth navigation, built to scale with future backend integration.',
      image: '/assets/project/e-commerce.jpeg',
      tools: ['HTML', 'CSS', 'JavaScript', 'React', 'Vue.js', 'UI/UX', 'Figma'],
      liveLink: 'https://yasirawan-devhub-corporation-intern.netlify.app/',
      githubLink: 'https://github.com/YasirAwan4831/developerhub-corporation-internship--Task_1_Ecommerce_Website'
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">My Projects</h2>
          <p className="section-subtitle">Here are some of my recent projects that showcase my skills and expertise.</p>
        </div>

        <div className="projects-grid">
          {mainProjects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <div className="img-container">
                  <img src={project.image} alt={project.title} className="project-photo" />
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tools">
                  {project.tools.map((tool, index) => (
                    <span key={index} className="tool-tag">{tool}</span>
                  ))}
                </div>
                <div className="project-buttons">
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="btn btn-live">
                    <i className="fas fa-external-link-alt"></i> Live Demo
                  </a>
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="btn btn-github">
                    <i className="fab fa-github"></i> Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="projects-button">
          <button className="btn btn-primary load-more-btn" onClick={() => setShowMore(!showMore)}>
            {showMore ? 'Show Less' : 'Load More'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;