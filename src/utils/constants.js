// src/utils/constants.js

// ==========================================
// NAVIGATION LINKS
// ==========================================
export const NAV_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About Us' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'experience', label: 'Experience' },
  { id: 'service', label: 'Services' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' }
];

// ==========================================
// PROJECTS DATA
// ==========================================
export const PROJECTS_DATA = [

    {
id: 1,
title: 'GitHub Repository Analytics Dashboard',
description: 'A modern full-stack GitHub Profile analytics dashboard built with React and Node.js. It fetches live repository data from the GitHub API and provides repository insights, profile exploration, filtering, sorting and responsive visualizations for developers & recruiters.',
image: '/public/assets/project/grad-01.jpg',
tools: ['React', 'Node.js', 'JavaScript', 'Vite', 'GitHub API', 'REST API', 'Dashboard', 'Data Visualization', 'Responsive Design'],
liveLink: 'https://yasirawangithub.vercel.app/',
githubLink: 'https://github.com/YasirAwan4831/github-repository-analytics-dashboard'
},
{
id: 2,
title: 'Real-Time Collaborative Document Editor',
description: 'A full-stack real-time collaborative document editor built with React, Node.js, Express.js, Socket.IO and Firebase. Features live document synchronization, authentication, user presence tracking, version history and role-based control collaboration..',
image: '/public/assets/project/real-time-cl.png',
tools: ['Full-Stack', 'React', 'Node.js', 'API', 'Express.js', 'Socket.IO', 'Firebase', 'AUTH', 'Real-Time Collab', 'JavaScript'],
liveLink: 'https://teyzixcoreprojects.vercel.app/#credentials',
githubLink: 'https://github.com/YasirAwan4831/rt-collaborative-doc-editor-fs3'
},
{
id: 3,
title: 'AI Resume Screener & Job Matcher',
description: 'An AI-powered resume screening system developed with Python and Flask. The application / System extracts skills using NLP from resumes, analyzes job descriptions and generates intelligent match scores to streamline recruitment workflows.',
image: '/public/assets/project/resuma-ai03.png',
tools: ['Python', 'Flask', 'NLP', 'PyPDF2', 'pdf-plumber', 'AI', 'HTML', 'CSS', 'JavaScript', 'Resume Analysis', 'NLTK'],
liveLink: 'https://yasirawaninfo-ai.vercel.app/#projects',
githubLink: 'https://github.com/YasirAwan4831/resume-screener-ai-internship-project-three'
}
];

