import React from 'react';

const Education = () => {
  const educationData = [
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

  return (
    <section id="education" className="education-section">
      <div className="container">
        <h2 className="section-title">My Education</h2>
        
        <div className="education-content">
          {/* Left Side: Timeline Image */}
          <div className="education-image">
            <div className="image-placeholder education-img">
              <i className="fas fa-graduation-cap"></i>
              <span>Education Timeline</span>
            </div>
          </div>
          
          {/* Right Side: Education Timeline */}
          <div className="education-timeline">
            {educationData.map((edu) => (
              <div key={edu.id} className="timeline-item">
                <div className="timeline-date">{edu.date}</div>
                <div className="timeline-content">
                  <h3 className="timeline-title">{edu.title}</h3>
                  <h4 className="timeline-subtitle">{edu.subtitle}</h4>
                  <p className="timeline-description">{edu.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;