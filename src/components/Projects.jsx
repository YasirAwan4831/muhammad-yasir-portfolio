import React, { useState, useEffect } from 'react';
import '../styles/Projects.css';

const Projects = () => {
  const [visibleProjects, setVisibleProjects] = useState(3);
  const [isLoading, setIsLoading] = useState(false);

  // Main 3 Projects (Always Visible)
  const mainProjects = [
    {
      id: 1,
      title: 'Portfolio Website',
      description: 'A fully responsive and modern portfolio website built with clean UI/UX principles. It highlights my professional skills, completed projects and technical expertise. The design is minimal, fast and optimized for all devices, featuring interactive animations and smooth navigation.',
      image: '/public/assets/all-photo/portfolio-pic.png',
      tools: ['React', 'JavaScript', 'CSS', 'JSON', 'Fetch API', 'Vite', 'GSAP', 'AXIOS', 'E-mail JS', 'API', 'npm', 'Yarn'],
      liveLink: 'https://muhammadyaser-portfolio.netlify.app',
      githubLink: 'https://github.com/YasirAwan4831/muhammad-yasir-portfolio'
    },
    {
      id: 2,
      title: 'Business Nexus Dashboard',
      description: 'Business Nexus Frontend: A modern React + Tailwind CSS dashboard for Investors & Entrepreneurs  role-based UI, meeting calendar, payment UI mock, document chamber and guided onboarding with React Joyride. Fully responsive design with reusable components.',
      tools: ['React', 'Tailwind CSS','Login', 'Dashboard', 'video calling', 'UI/UX', 'Payment Actions',  'React Joyride'],
      liveLink: 'https://yasirawan.vercel.app/login',
      githubLink: 'https://github.com/YasirAwan4831/Nexus',
      image: '/public/assets/all-photo/business-app.png'
    },
    {
      id: 3,
      title: 'E-commerce Store',
      description: 'A fully functional e-commerce website with product listings, dynamic pages, cart handling and complete user-side shopping experience. Designed with clean UI, smooth navigation, responsive layout and built to scale for future backend integration and advanced features.',
      image: '/public/assets/all-photo/e-commerce.jpeg',
      tools: ['HTML5', 'CSS3', 'JavaScript', 'UI/UX', 'Responsive Design', 'Font Awesome', 'Figma', 'netlify.app', 'Browser Storage'],
      liveLink: 'https://yasirawan-devhub-corporation-intern.netlify.app/',
      githubLink: 'https://github.com/YasirAwan4831/developerhub-corporation-internship--Task_1_Ecommerce_Website'
    }
  ];

  // Additional Projects (Load More - 9 Projects)
  const additionalProjects = [
    {
      id: 4,
      title: 'YARIS AI Smart Chat Bot',
      description: 'An interactive AI-powered chatbot built with React Node.js  JavaScript and Google Gemini A, designed to manage tasks efficiently, deliver smart context-aware responses & enhance the overall user interaction experience.',
      tools: ['HTML', 'CSS', 'JavaScript', 'React', 'TypeScript', 'AI Integration', 'API'],
      liveLink: 'https://github.com/YasirAwan4831/YARIS-AI-Smart-Chat-Bot',
      githubLink: 'https://github.com/YasirAwan4831/YARIS-AI-Smart-Chat-Bot',
      image: '/public/assets/all-photo/yaris-ai-chatbot.jpeg'
    },
    {
      id: 5,
      title: 'Web Dev Quiz App',
      description: 'An interactive web-dev quiz app  featuring 300+ MCQs, login, timed questions,  scrolling animations &  strict anti-cheating system that blocks copying, screenshots & tab switching to secure & focused learning..',
      tools: ['HTML', 'CSS', 'JavaScript', 'UX/UI', 'Responsive Design', 'Local Storage'],
      liveLink: 'https://yasirawan4831.github.io/webdev-quiz-app/',
      githubLink: 'https://github.com/YasirAwan4831/webdev-quiz-app',
      image: '/public/assets/all-photo/quiz-app.png'
    },
    {
      id: 6,
      title: 'Product Listing Website',
      description: 'A modern product listing website built with HTML, CSS & JavaScript, featuring responsive design, smooth scroll, login/signup System, My Cart, Payment, Custom fonts and a user-friendly interface..',
      tools: ['JavaScript', 'UX/UI', 'Git & GitHub', 'Login/Signup', 'My Cart',  'Scroll'],
      liveLink: 'https://github.com/YasirAwan4831/ApexcifyTechnologys-FrontendInternship/tree/main/task-2',
      githubLink: 'https://github.com/YasirAwan4831/ApexcifyTechnologys-FrontendInternship/tree/main/task-2',
      image: '/public/assets/all-photo/product-list.png'
    },
    {
      id: 7,
      title: 'Tourism Travel Website',
      description: 'A modern and responsive tourism website providing destination details, travel guides and popular attractions. Designed with a clean layout and user-friendly experience to explore places easily.',
      image: '/public/assets/all-photo/tourism-travel-website.jpeg',
      tools: ['HTML', 'CSS', 'JavaScript', 'React', 'TypeScript', 'Git', 'JSON(Static Data)', 'React Router', 'UI / UX', 'Hosting'],
      liveLink: 'https://github.com/YasirAwan4831',
      githubLink: 'https://github.com/YasirAwan4831'
    },
    {
      id: 8,
      title: 'Final Year Diploma Web Project',
      description: 'A multi-page Business web application built as a FYP, featuring a structured UI, dynamic content, animations, a responsive layout & modules highlighting key front-end skills.',
      tools: ['HTML', 'CSS', 'JavaScript', 'React.js', 'UX/UI', 'Animations', 'Git & GitHub', 'DOM Manipulation', 'Responsive Design'],
      liveLink: 'https://yasirawaninfo-com.w3spaces.com/index.html',
      githubLink: 'https://github.com/YasirAwan4831/Final-Year-Diploma-Web-Project',
      image: '/public/assets/all-photo/final-year-project.png'
    },
    {
      id: 9,
      title: 'Marketing Agency Website (WordPress)',
      description: 'A WordPress-based marketing agency website featuring service pages, a portfolio section, contact forms, optimized UI/UX, mobile responsiveness and an SEO-friendly layout.',
      tools: ['WordPress', 'Elementor', 'Themes', 'Plugins', 'SEO', 'Web', 'Design', 'Page Builders', 'Content Management'],
      liveLink: 'https://yasirawaninfo.lovestoblog.com/',
      githubLink: 'https://github.com/YasirAwan4831',
      image: '/public/assets/all-photo/wp-site.jpeg'
    },
        {
      id: 10,
      title: 'Python Image Processing',
      description: 'A Python-based computer vision project using OpenCV, focused real-time image processing and analysis. It demonstrates core Python programming concepts, computer vision logic and practical use of popular libraries in real-world scenarios.',
      tools: ['Python', 'OpenCV', 'Computer Vision', 'Image Processing', 'Python Libraries', ' PIP', 'Flipping Operations'],
      liveLink: 'https://github.com/YasirAwan4831/python-practice-project_0',
      githubLink: 'https://github.com/YasirAwan4831/python-practice-project_0',
      image: '/public/assets/all-photo/python-project.png'
    },
    {
      id: 11,
      title: 'Futuristic Links Dashboard',
      description: 'A futuristic JavaScript-based links dashboard that organizes personal and social links in one place. It features animated UI, canvas effects, an AI-style floating background & a smooth dark/light theme toggle for an interactive user experience.',
      tools: ['JavaScript', 'Dark Theme', 'UI', 'Canvas Animations', 'Light/Dark Mode', 'Link Dashboard', 'Front-End Logic'],
      liveLink: 'https://yasirawan4831.github.io/futuristic-links-dashboard/',
      githubLink: 'https://github.com/YasirAwan4831/futuristic-links-dashboard',
      image: '/public/assets/all-photo/aii-linKs.png'
    },
    {
      id: 12,
      title: 'To-Do List App',
      description: 'A simple and interactive To-Do List application built with HTML, CSS, and JavaScript. Features include add, edit, delete tasks and data persistence using localStorage. Future improvements: dark mode, reminders, task counter & export/import options..',
      tools: ['HTML', 'CSS', 'JavaScript','Git', 'dark mode', 'Local Storage', 'GitHub', 'Responsive Design', 'modern UI'],
      liveLink: 'https://github.com/YasirAwan4831/todo-list-js-app',
      githubLink: 'https://github.com/YasirAwan4831/todo-list-js-app',
      image: '/public/assets/all-photo/to-do.png'
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