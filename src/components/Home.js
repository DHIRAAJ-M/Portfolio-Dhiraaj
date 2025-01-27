import React from 'react';
import './Home.css';

function Home() {
  return (
    <section id="home" className="home-section">
      <div className="home-content">
      <img 
          src="/images/IMG1.jpg" 
          alt="Profile" 
          className="profile-image" 
        />
        <h1>Hi, I'm DHIRAAJ M </h1>
        <p>A Web Developer & Designer</p>
        <div className="home-buttons">
          <a href="#projects" className="btn btn-primary">View Projects</a>
          <a href="#contact" className="btn btn-secondary">Contact Me</a>
        </div>
      </div>
    </section>
  );
}

export default Home;