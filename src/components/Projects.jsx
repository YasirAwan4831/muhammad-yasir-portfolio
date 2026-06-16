import React, { useState, useEffect } from 'react';
import '../styles/Projects.css';

const Projects = () => {
  const [visibleProjects, setVisibleProjects] = useState(3);
  const [isLoading, setIsLoading] = useState(false);

const mainProjects = [
{
id: 1,
title: 'GitHub Repository Analytics Dashboard',
description: 'A modern full-stack GitHub analytics dashboard built with React and Node.js. It fetches live repository data from the GitHub API and provides repository insights, profile exploration, filtering, sorting and responsive visualizations for developers and recruiters.',
image: '/public/assets/project/grad-01.jpg',
tools: ['React', 'Node.js', 'JavaScript', 'GitHub API', 'REST API', 'Dashboard', 'Data Visualization', 'Vite', 'Responsive Design'],
liveLink: 'https://yasirawangithub.vercel.app/',
githubLink: 'https://github.com/YasirAwan4831/github-repository-analytics-dashboard'
},
{
id: 2,
title: 'Real-Time Collaborative Document Editor',
description: 'A full-stack real-time collaborative document editor built with React, Node.js, Express.js, Socket.IO and Firebase. Features live document synchronization, authentication, user presence tracking, version history and role-based collaboration.',
image: '/public/assets/project/real-time-cl.png',
tools: ['React', 'Node.js', 'Express.js', 'Socket.IO', 'Firebase', 'Authentication', 'Real-Time Collaboration', 'JavaScript'],
liveLink: 'https://github.com/YasirAwan4831/rt-collaborative-doc-editor-fs3',
githubLink: 'https://github.com/YasirAwan4831/rt-collaborative-doc-editor-fs3'
},
{
id: 3,
title: 'AI Resume Screener & Job Matcher',
description: 'An AI-powered resume screening system developed with Python and Flask. The application extracts skills from resumes, analyzes job descriptions and generates intelligent match scores to streamline recruitment workflows.',
image: '/public/assets/project/resuma-ai03.png',
tools: ['Python', 'Flask', 'NLP', 'PyPDF2', 'pdf-plumber', 'HTML', 'CSS', 'JavaScript', 'AI', 'Resume Analysis'],
liveLink: 'https://yasirawaninfo-ai.vercel.app/#projects',
githubLink: 'https://github.com/YasirAwan4831/resume-screener-ai-internship-project-three'
}
];

const additionalProjects = [
{
id: 4,
title: 'RAG-based AI Knowledge Assistant',
description: 'A production-style Retrieval Augmented Generation (RAG) system that processes company documents, creates vector embeddings and delivers accurate context-aware responses using modern AI workflows and semantic search.',
image: '/public/assets/project/rg-based-ai-a-04.png', // Add project image
tools: ['Python', 'Google Gemini', 'RAG', 'Vector Database', 'Embeddings', 'Semantic Search', 'AI', 'Knowledge Base'],
liveLink: 'https://yasirawaninfo-ai.vercel.app/#projects',
githubLink: 'https://github.com/YasirAwan4831/nexeagent-rag-based-knowledge-assistant'
},
{
id: 5,
title: 'Multi-Tool AI Agent',
description: 'A Python-based intelligent AI agent capable of handling multiple automation tasks including job search, note management, email operations and tool execution through AI-powered workflows and function calling.',
image: '/public/assets/project/multi-tools-05.png', // Add project image
tools: ['Python', 'AI Agent', 'Automation', 'Function Calling', 'Email Automation', 'Workflow Automation', 'APIs'],
liveLink: 'https://yasirawaninfo-ai.vercel.app/#projects',
githubLink: 'https://github.com/YasirAwan4831/nexeagent-multi-tool-ai-agent'
},
{
id: 6,
title: 'Task Management Web App',
description: 'A full-stack MERN task management platform featuring JWT authentication, Kanban boards, task assignment, workflow tracking and responsive project management capabilities for teams and organizations.',
image: '/public/assets/project/task-manag-06.png', 
tools: ['MongoDB', 'Express.js', 'React', 'Node.js', 'JWT', 'Authentication', 'Kanban Board', 'REST API'],
liveLink: 'https://github.com/YasirAwan4831/taskflow-kanban-app--fs1-',
githubLink: 'https://github.com/YasirAwan4831/taskflow-kanban-app--fs1-'
},

{
id: 7,
title: 'TEYZIX CORE Internship Portal',
description: 'A modern full-stack internship management platform built for handling internship applications, candidate management and administrative workflows. Features responsive UI, application tracking, admin controls, dark mode support and scalable architecture.',
image: '/public/assets/project/teyzix-core-inter-pro07b.jpg', // Add project image
tools: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Firebase', 'Authentication', 'Dashboard', 'REST API', 'Responsive Design'],
liveLink: 'https://teyzix-core-internship-portal-fs2-3e94lqtec-yasirawans-projects.vercel.app/',
githubLink: 'https://github.com/YasirAwan4831/teyzix-core-internship-portal-fs2'
},

{
id: 8,
title: 'Business Nexus Dashboard',
description: 'A professional React-based dashboard designed for investors and entrepreneurs. Includes role-based access, meeting management, payment workflows, document handling, onboarding walkthroughs and a modern responsive interface.',
image:'/public/assets/all-photo/business-app.png',
tools: ['React', 'Tailwind CSS', 'JavaScript', 'Dashboard', 'React Joyride', 'Role-Based UI', 'Responsive Design'],
liveLink: 'https://yasirawan.vercel.app/login',
githubLink: 'https://github.com/YasirAwan4831/Nexus'
},

{
id: 9,
title: 'Portfolio Website',
description: 'A modern and responsive personal portfolio website built with React and Vite. Showcases technical skills, projects, education, certifications and professional experience through an optimized and visually appealing user experience.',
image: '/public/assets/all-photo/portfolio-pic.png',
tools: ['React', 'JavaScript', 'Vite', 'CSS', 'GSAP', 'Axios', 'EmailJS', 'API Integration', 'Responsive Design'],
liveLink: 'https://yasirawaninfo.vercel.app/',
githubLink: 'https://github.com/YasirAwan4831/muhammad-yasir-portfolio'
},

{
id: 10,
title: 'Star Developer Corporate Website',
description: 'A premium corporate website developed for a digital solutions agency, highlighting web development, AI automation, branding, digital marketing and SaaS-focused services. Designed with a strong focus on lead generation and professional presentation.',
image: '/public/assets/project/star-dev-cop-10.jpg', // Add project image
tools: ['React', 'Vite', 'JavaScript', 'CSS', 'Responsive Design', 'UI/UX', 'Business Website'],
liveLink: 'https://infostardeveloper.vercel.app/',
githubLink: 'https://github.com/YasirAwan4831/star-developer-agency-showcase-01'
},

{
id: 11,
title: 'DIGITECH Solutions Corporate Website',
description: 'A modern business-focused website showcasing AI-powered services, software solutions and digital transformation offerings. Built with a clean architecture and professional design suitable for startups and technology companies.',
image: '/public/assets/project/digitech-co-web-11.jpg', // Add project image
tools: ['React', 'Next.js', 'JavaScript', 'CSS', 'UI/UX', 'Corporate Website', 'Responsive Design'],
liveLink: 'https://digitechsolutionsm.vercel.app/',
githubLink: 'https://github.com/YasirAwan4831/digitech-solutions-ai-platform-overview00'
},

{
id: 12,
title: 'WhatsApp Automation System',
description: 'An AI-powered WhatsApp automation platform developed during the AI & Automation Internship. The system automates messaging workflows, user interactions, notifications and business communication processes using modern automation techniques.',
image: '/public/assets/project/whatsaap-bot-12.png', // Add project image
tools: ['Python', 'WhatsApp Automation', 'AI Automation', 'APIs', 'Workflow Automation', 'Business Automation'],
liveLink: 'https://github.com/YasirAwan4831/whatsapp-automation-system-bot',
githubLink: 'https://github.com/YasirAwan4831/whatsapp-automation-system-bot'
},

{
id: 13,
title: 'Python Email Automation System',
description: 'A smart email automation solution built with Python to automate email sending, personalized communication, workflow execution and repetitive business processes. Designed to improve productivity and operational efficiency.',
image: '/public/assets/project/email-auto.jpg', // Add project image
tools: ['Python', 'Email Automation', 'SMTP', 'Automation', 'Workflow Management', 'Business Process Automation'],
liveLink: 'https://yasirawaninfo-ai.vercel.app/#projects',
githubLink: 'https://github.com/YasirAwan4831/ai-email-automation-python-internship'
}
];




  // All projects combined
  const allProjects = [...mainProjects, ...additionalProjects];

  // Handle Load More
  const handleLoadMore = () => {
    setIsLoading(true);
    setTimeout(() => {
      setVisibleProjects(prev => Math.min(prev + 3, allProjects.length));
      setIsLoading(false);
    }, 800);
  };

  // Handle Show Less
  const handleShowLess = () => {
    setVisibleProjects(3);
    // Scroll to projects section
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  // Projects to display
  const displayedProjects = allProjects.slice(0, visibleProjects);
  const hasMore = visibleProjects < allProjects.length;

  // Add scroll animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = document.querySelectorAll('.project-card');
    cards.forEach((card) => observer.observe(card));

    return () => {
      cards.forEach((card) => observer.unobserve(card));
    };
  }, [visibleProjects]);

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">My Projects</h2>
          <p className="section-subtitle">
            Here are some of my recent projects that showcase my skills and expertise.
          </p>
        </div>

        <div className="projects-grid">
          {displayedProjects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <div className="img-container">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="project-photo"
                    loading="lazy"
                  />
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
                  <a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-live"
                  >
                    <i className="fas fa-external-link-alt"></i> Live Demo
                  </a>
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-github"
                  >
                    <i className="fab fa-github"></i> Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More / Show Less Button */}
        <div className="projects-button">
          {hasMore ? (
            <button 
              className="btn btn-primary load-more-btn" 
              onClick={handleLoadMore}
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <i className="fas fa-spinner fa-spin"></i> Loading...
                </>
              ) : (
                <>Load More Projects</>
              )}
            </button>
          ) : (
            visibleProjects > 3 && (
              <button 
                className="btn btn-secondary load-more-btn" 
                onClick={handleShowLess}
              >
                Show Less
              </button>
            )
          )}
        </div>

        {/* Projects Counter */}
        {visibleProjects > 3 && (
          <div style={{ textAlign: 'center', marginTop: '20px', color: 'var(--text-light)' }}>
            Showing {visibleProjects} of {allProjects.length} projects
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;