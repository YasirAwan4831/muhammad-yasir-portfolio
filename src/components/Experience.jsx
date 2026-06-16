import React from 'react';
import '../styles/Experience.css';

const Experience = () => {
  const experienceData = [
    {
      id: 1,
      date: '2026',
      title: 'AI & Automation Developer Intern',
      company: 'NEXE.AGENT',
      description: 'Worked as an AI & Automation Developer Intern, developing intelligent automation solutions and AI-powered applications. Built projects involving chatbots, resume screening, email automation, workflow automation and business process optimization using modern AI tools and Python.',
      tech: ['Python', 'AI Automation', 'Chatbots', 'Workflow Automation', 'Prompt Engineering', 'Email Automation', 'WhatsApp Automation', 'GitHub'],
      link: '',
      linkType: 'linkedin'
    },

    {
      id: 2,
      date: '2026 (May)',
      title: 'Full Stack Developer Intern',
      company: 'TEYZIX CORE',
      description: 'Worked as a Full Stack Developer Intern, building scalable web applications and contributing to both frontend and backend development. Collaborated on real-world projects involving database management, API integration, authentication systems and responsive user experiences using modern full stack technologies.',
      tech: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Firebase', 'JavaScript', 'REST API', 'Authentication', 'Git', 'GitHub'],
      link: '',
      linkType: 'github'
    },

    {
      id: 3,
      date: '2026 (March - April)',
      title: 'Full Stack Web Developer Intern',
      company: 'Arch Technologies',
      description: 'Worked as a Full Stack Web Developer Intern, developing complete web applications from frontend interfaces to backend functionality. Contributed to database integration, API development, authentication systems and deployment workflows while following industry-standard development practices.',
      tech: ['MongoDB', 'Express.js', 'React', 'Node.js', 'JavaScript', 'REST API', 'Git', 'GitHub'],
      link: '',
      linkType: 'github'
    },

    {
      id: 4,
      date: '2025',
      title: 'Frontend Web Developer Intern',
      company: 'DevelopersHub Corporation ©',
      description: 'Worked as a Frontend Web Developer Intern, focusing on building responsive and interactive user interfaces. I collaborated on real-world web applications, implemented reusable components and improved UI/UX through structured layouts, animations and client-focused design requirements.',
      tech: ['JavaScript', 'React', 'React Joyride', 'Tailwind CSS', 'Dashboard', 'UX/UI', 'Figma', 'Git', 'GitHub'],
      link: 'https://github.com/YasirAwan4831/Nexus',
      linkType: 'github'
    },

    {
      id: 5,
      date: '2025',
      title: 'Career Development Intern',
      company: 'Pakistan Career Fair',
      description: 'Worked as a Career Development Intern, assisting students and early-career professionals through guidance, coordination and structured communication. Contributed to learning resources, community engagement and digital workflows while strengthening mentoring and professional interaction skills.',
      tech: ['Career Counseling', 'Communication', 'Social Media', 'Content Creation', 'Client Relations', 'Freelancing'],
      link: 'https://www.linkedin.com/posts/yasirawan4831_pcfinternship-skills4u-pakistancareerfair-activity-7419039633444913153-sPN5',
      linkType: 'linkedin'
    },

    {
      id: 6,
      date: '2025 - 2026',
      title: 'Frontend Web Developer',
      company: 'Apexcify Technologies',
      description: 'Worked as a Frontend Web Developer, building modern and responsive user interfaces. Collaborated with design teams to deliver smooth user experiences while strengthening skills in component-based development, structured workflows and scalable frontend architecture.',
      tech: ['HTML', 'CSS', 'JavaScript', 'UX/UI', 'API Integration', 'E-Commerce UI', 'Portfolio Website', 'Git', 'GitHub'],
      link: 'https://github.com/YasirAwan4831/ApexcifyTechnologys-FrontendInternship',
      linkType: 'github'
    }
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <h2 className="section-title">Experience</h2>

        <div className="experience-content">
          {/* Left Side */}
          <div className="experience-image">
            <div className="image-placeholder experience-img">
              <i className="fas fa-briefcase"></i>
              <span>Professional Experience</span>

              <div className="experience-stats">
                <div className="stat">
                  <span className="stat-number">6+</span>
                  <span className="stat-label">Internships</span>
                </div>

                <div className="stat">
                  <span className="stat-number">25+</span>
                  <span className="stat-label">Projects</span>
                </div>
              </div>
            </div>

            <div className="experience-links">
              <a
                href="https://github.com/YasirAwan4831"
                target="_blank"
                rel="noopener noreferrer"
                className="experience-link"
              >
                <i className="fab fa-github"></i>
                <span>GitHub Profile</span>
              </a>

              <a
                href="https://www.linkedin.com/in/yasirawan4831/"
                target="_blank"
                rel="noopener noreferrer"
                className="experience-link"
              >
                <i className="fab fa-linkedin"></i>
                <span>LinkedIn Profile</span>
              </a>
            </div>
          </div>

          {/* Right Side */}
          <div className="experience-timeline">
            {experienceData.map((exp) => (
              <div key={exp.id} className="experience-item">
                <div className="experience-date">{exp.date}</div>

                <div className="experience-content-inner">
                  <h3 className="experience-title">{exp.title}</h3>
                  <h4 className="experience-company">{exp.company}</h4>

                  <p className="experience-description">
                    {exp.description}
                  </p>

                  <div className="experience-tech">
                    {exp.tech.map((tech, index) => (
                      <span key={index} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {exp.link && (
                    <a
                      href={exp.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <i className={`fab fa-${exp.linkType}`}></i>
                      {exp.linkType === 'github'
                        ? 'View Projects'
                        : 'View Certification'}
                    </a>
                  )}
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