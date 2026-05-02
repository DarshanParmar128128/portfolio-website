import React, { useEffect, useRef } from 'react';
import './Skills.css';
import { FaHtml5, FaCss3Alt, FaReact } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import { SiTailwindcss } from 'react-icons/si';

const SKILLS = [
  {
    Icon: FaHtml5,
    name: 'HTML5',
    level: 'Semantic & Accessible Markup',
    percent: 90,
    color: '#E44D26',
  },
  {
    Icon: FaCss3Alt,
    name: 'CSS3',
    level: 'Flexbox, Grid & Animations',
    percent: 82,
    color: '#1572B6',
  },
  {
    Icon: IoLogoJavascript,
    name: 'JavaScript',
    level: 'ES6+, DOM & Async/Await',
    percent: 75,
    color: '#F7DF1E',
  },
  {
    Icon: FaReact,
    name: 'React',
    level: 'Hooks, Components & State',
    percent: 65,
    color: '#61DAFB',
  },
  // {
  //   Icon: SiTailwindcss,
  //   name: 'Tailwind CSS',
  //   level: 'Utility-First Styling Basics',
  //   percent: 55,
  //   color: '#38BDF8',
  // },
];

function SkillCard({ Icon, name, level, percent, color }) {
  const barRef = useRef(null);

  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          bar.style.transform = 'scaleX(1)';
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(bar);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="skill-card">
      <div className="skill-card__icon" style={{ color }}>
        <Icon />
      </div>
      <div className="skill-card__name">{name}</div>
      <div className="skill-card__level">{level}</div>
      <div className="skill-card__footer">
        <div className="bar-track">
          <div
            ref={barRef}
            className="bar-fill"
            style={{
              width: `${percent}%`,
              transform: 'scaleX(0)',
              background: `linear-gradient(90deg, ${color}88, ${color})`,
            }}
            aria-label={`${name} proficiency: ${percent}%`}
          />
        </div>
        <span className="skill-card__percent">{percent}%</span>
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
