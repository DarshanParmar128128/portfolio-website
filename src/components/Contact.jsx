// Contact.jsx — Contact section with info panel and message form
import React, { useState } from 'react';
import './Contact.css';

const EmailIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
);

const SendIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="22" y1="2" x2="11" y2="13"/>
    <polygon points="22 2 15 22 11 13 2 9 22 2"/>
  </svg>
);

function Contact() {
  // Form field state
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  // Submission status: 'idle' | 'sent'
  const [status, setStatus] = useState('idle');

  // Update a single field
  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Handle form submission (replace with real API call if needed)
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', form);

    setStatus('sent');
    setForm({ name: '', email: '', message: '' });

    // Reset status after 3 seconds
    setTimeout(() => setStatus('idle'), 3000);
  };

  return (
    <section id="contact" className="section-card">
      <div className="section-wrapper contact__inner">
        <span className="section-tag">Get in touch</span>

        <div className="contact__grid">
          {/* Left: info panel */}
          <div className="contact__info">
            <h2 className="section-title">
              Let's<br /><em>connect</em>
            </h2>
            <div className="divider" />
            <p>
              I'm always open to discussing new opportunities, interesting projects,
              or just a good conversation about frontend development.
            </p>
            {/* Replace with your actual email */}
            <a href="mailto:darshanparmar128128@gmail.com" className="contact__email">
              <EmailIcon />
              darshanparmar128128@gmail.com
            </a>
          </div>

          {/* Right: form */}
          <form className="contact__form" onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="your@email.com"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Say something nice..."
                value={form.message}
                onChange={handleChange}
                rows={5}
              />
            </div>

            <button
              type="submit"
              className={`btn-submit ${status === 'sent' ? 'btn-submit--sent' : ''}`}
            >
              {status === 'sent' ? (
                'Sent! ✓'
              ) : (
                <>Send Message <SendIcon /></>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
