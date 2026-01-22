<div align="center">

# 🚀 Muhammad Yasir - Portfolio Website

### Full Stack Developer | React Specialist | UI/UX Enthusiast

[![Portfolio](https://img.shields.io/badge/Portfolio-Live-brightgreen?style=for-the-badge&logo=google-chrome)](https://yasirawan4831.github.io/)
[![GitHub](https://img.shields.io/badge/GitHub-Follow-black?style=for-the-badge&logo=github)](https://github.com/yasirawan4831)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/yasirawan4831/)

![Portfolio Preview](./public/assets/preview.jpg)

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Installation & Setup](#️-installation--setup)
- [Environment Variables](#-environment-variables)
- [Components Overview](#-components-overview)
- [Custom Hooks](#-custom-hooks)
- [Contact Form & Email API](#️-contact-form--email-api)
- [SEO Optimization](#-seo-optimization)
- [Performance](#-performance)
- [Screenshots](#-screenshots)
- [Roadmap](#-roadmap)
- [Contributing](#-contributing)
- [License](#-license)
- [Contact](#-contact)

---

## 🌟 Overview

A modern, responsive, and interactive personal portfolio website built with **React.js** and **Vite**.  
This portfolio showcases my skills, projects, education, professional experience, and services in a clean and user-friendly interface.

### Key Highlights:
- ✨ Modern UI/UX with smooth animations
- 📱 Fully responsive design (Mobile, Tablet, Desktop)
- 🎨 Custom cursor effects
- 📧 Integrated contact form with EmailJS
- 🚀 Fast loading with Vite
- ♿ Accessible and SEO optimized
- 🎯 Component-based architecture

---

## ✨ Features

- ✅ **Responsive Design** - Works seamlessly on all devices
- ✅ **Dynamic Navigation** - Auto-highlighting active sections
- ✅ **Animated Sections** - Scroll-triggered animations
- ✅ **Project Showcase** - Interactive project cards with live demos
- ✅ **Skills Visualization** - Icon-based skill display
- ✅ **Contact Form** - Fully functional with email integration
- ✅ **Social Integration** - Links to GitHub, LinkedIn, Medium, etc.
- ✅ **Custom Cursor** - Interactive cursor effects
- ✅ **Scroll to Top** - Smooth navigation button
- ✅ **SEO Optimized** - Meta tags, sitemap, robots.txt

---

## 🛠️ Tech Stack

### Frontend
![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=flat-square&logo=react&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)

### Tools & Services
![EmailJS](https://img.shields.io/badge/EmailJS-Email_API-orange?style=flat-square)
![Font Awesome](https://img.shields.io/badge/Font_Awesome-Icons-339AF0?style=flat-square&logo=font-awesome&logoColor=white)
![Google Fonts](https://img.shields.io/badge/Google_Fonts-Poppins-4285F4?style=flat-square&logo=google&logoColor=white)

### Development
![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=flat-square&logo=eslint&logoColor=white)
![Prettier](https://img.shields.io/badge/Prettier-F7B93E?style=flat-square&logo=prettier&logoColor=black)
![npm](https://img.shields.io/badge/npm-CB3837?style=flat-square&logo=npm&logoColor=white)

### Deployment
![Netlify](https://img.shields.io/badge/Netlify-00C7B7?style=flat-square&logo=netlify&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white)
![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-222222?style=flat-square&logo=github&logoColor=white)

---

## 📁 Project Structure

```text
my-portfolio/
│
├── index.html              # Main HTML file
├── package.json            # Dependencies & scripts
├── package-lock.json       # Lock file
├── README.md              # Project documentation
├── .gitignore             # Git ignore file
│
├── public/
│   ├── robots.txt         # SEO - Search engine instructions
│   ├── sitemap.xml        # SEO - Site structure
│   └── assets/
│       ├── icon.png       # Favicon
│       ├── my-pic.jpg     # Profile image
│       ├── preview.jpg    # OG preview image
│       └── project/       # Project screenshots
│
└── src/
    ├── main.jsx           # React entry point
    ├── index.css          # Global styles
    ├── App.jsx            # Main app component
    │
    ├── components/        # React components
    │   ├── Navbar.jsx
    │   ├── Home.jsx
    │   ├── About.jsx
    │   ├── Projects.jsx
    │   ├── Education.jsx
    │   ├── Experience.jsx
    │   ├── Services.jsx
    │   ├── Skills.jsx
    │   ├── Contact.jsx
    │   ├── Footer.jsx
    │   └── ScrollToTop.jsx
    │
    ├── hooks/             # Custom React hooks
    │   ├── useCustomCursor.js
    │   ├── useNavbar.js
    │   └── useScrollAnimation.js
    │
    ├── styles/            # Component-specific CSS
    │   ├── Navbar.css
    │   ├── Home.css
    │   ├── About.css
    │   ├── Projects.css
    │   ├── Education.css
    │   ├── Experience.css
    │   ├── Services.css
    │   ├── Skills.css
    │   ├── Contact.css
    │   └── Footer.css
    │
    └── utils/             # Utility functions
        └── constants.js   # Static data & configuration
```

---

## ⚙️ Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Steps

1. **Clone the repository**
```bash
git clone https://github.com/YasirAwan4831/muhammad-yasir-portfolio.git
```

2. **Navigate to project directory**
```bash
cd muhammad-yasir-portfolio
```

3. **Install dependencies**
```bash
npm install
```

4. **Start development server**
```bash
npm run dev
```

5. **Build for production**
```bash
npm run build
```

6. **Preview production build**
```bash
npm run preview
```

---

## 🔐 Environment Variables

For EmailJS integration, create a `.env` file in the root directory:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

> **Note:** Get your credentials from [EmailJS Dashboard](https://www.emailjs.com/)

---

## 🧩 Components Overview

| Component | Description |
|-----------|-------------|
| `Navbar` | Responsive navigation with active link highlighting |
| `Home` | Hero section with animated profile image |
| `About` | Personal info, stats, and contact details |
| `Projects` | Interactive project cards with live demos |
| `Education` | Timeline of educational background |
| `Experience` | Professional work experience |
| `Services` | Services offered with detailed features |
| `Skills` | Technology stack visualization |
| `Contact` | Functional contact form with EmailJS |
| `Footer` | Copyright and social links |
| `ScrollToTop` | Smooth scroll-to-top button |

---

## 🪝 Custom Hooks

### `useCustomCursor`
Creates an interactive custom cursor that follows mouse movement.

### `useNavbar`
Handles navigation state, active section tracking, and smooth scrolling.

### `useScrollAnimation`
Triggers animations when elements enter the viewport using Intersection Observer API.

---

## ✉️ Contact Form & Email API

The portfolio features a **fully functional Contact Form** powered by **EmailJS API**.

### Features:
- ✅ Real-time form validation
- ✅ Success/Error notifications
- ✅ Smooth animations
- ✅ Spam protection
- ✅ Mobile responsive

### How it works:
1. User fills out the form (Name, Email, Message)
2. Form validation checks input
3. EmailJS sends email to configured address
4. User receives confirmation message

### Setup Instructions:
1. Create account on [EmailJS](https://www.emailjs.com/)
2. Create email service & template
3. Add credentials to `.env` file
4. Update `Contact.jsx` with your service details

---

## 🔍 SEO Optimization

### Implemented SEO Features:
- ✅ **Meta Tags** - Optimized title, description, keywords
- ✅ **Open Graph** - Social media preview tags
- ✅ **Twitter Cards** - Twitter-specific meta tags
- ✅ **Schema.org** - Structured data (JSON-LD)
- ✅ **Canonical URLs** - Prevent duplicate content
- ✅ **Sitemap.xml** - Search engine site structure
- ✅ **Robots.txt** - Search engine crawling instructions
- ✅ **Semantic HTML** - Proper HTML5 elements
- ✅ **Alt Tags** - Image descriptions

---

## ⚡ Performance

### Optimization Techniques:
- ⚡ Vite for fast build times
- ⚡ Code splitting & lazy loading
- ⚡ Image optimization
- ⚡ CSS minification
- ⚡ Font preloading
- ⚡ DNS prefetching

### Performance Metrics:
- Lighthouse Score: **95+**
- First Contentful Paint: **< 1.5s**
- Time to Interactive: **< 3s**

---

## 📸 Screenshots

<details>
<summary>Click to view screenshots</summary>

### Home Section
![Home](./screenshots/home.png)

### Projects Section
![Projects](./screenshots/projects.png)

### Contact Section
![Contact](./screenshots/contact.png)

</details>

---

## 🗺️ Roadmap

- [ ] Add dark mode toggle
- [ ] Implement blog section with Markdown support
- [ ] Add testimonials slider
- [ ] Integrate Google Analytics
- [ ] Add loading animations
- [ ] Create admin panel for content management
- [ ] Multi-language support (Urdu/English)

---

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest new features
- Submit pull requests

---

## 📄 License

**All Rights Reserved © 2025 Muhammad Yasir**

This project is for **personal portfolio use only**.  
Reproduction, distribution, or commercial use without explicit permission is **not allowed**.

---

## 📞 Contact

<div align="center">

[![Email](https://img.shields.io/badge/Email-myasirtech4831@gmail.com-red?style=for-the-badge&logo=gmail&logoColor=white)](mailto:myasirtech4831@gmail.com)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Muhammad%20Yasir-blue?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/yasirawan4831/)
[![GitHub](https://img.shields.io/badge/GitHub-yasirawan4831-black?style=for-the-badge&logo=github)](https://github.com/yasirawan4831)
[![Medium](https://img.shields.io/badge/Medium-@YasirAwan4831-black?style=for-the-badge&logo=medium)](https://medium.com/@YasirAwan4831)
[![Twitter](https://img.shields.io/badge/Twitter-@YasirAwan4831-blue?style=for-the-badge&logo=x)](https://x.com/YasirAwan4831)

</div>

---

<div align="center">

### ⭐ If you like this project, please give it a star!

Made with ❤️ by [Muhammad Yasir](https://github.com/yasirawan4831)

</div>