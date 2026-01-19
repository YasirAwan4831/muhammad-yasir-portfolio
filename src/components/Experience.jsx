import React from 'react';
import '../styles/Experience.css';

const Experience = () => {
  const experienceData = [
    {
      id: 1,
      date: '2025',
      title: 'Frontend Web Developer Intern',
      company: 'DevelopersHub Corporation ©',
      description: 'Worked as a Frontend Web Developer Intern, focusing on building responsive and interactive user interfaces. I collaborated on real-world web applications, implemented reusable components & improved UI/UX through structured layouts, animations & client-focused design requirements',
      tech: ['JavaScript', 'React', 'React Joyride', 'Tailwind CSS', 'Dashboard', 'UX/UI', 'Figma', 'Git', 'GitHub'],
      link: 'https://github.com/YasirAwan4831/Nexus',
      linkType: 'github'
    },
    {
      id: 2,
      date: '2025',
      title: 'Career Development Intern',
      company: 'Pakistan Career Fire',
      description: 'Worked as a Career Development Intern, assisting students & early-career professionals guidance, coordination & structured communication. Contributed to learning resources, community engagement & digital workflows, while honing mentoring & professional interaction skill.',
      tech: ['Career Counseling', 'Communication', 'Social Media', 'Content Creation', 'Client Relations', 'Freelancing'],
      link: 'https://www.linkedin.com/posts/yasirawan4831_pcfinternship-skills4u-pakistancareerfair-activity-7419039633444913153-sPN5?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFyt-1EB5XKMOcxukQpAzVmx6pIKiXdCz64',
      linkType: 'linkedin'
    },
    {
      id: 3,
      date: '2025 - 2026',
      title: 'Frontend Web Developer',
      company: 'Apexcify Technologys',
      description: 'Worked as a Frontend Web Developer, building modern and responsive user interfaces. Collaborated with design to deliver smooth user experiences while strengthening skills in component-based development, structured workflows and scalable frontend architecture.',
      tech: ['HTML CSS', 'JavaScript', 'UX/UI', 'API Integration', 'e-commerce UI',  'portfolio-website', 'Git & GitHub'],
      link: 'https://github.com/YasirAwan4831/ApexcifyTechnologys-FrontendInternship',
      linkType: 'github'
    }
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        
        <div className="experience-content">
          {/* Left Side: Experience Image */}
          <div className="experience-image">
            <div className="image-placeholder experience-img">
              <i className="fas fa-briefcase"></i>
              <span>Professional Experience</span>
              <div className="experience-stats">
                <div className="stat">
                  <span className="stat-number">3+</span>
                  <span className="stat-label">Internships</span>
                </div>
                <div className="stat">
                  <span className="stat-number">17+</span>
                  <span className="stat-label">Projects</span>
                </div>
              </div>
            </div>
            <div className="experience-links">
              <a href="https://github.com/YasirAwan4831" target="_blank" rel="noopener noreferrer" className="experience-link">
                <i className="fab fa-github"></i>
                <span>GitHub Profile</span>
              </a>
              <a href="https://www.linkedin.com/in/yasirawan4831/" target="_blank" rel="noopener noreferrer" className="experience-link">
                <i className="fab fa-linkedin"></i>
                <span>LinkedIn Profile</span>
              </a>
            </div>
          </div>
          
          
          {/* Right Side: Experience Timeline */}
          <div className="experience-timeline">
            {experienceData.map((exp) => (
              <div key={exp.id} className="experience-item">
                <div className="experience-date">{exp.date}</div>
                <div className="experience-content-inner">
                  <h3 className="experience-title">{exp.title}</h3>
                  <h4 className="experience-company">{exp.company}</h4>
                  <p className="experience-description">{exp.description}</p>
                  <div className="experience-tech">
                    {exp.tech.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  <a href={exp.link} target="_blank" rel="noopener noreferrer" className="project-link">
                    <i className={`fab fa-${exp.linkType}`}></i>
                    {exp.linkType === 'github' ? 'View Projects' : 'View Certification'}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;