import React from 'react';
import './Projects.css';

const projectsData = [
  {
    title: 'Project 1',
    description: 'A web application built with React',
    technologies: ['React', 'JavaScript', 'CSS'],
    link: '#'
  },
  {
    title: 'Project 2', 
    description: 'Mobile responsive design',
    technologies: ['HTML', 'CSS', 'Responsive Design'],
    link: '#'
  }
];

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-technologies">
              {project.technologies.map((tech, i) => (
                <span key={i} className="tech-tag">{tech}</span>
              ))}
            </div>
            <a href={project.link} className="btn btn-primary">View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;