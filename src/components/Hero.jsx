import React from "react";
import "./Hero.css";

const DownloadIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

const GitHubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const SKILLS_MARQUEE = [
  "React",
  "JavaScript",
  "HTML5",
  "CSS3",
  "Responsive Design",
  "Git & GitHub",
  "REST APIs",
  "System Design",
  "Clean Code",
  "UI Engineering",
];
const handleResumeClick = () => {
  const fileUrl = "/resume.pdf";

  // Open resume in new tab (VIEW)
  const newTab = window.open(fileUrl, "_blank");

  // If popup blocked, stop here (important)
  if (!newTab) return;

  // Trigger download after slight delay
  setTimeout(() => {
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, 800); // delay improves success rate
};

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero__blob hero__blob--1" aria-hidden="true" />
      <div className="hero__blob hero__blob--2" aria-hidden="true" />

      <div className="hero__content">
        <div className="hero__left">
          <p className="hero__eyebrow">Frontend Developer</p>

          <h1 className="hero__name">
            Darshan
            <br />
            <span className="hero__name--accent">Parmar</span>
          </h1>
          <p className="hero__title">
            Frontend engineer focused on building scalable,
            <br /> high-performance web applications.
          </p>
          <p className="hero__desc">
            Experienced in <strong>React</strong>, <strong>JavaScript</strong>,{" "}
            <strong>HTML5</strong>, and <strong>CSS3</strong>, with a deep
            understanding of component-driven architecture, state management,
            and responsive design. I build efficient, maintainable systems that
            perform reliably in real-world environments.
          </p>

          <div className="hero__btns">
            <button className="btn-primary" onClick={handleResumeClick}>
              <DownloadIcon />
              View & Download Resume
            </button>

            <a href="#projects" className="btn-ghost">
              View Projects →
            </a>
          </div>

          <div className="hero__social">
            <a
              href="https://github.com/DarshanParmar128128"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="GitHub"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/darshan-parmar-4b465930b/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="LinkedIn"
            >
              <LinkedInIcon />
            </a>
          </div>
        </div>
      </div>

      <div className="hero__marquee" aria-hidden="true">
        <div className="hero__marquee-track">
          {[...SKILLS_MARQUEE, ...SKILLS_MARQUEE].map((skill, i) => (
            <span key={i} className="hero__marquee-item">
              {skill} <span className="hero__marquee-dot">◆</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
