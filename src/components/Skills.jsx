import React from 'react';

const Skills = () => {
  const skillsData = [
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

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="skills-header">
          <h2 className="section-title">Skills & Tools</h2>
          <p className="section-subtitle">
            A curated set of modern technologies and tools that I use to build high-quality digital solutions.
          </p>
        </div>
        
        <div className="skills-container">
          {skillsData.map((skill) => (
            <div key={skill.id} className="skill-item" data-tooltip={skill.tooltip}>
              <div className="skill-icon">
                <i className={`fab ${skill.icon}`}></i>
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