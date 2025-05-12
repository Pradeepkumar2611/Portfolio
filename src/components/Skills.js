import React from 'react';
import '../assets/Styles/Skills.css';

const skills = [
  { name: "JavaScript", level: "Advanced", icon: "🟨" },
  { name: "React", level: "Advanced", icon: "⚛️" },
  { name: "HTML5", level: "Advanced", icon: "📄" },
  { name: "CSS3", level: "Advanced", icon: "🎨" },
   { name: "C++", level: "Intermediate", icon: "➕" }, // Alternative: ➕
  { name: "C", level: "Intermediate", icon: "🔷" },
  { name: "Python", level: "Intermediate", icon: "🐍" },
  { name: "Node.js", level: "Intermediate", icon: "🟩" },
  { name: "MongoDB", level: "Intermediate", icon: "🍃" },
  { name: "Git", level: "Advanced", icon: "🔧" },
  { name: "SQL", level: "Intermediate", icon: "🗄️" },
  { name: "Bootstrap", level: "Intermediate", icon: "📦" },
  { name: "Express.js", level: "Intermediate", icon: "🚂" },
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h2>Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <div className="skill-icon">{skill.icon}</div>
            <h3>{skill.name}</h3>
            <p>{skill.level}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
