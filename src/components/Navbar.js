import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  // Memoized navigation items for better performance
  const navItems = useMemo(() => [
    { path: '/', label: 'Home', ariaLabel: 'Navigate to Home page' },
    { path: '/about', label: 'About', ariaLabel: 'Navigate to About page' },
    { path: '/services', label: 'Services', ariaLabel: 'Navigate to Services page' },
    { path: '/projects', label: 'Projects', ariaLabel: 'Navigate to Projects page' },
    { path: '/research', label: 'Research', ariaLabel: 'Navigate to Research page' },
    { path: '/contact', label: 'Contact', ariaLabel: 'Navigate to Contact page' }
  ], []);

  // Optimized scroll handler with throttling
  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    
    // Update scroll state
    setIsScrolled(currentScrollY > 50);
    
    // Hide/show navbar based on scroll direction
    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
    
    setLastScrollY(currentScrollY);
  }, [lastScrollY]);

  // Throttled scroll event listener
  useEffect(() => {
    let timeoutId = null;
    
    const throttledHandleScroll = () => {
      if (timeoutId === null) {
        timeoutId = setTimeout(() => {
          handleScroll();
          timeoutId = null;
        }, 16); // ~60fps
      }
    };

    window.addEventListener('scroll', throttledHandleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', throttledHandleScroll);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [handleScroll]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isMobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  // Check if current path is active (supports nested routes)
  const isActivePath = useCallback((path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  }, [location.pathname]);

  return (
    <>
      <nav 
        className={`navbar ${isScrolled ? 'scrolled' : ''} ${isVisible ? 'visible' : 'hidden'}`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="navbar-container">
          {/* Logo */}
          <Link 
            to="/" 
            className="navbar-logo"
            aria-label="CODEPATHIC - Go to homepage"
            onClick={closeMobileMenu}
          >
            <div className="logo-icon" aria-hidden="true">
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
          </Link>

          {/* Desktop Menu */}
          <div className="navbar-menu" role="menubar">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-link ${isActivePath(item.path) ? 'active' : ''}`}
                role="menuitem"
                aria-label={item.ariaLabel}
                aria-current={isActivePath(item.path) ? 'page' : undefined}
              >
                <span className="nav-text">{item.label}</span>
                <div className="nav-indicator" aria-hidden="true"></div>
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="navbar-cta">
            <Link 
              to="/contact" 
              className="cta-btn"
              aria-label="Get started with our services"
            >
              <span>Get Started</span>
              <div className="btn-glow" aria-hidden="true"></div>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className={`mobile-toggle ${isMobileMenuOpen ? 'active' : ''}`}
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? 'Close mobile menu' : 'Open mobile menu'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            type="button"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div 
        id="mobile-menu"
        className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation menu"
        aria-hidden={!isMobileMenuOpen}
      >
        <div className="mobile-menu-overlay" onClick={closeMobileMenu} aria-hidden="true"></div>
        <div className="mobile-menu-content">
          <div className="mobile-menu-header">
            <Link 
              to="/" 
              className="mobile-logo"
              onClick={closeMobileMenu}
              aria-label="CODEPATHIC - Go to homepage"
            >
              <span>CODEPATHIC</span>
            </Link>
            <button 
              className="mobile-close-btn"
              onClick={closeMobileMenu}
              aria-label="Close mobile menu"
              type="button"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          
          <nav className="mobile-nav" role="navigation" aria-label="Mobile navigation">
            {navItems.map((item, index) => (
              <Link
                key={item.path}
                to={item.path}
                className={`mobile-nav-link ${isActivePath(item.path) ? 'active' : ''}`}
                onClick={closeMobileMenu}
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  '--animation-order': index 
                }}
                aria-label={item.ariaLabel}
                aria-current={isActivePath(item.path) ? 'page' : undefined}
              >
                <span className="mobile-nav-text">{item.label}</span>
                <div className="mobile-nav-icon" aria-hidden="true">→</div>
              </Link>
            ))}
            
            <Link 
              to="/contact" 
              className="mobile-cta-btn"
              onClick={closeMobileMenu}
              aria-label="Get started with our services"
              style={{ animationDelay: `${navItems.length * 0.1}s` }}
            >
              <span>Get Started</span>
              <div className="mobile-cta-icon" aria-hidden="true">✨</div>
            </Link>
          </nav>
        </div>
      </div>

      {/* Focus trap for mobile menu */}
      {isMobileMenuOpen && (
        <div 
          className="focus-trap"
          tabIndex={0}
          onFocus={() => {
            const firstFocusable = document.querySelector('.mobile-menu .mobile-nav-link');
            if (firstFocusable) firstFocusable.focus();
          }}
          aria-hidden="true"
        />
      )}
    </>
  );
};

export default React.memo(Navbar);