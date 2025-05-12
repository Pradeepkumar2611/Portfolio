import React from 'react';
import '../assets/Styles/Projects.css';

const projects = [
  {
    id: 1,
    title: "Document Verification System",
    description: "A blockchain-based system for secure document verification and tamper-proof storage.",
    technologies: ["Python", "Blockchain", "Flask", "Web3"],
    githubLink: "#", // Replace with real link
    liveDemo: "#"
  },
  {
    id: 2,
    title: "Hotel Management System",
    description: "A web-based system to manage hotel bookings, rooms, and customer records efficiently.",
    technologies: ["React", "Node.js", "MongoDB"],
    githubLink: "#", // Replace with real link
    liveDemo: "#"
  },
  {
    id: 3,
    title: "More Projects Coming Soon",
    description: "Exciting projects are under development and will be added shortly.",
    technologies: ["TBD"],
    githubLink: "#",
    liveDemo: "#"
  }
];

const Projects = () => {
  return (
    <section id="projects" className=" projects-section">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tech-tags">
              {project.technologies.map((tech, index) => (
                <span key={index} className="tech-tag">{tech}</span>
              ))}
            </div>
            <div className="project-links">
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">Live Demo</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
