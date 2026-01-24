<div align="center">

#  Muhammad Yasir - Portfolio Website


[![Portfolio](https://img.shields.io/badge/Portfolio-Live-brightgreen?style=for-the-badge&logo=google-chrome)](https://yasirawan4831.github.io/)
[![GitHub](https://img.shields.io/badge/GitHub-Follow-black?style=for-the-badge&logo=github)](https://github.com/yasirawan4831)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/yasirawan4831/)


</div>

A modern and responsive personal portfolio website built with **React.js**.  
This project is a React-based personal portfolio showcasing my web development skills.

---

### 🌐 Live Preview


---

##  Overview

A modern, responsive, and interactive personal portfolio website built with **React.js** and **Vite**.  
This portfolio showcases my skills, projects, education, professional experience and services in a clean and user-friendly interface.

### Key Highlights:
-  Modern UI/UX with smooth animations
-  Fully responsive design (Mobile, Tablet Desktop)
-  Custom cursor effects
-  Integrated contact form with EmailJS
-  Fast loading with Vite
-  Accessible and SEO optimized
-  Component-based architecture

---

##  Features

- ✅ **Responsive Design** - Works seamlessly on all devices
- ✅ **Dynamic Navigation** - Auto-highlighting active sections
- ✅ **Animated Sections** - Scroll-triggered animations
- ✅ **Project Showcase** - Interactive project cards with live demos
- ✅ **Skills Visualization** - Icon-based skill display
- ✅ **Contact Form** - Fully functional with email integration
- ✅ **Social Integration** - Links to GitHub, LinkedIn, Medium etc.
- ✅ **Custom Cursor** - Interactive cursor effects
- ✅ **Scroll to Top** - Smooth navigation button
- ✅ **SEO Optimized** - Meta tags, sitemap robots.txt

---

## Tech Stack

React.js, JavaScript (ES6+), HTML5, CSS3, vite, E-MailJS 

[![React](https://img.shields.io/badge/React-17.0.2-blue?logo=react&logoColor=white)]()
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow?logo=javascript&logoColor=black)]()
[![HTML5](https://img.shields.io/badge/HTML5-E53935?logo=html5&logoColor=white)]()
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)]()
[![Vite](https://img.shields.io/badge/Vite-3.0.0-purple?logo=vite&logoColor=white)]()
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-06B6D4?logo=tailwind-css&logoColor=white)]()
[![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?logo=bootstrap&logoColor=white)]()
[![Framer Motion](https://img.shields.io/badge/FramerMotion-0055FF?logo=framer&logoColor=white)]()
[![GSAP](https://img.shields.io/badge/GSAP-88CE02?logo=greensock&logoColor=white)]()
[![Axios](https://img.shields.io/badge/Axios-5A29E4?logo=axios&logoColor=white)]()
[![Fetch API](https://img.shields.io/badge/Fetch_API-00C4CC?logo=javascript&logoColor=white)]()
[![Figma](https://img.shields.io/badge/Figma-F24E1E?logo=figma&logoColor=white)]()
[![Canva](https://img.shields.io/badge/Canva-00C4CC?logo=canva&logoColor=white)]()
[![Netlify](https://img.shields.io/badge/Netlify-00C7B7?logo=netlify&logoColor=white)]()
[![Vercel](https://img.shields.io/badge/Vercel-000000?logo=vercel&logoColor=white)]()
[![ESLint](https://img.shields.io/badge/ESLint-4B32C3?logo=eslint&logoColor=white)]()
[![Prettier](https://img.shields.io/badge/Prettier-F7B93E?logo=prettier&logoColor=white)]()
[![npm](https://img.shields.io/badge/npm-CB3837?logo=npm&logoColor=white)]()
[![Yarn](https://img.shields.io/badge/Yarn-2C8EBB?logo=yarn&logoColor=white)]()
---

## 📁 Project Structure

```text
my-portfolio/
│
├── index.html
├── package.json
├── package-lock.json
├── LICENSE
├── README.md   
├── .gitignore  
├── update.md  
│
├── public/
│   ├── robots.txt 
│   ├── sitemap.xml 
│   └── assets/
│       ├── icon.png
│       ├── my-pic.jpg   
│       ├── preview.jpg  
│       └── photos/   
│
└── src/
    ├── main.jsx       
    ├── index.css     
    ├── App.jsx    
    │
    ├── components/       
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
    ├── hooks/             
    │   ├── useCustomCursor.js
    │   ├── useNavbar.js
    │   └── useScrollAnimation.js
    │
    ├── styles/            
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
    └── utils/             
        └── constants.js   
```

---

##  Installation & Setup

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

##  Components Overview

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

##  Custom Hooks

### `useCustomCursor`
Creates an interactive custom cursor that follows mouse movement.

### `useNavbar`
Handles navigation state, active section tracking, and smooth scrolling.

### `useScrollAnimation`
Triggers animations when elements enter the viewport using Intersection Observer API.

---

##  Contact Form & Email API

The portfolio features a **fully functional Contact Form** powered by **EmailJS API**.

### Features:
-  Real-time form validation
-  Success/Error notifications
-  Smooth animations
-  Spam protection
-  Mobile responsive

### How it works:
1. User fills out the form (Name, Email, Message)
2. Form validation checks input
4. User receives confirmation message


---

##  SEO Optimization

### Implemented SEO Features:
-  **Meta Tags** - Optimized title, description, keywords
-  **Open Graph** - Social media preview tags
-  **Twitter Cards** - Twitter-specific meta tags
-  **Schema.org** - Structured data (JSON-LD)
-  **Canonical URLs** - Prevent duplicate content
-  **Sitemap.xml** - Search engine site structure
-  **Robots.txt** - Search engine crawling instructions
-  **Semantic HTML** - Proper HTML5 elements
-  **Alt Tags** - Image descriptions

---

##  Performance

### Optimization Techniques:
-  Vite for fast build times
-  Code splitting & lazy loading
-  Image optimization
-  CSS minification
-  Font preloading
-  DNS prefetching

### Performance Metrics:
- Lighthouse Score: **95+**
- First Contentful Paint: **< 1.5s**
- Time to Interactive: **< 3s**

---

##  Screenshots

<details>
<summary>Click to view screenshots</summary>

### Home Section
![Home](image.png)

### Projects Section
![Projects](image-1.png)

### Contact Section
![Contact](image-2.png)

</details>

---

##  Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest new features
- Submit pull requests

---

## 📄 License

**All Rights Reserved © 2025 Muhammad Yasir**

This project is for **personal portfolio use only**.  
Reproduction, distribution or commercial use without explicit permission is **not allowed**.

---

## 📬 Contact

<p align="center">

<a href="https://yasirawan4831.github.io/futuristic-links-dashboard/">
<img src="https://img.shields.io/badge/All%20Links-00FFFF?style=for-the-badge&logo=linktree&logoColor=black" style="margin:4px;" />
</a>

<a href="https://linkedin.com/in/yasirawan4831">
<img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" style="margin:4px;" />
</a>

<a href="https://github.com/YasirAwan4831">
<img src="https://img.shields.io/badge/GitHub-111111?style=for-the-badge&logo=github&logoColor=white" style="margin:4px;" />
</a>

<a href="https://yasirawan4831.github.io/ApexcifyTechnologys-FrontendInternship/task-2/">
<img src="https://img.shields.io/badge/Portfolio-00E5FF?style=for-the-badge&logo=google-chrome&logoColor=black" style="margin:4px;" />
</a>

<a href="https://kaggle.com/yasirawan4831">
<img src="https://img.shields.io/badge/Kaggle-20BEFF?style=for-the-badge&logo=kaggle&logoColor=white" style="margin:4px;" />
</a>

<a href="https://coderlegion.com/user/YasirAwan4831">
<img src="https://img.shields.io/badge/TheCoderLogin-2E8B57?style=for-the-badge&logo=c&logoColor=white" style="margin:4px;" />
</a>

<a href="https://leetcode.com/u/YasirAwan4831">
<img src="https://img.shields.io/badge/LeetCode-FFA116?style=for-the-badge&logo=leetcode&logoColor=black" style="margin:4px;" />
</a>

<a href="https://stackoverflow.com/users/31822196/yasirawan4831">
<img src="https://img.shields.io/badge/StackOverflow-F58025?style=for-the-badge&logo=stack-overflow&logoColor=white" style="margin:4px;" />
</a>

<a href="https://forem.com/yasirawan4831">
<img src="https://img.shields.io/badge/Dev.to-000000?style=for-the-badge&logo=dev.to&logoColor=white" style="margin:4px;" />
</a>

<a href="https://hashnode.com/@YasirAwan4831">
<img src="https://img.shields.io/badge/Hashnode-2962FF?style=for-the-badge&logo=hashnode&logoColor=white" style="margin:4px;" />
</a>

<a href="https://medium.com/@YasirAwan4831">
<img src="https://img.shields.io/badge/Medium-12100E?style=for-the-badge&logo=medium&logoColor=white" style="margin:4px;" />
</a>

<a href="https://substack.com/@yasirwaninfo">
<img src="https://img.shields.io/badge/Substack-FF6719?style=for-the-badge&logo=substack&logoColor=white" style="margin:4px;" />
</a>

<a href="https://www.youtube.com/@YasirTech-t1d">
<img src="https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white" style="margin:4px;" />
</a>

<a href="https://x.com/YasirAwan4831">
<img src="https://img.shields.io/badge/X-000000?style=for-the-badge&logo=x&logoColor=white" style="margin:4px;" />
</a>

<a href="https://instagram.com/yasirawan4831">
<img src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white" style="margin:4px;" />
</a>

<a href="https://facebook.com/profile.php?id=61575935942197">
<img src="https://img.shields.io/badge/Facebook-1877F2?style=for-the-badge&logo=facebook&logoColor=white" style="margin:4px;" />
</a>

<a href="https://www.tiktok.com/@yasirawan4831?lang=en">
<img src="https://img.shields.io/badge/TikTok-FF6A00?style=for-the-badge&logo=tiktok&logoColor=white" style="margin:4px;" />
</a>

<a href="https://asani.pk/profile/yasirawan4831">
<img src="https://img.shields.io/badge/ASANI-00C896?style=for-the-badge&logo=briefcase&logoColor=white" style="margin:4px;" />
</a>

<a href="https://orcid.org/0009-0002-8711-6868">
<img src="https://img.shields.io/badge/ORCID-A6CE39?style=for-the-badge&logo=orcid&logoColor=white" style="margin:4px;" />
</a>

<a href="https://developers.google.com/profile/u/yasirawaninfo">
<img src="https://img.shields.io/badge/Google%20Dev-4285F4?style=for-the-badge&logo=google&logoColor=white" style="margin:4px;" />
</a>

<a href="https://discord.com/users/1298290889373913149">
<img src="https://img.shields.io/badge/Discord-5865F2?style=for-the-badge&logo=discord&logoColor=white" style="margin:4px;" />
</a>

<a href="mailto:my3154831409@gmail.com">
<img src="https://img.shields.io/badge/Gmail-EA4335?style=for-the-badge&logo=gmail&logoColor=white" style="margin:4px;" />
</a>

<a href="mailto:my3154831409@hotmail.com">
<img src="https://img.shields.io/badge/Outlook-0078D4?style=for-the-badge&logo=microsoft-outlook&logoColor=white" style="margin:4px;" />
</a>

</p>



---



###  If you like this project, please give it a star!

Made with  by [Muhammad Yasir](https://github.com/yasirawan4831)

