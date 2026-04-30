// Navbar.jsx — Fixed top navigation with mobile hamburger menu
import React, { useState, useEffect } from 'react';
import './Navbar.css';

// Navigation links data — easy to update in one place
const NAV_LINKS = [
  { label: 'Home',     href: '#hero' },
  { label: 'About',    href: '#about' },
  { label: 'Skills',   href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact',  href: '#contact' },
];

function Navbar() {
  // Track whether mobile menu is open
  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu when user scrolls (UX improvement)
  useEffect(() => {
    const handleScroll = () => setMenuOpen(false);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav className="navbar">
        {/* Logo / Name */}
        <a href="#hero" className="navbar__logo">DP</a>

        {/* Desktop links */}
        <ul className="navbar__links">
          {NAV_LINKS.map(link => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>

        {/* Hamburger button (mobile only) */}
        <button
          className={`navbar__hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(prev => !prev)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {/* Mobile dropdown menu */}
      <div className={`mobile-menu ${menuOpen ? 'mobile-menu--open' : ''}`} aria-hidden={!menuOpen}>
        <ul>
          {NAV_LINKS.map(link => (
            <li key={link.href}>
              <a href={link.href} onClick={closeMenu}>{link.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Navbar;