const additionalProjects = [
{
id: 4,
title: 'RAG-based AI Knowledge Assistant',
description: 'A production-style Retrieval Augmented Generation (RAG) system that processes company documents, creates vector database embeddings and delivers accurate AI-powered responses using Google Gemini, (RAG) & intelligent vector Search pipelines.',
image: '/public/assets/project/rg-based-ai-a-04.png', // Add project image
tools: ['Python', 'Google Gemini', 'RAG', 'AI', 'Vector Database', 'Embeddings', 'API ', 'Semantic Srch', 'Know Base', 'SQLite'],
liveLink: 'https://yasirawaninfo-ai.vercel.app/#projects',
githubLink: 'https://github.com/YasirAwan4831/nexeagent-rag-based-knowledge-assistant'
},
{
id: 5,
title: 'Multi-Tool AI Agent',
description: 'A Python-based Multi-Tool AI Agent that acts as an intelligent assistant, enabling smart conversations, remote developer and AI job searches, note management, automated emails and utility tool execution through a modern React dashboard.',
image: '/public/assets/project/multi-tools-05.png', // Add project image
tools: ['Python', 'Flask', 'React ', 'AI Agent', 'Automation', 'Function Calling', 'APIs', 'Email Automation', 'SMTP', 'Gemini', 'Workflow Automation', 'Remot Jobs API' ],
liveLink: 'https://yasirawaninfo-ai.vercel.app/#projects',
githubLink: 'https://github.com/YasirAwan4831/nexeagent-multi-tool-ai-agent'
},
{
id: 6,
title: 'Task Management Web App',
description: 'A full-stack Task Management Web Application platform  built with MERN stack Technology featuring JWT authentication, Kanban board, task assignment workflow tracking and responsive project management capabilities for teams and organizations.',
image: '/public/assets/project/task-manag-06.png', 
tools: ['MERN Satck', 'JWT Authentication', 'UI', 'Kanban Board', 'Real-Time Drag & Drop', ' User Assigmnt', 'Vanilla CSS', 'REST API'],
liveLink: 'https://teyzixcoreprojects.vercel.app/#credentials',
githubLink: 'https://github.com/YasirAwan4831/taskflow-kanban-app--fs1-'
},

{
id: 7,
title: 'TEYZIX CORE Internship Portal',
description: 'A modern full-stack internship management platform built for handling internship applications, candidate management and administrative workflows. Features responsive UI, application tracking, admin controls, dark mode support and scalable architecture.',
image: '/public/assets/project/teyzix-core-inter-pro07b.jpg', // Add project image
tools: ['MongoDB', 'Express.js', 'React', 'UI', 'Node.js', 'MERN', 'Authentication', 'Dashboard', 'REST API', 'Admin panel'],
liveLink: 'https://teyzixcoreprojects.vercel.app/#credentials',
githubLink: 'https://github.com/YasirAwan4831/teyzix-core-internship-portal-fs2'
},

{
id: 8,
title: 'Business Nexus Dashboard',
description: 'A professional React-based dashboard designed for investors and entrepreneurs. Includes role-based access, meeting Calendar / management, payment workflows ( Deposit, Withdraw, Transfer), document handling, on - boarding walkthroughs and a modern responsive interface.',
image:'/public/assets/all-photo/business-app.png',
tools: ['TypeScript', 'React', 'Tailwind CSS', 'JavaScript', 'Dashboard', 'Joyride', 'Role-Based UI', 'Dashboard Entry Popup'],
liveLink: 'https://yasirawan.vercel.app/login',
githubLink: 'https://github.com/YasirAwan4831/Nexus'
},

{
id: 9,
title: 'Personal Portfolio Website',
description: 'A modern and responsive portfolio built with React and Vite. It showcases technical skills, projects, education and professional experience through a clean, optimized and visually appealing user experience, featuring reusable components, responsive layouts and modern design principles.',
image: '/public/assets/all-photo/portfolio-pic.png',
tools: ['React', 'JavaScript', 'Vite', 'Axios', 'CSS', 'GSAP', 'UI', 'E-MailJS API', 'API Integration', 'Full stack Feeling'],
liveLink: 'https://yasirawaninfo.vercel.app/',
githubLink: 'https://github.com/YasirAwan4831/muhammad-yasir-portfolio'
},

{
id: 10,
title: 'Star Developer Agency Website',
description: 'A modern Digital agency Website built with React and Vite digital solutions agency, highlighting web development, AI automation, branding, digital marketing and SaaS-focused services. Designed with a strong focus on lead generation & professional presentation.',
image: '/public/assets/project/star-dev-cop-10.jpg', // Add project image
tools: ['Agency Website', 'Business Website',  'React', 'JavaScript', 'Vite', 'EmailJS', 'Calendly', 'Google Form', 'UI/UX' ],
liveLink: 'https://infostardeveloper.vercel.app/',
githubLink: 'https://github.com/YasirAwan4831/star-developer-agency-showcase-01'
},

{
id: 11,
title: 'DigiTech Solutions Corporate Website',
description: 'A modern digital business-focused front-end DigiTech Solutions website showcasing AI - powered services, software solutions and digital transformation offerings. Built with a clean architecture & professional design  startups and technology companies.',
image: '/public/assets/project/digitech-co-web-11.png', // Add project image
tools: ['Corporate Website', 'React', 'Next.js', 'JavaScript', 'Framer Motion', 'Lottie', 'Email JS API', 'GSAP', 'UI/UX'],
liveLink: 'https://digitechsolutionsm.vercel.app/',
githubLink: 'https://github.com/YasirAwan4831/digitech-solutions-ai-platform-overview00'
},

{
id: 12,
title: 'WhatsApp Automation System',
description: 'An AI-powered WhatsApp automation platform developed during the AI & Automation Internship. The system automates messaging workflows, user interactions, notifications and business communication processes using modern automation techniques.',
image: '/public/assets/project/whatsaap-bot-12.png', // Add project image
tools: ['Twilio API WhatsApp', 'AI Automation', 'APIs', 'Python', 'Flask',  'FAQ-based', 'SQLite', 'Ngrok', 'JSON',  'webhook'],
liveLink: 'https://github.com/YasirAwan4831/whatsapp-automation-system-bot',
githubLink: 'https://github.com/YasirAwan4831/whatsapp-automation-system-bot'
},

{
id: 13,
title: 'Python Email Automation System',
description: 'Python-based Email Automation System built with Gmail API & HTML Templates to automate scheduled and personalized emails, streamline workflows, manage secure authentication, maintain activity logs and improve productivity by reducing repetitive business tasks.',
image: '/public/assets/project/email-auto.jpg', // Add project image
tools: ['Python', 'Email Automation', 'SMTP', 'Gmail API', ' OAuth 2.0', 'HTML Templt', ' Scheduling', 'Logging', 'Productivity'],
liveLink: 'https://yasirawaninfo-ai.vercel.app/#projects',
githubLink: 'https://github.com/YasirAwan4831/ai-email-automation-python-internship'
}
];

