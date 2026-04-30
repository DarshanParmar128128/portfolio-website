import React from "react";
import "./About.css";

const CHIPS = [
  "Frontend Developer",
  "Responsive Design",
  "Systems Thinker",
  "Clean Code",
  "Open to Work",
];
const STATS = [
  { value: "5+", label: "Projects Built" },
  { value: "3+", label: "Years of Learning & Coding" },
  { value: "100%", label: "Commitment to Learning" },
];

const WHAT_I_DO = [
  {
    icon: "◈",
    title: "System Design",
    desc: "Before writing a single line of code, I think in systems — breaking down complex problems into clean, scalable component structures that are easy to extend and maintain.",
  },
  {
    icon: "◈",
    title: "Project Creation",
    desc: "I don't just build features — I build complete products. From architecture decisions to final UI polish, I take full ownership of every project I create.",
  },
];

function About() {
  return (
    <section id="about" className="section-card">
      <div className="section-wrapper about__inner">
        <span className="section-tag">Who I am</span>

        <div className="about__grid">
          <div className="about__img-wrap">
            <div className="about__avatar" aria-label="Darshan Parmar initials">
              D
            </div>
            <div className="about__stats">
              {STATS.map(({ value, label }) => (
                <div key={label} className="about__stat">
                  <span className="stat__value">{value}</span>
                  <span className="stat__label">{label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="about__text">
            <h2 className="section-title">
              <em>about me</em>
            </h2>
            <div className="divider" />

            <p>
              I'm a <strong>frontend developer</strong> who turns ideas into
              fast, beautiful, and accessible web experiences. I thrive at the
              intersection of design and code — where pixel-perfect UI meets
              clean, maintainable architecture.
            </p>

            <p>
              I approach every project with a <strong>systems mindset</strong>{" "}
              — thinking through structure, data flow, and component design
              before touching the keyboard. This means the products I build are
              not just visually polished, but{" "}
              <strong>thoughtfully engineered</strong> from the ground up.
            </p>

            <p>
              My goal is to craft{" "}
              <strong>modern, high-performance applications</strong> that feel
              effortless to use — thoughtful, thorough, and always user-first.
            </p>

            <div className="about__what">
              {WHAT_I_DO.map(({ icon, title, desc }) => (
                <div key={title} className="what__card">
                  <span className="what__icon">{icon}</span>
                  <div className="what__body">
                    <h4 className="what__title">{title}</h4>
                    <p className="what__desc">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="about__chips">
              {CHIPS.map((chip) => (
                <span key={chip} className="chip">
                  {chip}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
