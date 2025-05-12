import React from 'react';
import '../assets/Styles/About.css';
import image from '../assets/images/pradeep1.png';

const About = () => {
  return (
    <section id="about" className="about-section">
      <h2>About Me</h2>
      <div className="about-content">
        <img src={image} alt="Profile" className="profile-img" />
        <div className="about-text">
          <p>Hello! I'm Pradeepkumar M, Computer Science and Engineering graduate with a strong passion for software development and technology-driven problem solving.</p>
          <p>My journey in tech began when I started exploring how software can solve real-life challenges — and that curiosity has grown into hands-on experience.</p>
          <p>When I’m not coding, I enjoy learning about new technologies, watching tech-related videos, exploring open-source projects, and spending time on personal growth and productivity.</p>
        </div>
      </div>
    </section>
  );
};

export default About;