// ==========================================
// EDUCATION DATA
// ==========================================
export const EDUCATION_DATA = [
  {
    id: 1,
    date: '2019 - 2021',
    title: 'Secondary School Certificate (SSC)',
    subtitle: 'From Government High Secondary School GHUMAWAN',
    description: 'I completed my Secondary School Certificate (SSC) From Government High Secondary School Ghumawan, where I built a strong academic foundation.'
  },
  {
    id: 2,
    date: '2024 - 2026',
    title: 'IT Diploma',
    subtitle: 'RED-C Institute of Engineering & Technology',
    description: 'I am currently pursuing IT Diploma from the Red C Institute of Engineering & Technology Islamabad, where I am building strong practical skills in computer applications and modern IT tools.'
  },
  {
    id: 3,
    date: '2023 - 2027',
    title: 'Bachelor of Science (BS)',
    subtitle: 'From Western Norway University of Applied Sciences',
    description: 'I am expanding my knowledge in Information Technology through continuous learning and practical experience. This journey is helping me strengthen my technical foundation and improve my problem-solving skills.'
  }
];

// ==========================================
// EXPERIENCE DATA
// ==========================================
export const EXPERIENCE_DATA = [
  {
      id: 1,
      date: '2026',
      title: 'AI & Automation Developer Intern',
      company: 'NEXE.AGENT',
      description: 'Worked as an AI & Automation Developer Intern, developing intelligent automation solutions and AI-powered applications. Built projects involving chatbots, resume screening, email automation,  Multi Ai Tools, RAG Based Assi and business process optimization using modern AI tools and Python. ',
      tech: ['Python',  'Flask', 'NLP', 'AI Automation', 'Chatbots', 'Multi-Tool AI', 'Email Automation', 'WA Automation', 'Twilio ', 'REST API', 'RAG-based AI', 'Vector DB', 'AI'],
      link: 'https://github.com/YasirAwan4831/Nexe-Agent-AI-Automation-Dashboard',
      linkType: 'github'
    },

    {
      id: 2,
      date: '2026 (May)',
      title: 'Full Stack Developer Intern',
      company: 'TEYZIX CORE',
      description: 'Worked as a Full Stack Developer Intern, building scalable web applications and contributing to both frontend and backend development. Collaborated on real-world projects involving database management, API integration, authentication systems and responsive user experiences using modern full stack technologies.',
      tech: ['MERN Stack', 'MongoDB', 'Express.js', 'React', 'Node.js', 'Firebase', 'Multi-User System', 'REST API', 'JWT Auth', 'Real-time', 'SaaS-style', 'Socket.io'],
      link: 'https://github.com/YasirAwan4831/teyzix-core-project-dashboard',
      linkType: 'github'
    },

    {
      id: 3,
      date: 'March, 2026',
      title: 'Full Stack Web Developer Intern',
      company: 'Arch Technologies',
      description: 'Worked as a Full Stack Web Developer Intern, developing complete web applications from frontend interfaces to backend functionality. Contributed to database integration, API development, authentication systems and deployment workflows while following industry-standard development practices.',
      tech: ['MongoDB', 'Mongoose', 'Express.js', 'React', 'NEXT.JS', 'Node.js', 'JWI + bcrypt + Nodemailer OTP','Cloudinary',  'REST API', ' Socket.IO', 'Helmet.js'],
      link: 'https://yasirawaninfodev.vercel.app/',
      linkType: 'github'
    },

    {
      id: 4,
      date: '2025',
      title: 'Frontend Web Developer Intern',
      company: 'DevelopersHub Corporation ©',
      description: 'Worked as a Frontend Web Developer Intern, focusing on building responsive and interactive user interfaces. I collaborated on real-world web applications, implemented reusable components and improved UI/UX through structured layouts, animations and client-focused design requirements.',
      tech: ['TypeScript', 'React', 'React Joyride', 'Tailwind CSS', 'Dashboard', 'UI', 'Figma', 'JavaScript', 'Popup', 'Payment UI', 'OTP (2FA)', 'Vercel', 'Git', 'GitHub'],
      link: 'https://github.com/YasirAwan4831/Nexus',
      linkType: 'github'
    },

    {
      id: 5,
      date: '2025',
      title: 'Career Development Intern',
      company: 'Pakistan Career Fair',
      description: 'Worked as a Career Development Intern, assisting students and early-career professionals through guidance, coordination and structured communication. Contributed to learning resources, community engagement and digital workflows while strengthening mentoring and professional interaction skills.',
      tech: ['Career Counseling', 'Communication', 'Self-learning',  'Social Media', 'LinkedIn Optimization', 'Content Creation', 'Client Relations', 'Team-Work', 'Freelancing', 'Digital'],
      link: 'https://www.linkedin.com/posts/yasirawan4831_pcfinternship-skills4u-pakistancareerfair-activity-7419039633444913153-sPN5',
      linkType: 'linkedin'
    },

    {
      id: 6,
      date: '2025 - 2026',
      title: 'Frontend Web Developer',
      company: 'Apexcify Technologies',
      description: 'Worked as a Frontend Web Developer, building modern and responsive user interfaces. Collaborated with design teams to deliver smooth user experiences while strengthening skills in component-based development, structured workflows and scalable frontend architecture.',
      tech: ['HTML', 'CSS', 'JavaScript', 'UX/UI', 'API Integration', 'E-Commerce UI', 'Portfolio Website','Local Storage', 'Cart System', 'Deployment', 'Git', 'GitHub'],
      link: 'https://github.com/YasirAwan4831/ApexcifyTechnologys-FrontendInternship',
      linkType: 'github'
    }
  ];


