// Skills.jsx — Skill cards with animated progress bars
import React, { useEffect, useRef } from 'react';
import './Skills.css';

// Skills data — add or edit entries here
const SKILLS = [
  {
    icon: '🌐',
    name: 'HTML',
    level: 'Semantic & Accessible Markup',
    percent: 90,
  },
  {
    icon: '🎨',
    name: 'CSS',
    level: 'Responsive — Flexbox & Grid',
    percent: 82,
  },
  {
    icon: '⚡',
    name: 'JavaScript',
    level: 'ES6+, DOM, Async/Await',
    percent: 75,
  },
  {
    icon: '⚛️',
    name: 'React',
    level: 'Hooks, Components, State',
    percent: 65,
  },
];

// Individual skill card with an animated bar
function SkillCard({ icon, name, level, percent }) {
  const barRef = useRef(null);

  // Animate bar when it enters the viewport
  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          bar.style.transform = 'scaleX(1)';
          observer.disconnect(); // only animate once
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(bar);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="skill-card">
      <div className="skill-card__icon">{icon}</div>
      <div className="skill-card__name">{name}</div>
      <div className="skill-card__level">{level}</div>
      <div className="bar-track">
        {/* Bar starts scaled to 0, animates to percent width via JS above */}
        <div
          ref={barRef}
          className="bar-fill"
          style={{ width: `${percent}%`, transform: 'scaleX(0)' }}
          aria-label={`${name} proficiency: ${percent}%`}
        />
      </div>
    </div>
  );
}

function Skills() {
  return (
    <section id="skills">
      <div className="section-wrapper">
        <span className="section-tag">What I know</span>
        <h2 className="section-title">Skills</h2>
        <div className="divider" />

        <div className="skills__grid">
          {SKILLS.map(skill => (
            <SkillCard key={skill.name} {...skill} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
