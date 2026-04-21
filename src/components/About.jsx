// About.jsx — Bio section with avatar and descriptive text
import React from 'react';
import './About.css';

// Info chips shown below the bio text
const CHIPS = ['BCA Student', 'Frontend Dev', 'DSA Learner', 'Open to Work'];

function About() {
  return (
    <section id="about" className="section-card">
      <div className="section-wrapper about__inner">
        <span className="section-tag">Who I am</span>

        <div className="about__grid">
          {/* Avatar / Profile visual */}
          <div className="about__img-wrap">
            <div className="about__avatar" aria-label="Darshan Parmar initials">D</div>
          </div>

          {/* Text content */}
          <div className="about__text">
            <h2 className="section-title">
              A little<br /><em>about me</em>
            </h2>
            <div className="divider" />

            <p>
              I'm a <strong>BCA (Bachelor of Computer Applications)</strong> student passionate
              about frontend development. I love crafting clean, responsive interfaces using{" "}
              <strong>HTML, CSS, JavaScript</strong>, and <strong>React</strong>.
            </p>

                  <p>
          Currently, I'm learning the basics of{" "}
          <strong>Data Structures</strong> and improving my{" "}
          <strong>problem-solving skills</strong> to build a strong foundation for software development.
        </p>

            <p>
              My goal is to become a highly skilled{" "}
              <strong>software developer</strong> who builds modern, responsive, and
              high-performance applications that deliver great user experiences.
            </p>
            {/* Info chips */}
            <div className="about__chips">
              {CHIPS.map(chip => (
                <span key={chip} className="chip">{chip}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