// ==========================================
// SERVICES DATA
// ==========================================
export const SERVICES_DATA = [
  {
          id: 1,
    icon: 'fa-code',
    title: 'Full-Stack Web Development',
    description:
      'I develop modern, scalable and high-performance web applications from frontend interfaces to backend systems using industry-standard technologies.',
    features: [
      'Modern Frontend Development ',
      'Secure Backend Development ',
      'Database Integration (MongoDB / Firebase)',
      'REST APIs & Authentication Systems',
      'Deployment & Performance Optimization'
    ]
  },
    {
      id: 2,
      icon: 'fa-laptop-code',
      title: 'Frontend Web Development',
      description:
        'I create responsive, visually appealing and user-friendly interfaces focused on performance, accessibility and seamless user experience.',
      features: [
        'Responsive & Mobile-Friendly UI',
        'React & Vite Applications',
        'Reusable Components & Clean Code',
        'Modern UI/UX Implementation',
        'Animations & Performance Enhancements'
      ]
    },
    {
      id: 3,
      icon: 'fa-share-nodes',
      title: 'Social Media Management',
      description:
        'I help individuals and businesses strengthen their online presence through content management, branding and social media optimization.',
      features: [
        'LinkedIn Personal Branding',
        'Instagram & X Content Management',
        'Social Media Posts & Banners',
        'AI-Assisted Content Creation',
        'Content Planning & Optimization'
      ]
    }
  ];

