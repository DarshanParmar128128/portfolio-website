// Footer.jsx — Simple footer with copyright and social links
import React from 'react';
import './Footer.css';

const SOCIAL_LINKS = [
  { label: 'GitHub',   href: 'https://github.com/DarshanParmar128128' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/darshan-parmar-4b465930b/' },
];

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <p className="footer__copy">
        © {year} Darshan Parmar. Built with React &amp; ❤️
      </p>
      <div className="footer__links">
        {SOCIAL_LINKS.map(link => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.label}
          </a>
        ))}
      </div>
    </footer>
  );
}

export default Footer;
