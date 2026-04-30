// Projects.jsx — Project showcase cards
import React from "react";
import "./Projects.css";

// GitHub icon (inline SVG)
const GitHubIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

// Projects data — update githubUrl with your real repo links
const PROJECTS = [
  {
    num: "01",
    title: "E-Commerce Frontend App",
    description:
      "A modern, fully responsive e-commerce frontend built with React. Features product listing, add-to-cart functionality, dynamic routing, and state management using hooks. Includes clean UI design and smooth user experience.",
    tech: ["React", "CSS Modules", "Hooks", "React Router"],
    githubUrl: "https://github.com/DarshanParmar128128/e_commerce.git",
  },
  {
    num: "02",
    title: "Authentication System",
    description:
      "Built a secure and responsive authentication system using React. Implemented login and signup functionality with form validation, protected routes using React Router, and state management using hooks. Designed UI components with Material UI for a clean and modern user experience.",
    tech: ["React", "Material UI", "React Router", "Hooks"],
    githubUrl: "https://github.com/DarshanParmar128128/authentication_system.git",
  },
  { num: "03",
  title: "Currency Converter App",
  description:
    "Developed a real-time currency converter using JavaScript with API integration to fetch live exchange rates. Supported conversion between multiple currencies, implemented dynamic UI updates, and handled edge cases for accurate and responsive user interaction.",
  tech: ["JavaScript", "DOM", "ES6+", "REST API"],
    githubUrl: "https://github.com/DarshanParmar128128/demoreactconverter.git",
  },
];

// Single project card
function ProjectCard({ num, title, description, tech, githubUrl }) {
  return (
    <div className="project-card">
      <div className="project-card__num">{num}</div>
      <h3 className="project-card__title">{title}</h3>
      <p className="project-card__desc">{description}</p>

      {/* Tech stack tags */}
      <div className="project-card__tags">
        {tech.map((t) => (
          <span key={t} className="tech-tag">
            {t}
          </span>
        ))}
      </div>

      {/* GitHub link */}
      <a
        href={githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="project-card__link"
      >
        <GitHubIcon />
        View on GitHub
      </a>
    </div>
  );
}

function Projects() {
  return (
    <section id="projects">
      <div className="section-wrapper">
        <span className="section-tag">What I've built</span>
        <h2 className="section-title">Projects</h2>
        <div className="divider" />

        <div className="projects__grid">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.num} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