// ==========================================
// SKILLS DATA
// ==========================================
export const SKILLS_DATA = [
  { id: 1, name: 'JavaScript', icon: 'fa-js', tooltip: 'JavaScript' },
  { id: 2, name: 'TypeScript', icon: 'fa-code', tooltip: 'TypeScript' },
  { id: 3, name: 'React', icon: 'fa-react', tooltip: 'React' },
  { id: 4, name: 'Vite', icon: 'fa-bolt', tooltip: 'Vite' },
  { id: 5, name: 'HTML', icon: 'fa-html5', tooltip: 'HTML' },
  { id: 6, name: 'Tailwind CSS', icon: 'fa-css3-alt', tooltip: 'Tailwind CSS' },

  // Backend
  { id: 7, name: 'Node.js', icon: 'fa-node-js', tooltip: 'Node.js' },
  { id: 8, name: 'Express.js', icon: 'fa-server', tooltip: 'Express.js' },
  { id: 9, name: 'Python', icon: 'fa-python', tooltip: 'Python' },
  { id: 10, name: 'Flask', icon: 'fa-server', tooltip: 'Flask' },
  { id: 11, name: 'MongoDB', icon: 'fa-leaf', tooltip: 'MongoDB' },
  { id: 12, name: 'MYSQL', icon: 'fa-database', tooltip: 'MYSQL' },

  // Tools & AI
  { id: 13, name: 'API Integration', icon: 'fa-plug', tooltip: 'API Integration' },
  { id: 14, name: 'Firebase', icon: 'fa-fire', tooltip: 'Firebase' },
  { id: 15, name: 'Cursor AI', icon: 'fa-code', tooltip: 'Cursor AI' },
  { id: 16, name: 'Anti Gravity', icon: 'fa-code', tooltip: 'Anti Gravity' },
  { id: 17, name: 'GIT', icon: 'fa-git-alt', tooltip: 'Git' },
  { id: 18, name: 'GitHub', icon: 'fa-github', tooltip: 'GitHub' },
];

// ==========================================
// SOCIAL LINKS
// ==========================================
export const SOCIAL_LINKS = [
  { id: 1, name: "LinkedIn", icon: "fab fa-linkedin", url: "https://www.linkedin.com/in/yasirawan4831/" },
    { id: 2, name: "GitHub", icon: "fab fa-github", url: "https://github.com/yasirawan4831" },
    { id: 4, name: "LinkTree", icon: "fas fa-link", url: "https://yasirawan4831.github.io/futuristic-links-dashboard/" },
    { id: 5, name: "Dev.to", icon: "fab fa-dev", url: "https://forem.com/yasirawan4831" },
    { id: 6, name: "CoderLegion", icon: "fas fa-copyright", url: "https://coderlegion.com/user/YasirAwan4831" },
    { id: 8, name: "Discord", icon: "fab fa-discord", url: "https://discord.com/users/1298290889373913149" },
    { id: 3, name: "X (Twitter)", icon: "fab fa-x", url: "https://x.com/YasirAwan4831" },
    { id: 4, name: "Instagram", icon: "fab fa-instagram", url: " https://instagram.com/yasirawan4831" },
    { id: 9, name: "YouTube", icon: "fab fa-youtube", url: "https://www.youtube.com/@YasirTech-t1d" },
  ];

// ==========================================
// CONTACT INFO
// ==========================================
export const CONTACT_INFO = {
  email: 'my3154831409@gmail.com',
  website: 'https://yasirawaninfo.vercel.app/',
  location: 'Islamabad, Pakistan'
};