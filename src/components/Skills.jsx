import React from 'react';
import '../styles/Skills.css';

const skillsData = [
  // Frontend
  { id: 1, name: 'JavaScript', icon: 'fa-js', tooltip: 'JavaScript' },
  { id: 2, name: 'TypeScript', icon: 'fa-code', tooltip: 'TypeScript' },
  { id: 3, name: 'React', icon: 'fa-react', tooltip: 'React' },
  { id: 4, name: 'Next.js', icon: 'fa-code', tooltip: 'Next.js' },
  { id: 5, name: 'Vite', icon: 'fa-bolt', tooltip: 'Vite' },

  // Backend
  { id: 8, name: 'Node.js', icon: 'fa-node-js', tooltip: 'Node.js' },
  { id: 10, name: 'Python', icon: 'fa-python', tooltip: 'Python' },
  { id: 11, name: 'Flask', icon: 'fa-server', tooltip: 'Flask' },

  // Database & APIs
  { id: 13, name: 'MongoDB', icon: 'fa-leaf', tooltip: 'MongoDB' },
  { id: 14, name: 'MySQL', icon: 'fa-database', tooltip: 'MySQL' },
  { id: 15, name: 'API Integration', icon: 'fa-plug', tooltip: 'API Integration' },

  // AI & Automation
  { id: 17, name: 'Google AntiGravity', icon: 'fa-brain', tooltip: 'Google AntiGravity' },
  { id: 18, name: 'Cursor AI', icon: 'fa-code', tooltip: 'Cursor AI' },

  // Tools
  { id: 19, name: 'Git', icon: 'fa-git-alt', tooltip: 'Git' },
  { id: 20, name: 'GitHub', icon: 'fa-github', tooltip: 'GitHub' },
  { id: 21, name: 'Figma', icon: 'fa-figma', tooltip: 'Figma' }
];

const Skills = () => {
  const getIconClass = (iconName) => {
    const brandIcons = [
      'html5',
      'css3-alt',
      'js',
      'react',
      'node-js',
      'php',
      'python',
      'git-alt',
      'github',
      'wordpress',
      'figma'
    ];

    const iconBase = iconName.replace('fa-', '');
    return brandIcons.includes(iconBase) ? 'fab' : 'fas';
  };

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="skills-header">
          <h2 className="section-title">Skills & Tools</h2>
          <p className="section-subtitle">
            A curated set of modern technologies and tools that I use to build
            high-quality digital solutions.
          </p>
        </div>

        <div className="skills-container">
          {skillsData.map((skill) => (
            <div
              key={skill.id}
              className="skill-item"
              data-tooltip={skill.tooltip}
            >
              <div className="skill-icon">
                <i
                  className={`${getIconClass(skill.icon)} ${skill.icon}`}
                ></i>
              </div>
              <span className="skill-name">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;