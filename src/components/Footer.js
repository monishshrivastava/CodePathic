import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Services',
      links: [
        { name: 'AI Development', path: '/services' },
        { name: 'Machine Learning', path: '/services' },
        { name: 'Web Development', path: '/services' },
        { name: 'App Development', path: '/services' },
        { name: 'Research & Innovation', path: '/research' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', path: '/about' },
        { name: 'Our Projects', path: '/projects' },
        { name: 'Research', path: '/research' },
        { name: 'Contact', path: '/contact' },
        { name: 'Careers', path: '/contact' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Blog', path: '/' },
        { name: 'Documentation', path: '/' },
        { name: 'Case Studies', path: '/projects' },
        { name: 'White Papers', path: '/research' },
        { name: 'API Reference', path: '/' }
      ]
    }
  ];

  const socialLinks = [
    { name: 'GitHub', icon: '💻', url: 'https://github.com' },
    { name: 'LinkedIn', icon: '💼', url: 'https://linkedin.com' },
    { name: 'Twitter', icon: '🐦', url: 'https://twitter.com' },
    { name: 'Discord', icon: '💬', url: 'https://discord.com' }
  ];

  return (
    <footer className="footer">
      {/* Main Footer Content */}
      <div className="footer-main">
        <div className="footer-container">
          {/* Brand Section */}
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="logo-icon">
                <div className="logo-circuit">
                  <div className="circuit-line line-1"></div>
                  <div className="circuit-line line-2"></div>
                  <div className="circuit-line line-3"></div>
                  <div className="circuit-dot dot-1"></div>
                  <div className="circuit-dot dot-2"></div>
                  <div className="circuit-dot dot-3"></div>
                </div>
              </div>
              <span className="logo-text">CODEPATHIC</span>
            </div>
            
            <p className="footer-description">
              Transforming ideas into intelligent solutions through cutting-edge AI, 
              machine learning, and full-stack development.
            </p>

            <div className="social-links">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label={social.name}
                >
                  <span className="social-icon">{social.icon}</span>
                  <div className="social-glow"></div>
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          <div className="footer-sections">
            {footerSections.map((section, index) => (
              <div key={index} className="footer-section">
                <h3 className="section-title">{section.title}</h3>
                <ul className="section-links">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link to={link.path} className="footer-link">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Newsletter/CTA */}
          <div className="footer-cta">
            <h3 className="cta-title">Stay Updated</h3>
            <p className="cta-description">
              Get the latest updates on AI trends and our innovative solutions.
            </p>
            <div className="newsletter-form">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="newsletter-input"
              />
              <button className="newsletter-btn">
                <span>Subscribe</span>
                <div className="btn-arrow">→</div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="footer-container">
          <div className="footer-bottom-content">
            <div className="copyright">
              <p>&copy; {currentYear} CodePathic. All rights reserved.</p>
            </div>
            
            <div className="footer-bottom-links">
              <Link to="/privacy" className="bottom-link">Privacy Policy</Link>
              <Link to="/terms" className="bottom-link">Terms of Service</Link>
              <Link to="/cookies" className="bottom-link">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Background Elements */}
      <div className="footer-bg-elements">
        <div className="bg-circle circle-1"></div>
        <div className="bg-circle circle-2"></div>
        <div className="bg-circle circle-3"></div>
      </div>
    </footer>
  );
};

export default Footer;