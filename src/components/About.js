import React from 'react';
import './About.css';

function About() {
  return (
    <section id="about" className="about-section">
      <h2>About Me</h2>
      <div className="about-content">
        <div className="about-text">
          <p>
            I'm a passionate web developer with expertise in creating 
            responsive and user-friendly web applications. 
            My goal is to build innovative solutions that make a difference.
          </p>
          <div className="skills">
            <h3>Skills</h3>
            <div className="skills-grid">
              <span>React</span>
              <span>JavaScript</span>
              <span>HTML5</span>
              <span>CSS3</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;