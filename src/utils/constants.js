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
      title: 'Portfolio Website',
      description: 'A fully responsive and modern portfolio website built with clean UI/UX principles. It highlights my professional skills, completed projects and technical expertise. The design is minimal, fast and optimized for all devices, featuring interactive animations and smooth navigation.',
      image: '/public/assets/all-photo/portfolio-pic.jpeg',
      tools: ['React', 'JavaScript', 'CSS', 'JSON', 'Fetch API', 'Vite', 'GSAP', 'AXIOS', 'Framer Motion', 'npm', 'Yarn'],
      liveLink: 'https://muhammadyaser-portfolio.netlify.app',
      githubLink: 'https://github.com/YasirAwan4831/ApexcifyTechnologys-FrontendInternship'
    },
    {
      id: 2,
      title: 'Business Nexus Dashboard',
      description: 'Business Nexus Frontend: React + Tailwind dashboard for Investors & Entrepreneurs with role-based UI, meeting calendar, payment UI mock, document chamber and guided walkthrough (React Joyride). Demo deployed on Vercel.',
      tools: ['React', 'Tailwind CSS','Login', 'Dashboard', 'video calling', 'UI/UX', 'Payment Actions',  'React Joyride'],
      liveLink: 'https://yasirawan.vercel.app/login',
      githubLink: 'https://github.com/YasirAwan4831/Nexus',
      image: '/public/assets/all-photo/business-app.png'
    },
    {
      id: 3,
      title: 'E-commerce Store',
      description: 'A fully functional e-commerce website with product listings, dynamic pages, cart handling and a complete user-end shopping experience. Designed with a clean UI and smooth navigation, built to scale with future backend integration.',
      image: '/public/assets/all-photo/e-commerce.jpeg',
      tools: ['HTML', 'CSS', 'JavaScript', 'React', 'Vue.js', 'UI/UX', 'Figma'],
      liveLink: 'https://yasirawan-devhub-corporation-intern.netlify.app/',
      githubLink: 'https://github.com/YasirAwan4831/developerhub-corporation-internship--Task_1_Ecommerce_Website'
    }
  ];

  // Additional Projects (Load More - 9 Projects)
  const additionalProjects = [
    {
      id: 4,
      title: 'YARIS AI Smart Chat Bot',
      description: 'An interactive AI-powered chatbot built with React & JavaScript, designed to manage tasks efficiently, deliver smart context-aware responses & enhance the overall user interaction experience.',
      tools: ['HTML', 'CSS', 'JavaScript', 'React', 'TypeScript', 'AI Integration', 'API'],
      liveLink: 'https://github.com/YasirAwan4831/YARIS-AI-Smart-Chat-Bot',
      githubLink: 'https://github.com/YasirAwan4831/YARIS-AI-Smart-Chat-Bot',
      image: '/public/assets/all-photo/yaris-ai-chatbot.jpeg'
    },
    {
      id: 5,
      title: 'Web Development Quiz App',
      description: 'An interactive quiz app with 300+ web-development MCQs, personalized login, timed questions and a secure anti-cheating system to improve learning.',
      tools: ['HTML', 'CSS', 'JavaScript', 'UX/UI', 'Responsive Design', 'Local Storage'],
      liveLink: 'https://yasirawan4831.github.io/webdev-quiz-app/',
      githubLink: 'https://github.com/YasirAwan4831/webdev-quiz-app',
      image: '/public/assets/all-photo/quiz-app.png'
    },
    {
      id: 6,
      title: 'Product Listing Website',
      description: 'A modern product listing website built with HTML, CSS & JavaScript, featuring responsive design, smooth scroll, login/signup, My Cart, Payment, Custom fonts and a user-friendly interface..',
      tools: ['HTML', 'CSS', 'JavaScript', 'UX/UI', 'Login/Signup System', 'My Cart', 'Git', 'Smooth Scroll', ' Payment Integration'],
      liveLink: 'https://github.com/YasirAwan4831/ApexcifyTechnologys-FrontendInternship/tree/main/task-2',
      githubLink: 'https://github.com/YasirAwan4831/ApexcifyTechnologys-FrontendInternship/tree/main/task-2',
      image: '/public/assets/all-photo/product-list.png'
    },
    {
      id: 7,
      title: 'Tourism Travel Website',
      description: 'A modern and responsive tourism website providing destination details, travel guides and popular attractions. Designed with a clean layout and user-friendly experience to explore places easily.',
      image: '/public/assets/all-photo/tourism-travel-website.jpeg',
      tools: ['HTML', 'CSS', 'JavaScript', 'React', 'TypeScript', 'JSON', 'UI'],
      liveLink: 'https://github.com/YasirAwan4831',
      githubLink: 'https://github.com/YasirAwan4831'
    },
    {
      id: 8,
      title: 'Final Year Diploma Web Project',
      description: 'A multi-page web application built as a FYP, featuring a structured UI, dynamic content, animations, a responsive layout & modules highlighting key front-end skills.',
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
      description: 'A Python-based computer vision project using OpenCV, focused on real-time image processing and analysis. It demonstrates core Python programming concepts, computer vision logic and practical use of popular libraries in real-world scenarios.',
      tools: ['Python', 'OpenCV', 'Computer Vision', 'Image Processing', 'Python Libraries', ' PIP', 'Flipping Operations'],
      liveLink: 'https://github.com/YasirAwan4831/python-practice-project_0',
      githubLink: 'https://github.com/YasirAwan4831/python-practice-project_0',
      image: '/public/assets/all-photo/python-project.png'
    },
    {
      id: 11,
      title: 'Futuristic Links Dashboard',
      description: 'A futuristic JS-based links dashboard that organizes personal and social links in one place. It features animated UI, canvas effects, an AI-style floating background & a smooth dark/light theme toggle for an interactive user experience.',
      tools: ['JavaScript', 'Dark Theme', 'UI', 'Canvas Animations', 'Light/Dark Mode', 'Link Dashboard', 'Front-End Logic'],
      liveLink: 'https://yasirawan4831.github.io/futuristic-links-dashboard/',
      githubLink: 'https://github.com/YasirAwan4831/futuristic-links-dashboard',
      image: '/public/assets/all-photo/aii-linKs.png'
    },
    {
      id: 12,
      title: 'To-Do List App',
      description: 'A clean and interactive to-do list web application that allows users to add, edit, delete & mark tasks as completed. The UI is simple, responsive & optimized for fast performance.',
      tools: ['HTML', 'CSS', 'JavaScript', 'Local Storage', 'Responsive Design'],
      liveLink: 'https://github.com/YasirAwan4831/todo-list-js-app',
      githubLink: 'https://github.com/YasirAwan4831/todo-list-js-app',
      image: '/public/assets/all-photo/to-do.png'
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
    date: '2025',
    title: 'Frontend Web Developer Intern',
    company: 'DevHub Corporation',
    description: 'Worked as a Frontend Web Developer Intern, creating responsive and user-friendly interfaces using modern web technologies. Contributed to real-world client projects and gained practical experience in collaborative and agile development workflows',
    tech: ['HTML', 'CSS', 'JavaScript', 'React', 'UX/UI', 'Figma', 'Git', 'GitHub'],
    link: 'https://github.com/YasirAwan4831/developerhub-corporation-internship--Task_1_Ecommerce_Website',
    linkType: 'github'
  },
  {
    id: 2,
    date: '2025',
    title: 'Career Development Intern',
    company: 'Pakistan Career Fire',
    description: 'Worked as a Career Development Intern, supporting students and professionals. Contributed to educational resources, community engagement and communication. Gained experience in mentoring, coordination and digital workflows.',
    tech: ['Career Counseling', 'Communication', 'Content Creation', 'Client Relations', 'Freelancing'],
    link: 'https://www.linkedin.com/in/yasirawan4831/',
    linkType: 'linkedin'
  },
  {
    id: 3,
    date: '2025 - 2026',
    title: 'Frontend Web Developer',
    company: 'Apexcify Technologys',
    description: 'Currently working as a Frontend Web Developer, creating modern, responsive interfaces. Collaborating with design and backend teams for seamless UX. Building expertise in component-based architecture, API integration and scalable frontend workflows.',
    tech: ['HTML CSS', 'JavaScript', 'React', 'TypeScript', 'Node.Js', 'API Integration', 'UX/UI', 'Git & GitHub'],
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

// ==========================================
// SKILLS DATA
// ==========================================
export const SKILLS_DATA = [
  { id: 1, name: 'HTML5', icon: 'fa-html5', tooltip: 'HTML5' },
  { id: 2, name: 'CSS3', icon: 'fa-css3-alt', tooltip: 'CSS3' },
  { id: 3, name: 'JavaScript', icon: 'fa-js', tooltip: 'JavaScript' },
  { id: 4, name: 'JSON', icon: 'fa-code', tooltip: 'JSON' },
  { id: 5, name: 'REACT', icon: 'fa-react', tooltip: 'React' },
  { id: 6, name: 'Vue.js', icon: 'fa-vuejs', tooltip: 'Vue.js' },
  { id: 7, name: 'Node.js', icon: 'fa-node-js', tooltip: 'Node.js' },
  { id: 8, name: 'PHP', icon: 'fa-php', tooltip: 'PHP' },
  { id: 9, name: 'Python', icon: 'fa-python', tooltip: 'Python' },
  { id: 10, name: 'MongoDB', icon: 'fa-database', tooltip: 'MongoDB' },
  { id: 11, name: 'MYSQL', icon: 'fa-database', tooltip: 'MYSQL' },
  { id: 12, name: 'API Integration', icon: 'fa-plug', tooltip: 'API Integration' },
  { id: 13, name: 'GIT', icon: 'fa-git-alt', tooltip: 'Git' },
  { id: 14, name: 'GitHub', icon: 'fa-github', tooltip: 'GitHub' },
  { id: 15, name: 'WordPress', icon: 'fa-wordpress', tooltip: 'WordPress' },
  { id: 16, name: 'Canva', icon: 'fa-palette', tooltip: 'Canva' },
  { id: 17, name: 'Figma', icon: 'fa-figma', tooltip: 'Figma' },
  { id: 18, name: 'OpenAI', icon: 'fa-robot', tooltip: 'OpenAI' }
];

// ==========================================
// SOCIAL LINKS
// ==========================================
export const SOCIAL_LINKS = [
  { id: 1, name: 'LinkedIn', icon: 'fa-linkedin', url: 'https://www.linkedin.com/in/yasirawan4831/' },
  { id: 2, name: 'Email', icon: 'fa-envelope', url: 'mailto:myasirtech4831@gmail.com' },
  { id: 3, name: 'GitHub', icon: 'fa-github', url: 'https://github.com/yasirawan4831' },
  { id: 4, name: 'WhatsApp', icon: 'fa-whatsapp', url: 'https://call.whatsapp.com/voice/Vy6FTmNnwmVqZPvP7XFIfk' },
  { id: 5, name: 'Instagram', icon: 'fa-instagram', url: 'https://www.instagram.com/yasirawan4831/' },
  { id: 6, name: 'Facebook', icon: 'fa-facebook', url: 'https://www.facebook.com/profile.php?id=61575935942197' },
  { id: 7, name: 'Medium', icon: 'fa-medium', url: 'https://medium.com/@YasirAwan4831' },
  { id: 8, name: 'Twitter', icon: 'fa-x-twitter', url: 'https://x.com/YasirAwan4831' },
  { id: 9, name: 'Youtube', icon: 'fa-youtube', url: 'https://www.youtube.com/@YasirTech-t1d' }
];

// ==========================================
// CONTACT INFO
// ==========================================
export const CONTACT_INFO = {
  email: 'myasirtech4831@gmail.com',
  website: 'https://github.com/yasirawan4831',
  location: 'Islamabad, Pakistan'
};